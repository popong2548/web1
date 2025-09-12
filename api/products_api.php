<?php
// api/products_api.php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // อนุญาตการเข้าถึงจากทุก Origin

require_once 'db.php'; // เรียกใช้ไฟล์เชื่อมต่อฐานข้อมูล

$sql = "SELECT product_id, name, price, stock, image_url, description FROM products";
$result = $conn->query($sql);

$products = [];

if ($result->num_rows > 0) {
    // วนลูปเพื่อดึงข้อมูลแต่ละแถว
    while($row = $result->fetch_assoc()) {
        $products[] = $row;
    }
}

echo json_encode($products);

$conn->close();
?>