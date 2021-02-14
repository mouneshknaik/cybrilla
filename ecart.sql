-- MySQL dump 10.13  Distrib 8.0.23, for Linux (x86_64)
--
-- Host: localhost    Database: ecart
-- ------------------------------------------------------
-- Server version	8.0.23-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `productInfo`
--

DROP TABLE IF EXISTS `productInfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productInfo` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `productName` varchar(200) NOT NULL,
  `price` int DEFAULT NULL,
  `discountAmount` int NOT NULL DEFAULT '0',
  `discountforUnit` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productInfo`
--

LOCK TABLES `productInfo` WRITE;
/*!40000 ALTER TABLE `productInfo` DISABLE KEYS */;
INSERT INTO `productInfo` VALUES (1,'A',30,75,3),(2,'B',20,35,2),(3,'C',50,0,0),(4,'D',15,0,0);
/*!40000 ALTER TABLE `productInfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `totalCartDiscount`
--

DROP TABLE IF EXISTS `totalCartDiscount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `totalCartDiscount` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `discount` int NOT NULL DEFAULT '0',
  `cartAmount` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `totalCartDiscount`
--

LOCK TABLES `totalCartDiscount` WRITE;
/*!40000 ALTER TABLE `totalCartDiscount` DISABLE KEYS */;
INSERT INTO `totalCartDiscount` VALUES (1,20,150);
/*!40000 ALTER TABLE `totalCartDiscount` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userInfo`
--

DROP TABLE IF EXISTS `userInfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userInfo` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `IP` varchar(200) NOT NULL,
  `cartProduct` varchar(400) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userInfo`
--

LOCK TABLES `userInfo` WRITE;
/*!40000 ALTER TABLE `userInfo` DISABLE KEYS */;
INSERT INTO `userInfo` VALUES (2,'192.168.1.5','A,A,B,C,A,B,B,A,A,B,A,D,D,B,A,A,B,A,A,A,D,B,A,A,B,C,C,B,B');
/*!40000 ALTER TABLE `userInfo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-15  0:33:55
