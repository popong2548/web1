<?php
header('Content-Type: application/json');
require_once 'db.php';

$data = json_decode(file_get_contents('php://input'), true);

$email = $data['email'] ?? '';
$firstName = $data['first_name'] ?? '';
$lastName = $data['last_name'] ?? '';
$phoneNumber = $data['phone_number'] ?? null;

if (!$email || !$firstName || !$lastName) {
    echo json_encode(['success' => false, 'message' => 'กรุณากรอกข้อมูลให้ครบ']);
    exit;
}

$stmt = $conn->prepare('UPDATE users SET first_name = ?, last_name = ?, phone_number = ? WHERE email = ?');
$stmt->bind_param('ssss', $firstName, $lastName, $phoneNumber, $email);

if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'อัปเดตข้อมูลสำเร็จ']);
} else {
    echo json_encode(['success' => false, 'message' => 'เกิดข้อผิดพลาด: ' . $stmt->error]);
}

$stmt->close();
$conn->close();
?>