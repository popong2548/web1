<?php
// register.php
header('Content-Type: application/json');
require_once 'db.php';

$data = json_decode(file_get_contents('php://input'), true);
$email = $data['email'] ?? '';
$password = $data['password'] ?? '';

if (!$email || !$password) {
    echo json_encode(['success' => false, 'message' => 'กรุณากรอกข้อมูลให้ครบ']);
    exit;
}

// ตรวจสอบอีเมลซ้ำ
$stmt = $conn->prepare('SELECT id FROM users WHERE email = ?');
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
$stmt = $conn->prepare('INSERT INTO users (email, password) VALUES (?, ?)');
$stmt->bind_param('ss', $email, $hash);
if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'สมัครสมาชิกสำเร็จ']);
} else {
    echo json_encode(['success' => false, 'message' => 'เกิดข้อผิดพลาดในการสมัครสมาชิก']);
}
$stmt->close();
$conn->close();
?>
