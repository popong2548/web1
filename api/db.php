<?php
// api/db.php

// -- ตั้งค่าการแสดงผล Error --
ini_set('display_errors', 1);
error_reporting(E_ALL);

// -- ข้อมูลการเชื่อมต่อฐานข้อมูล --
$servername = "localhost";    // โดยทั่วไปคือ "localhost"
$username = "root";           // Username ของ XAMPP ส่วนใหญ่จะเป็น "root"
$password = "";               // Password ของ XAMPP ส่วนใหญ่จะไม่มี
$dbname = "figureshop";     // **สำคัญ:** ชื่อฐานข้อมูลของคุณ

// -- สร้างการเชื่อมต่อ --
$conn = new mysqli($servername, $username, $password, $dbname);

// -- ตรวจสอบการเชื่อมต่อ --
if ($conn->connect_error) {
  // ทำให้ PHP ส่งข้อความ Error กลับไปเป็น JSON
  header('Content-Type: application/json');
  http_response_code(500); // Internal Server Error
  echo json_encode(['success' => false, 'message' => 'การเชื่อมต่อฐานข้อมูลล้มเหลว: ' . $conn->connect_error]);
  exit(); // หยุดการทำงานทันที
}

// ตั้งค่า character set เป็น utf8mb4 เพื่อรองรับภาษาไทย
$conn->set_charset("utf8mb4");

?>