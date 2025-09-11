-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 11, 2025 at 10:49 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `figureshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `customer_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `registered_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`customer_id`, `name`, `email`, `phone`, `address`, `registered_at`) VALUES
(1, 'ณัฐพร ดวงตา', 'test@email.com', '0812345678', 'กรุงเทพมหานคร', '2025-09-11 06:56:36');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `employee_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `role` varchar(100) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orderdetails`
--

CREATE TABLE `orderdetails` (
  `order_detail_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orderdetails`
--

INSERT INTO `orderdetails` (`order_detail_id`, `order_id`, `product_id`, `quantity`, `price`) VALUES
(1, 1, 1, 1, 1990.00);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `order_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `status` varchar(50) DEFAULT 'Pending',
  `total_price` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `customer_id`, `order_date`, `status`, `total_price`) VALUES
(1, 1, '2025-09-11 06:56:36', 'Pending', 1990.00);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `series` varchar(255) DEFAULT NULL,
  `category` varchar(100) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock` int(11) DEFAULT 0,
  `description` text DEFAULT NULL,
  `release_date` date DEFAULT NULL,
  `manufacturer` varchar(255) DEFAULT NULL,
  `image_url` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `name`, `series`, `category`, `price`, `stock`, `description`, `release_date`, `manufacturer`, `image_url`) VALUES
(1, 'Gojo B Edition Large Platform', 'สเกล 1/6', '', 15000.00, 10, '', NULL, 'เเบรนด์ :C.Y.TOYS', 'https://i.pinimg.com/736x/63/73/e0/6373e052ac971815e72f83c5b6c3a4ea.jpg'),
(2, 'Sasuke Uchiha Susano\'o', 'สเกล 1/6', '', 20000.00, 10, '', NULL, 'เเบรนด์: M.H Studio', 'https://i.pinimg.com/1200x/47/c9/62/47c962e7a456a425d21a7bb4dff1018e.jpg'),
(3, 'Enel', 'สเกล 1/4\r\n', '', 30000.00, 8, '', NULL, 'เเบรนด์:HMO Studios', 'https://i.pinimg.com/736x/26/b1/81/26b181f23d92ade99ebf46eae353f1e5.jpg'),
(4, 'Roronoa Zoro Asura', 'สเกล: 1/6', '', 18000.00, 5, '', NULL, 'แบรนด์: J.A. Studio', 'https://i.pinimg.com/736x/f1/41/53/f14153143cb2c2fd11c6bd483d6875ed.jpg'),
(5, 'Blackbeard', 'สเกล: 1/6', '', 18000.00, 6, '', NULL, 'แบรนด์: G5 Studio', 'https://i.pinimg.com/736x/a9/01/d9/a901d9ab6933df35796bde9bd9e30d05.jpg'),
(6, 'Megumi Fushiguro', 'สเกล: 1/6', '', 13000.00, 7, '', NULL, 'แบรนด์: Red Stone Studio', 'https://i.pinimg.com/736x/18/dc/c8/18dcc86f4f17601686a870ae2c232d4d.jpg'),
(7, 'Pain', 'สเกล: 1/6', '', 21000.00, 4, '', NULL, 'แบรนด์: G.O.G Studio', 'https://i.pinimg.com/736x/83/f6/3c/83f63cf5bd28273b71fb7ea2436dac17.jpg'),
(8, ' Kyojuro Rengoku', 'สเกล: 1/6\r\n\r\n', '', 16000.00, 9, '', NULL, 'แบรนด์: T.P.A Studio', 'https://i.pinimg.com/736x/b6/16/eb/b616ebe172eed90756db31681d7fc675.jpg'),
(22, ' Tengen Uzui', 'สเกล: 1/6', '', 16000.00, 0, '', NULL, 'แบรนด์: T.N.T Studio', 'https://i.pinimg.com/1200x/c6/63/f1/c663f10e8e8e46266e614d843612523c.jpg'),
(23, 'Zenitsu Agatsuma', 'สเกล: 1/6', '', 14000.00, 1, '', NULL, 'แบรนด์: Z-Studio หรือ Z-Studio', 'https://i.pinimg.com/736x/69/ce/4f/69ce4fb84def064ff2d1abd41314ed96.jpg'),
(24, 'Akainu VS Aokiji', 'สเกล: 1/6', '', 45000.00, 0, '', NULL, 'แบรนด์: TOP-Studios', 'https://i.pinimg.com/1200x/3c/06/81/3c0681f0946087a88c7a85d77d43e70b.jpg'),
(25, 'Kokushibo', 'สเกล: 1/6', '', 20000.00, 0, '', NULL, 'แบรนด์: Z-Studio หรือ Z-Studio', 'https://i.pinimg.com/736x/3a/b3/03/3ab303da97ef5f9bf17cf21aa9740224.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`customer_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`employee_id`);

--
-- Indexes for table `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD PRIMARY KEY (`order_detail_id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `employee_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orderdetails`
--
ALTER TABLE `orderdetails`
  MODIFY `order_detail_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orderdetails`
--
ALTER TABLE `orderdetails`
  ADD CONSTRAINT `orderdetails_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  ADD CONSTRAINT `orderdetails_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
