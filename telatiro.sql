-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-06-2020 a las 09:38:00
-- Versión del servidor: 5.6.21
-- Versión de PHP: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `telatiro`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resenas`
--

CREATE TABLE IF NOT EXISTS `resenas` (
`id` int(11) NOT NULL,
  `idPelicula` int(11) DEFAULT NULL,
  `idUser` int(11) DEFAULT NULL,
  `resena` varchar(255) DEFAULT NULL,
  `puntaje` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Volcado de datos para la tabla `resenas`
--

INSERT INTO `resenas` (`id`, `idPelicula`, `idUser`, `resena`, `puntaje`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'Una Pelicula muy genial para disfrutar en familia', 4, '2020-05-29 17:41:44', '2020-05-29 17:41:44'),
(2, 90937, 4, 'Una Pelicula no me agrado para nada', 1, '1991-10-02 15:34:45', '1991-10-02 15:34:45'),
(3, 365222, 1, 'Mala', 1, '2020-05-22 18:00:33', '2020-05-22 18:00:52'),
(4, 5525, 5, 'Excelente', NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 252, 2, 'jio', 1, '2020-06-01 21:20:22', '2020-06-01 21:20:22'),
(6, 252, 1, 'koplk', 5, '2020-05-22 19:03:32', '2020-05-22 19:03:32'),
(7, 83095, 2, 'La peor peli de la historia', NULL, '2020-06-01 21:57:57', '2020-06-01 21:57:57');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
`id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `born_date` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `username`, `email`, `password`, `born_date`) VALUES
(1, 'Luis', 'tsuluismarin@gmail.com', '$2a$10$8fLNPzNw61N84o9f.NPdCu578Xs5/WZ6lsykvTA4re0O/w/D.ecgS', '1987-08-13 03:00:00'),
(2, 'pedrop2', 'pedrop2@gmail.com', '$2a$10$60Nmx0ULyNGmYlCCjfv4Qe0L2jNl9wTk41Hxald67dD2MUp3cd7/u', '1992-06-01 03:00:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `resenas`
--
ALTER TABLE `resenas`
 ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
 ADD PRIMARY KEY (`id`) USING BTREE;

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `resenas`
--
ALTER TABLE `resenas`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
