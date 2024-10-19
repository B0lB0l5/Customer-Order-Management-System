-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 19, 2024 at 10:38 AM
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
-- Database: `online_store`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `first_name`, `last_name`, `email`, `phone`, `password`) VALUES
(1, 'nabil', 'ahmed', 'nabil@gmail.com', '01099711431', ''),
(3, 'nabil', 'ahmed', 'ali@gmail.com', '01099711431', ''),
(5, 'nabil', 'ahmed', 'alaa@gmail.com', '01099711431', ''),
(6, 'ali', 'omar', 'ali1@gmail.com', '01099711431', ''),
(7, 'abdo', 'omar', 'abdo@gmail.com', '01099711431', ''),
(8, 'sara', 'omar', 'sara@gmail.com', '01099711431', ''),
(9, 'engy', 'omar', 'enfy@gmail.com', '01099711431', ''),
(11, 'hamada1', 'omar', 'jdjdklwk@gmail.com', '01099711431', ''),
(13, 'hamada1', 'omar', 'jdjdlklwk@gmail.com', '01099711431', ''),
(15, 'hamada1', 'omar', 'jdkdlklwk@gmail.com', '01099711431', ''),
(17, 'hamada1', 'omar', 'jd7dlklwk@gmail.com', '01099711431', ''),
(20, 'hamada1', 'omar', 'jd7d3klwk@gmail.com', '01099711431', ''),
(21, 'hamada1', 'omar', 'jd4d3klwk@gmail.com', '01099711431', ''),
(22, 'hamada1', 'omar', 'jd4l3klwk@gmail.com', '01099711431', ''),
(23, 'hamada1', 'omar', 'xd4l3klwk@gmail.com', '01099711431', ''),
(24, '', '', 'xd4l3slwk@gmail.com', NULL, ''),
(25, 'hamada1', 'omar', 'xd4lhhlwk@gmail.com', '01099711431', '$2b$10$kJ4UjhCcWCplpl6OwAm7mO/hsHe9gooU.uW6ZL6oNfN2sCvyt6sqO'),
(26, 'hamada1', 'omar', 'xd4lkhlwk@gmail.com', '01099711431', '$2b$10$vDhZRzXiQXgB1HM4xqMePe5DA4W0Kyz4RxASyTlVmhQM3/8nozyP6'),
(27, 'hamada1', 'omar', '7zdfhzetjz@gmail.com', '01099711431', '$2b$10$7DtClo.JxtD5NX62OtN5vOKikae5FLuaAScFO7pp3bxECjdpL4jvu'),
(28, 'hamada1', 'omar', 'mariamali@gmail.com', '01099711431', '$2b$10$LQM8GF7b7M0SJ966WXhgFeBNuPm.tRUj.e2ib9XP95tuWmAwZRyC.');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `order_date` datetime NOT NULL,
  `total_amount` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `customer_id`, `order_date`, `total_amount`) VALUES
(1, 25, '2024-07-18 00:00:00', 60.00),
(2, 25, '2024-07-18 00:00:00', 170.00),
(3, 25, '2024-07-18 00:00:00', 170.00),
(4, 25, '2024-07-18 00:00:00', 170.00),
(5, 25, '2024-07-18 00:00:00', 170.00),
(6, 25, '2024-07-18 00:00:00', 170.00),
(7, 25, '2024-07-18 00:00:00', 170.00),
(8, 25, '2024-07-18 00:00:00', 170.00),
(9, 25, '2024-07-18 00:00:00', 170.00),
(10, 25, '2024-07-18 00:00:00', 170.00),
(11, 25, '2024-07-18 00:00:00', 170.00),
(12, 25, '2024-07-18 00:00:00', 170.00),
(13, 25, '2024-07-18 00:00:00', 170.00),
(14, 25, '2024-07-18 00:00:00', 170.00),
(15, 25, '2024-07-18 00:00:00', 170.00),
(16, 22, '2024-07-19 00:00:00', 170.00),
(17, 22, '0000-00-00 00:00:00', 170.00),
(18, 22, '2024-07-19 00:00:00', 170.00),
(19, 22, '2024-07-19 00:00:00', 170.00),
(20, 22, '2024-07-19 00:00:00', 170.00),
(21, 22, '2024-07-19 00:00:00', 170.00),
(22, 22, '2024-07-19 00:00:00', 170.00),
(23, 22, '2024-07-19 00:00:00', 1200.00),
(24, 20, '2024-07-19 00:00:00', 1200.00),
(25, 20, '2024-07-19 00:00:00', 1060.00),
(26, 15, '2024-07-19 10:42:53', 1060.00),
(27, 15, '2024-07-19 10:42:57', 1060.00),
(28, 15, '2024-07-19 10:43:18', 1060.00),
(29, 15, '2024-07-19 10:43:19', 1060.00),
(30, 15, '2024-07-19 10:52:49', 1060.00),
(31, 1, '2024-07-19 10:53:25', 1060.00),
(32, 1, '2024-07-19 10:53:51', 1060.00),
(33, 1, '2024-07-19 10:54:06', 350.00),
(34, 5, '2024-07-19 10:54:14', 350.00),
(35, 5, '2024-07-19 11:11:16', 350.00),
(36, 5, '2024-07-19 11:11:18', 350.00);

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `unit_price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`id`, `order_id`, `product_id`, `quantity`, `unit_price`) VALUES
(1, 2, NULL, 1, 150.00),
(2, 2, NULL, 1, 20.00),
(3, 3, NULL, 1, 150.00),
(4, 3, NULL, 1, 20.00),
(5, 4, NULL, 1, 150.00),
(6, 4, NULL, 1, 20.00),
(7, 5, NULL, 1, 150.00),
(8, 5, NULL, 1, 20.00),
(9, 6, NULL, 1, 150.00),
(10, 6, NULL, 1, 20.00),
(11, 7, NULL, 1, 150.00),
(12, 7, NULL, 1, 20.00),
(13, 8, NULL, 1, 150.00),
(14, 8, NULL, 1, 20.00),
(15, 9, NULL, 1, 150.00),
(16, 9, NULL, 1, 20.00),
(17, 10, NULL, 1, 150.00),
(18, 10, NULL, 1, 20.00),
(19, 11, 6, 1, 150.00),
(20, 11, 2, 1, 20.00),
(21, 12, 6, 1, 150.00),
(22, 12, 2, 1, 20.00),
(23, 13, 6, 1, 150.00),
(24, 13, 2, 1, 20.00),
(25, 14, 1, 1, 150.00),
(26, 14, 2, 1, 20.00),
(27, 15, 6, 1, 150.00),
(28, 15, 2, 1, 20.00),
(29, 16, 6, 1, 150.00),
(30, 16, 2, 1, 20.00),
(31, 17, 6, 1, 150.00),
(32, 17, 2, 1, 20.00),
(33, 18, 6, 1, 150.00),
(34, 18, 2, 1, 20.00),
(35, 19, 6, 1, 150.00),
(36, 19, 2, 1, 20.00),
(37, 20, 6, 1, 150.00),
(38, 20, 2, 1, 20.00),
(39, 21, 6, 1, 150.00),
(40, 21, 2, 1, 20.00),
(41, 22, 6, 1, 150.00),
(42, 22, 2, 1, 20.00),
(43, 23, 4, 1, 200.00),
(44, 23, 3, 1, 1000.00),
(45, 24, 4, 1, 200.00),
(46, 24, 3, 1, 1000.00),
(47, 25, 1, 1, 60.00),
(48, 25, 3, 1, 1000.00),
(49, 26, 1, 1, 60.00),
(50, 26, 3, 1, 1000.00),
(51, 27, 1, 1, 60.00),
(52, 27, 3, 1, 1000.00),
(53, 28, 1, 1, 60.00),
(54, 28, 3, 1, 1000.00),
(55, 29, 1, 1, 60.00),
(56, 29, 3, 1, 1000.00),
(57, 30, 1, 1, 60.00),
(58, 30, 3, 1, 1000.00),
(59, 31, 1, 1, 60.00),
(60, 31, 3, 1, 1000.00),
(61, 32, 1, 1, 60.00),
(62, 32, 3, 1, 1000.00),
(63, 33, 4, 1, 200.00),
(64, 33, 6, 1, 150.00),
(65, 34, 4, 1, 200.00),
(66, 34, 6, 1, 150.00),
(67, 35, 4, 1, 200.00),
(68, 35, 6, 1, 150.00),
(69, 36, 4, 1, 200.00),
(70, 36, 6, 1, 150.00);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `product_name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `category` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `unit_price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `product_name`, `category`, `unit_price`) VALUES
(1, 'oil', 'food', 60.00),
(2, 'bracelet', 'accessories', 20.00),
(3, 'mobile', 'electronics', 1000.00),
(4, 'iwatch', 'electronics', 200.00),
(5, 'tomato', 'food', 15.00),
(6, 't-shirt', 'clothes', 150.00),
(7, 'onion', 'food', 10.20),
(8, 'oil1', 'food', 10.20),
(9, 'oil1', 'food', 10.20),
(10, 'oil2', 'food', 10.20);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`);

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
