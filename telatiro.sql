/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50621
 Source Host           : localhost:3306
 Source Schema         : telatiro

 Target Server Type    : MySQL
 Target Server Version : 50621
 File Encoding         : 65001

 Date: 20/05/2020 18:09:36
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for resenas
-- ----------------------------
DROP TABLE IF EXISTS `resenas`;
CREATE TABLE `resenas`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idPelicula` int(11) NULL DEFAULT NULL,
  `idUser` int(11) NULL DEFAULT NULL,
  `resena` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `puntaje` int(11) NULL DEFAULT NULL,
  `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  `updated_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;


-- ----------------------------
-- Table structure for usuarios
-- ----------------------------
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `born_date` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of usuarios
-- ----------------------------
INSERT INTO `usuarios` VALUES (1, 'Luis', 'tsuluismari@gmail.com', '123456', '1987-08-13 17:41:59');
INSERT INTO `usuarios` VALUES (2, 'John Doe', 'johndoe@correo.com', '654321', '1991-03-06 17:49:31');
INSERT INTO `usuarios` VALUES (3, 'Juana de Arco', 'juana@mail.com', '123456', '1991-10-02 12:34:45');
INSERT INTO `usuarios` VALUES (4, 'Juan Miguel', 'juanmiguel@mail.com', '123456', '1991-10-02 12:34:45');
INSERT INTO `usuarios` VALUES (5, 'Lucila', 'lucila@mail.com', '123456', '1991-10-02 12:34:45');

SET FOREIGN_KEY_CHECKS = 1;
