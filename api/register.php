<?php
// api/register.php

// -- เพิ่ม 2 บรรทัดนี้เพื่อแสดง Error --
ini_set('display_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');

// จัดการกับ preflight request ของเบราว์เซอร์
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once 'db.php';

$data = json_decode(file_get_contents('php://input'), true);
$email = $data['email'] ?? '';
$password = $data['password'] ?? '';

if (!$email || !$password) {
    echo json_encode(['success' => false, 'message' => 'กรุณากรอกข้อมูลให้ครบ']);
    exit;
}

// ตรวจสอบอีเมลซ้ำ
$stmt = $conn->prepare('SELECT user_id FROM users WHERE email = ?');
$stmt->bind_param('s', $email);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    echo json_encode(['success' => false, 'message' => 'อีเมลนี้ถูกใช้แล้ว']);
    $stmt->close();
    $conn->close();
    exit;
}
$stmt->close();

$hash = password_hash($password, PASSWORD_DEFAULT);

// แก้ไข SQL INSERT ให้ตรงกับโครงสร้างตาราง users
// และเพิ่มค่า default สำหรับคอลัมน์ที่จำเป็น
$stmt = $conn->prepare('INSERT INTO users (username, email, password_hash, first_name, last_name) VALUES (?, ?, ?, ?, ?)');
$username = $email; // ใช้ email เป็น username ชั่วคราว
$firstName = 'New'; // ตั้งค่า default
$lastName = 'User';  // ตั้งค่า default
$stmt->bind_param('sssss', $username, $email, $hash, $firstName, $lastName);

if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'สมัครสมาชิกสำเร็จ']);
} else {
    // ถ้าเกิดข้อผิดพลาด ให้แสดง Error จากฐานข้อมูล
    echo json_encode(['success' => false, 'message' => 'เกิดข้อผิดพลาดในการสมัครสมาชิก: ' . $stmt->error]);
}

$stmt->close();
$conn->close();
?>