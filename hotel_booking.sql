-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 10 Apr 2024 pada 14.19
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hotel_booking`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `booking_hotel`
--

CREATE TABLE `booking_hotel` (
  `id_booking` int(11) NOT NULL,
  `id_pelanggan` int(11) DEFAULT NULL,
  `id_kamar` int(11) DEFAULT NULL,
  `tanggal_check_in` date NOT NULL,
  `tanggal_check_out` date NOT NULL,
  `total_harga` decimal(10,2) NOT NULL,
  `status_pembayaran` enum('Menunggu','Dibayar','Dibatalkan') DEFAULT 'Menunggu',
  `status_booking` enum('Dikonfirmasi','Dibatalkan','Menunggu') DEFAULT 'Menunggu'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `booking_hotel`
--

INSERT INTO `booking_hotel` (`id_booking`, `id_pelanggan`, `id_kamar`, `tanggal_check_in`, `tanggal_check_out`, `total_harga`, `status_pembayaran`, `status_booking`) VALUES
(2, 3, 400, '2024-04-10', '2024-04-15', 500.00, 'Dibayar', 'Dikonfirmasi'),
(4, 9, 900, '2024-04-19', '2024-04-24', 1000.00, 'Dibayar', 'Dikonfirmasi');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `booking_hotel`
--
ALTER TABLE `booking_hotel`
  ADD PRIMARY KEY (`id_booking`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
