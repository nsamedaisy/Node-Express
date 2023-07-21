-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: schoolms
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.22.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `level` enum('1st','2nd') DEFAULT NULL,
  `cohort_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `town` varchar(255) DEFAULT NULL,
  `region` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `sex` enum('female','male') DEFAULT NULL,
  `score` int DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES ('2de2baf9-19b1-488d-b4df-8af34c77bb47','Monique Beri','1st',NULL,'2008-01-01','street-z21','Montreal','North-America','Canada','+5142229463','Monique@gmail.com','female',99,NULL,NULL,'2023-07-21 12:10:43','2023-07-21 12:10:43'),('4bd0c505-b230-4572-919d-aa394e21ce40','Daisy Beri','2nd',NULL,'1998-04-24','Albany 21 p','New York','North-America','United States','+237683208470','Nsame@gmail.com','female',100,NULL,NULL,'2023-07-21 13:21:27','2023-07-21 13:21:27'),('55a47d2f-3f20-4cee-812a-c4e9bfac9738','Nformi Faith','2nd',NULL,'1998-10-23','Upstation','Bamenda','North-West','Cameroon','+237674441117','Faith@gmail.com','female',85,NULL,NULL,'2023-07-21 11:54:40','2023-07-21 11:54:40'),('64ec2d15-ab50-4bec-b84f-0b07e5e70f5c','Bimaboh Yoland','2nd',NULL,'2000-04-28','Bambili','Bamenda','North-West','Cameroon','+237675086030','Yoland@gmail.com','female',88,NULL,NULL,'2023-07-21 12:01:17','2023-07-21 12:01:17'),('6dbd3ce0-3dd4-42f9-9531-8a2b7676bf10','Emmaculate Asonyu','1st',NULL,'2004-12-25','chez-Obili','Yaounde','Centre','Cameroon','+237672012420','Asonyu@gmail.com','female',90,NULL,NULL,'2023-07-21 11:48:59','2023-07-21 11:48:59'),('80ff6912-2e09-49da-8fd7-20501ae58f7e','Noel Nfor','2nd',NULL,'1995-01-01','street-1A01','Mafvka','Ugan','Uganda','+23357695182','Noelnfor@gmail.com','male',28,NULL,NULL,'2023-07-21 12:08:44','2023-07-21 12:08:44'),('911981b3-d4c3-481f-baea-af12672cc6ce','Zubie Micheal','2nd',NULL,'1994-05-12','street 23C','lagos','North','Nigeria','+234683202120','Micheal@gmail.com','male',1,NULL,NULL,'2023-07-21 13:26:17','2023-07-21 13:26:17'),('9889d37f-c877-47d6-9c99-40cf83da485c','Mercy Johnson','2nd',NULL,'1996-05-12','street 9AC','lagos','South-Western','Nigeria','+234683200020','Mercy@gmail.com','female',15,NULL,NULL,'2023-07-21 13:28:09','2023-07-21 13:28:09'),('ceda0e52-c1de-4c32-a149-f9dfe82da833','Bawe Nsame','2nd',NULL,'1994-06-10','street09','Montreal','Canada','United State','+5148882222','Bawezi@gmail.com','male',98,NULL,NULL,'2023-07-21 12:06:22','2023-07-21 12:06:22'),('d534d4cd-2f18-4e35-9f6a-a64dba510515','Terrance Nii','1st',NULL,'1996-07-20','mile17','Mutengene','South-West','Cameroon','+23767000030','Terrance@gmail.com','male',50,NULL,NULL,'2023-07-21 12:03:03','2023-07-21 12:03:03');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-21 15:13:18
