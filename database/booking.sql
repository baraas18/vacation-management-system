-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 13, 2024 at 03:53 PM
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
-- Database: `booking`
--

-- --------------------------------------------------------

--
-- Table structure for table `followers`
--

CREATE TABLE `followers` (
  `userId` varchar(36) NOT NULL,
  `vacationId` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `followers`
--

INSERT INTO `followers` (`userId`, `vacationId`) VALUES
('b9e17cdf-6939-4ba2-8e91-4c414de60477', '0f59496b-2ce5-492a-af47-ab0734e5e90b'),
('b9e17cdf-6939-4ba2-8e91-4c414de60477', 'b85a2a40-166b-47c0-bf22-969ba7ea05a3'),
('b9e17cdf-6939-4ba2-8e91-4c414de60477', 'a9f01017-2630-11ef-b6bd-e470b8588184'),
('b9e17cdf-6939-4ba2-8e91-4c414de60477', 'a9f00c93-2630-11ef-b6bd-e470b8588184'),
('30016514-5df5-43ce-8709-268323c7cc2b', '0f59496b-2ce5-492a-af47-ab0734e5e90b'),
('30016514-5df5-43ce-8709-268323c7cc2b', 'a9f01017-2630-11ef-b6bd-e470b8588184'),
('30016514-5df5-43ce-8709-268323c7cc2b', 'a9f01017-2630-11ef-b6bd-e470b8588184'),
('30016514-5df5-43ce-8709-268323c7cc2b', 'a9f011b6-2630-11ef-b6bd-e470b8588184'),
('30016514-5df5-43ce-8709-268323c7cc2b', 'a9f014d9-2630-11ef-b6bd-e470b8588184'),
('30016514-5df5-43ce-8709-268323c7cc2b', 'a9f0383c-2630-11ef-b6bd-e470b8588184'),
('30016514-5df5-43ce-8709-268323c7cc2b', 'a9f03903-2630-11ef-b6bd-e470b8588184'),
('30016514-5df5-43ce-8709-268323c7cc2b', 'a9f03cc9-2630-11ef-b6bd-e470b8588184'),
('30016514-5df5-43ce-8709-268323c7cc2b', 'a9f03dd1-2630-11ef-b6bd-e470b8588184'),
('30016514-5df5-43ce-8709-268323c7cc2b', 'a9f03c08-2630-11ef-b6bd-e470b8588184'),
('30016514-5df5-43ce-8709-268323c7cc2b', 'a9f03b49-2630-11ef-b6bd-e470b8588184'),
('30016514-5df5-43ce-8709-268323c7cc2b', 'a9f03a8e-2630-11ef-b6bd-e470b8588184'),
('30016514-5df5-43ce-8709-268323c7cc2b', 'a9f039cb-2630-11ef-b6bd-e470b8588184'),
('b9e17cdf-6939-4ba2-8e91-4c414de60477', 'a9ee33c1-2630-11ef-b6bd-e470b8588184'),
('b9e17cdf-6939-4ba2-8e91-4c414de60477', 'a9f00c93-2630-11ef-b6bd-e470b8588184'),
('b9e17cdf-6939-4ba2-8e91-4c414de60477', 'a9f01fbb-2630-11ef-b6bd-e470b8588184'),
('b9e17cdf-6939-4ba2-8e91-4c414de60477', 'a9f02102-2630-11ef-b6bd-e470b8588184'),
('b9e17cdf-6939-4ba2-8e91-4c414de60477', 'a9f03cc9-2630-11ef-b6bd-e470b8588184'),
('b9e17cdf-6939-4ba2-8e91-4c414de60477', 'a9f03dd1-2630-11ef-b6bd-e470b8588184'),
('b7218f54-4da3-44c3-a555-898c6478628e', 'a9ee33c1-2630-11ef-b6bd-e470b8588184'),
('b7218f54-4da3-44c3-a555-898c6478628e', 'b85a2a40-166b-47c0-bf22-969ba7ea05a3'),
('b9e17cdf-6939-4ba2-8e91-4c414de60477', 'a9ee33c1-2630-11ef-b6bd-e470b8588184'),
('b9e17cdf-6939-4ba2-8e91-4c414de60477', 'a9ee33c1-2630-11ef-b6bd-e470b8588184'),
('b9e17cdf-6939-4ba2-8e91-4c414de60477', 'a9ee33c1-2630-11ef-b6bd-e470b8588184'),
('b9e17cdf-6939-4ba2-8e91-4c414de60477', 'a9ee33c1-2630-11ef-b6bd-e470b8588184'),
('b9e17cdf-6939-4ba2-8e91-4c414de60477', 'a9ee33c1-2630-11ef-b6bd-e470b8588184'),
('b9e17cdf-6939-4ba2-8e91-4c414de60477', 'a9ee33c1-2630-11ef-b6bd-e470b8588184'),
('b9e17cdf-6939-4ba2-8e91-4c414de60477', 'a9ee33c1-2630-11ef-b6bd-e470b8588184'),
('aefa9321-d9b3-40f7-af66-5fc00f77a7e2', 'b85a2a40-166b-47c0-bf22-969ba7ea05a3'),
('aefa9321-d9b3-40f7-af66-5fc00f77a7e2', 'a9f01017-2630-11ef-b6bd-e470b8588184'),
('aefa9321-d9b3-40f7-af66-5fc00f77a7e2', 'a9f0131a-2630-11ef-b6bd-e470b8588184'),
('aefa9321-d9b3-40f7-af66-5fc00f77a7e2', 'a9f014d9-2630-11ef-b6bd-e470b8588184'),
('aefa9321-d9b3-40f7-af66-5fc00f77a7e2', 'a9f015c5-2630-11ef-b6bd-e470b8588184'),
('aefa9321-d9b3-40f7-af66-5fc00f77a7e2', 'a9f03cc9-2630-11ef-b6bd-e470b8588184'),
('aefa9321-d9b3-40f7-af66-5fc00f77a7e2', 'a9f039cb-2630-11ef-b6bd-e470b8588184');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(36) NOT NULL DEFAULT uuid(),
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(512) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `role`) VALUES
('1b402c84-19de-11ef-8ef7-e470b8588184', 'weam', 'myking', 'mywiwi@gmail.com', 'ilovebaraa', 'MANAGER'),
('1d054e2b-aec5-4241-b0f3-f539a7f99a8c', 'adas', 'ewr', 'rewtt@a.com', '1845ac28fc34dc7a3798da3f25276f6a', 'USER'),
('260b4003-c593-4936-846e-b23b916a4a0b', 'tamar', 'hafi', 'tamar@g.com', '4b78b5da6bf72640a2fcb0e4ae9e675e', 'USER'),
('30016514-5df5-43ce-8709-268323c7cc2b', 'wi', 'wi', 'wiwi@g.com', '3dc5013d5f08253673738ac2055d86a3', 'USER'),
('460a2dc9-116f-4b83-a2b6-608176a77d16', 'hiii', 'hiii', 'hiiiiii@gmail.com', '3e89be3af5e0216513d6891de1ccaf03', 'USER'),
('63515ac7-957e-4776-a210-3cb8db3aed68', 'qwe', 'qwe', 'qwe@qwe.com', '975000c9deacbefac358474a8f9432da', 'USER'),
('6a0ebd9a-19de-11ef-8ef7-e470b8588184', 'test', 'test', 'test@g.com', 'test1', 'MANAGER'),
('7871acf3-db01-4606-a377-5d7c4a098a7b', 'hello', 'hi', 'hello@g.com', '8661f981d63c0f861f167c87c7bf4727', 'USER'),
('7af211fb-1fe7-11ef-8e41-e470b8588184', 'man', 'man', 'man@g.com', '7e46ae65a6aae0394cc304410554728e', 'MANAGER'),
('aefa9321-d9b3-40f7-af66-5fc00f77a7e2', 'rorlaa', 'rorlaa', 'rorlaa@gmail.com', '3c43e654b5a42165fe7a98df176f31d6', 'USER'),
('b7218f54-4da3-44c3-a555-898c6478628e', 'baraa', 'saleh', 'bar@g.com', '3c43e654b5a42165fe7a98df176f31d6', 'USER'),
('b9e17cdf-6939-4ba2-8e91-4c414de60477', 'hi', 'hi', 'hi@hi.com', '7e46ae65a6aae0394cc304410554728e', 'USER'),
('ba631a96-32f9-4b02-aa2c-63de7183b7d5', 'rula ', 'refsd', 'r@g.com', 'd534711036bdbad022238195c508307a', 'USER'),
('cca97e13-c24b-44aa-80d4-3714cd9dd603', 'asd', 'saleh', 'ANAWALID@GMIAL.COM', '975000c9deacbefac358474a8f9432da', 'USER'),
('cdad1367-422d-43c0-b7d2-d4d45bc33366', 'baraa', 'hanosh', 'ba@gmial.com', '4f9f30d9b2c7f80ccb2c94eee5b32854', 'USER'),
('ea617c2e-0a26-11ef-b170-e470b8588184', 'aa', 'aa', 'a@a.com', '2c7229e4722cf1db6dff1e48663642da', 'USER'),
('fa4b6642-24ce-4464-8da6-2d13ca23aa42', 'test2', 'test2', 'test2@gmail.com', '0981e607877a4148d2b6e29586c849a6', 'USER');

-- --------------------------------------------------------

--
-- Table structure for table `vacations`
--

CREATE TABLE `vacations` (
  `id` varchar(36) NOT NULL DEFAULT uuid(),
  `destination` varchar(100) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `price` float NOT NULL,
  `imageName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vacations`
--

INSERT INTO `vacations` (`id`, `destination`, `description`, `startDate`, `endDate`, `price`, `imageName`) VALUES
('0f59496b-2ce5-492a-af47-ab0734e5e90b', 'Sharm El Sheikh', 'sharam is an egyptian city on the southern tip of the sinai peninsula, on the coastal strip along the red sea. its population is approximately 73,000 as of 2023.', '2024-05-05', '2024-06-08', 2343, '195fa9a2-91b8-4d4b-8d4c-330e17853255.jpg'),
('a9ee33c1-2630-11ef-b6bd-e470b8588184', 'Paris - France', 'Explore the romantic streets of Paris and indulge in delicious French cuisine. Visit iconic landmarks like the Eiffel Tower and Louvre Museum.', '2024-06-06', '2024-06-16', 8030, '53b37e02-6d4c-497a-a9a8-281c91e1502e.jpg'),
('a9f00c93-2630-11ef-b6bd-e470b8588184', 'Rome - Italy', 'Immerse yourself in the rich history and culture of Rome. Discover ancient ruins, charming piazzas, and mouthwatering Italian dishes.', '2024-06-30', '2024-07-09', 9500, '0b86762e-9965-48be-ac1e-4ccfe9da76b2.jpeg'),
('a9f01017-2630-11ef-b6bd-e470b8588184', 'Tokyo - Japan', 'Experience the bustling metropolis of Tokyo, where tradition meets modernity. Discover ancient temples, vibrant neighborhoods, and delicious sushi.', '2024-08-04', '2024-08-14', 8500, 'ab31f283-51b6-4239-9b85-d3498a58e6a2.jpeg'),
('a9f011b6-2630-11ef-b6bd-e470b8588184', 'New York City - USA', 'Explore the city that never sleeps! Dive into the vibrant culture, iconic landmarks, and diverse culinary scene of New York City.', '2024-09-09', '2024-09-19', 9000, 'e07edc7c-fa2f-461d-a768-44000093b694.jpeg'),
('a9f0131a-2630-11ef-b6bd-e470b8588184', 'Sydney - Australia', 'Discover the stunning beaches, iconic landmarks, and vibrant culture of Sydney. Enjoy surfing, exploring the Opera House, and dining by the harbor.', '2024-10-14', '2024-10-24', 7500, 'b77b0c24-f4d1-432d-b241-0c235caebff9.jpeg'),
('a9f014d9-2630-11ef-b6bd-e470b8588184', 'Barcelona - Spain', 'Stroll along the picturesque streets of Barcelona and marvel at the unique architecture of Gaudi. Indulge in tapas, sangria, and beach vibes.', '2024-10-31', '2024-11-09', 8200, 'bf3e73ea-1499-4ec5-a6d0-f7ffeccc1b38.jpeg'),
('a9f015c5-2630-11ef-b6bd-e470b8588184', 'Bangkok - Thailand', 'Experience the vibrant street life, ornate temples, and bustling markets of Bangkok. Sample delicious street food and cruise along the Chao Phraya River.', '2024-12-04', '2024-12-14', 7200, 'd47e2211-2785-475c-b9a7-2da26d1be6e4.jpeg'),
('a9f01695-2630-11ef-b6bd-e470b8588184', 'Dubai - UAE', 'Discover the opulence and modernity of Dubai. Visit the tallest building in the world, indulge in luxury shopping, and experience desert adventures.', '2025-01-09', '2025-01-19', 9800, 'd1760284-7a13-4264-9501-9a28be924154.jpeg'),
('a9f01769-2630-11ef-b6bd-e470b8588184', 'London - UK', 'Explore the historic streets of London and visit iconic landmarks like the Big Ben, Buckingham Palace, and the British Museum. Enjoy traditional pubs and West End shows.', '2025-02-14', '2025-02-24', 8700, '010eb0b9-0be7-4ec4-8d2b-7adc1e22c7e4.jpeg'),
('a9f0190b-2630-11ef-b6bd-e470b8588184', 'Rio de Janeiro - Brazil', 'Experience the vibrant energy of Rio de Janeiro! Relax on stunning beaches, hike through tropical forests, and dance to samba rhythms.', '2025-02-28', '2025-03-09', 9200, 'b2f38de9-a9d1-4c49-9828-d4af55cb86c1.jpeg'),
('a9f01a32-2630-11ef-b6bd-e470b8588184', 'Cairo - Egypt', 'Journey to the land of pharaohs and pyramids! Explore ancient wonders like the Great Pyramids of Giza, the Sphinx, and the treasures of the Egyptian Museum.', '2025-04-04', '2025-04-14', 8900, 'a1189bea-90c7-47e9-b4d7-e7a500675298.jpeg'),
('a9f01b58-2630-11ef-b6bd-e470b8588184', 'Amsterdam - Netherlands', 'Discover the charming canals, historic architecture, and vibrant culture of Amsterdam. Visit world-class museums, cycle along picturesque streets, and enjoy Dutch delicacies.', '2025-05-09', '2025-05-19', 8300, 'de634e92-3af8-48db-b693-e3894abc01c0.jpeg'),
('a9f01c2d-2630-11ef-b6bd-e470b8588184', 'Seoul - South Korea', 'Immerse yourself in the dynamic city of Seoul. Explore ancient palaces, indulge in Korean BBQ, and experience the vibrant nightlife of Gangnam.', '2025-06-14', '2025-06-24', 7800, '95d3f272-d4ab-4725-aa7f-d1ffa3d13241.jpeg'),
('a9f01d12-2630-11ef-b6bd-e470b8588184', 'Venice - Italy', 'Experience the charm of Venice with its romantic canals, historic bridges, and magnificent architecture. Enjoy gondola rides, fresh seafood, and gelato.', '2025-06-30', '2025-07-09', 9400, '3dcff252-e7f8-4fd4-9e49-3ce94a4dd4b0.jpeg'),
('a9f01e5e-2630-11ef-b6bd-e470b8588184', 'Machu Picchu - Peru', 'Embark on an adventure to the ancient Incan city of Machu Picchu. Hike through breathtaking landscapes, explore mysterious ruins, and immerse yourself in Andean culture.', '2025-08-04', '2025-08-14', 9700, '8b0894e1-4fc5-4c34-a7c7-59ac9bf26598.jpeg'),
('a9f01fbb-2630-11ef-b6bd-e470b8588184', 'Prague - Czech Republic', 'Discover the fairy-tale charm of Prague. Explore medieval castles, stroll through cobblestone streets, and savor hearty Czech cuisine and world-famous beer.', '2025-09-09', '2025-09-19', 8400, 'f1f6da5b-49fa-447d-b477-6446630fdb56.jpeg'),
('a9f02102-2630-11ef-b6bd-e470b8588184', 'Istanbul - Turkey', 'Experience the crossroads of Europe and Asia in Istanbul. Explore historic landmarks like the Hagia Sophia and Blue Mosque, and savor delicious Turkish cuisine.', '2025-10-14', '2025-10-24', 9600, 'ac991d16-e019-44b5-b236-0397fe51137d.jpeg'),
('a9f02e46-2630-11ef-b6bd-e470b8588184', 'Kyoto - Japan', 'Step into the serene beauty of Kyoto, Japan\'s ancient capital. Explore historic temples, traditional tea houses, and stunning bamboo groves.', '2025-10-31', '2025-11-09', 9200, 'c78db638-8ab1-47a5-8754-dc75393d85c3.jpeg'),
('a9f02f8e-2630-11ef-b6bd-e470b8588184', 'Vienna - Austria', 'Immerse yourself in the cultural delights of Vienna. Visit grand palaces, attend classical concerts, and indulge in decadent pastries and coffee.', '2025-12-04', '2025-12-14', 8800, '2c6034b6-25fb-4806-8905-6023f1e4d56c.jpeg'),
('a9f03074-2630-11ef-b6bd-e470b8588184', 'Santorini - Greece', 'Escape to the idyllic island of Santorini. Relax on pristine beaches, wander through charming villages with white-washed buildings, and witness stunning sunsets over the Aegean Sea.', '2026-01-09', '2026-01-19', 9300, '745cc572-df88-4360-9260-e179ea08c1fb.jpeg'),
('a9f03334-2630-11ef-b6bd-e470b8588184', 'Budapest - Hungary', 'Discover the beauty of Budapest, the \"Pearl of the Danube.\" Explore historic thermal baths, majestic palaces, and indulge in hearty Hungarian cuisine.', '2026-02-14', '2026-02-24', 8600, 'efd08fac-a775-4abc-8e3f-c9f8fc7ab402.jpeg'),
('a9f034e1-2630-11ef-b6bd-e470b8588184', 'Cape Town - South Africa', 'Experience the breathtaking beauty of Cape Town. Explore stunning coastlines, hike up Table Mountain, and discover vibrant neighborhoods and cultural heritage.', '2026-02-28', '2026-03-09', 9100, 'cd426177-8896-4a87-a84e-d78de633bea0.jpeg'),
('a9f035c6-2630-11ef-b6bd-e470b8588184', 'Dublin - Ireland', 'Discover the charm and hospitality of Dublin. Explore historic landmarks, cozy pubs, and lush green landscapes, and experience the warmth of Irish culture.', '2026-04-04', '2026-04-14', 8900, '8754289d-2e4c-47f5-bb2b-1e16aae3d9d4.jpeg'),
('a9f0369c-2630-11ef-b6bd-e470b8588184', 'Ibiza - Spain', 'Party in paradise on the island of Ibiza! Enjoy stunning beaches, vibrant nightlife, and legendary beach clubs amidst the beautiful Mediterranean setting.', '2026-05-09', '2026-05-19', 9100, 'd0f9d955-df82-4d31-8f73-06e1c8b884db.jpeg'),
('a9f03767-2630-11ef-b6bd-e470b8588184', 'Krakow - Poland', 'Explore the historic beauty of Krakow. Visit medieval castles, stroll through charming squares, and savor traditional Polish cuisine and vodka.', '2026-06-14', '2026-06-24', 8400, 'b0ab947f-f89a-4b43-89f6-88e8bb73671c.jpeg'),
('a9f0383c-2630-11ef-b6bd-e470b8588184', 'Havana - Cuba', 'Step back in time in the colorful streets of Havana. Explore colonial architecture, dance to salsa rhythms, and savor the flavors of Cuban cuisine and cigars.', '2026-06-30', '2026-07-09', 9600, '3820af38-d6d5-4d53-9682-2d56b0347603.jpeg'),
('a9f03903-2630-11ef-b6bd-e470b8588184', 'Athens - Greece', 'Uncover the ancient wonders of Athens. Explore iconic landmarks like the Acropolis and Parthenon, wander through historic neighborhoods, and savor delicious Greek cuisine.', '2026-08-04', '2026-08-14', 8900, 'f622c102-777a-459f-b258-19a55e483936.jpeg'),
('a9f039cb-2630-11ef-b6bd-e470b8588184', 'Florence - Italy', 'Experience the Renaissance beauty of Florence. Marvel at masterpieces of art and architecture, stroll along the Arno River, and indulge in Tuscan cuisine and wine.', '2026-09-09', '2026-09-19', 9200, '06fc1767-8cd2-4633-be8f-44afbad4fb10.jpeg'),
('a9f03a8e-2630-11ef-b6bd-e470b8588184', 'Reykjavik - Iceland', 'Discover the stunning landscapes of Reykjavik. Explore geothermal wonders, chase the Northern Lights, and soak in hot springs amidst breathtaking natural beauty.', '2026-10-14', '2026-10-24', 8800, 'c58144e6-474f-4ad1-a071-266490db7934.jpeg'),
('a9f03b49-2630-11ef-b6bd-e470b8588184', 'Lisbon - Portugal', 'Experience the charm of Lisbon, Portugal\'s vibrant capital. Explore historic neighborhoods, enjoy panoramic views, and indulge in delicious seafood and pastries.', '2026-10-31', '2026-11-09', 9300, '45bddace-d253-4807-8da9-d0b20dea3b98.jpeg'),
('a9f03c08-2630-11ef-b6bd-e470b8588184', 'Singapore', 'Explore the futuristic city-state of Singapore. Discover lush gardens, futuristic architecture, and diverse culinary delights amidst a vibrant cultural melting pot.', '2026-12-04', '2026-12-14', 8500, 'f56b3c3d-810f-4cc5-b339-1eb19c11d05f.jpeg'),
('a9f03cc9-2630-11ef-b6bd-e470b8588184', 'Helsinki - Finland', 'Experience the Nordic charm of Helsinki. Explore design districts, saunas, and snowy landscapes, and savor Finnish delicacies amidst a unique blend of tradition and modernity.', '2027-01-09', '2027-01-19', 9200, 'b2cfd84e-456b-4672-b68e-2eab779a5e75.jpeg'),
('a9f03dd1-2630-11ef-b6bd-e470b8588184', 'Edinburgh - Scotland', 'Immerse yourself in the historic beauty of Edinburgh. Explore medieval castles, stroll along the Royal Mile, and experience the lively atmosphere of the Edinburgh Festival.', '2027-02-14', '2027-02-24', 8900, '0b9470bf-9d82-4d25-ae33-f4cf42850891.jpeg'),
('b85a2a40-166b-47c0-bf22-969ba7ea05a3', 'Rhodes - Greece', 'rhodes is the largest of the dodecanese islands of greece and is their historical capital; it is the ninth largest island in the overall mediterranean sea. ', '2024-06-05', '2024-06-17', 1500, 'c7cb6149-48ec-4e1b-a815-bfde5d404d40.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `followers`
--
ALTER TABLE `followers`
  ADD KEY `userId` (`userId`),
  ADD KEY `vacationId` (`vacationId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_pk` (`email`);

--
-- Indexes for table `vacations`
--
ALTER TABLE `vacations`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `followers`
--
ALTER TABLE `followers`
  ADD CONSTRAINT `followers_ibfk_1` FOREIGN KEY (`vacationId`) REFERENCES `vacations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `followers_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
