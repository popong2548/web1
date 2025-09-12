<?php
header('Content-Type: application/json');
require_once 'db.php';

$email = $_GET['email'] ?? '';

if (!$email) {
    echo json_encode([]);
    exit;
}

$stmt = $conn->prepare('SELECT o.order_id, o.customer_id, o.order_date, o.status, o.total_price FROM orders o JOIN customers c ON o.customer_id = c.customer_id WHERE c.email = ?');
$stmt->bind_param('s', $email);
$stmt->execute();
$result = $stmt->get_result();
$orders = [];

while ($row = $result->fetch_assoc()) {
    $orders[] = $row;
}

echo json_encode($orders);

$stmt->close();
$conn->close();
?>