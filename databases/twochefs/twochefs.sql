-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-11-2021 a las 14:01:14
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `twochefs`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admins`
--

CREATE TABLE `admins` (
  `usuario` text NOT NULL,
  `password` text NOT NULL,
  `nombre` text NOT NULL,
  `email` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `admins`
--

INSERT INTO `admins` (`usuario`, `password`, `nombre`, `email`) VALUES
('admin', '1234', 'Juan Guzman', 'guzmanjuan3011@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(11) NOT NULL,
  `nombre` text DEFAULT NULL,
  `correo` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturas`
--

CREATE TABLE `facturas` (
  `id` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `apellido` text NOT NULL,
  `telefono` text NOT NULL,
  `direccion` text NOT NULL,
  `metodo` text NOT NULL,
  `carrito` text NOT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `nombre` text DEFAULT NULL,
  `apellido` text NOT NULL,
  `telefono` text DEFAULT NULL,
  `correo` text NOT NULL,
  `direccion` text NOT NULL,
  `captura` text NOT NULL,
  `referencia` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `pedido` text DEFAULT NULL,
  `total` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `nombre` text DEFAULT NULL,
  `link` text DEFAULT NULL,
  `precio` text DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `categoria` text DEFAULT NULL,
  `disponible` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`nombre`, `link`, `precio`, `descripcion`, `categoria`, `disponible`) VALUES
('Papas Fritas', 'comida12.jpg', '2', 'Papas fritas', 'comidas', 1),
('Arepa de carne mechada', 'comida10.jpg', '2', 'Queso, aguacate, carne mechada', 'comidas', 1),
('Pizza Margarita', 'comida4.jpg', '2', 'Queso, Champinones, Jamon', 'comidas', 1),
('Pizza Doble Queso', 'comida4.jpg', '5', 'Queso extra, Jamon, Tocineta, Maiz', 'comidas', 1),
('Pastel de Chocolate (Racion)', 'postre1.jpg', '2', 'Racion de pastel de chocolate batido con chispas', 'postres', 1),
('Pastel de Chocolate con Galletas (Racion)', 'postre2.jpg', '3', 'Racion de pastel de chocolate con galletas', 'postres', 1),
('Pastel de Chocolate Marmoleado (Racion)', 'postre3.jpg', '2', 'Racion de pastel de chocolate marmoleado con vainilla', 'postres', 1),
('Coctel Semaforo', 'bebida1.jpg', '3', 'Bebida alcoholica de tres matices diferentes', 'bebidas', 1),
('Coca-Cola (350ml)', 'bebida2.jpg', '2', 'Bebida carbonatada gaseosa a base de cola negra', 'bebidas', 1),
('Carne asada', 'comida16.jpg', '5', 'Carne asada condimentada', 'comidas', 1),
('Algodón de Azúcar', 'Cotton Candy.jpg', '1', 'Una unidad', 'postres', 1),
('Hamburguesa ', 'Hamburguesa.jpg', '2', 'Carne, lechuga, tomates', 'comidas', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `facturas`
--
ALTER TABLE `facturas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
