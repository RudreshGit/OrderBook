-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 28, 2015 at 05:52 AM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `sdcs`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_price_details`
--

CREATE TABLE IF NOT EXISTS `tbl_price_details` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `base_price` double NOT NULL DEFAULT '0',
  `price_for_delivering_in_one_day` double NOT NULL DEFAULT '0',
  `price_for_delivering_in_four_days` double NOT NULL DEFAULT '0',
  `price_for_delivering_hand_to_hand` double NOT NULL DEFAULT '0',
  `price_for_confidentiali_delivery` double NOT NULL DEFAULT '0',
  `price_for_below_500_grams` double NOT NULL DEFAULT '0',
  `price_between_501_to_below_3000_grams` double NOT NULL DEFAULT '0',
  `price_between_3000_to_below_10000_grams` double NOT NULL DEFAULT '0',
  `price_for_above_10000_grams` double NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `tbl_price_details`
--

INSERT INTO `tbl_price_details` (`id`, `base_price`, `price_for_delivering_in_one_day`, `price_for_delivering_in_four_days`, `price_for_delivering_hand_to_hand`, `price_for_confidentiali_delivery`, `price_for_below_500_grams`, `price_between_501_to_below_3000_grams`, `price_between_3000_to_below_10000_grams`, `price_for_above_10000_grams`) VALUES
(1, 100, 100, 50, 75, 50, 0, 50, 100, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_quick_tracking`
--

CREATE TABLE IF NOT EXISTS `tbl_quick_tracking` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `current_position_address` varchar(256) DEFAULT 'Current Position of courier',
  `booking_id` bigint(20) NOT NULL,
  `tracking_office` varchar(256) NOT NULL DEFAULT 'Madivala Courier address',
  `tracking_office_pin_code` varchar(20) NOT NULL DEFAULT '123456',
  `tracking_area_name` varchar(256) NOT NULL DEFAULT 'MG Road',
  `phone_number` varchar(15) NOT NULL DEFAULT '9876543267',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sdcs_courier_booking`
--

CREATE TABLE IF NOT EXISTS `tbl_sdcs_courier_booking` (
  `booking_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `date_of_booking` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `courier_content` text,
  `deliver_in_one_day` tinyint(1) NOT NULL DEFAULT '0',
  `deliver_in_four_hour` tinyint(1) NOT NULL DEFAULT '0',
  `deliver_hand_to_hand` tinyint(1) NOT NULL DEFAULT '0',
  `confidential_delivery` tinyint(1) NOT NULL DEFAULT '0',
  `user_id` bigint(20) NOT NULL,
  `courier_office_id` bigint(20) NOT NULL,
  `total_amount` double NOT NULL DEFAULT '0',
  PRIMARY KEY (`booking_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sdcs_offices`
--

CREATE TABLE IF NOT EXISTS `tbl_sdcs_offices` (
  `office_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `office_name` text,
  `office_address` text,
  `office_pincode` varchar(15) DEFAULT NULL,
  `office_area_name` text,
  `office_city_name` text,
  `office_contact_details` text,
  `office_available_time` text,
  `office_opening_days` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`office_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=221 ;

--
-- Dumping data for table `tbl_sdcs_offices`
--

INSERT INTO `tbl_sdcs_offices` (`office_id`, `office_name`, `office_address`, `office_pincode`, `office_area_name`, `office_city_name`, `office_contact_details`, `office_available_time`, `office_opening_days`) VALUES
(7, 'SAHANA STORES', '10TH CROSS NGEF LAYOUT\r\nLandmark - NEXT TO PAGES BAR', '560072', 'Nagarbhavi', 'Bangalore', 'JAGADISH - 8970669965', '7:00 to 21:00', 'All days including Sunday'),
(9, 'JAIN SREERAM STORES', '139, 10TH CROSS NGEF LAYOUT, Landmark - NEXT TO GANESHA TEMPLE', '560072', 'Nagarbhavi', 'Bangalore', 'NAGBUSHAN-9845515104', '7:30 TO 14:00 & 16:00 TO 21:30', 'All days including Sunday'),
(10, 'RELIANCE DRY CLEANERS', 'NAGARABHAVI VILLAGE NGEF LAYOUT, Landmark - NEAR BRIDGE OPP TO P.G.ACCOMDATION ', '560072', 'Nagarbhavi', 'Bangalore', 'MANJUNATH-9880088198', '7:00 TO 22:30 ', 'All Days Including Sunday'),
(11, 'MENAKA FASHION\r\n', ' IST MAIN NAGARABHAVI VILLAGE NGEF LAYOUT Landmark -\r\n\r\n\r\n', '560072', 'Nagarbhavi', 'Bangalore\r\n', ' - 9019896709\r\n\r\n', '9:30 TO 21:30\r\n', 'All Days Including Sunday\r\n'),
(12, 'BPS STORES\r\n', '  NAGARABHAVI VILLAGE  Landmark - OPP TO MARUTHI MEDICALS\r\n', '560072', 'Nagarbhavi\r\n', 'Bangalore\r\n', 'JAYAMMA - 9535152624\r\n', '6:00 TO 22:00\r\n', 'All Days Including Sunday\r\n'),
(13, 'SANA FOOT WEAR\r\n', '#1 IST CROSS HEGGANAHALLY MAIN ROAD  MUTTURAYASWAMY LAYOUT SUNKADAKATTE Landmark - CHANNAKESHAVA\r\n', '560091', 'Sunkadakatte\r\n', 'Bangalore\r\n', 'Hussain - 9611667686\r\n', '8:30 TO 21:00\r\n', 'All Days Including Sunday\r\n'),
(14, 'KRISHNA CONDIMENTS\r\n', '#48/2 MAGADI MAIN ROAD  SUNKADAKATTE Landmark - OPP G.T. COLLEGE\r\n', '560091', 'Sunkadakatte\r\n', 'Bangalore\r\n', 'RAMESH - 9632422115\r\n', '5:30 TO 21:00\r\n', 'All Days Including Sunday\r\n'),
(16, 'SRI MANJUNATHA TELECOM\r\n', 'THIMMANA PATEL COMPLEX KABBEHALLA ROAD  SUNKADAKATTE Landmark - NEAR SBM BANK\r\n', '560091', 'Sunkadakatte\r\n', 'Bangalore\r\n', 'MANJUNATH - 9019937789\r\n', '8:00 TO 22:00\r\n', 'All Days Including Sunday\r\n'),
(17, 'SRI RAGHAVENDRA HOT CHIPS\r\n', ' 2ND CROSS MAGADI MAIN ROAD H.R.PALYA SUNKADAKATTE Landmark - \r\n', '560091', 'Sunkadakatte\r\n', 'Bangalore\r\n', 'NAGARAJ - 9738637565\r\n', '9:00 TO 22:30\r\n', 'All Days Including Sunday\r\n'),
(18, 'STK IYENGAR BEKARY\r\n', '#2  6TH BLOCK  NAGARABHAVI Landmark - OPP BDA COMPLEX\r\n', '560072', 'Nagarbhavi\r\n', 'Bangalore\r\n', 'BHARATH - 9741675511\r\n', '7:00 TO 21:30\r\n', 'All Days Including Sunday\r\n'),
(19, 'GANESH SAGAR CONDIMENTS\r\n', 'VEERABHADRESHWARA COMPLEX 80FEET ROAD PAPAREDDY PALYA 2ND STAGE NAGARABHAVI Landmark - OPP TO UDUPI GROUND\r\n', '560072', 'Nagarbhavi\r\n', 'Bangalore\r\n', 'SHIVANNA.G - 8150938899\r\n', '7:00 TO 21:00\r\n', 'All Days Including Sunday\r\n'),
(20, 'GANGABHAVANI TEXTILES\r\n', '#3  PAPAREDDY PALYA 2ND STAGE NAGARABHAVI Landmark - OPP TO AIRTEL OFFICE FASHION KIDS\r\n', '560072', 'Nagarbhavi\r\n', 'Bangalore\r\n', 'AMARNATH - 8970289770, 9632677008\r\n', '10:00 TO 21:30\r\n', 'All Days Including Sunday\r\n'),
(21, 'CHOUDESHWARI JUICE AND CHATS\r\n', '  PAPAREDDY PALYA 2ND STAGE KK LAYOUT NAGARABHAVI Landmark - BACKSIDE OF DEEPA COMPLEX\r\n', '560072', 'Nagarbhavi\r\n', 'Bangalore\r\n', 'DEVARAJ - 9008409877\r\n', '5:30 TO 21:00\r\n', 'All Days Including Sunday\r\n'),
(22, 'SHREE MANJUNATHA BEKARY\r\n', '#253 80 FEET ROAD KENGUNTE CIRCLE 2ND STAGE NAGARABHAVI Landmark - OPP TO AIT COLLEGE\r\n', '560072', 'Nagarbhavi\r\n', 'Bangalore\r\n', 'SOMASHEKAR - 8050957577\r\n', '5:30 TO 22:00\r\n', 'All Days Including Sunday\r\n'),
(23, 'GURUKRUPA JUICE AND CHATS\r\n', '#6 80 FEET  RING ROAD SHIRKE APARTMENT KENGERI UPANAGARA Landmark - \r\n', '560060', 'Kengeri\r\n', 'Bangalore\r\n', 'GANESH - 9449920591\r\n', '8:00 TO 22:30\r\n', 'All Days Including Sunday\r\n'),
(24, 'BAIRAVESHWARA STORES\r\n', '#42 80 FEET ROAD  KENGERI UPANAGARA Landmark - NETAJI LAYOUT ENTRANCE\r\n', '560060', 'Kengeri\r\n', 'Bangalore\r\n', 'ASHA - 9035103588, 9036103688, 9739906448\r\n', NULL, 'All Days Including Sunday\r\n'),
(25, 'RK PRAVISON STORES\r\n', '#156 BETHESTA CHURCH   KENGERI UPANAGARA Landmark - MAHAVEEN CORVENT APARTMENT\r\n', '560060', 'Kengeri\r\n', 'Bangalore\r\n', 'SIDDARAJU - 9980550475\r\n', '6:00 TO 21:30\r\n', 'All Days Including Sunday\r\n'),
(26, 'RAGHAVENDRA BAKERY\r\n', '#155 EWS IST D MAIN 8TH C CROSS KENGERI UPANAGARA Landmark - HOISALA CIRCLE OPP RAYMOND SHOP\r\n', '560060', 'Kengeri\r\n', 'Bangalore\r\n', 'LOKESH - 8970059470\r\n', '6:00 TO 22:00\r\n', 'All Days Including Sunday\r\n'),
(27, 'OM SRI ENTERPRISES\r\n', '#861 1ST MAIN  KENGERI UPANAGARA Landmark - OPP TO SANGEETHA SHOWROOM NEAR CORPORATION BANK\r\n', '560060', 'Kengeri\r\n', 'Bangalore\r\n', 'RAMESH - 7022642264, 9901822236\r\n', '9:00 TO 21:00\r\n', 'All Days Including Sunday\r\n'),
(28, 'OM SHAKTHI CONDIMENTS\r\n', ' 1ST MAIN  KENGERI UPANAGARA Landmark - RAILWAY STATION BUS STOP AND OPP TO SOUTH INDIAN BANK\r\n', '560060', 'Kengeri\r\n', 'Bangalore\r\n', 'RAMESH - 7090814711, 9900910826 \r\n', NULL, 'All Days Including Sunday\r\n'),
(29, 'MANJUNATHA BAKERY AND SWEETS\r\n', '#556 1ST MAIN  KENGERI UPANAGARA Landmark - OPP TO GANESHA TEMPLE\r\n', '560060', 'Kengeri\r\n', 'Bangalore\r\n', 'THIMMAPPA - 9741451372\r\n', '7:00 TO 22:30 \r\n', 'All Days Including Sunday\r\n'),
(30, 'BHARATH FOOTWEAR\r\n', '#6 SLV COMPLEX   Landmark - OPP KENGERY BUS STOP AND MASJID\r\n', '560060', 'Kengeri\r\n', 'Bangalore\r\n', 'FAIZAL - 8553663589\r\n', '6:30 TO 21:30\r\n', 'All Days Including Sunday\r\n'),
(31, 'BORAJ TEA STALL\r\n', '   KENGERI Landmark - OPP HP PETROL BUNK AND KENGERI SIGNAL\r\n', '560060', 'Kengeri', 'Bangalore', 'MUTHURAJ - 9886381834\r\n', '4:00 TO 20:00\r\n', 'All Days Including Sunday\r\n'),
(32, 'SRI SAI CONDIMENTS AND JUICE CORNER', ' MYSORE ROAD   Landmark - NEAR RV COLLEGE OPP INDIAN OIL PETROL BUNK\r\n', '560060', 'Kengeri\r\n', 'Bangalore\r\n', 'MUNISWAMY - 9632090335\r\n', '6:00 TO 21:00\r\n', 'All Days Including Sunday\r\n'),
(33, 'KRUSHI BAKERY AND CONDIMENTS\r\n', ' MYSORE ROAD  NAYANDAHALLY Landmark - BEHIND THE CLUB OPP GOPALAN MALL ARCHADE\r\n', '560039', 'Rajarajeshwari Nagar\r\n', 'Bangalore\r\n', 'MAHADEVAYYA - 9141847252\r\n', NULL, 'All Days Including Sunday\r\n'),
(34, 'HAMSA PRIYA CONDIMENTS\r\n', '#7 HV ROAD CMC COMPLEX RR NAGAR Landmark - NEAR JAYANNA CIRCLE\r\n', '560098', 'Rajarajeshwari Nagar\r\n', 'Bangalore\r\n', 'UMESH - 9686872540\r\n', '5:30 TO 23:00\r\n', 'All Days Including Sunday\r\n'),
(35, 'RK CONDIMENTS\r\n', ' IDEAL HOME TOWNSHIP CIRCLE ARASAPPA COMPLEX RR NAGAR Landmark - \r\n', '560098', 'Rajarajeshwari Nagar\r\n', 'Bangalore\r\n', 'KUMAR - 9880016666\r\n', NULL, 'All Days Including Sunday\r\n'),
(36, 'JEEVAN BAKERY\r\n', '  KEREPALYA KRISHNAPPA LAYOUT RR NAGAR Landmark - NEAR MANDYA WINE\r\n', '560085', 'Rajarajeshwari Nagar\r\n', 'Bangalore\r\n', 'PUTTARAJU - 9686762797\r\n', NULL, 'All Days Including Sunday\r\n'),
(37, 'CHANDRA MOBILE\r\n', '#87 KEREKODI ROAD BGEGOWDA LAYOUT BSK 3RD STAGE VEERABHADRA NAGAR Landmark - OPP TO KAR A/C WORKS\r\n', '560085', 'Veerabhadra Nagar\r\n', 'Bangalore\r\n', 'NAVARATHAN - 7411637168\r\n', NULL, 'All Days Including Sunday\r\n'),
(38, 'SNEHUTHI OPTICALS\r\n', '#17 3RD BLOCK BDA COMPLEX KORAMANGALA Landmark - BDA Complex\r\n', '560034', 'Koramangala\r\n', 'Bangalore\r\n', 'R TYAGARAJ - 9844057443\r\n', '9:45 TO 13:45, 14:30 to 20:30\r\n', 'All Days Including Sunday\r\n'),
(39, 'SRI SAI ENTERPRISES\r\n', '#3 3RD BLOCK BDA COMPLEX KORAMANGALA Landmark - BDA Complex\r\n', '560034', 'Koramangala\r\n', 'Bangalore\r\n', 'SRIDHAR - 7795335636\r\n', '9:00 TO 21:00\r\n', 'All Days Including Sunday\r\n'),
(40, 'B.S.A. STORES\r\n', '#92  BDA COMPLEX KORAMANGALA Landmark - \r\n', '560034', 'Koramangala\r\n', 'Bangalore\r\n', 'NAGESH - 9448685427\r\n', NULL, 'All Days Including Sunday\r\n'),
(41, 'SRI MANJUNATHA CONDIMENTS\r\n', '#46 6TH CROSS 17TH MAIN 6TH BLOCK  KORAMANGALA Landmark - NEAR KORAMANGALA CLUB ROAD\r\n', '560034', 'Koramangala\r\n', 'Bangalore\r\n', 'PRAKASH - 9916388701\r\n', '5:00 TO 23:20\r\n', 'All Days Including Sunday\r\n'),
(42, 'JYOTHI GENERAL STORES\r\n', '#127 MIG KHB COLONY 5TH BLOCK KORAMANGALA Landmark - OPP JYOTHI NIVAS COLLEGE\r\n', '560034', 'Koramangala\r\n', 'Bangalore\r\n', 'H S RAMESH - 9972019581\r\n', '8:00 TO 19:00\r\n', 'All Days Including Sunday\r\n'),
(43, 'NINDINI MILK PARLOUR\r\n', 'SRI VENKATESHWARA KRIPA BUILDING 3RD MAIN  Mathikere BUS STAND Landmark - OPP AIYYAPPA BAKERY\r\n', '560054', 'Mathikere\r\n', 'Bangalore\r\n', 'SRINIVAS - 9611964693\r\n', '6:30 TO 14:30, 14:30 to 21:30\r\n', 'All Days Including Sunday\r\n'),
(44, 'VAIBHAVA GENERAL SOTRE\r\n', '#527 NEW BEL ROAD  RMV 2ND STAGE  Landmark - OPP SHANTHI SAI HOTEL\r\n', '560094', 'NEW BEL Road\r\n', 'Bangalore\r\n', 'RAMAKRISHNA - 9916563112\r\n', '5:45 TO 22:30\r\n', 'All Days Including Sunday\r\n'),
(45, 'S.S.R. ENTERPRISSES\r\n', ' 1ST CROSS 1ST MAIN  AMARAJYOTHI LAYOUT SANJAYNAGAR Landmark - CAFÉ COFFEE DAY/DENA BANK\r\n', '560094', 'Sanjaynagar\r\n', 'Bangalore\r\n', 'VIJAY D B/Manjula - 9901334490\r\n', NULL, 'All Days Including Sunday\r\n'),
(46, 'SRI JYOTHI CONDIMENTS\r\n', '#9 JNANABHARATHI MAIN ROAD NAGARABHAVI CIRCLE NAGARABHAVI Landmark - NEXT TO MADDURAMMA TEMPLE\r\n', '560072', 'Nagarbhavi\r\n', 'Bangalore\r\n', 'SHIVARAM - 8183831727\r\n', '5:30 TO 12:00, 15:00 to 21:30\r\n', 'SUNDAY HOLIDAY\r\n'),
(47, 'CITY LAND BAKERY\r\n', '#38 NAGARABHAVI MAIN ROAD MARUTHI NAGAR BAIRAVESHWARANAGAR Landmark - OPP SUZUKI SHOWROOM\r\n', '560072', 'Nagarbhavi\r\n', 'Bangalore\r\n', 'NOUSHAD - 7026104768, Mustafa - 8747907392\r\n', '6:30 TO 23:00\r\n', 'All Days Including Sunday\r\n'),
(48, 'SRI BRAHMALINGESHWARA CONDIMENTS\r\n', ' 1ST MAIN  HUCHAPPA ROAD MUDALA PALYA Landmark - DHANALAKSHMI HARDWARE NEAR MUDALAYAPALYA CIRCLE\r\n', '560072', 'MUDALAPALYA\r\n', 'Bangalore\r\n', 'VIJAY SHANKAR - 9343648286\r\n', '6:00 TO 20:30\r\n', 'Sunday Open'),
(49, 'SRI CHOWDESHWARI CONDIMENTS\r\n', ' NAGARABHAVI MAIN ROAD  KAVERY LAYOUT Landmark - OPP. HASANAMBA IYANGARS BAKERY\r\n', '560072', 'MUDALAPALYA\r\n', 'Bangalore\r\n', 'SRINIVAS - 9916374109\r\n', '6:00 TO 22:00\r\n', 'SUNDAY HOLIDAY\r\n'),
(50, 'LAKSHMI VENKATESHWARA BAKERY\r\n', '#37/68/4 2ND MAIN ROAD  PRAKASHNAGAR Landmark - SHOBHA HOSPITAL\r\n', '560040', 'Prakashnagar\r\n', 'Bangalore\r\n', 'SRINIVAS - 9945615663\r\n', '5:30 TO 22:30\r\n', 'Sunday Open'),
(51, 'MANDARTHI CONDIMENTS\r\n', '#105 1ST MAIN SELVAM INDUSTRIAL ESTATE PRASHANTH NAGAR Landmark - NEAR HOUSING BOARD BUS STOP\r\n', '560079', 'Prashanthnagar\r\n', 'Bangalore\r\n', 'SUKUMAR SHETTY - 8197976713\r\n', '8:00 TO 21:00\r\n', 'Sunday Open'),
(52, 'SRI ANNAPURNESHWARI TIPPEN CENTRE\r\n', '#46/2 MAGADI MAIN ROAD  AGRAHARA DASARA HALLY Landmark - OPP VENKATESHWARA BAKERY\r\n', '560079', 'Dasarahally\r\n', 'Bangalore\r\n', 'PARVARTY - 9845667785\r\n', '5:30 TO 21:00\r\n', 'Sunday Open'),
(53, 'SIDDESHWARA CONDIMENTS\r\n', ' AADICHUNJANAGIRI COMPLEX MANUVANA VIJAYANAGAR Landmark - ING VAYSYA BANK\r\n', '560040', 'Vijayanagar\r\n', 'Bangalore\r\n', 'RAJANNA - 8095901208\r\n', '7:00 TO 21:00\r\n', 'All Days Including Sunday\r\n'),
(54, 'COFFE BAR\r\n', '#320/31 9TH MAIN ROAD  RAJAJINAGAR Landmark - NEAR RAMAMANDHIR\r\n', '560010', 'Rajajinagar\r\n', 'Bangalore\r\n', 'GIRISH - 9036881999, Sunil -  8904063352\r\n', '7:00 TO 22:00\r\n', 'All Days Including Sunday\r\n'),
(55, 'MANJUNATHA TEA STALL\r\n', '#39/12 REMCO LAYOUT SERVICE ROAD 2ND STAGE VIJAYANAGAR Landmark - NEAR MARUTHI MEDICALS OPP TO BTS BUS STAND\r\n', '560040', 'Vijayanagar\r\n', 'Bangalore\r\n', 'ANAND - 8722559944\r\n', '6:30 TO 22:15\r\n', 'Sunday open'),
(56, 'KAMADHENU CONDIMENTS\r\n', ' 9TH MAIN ROAD  HAMPINAGAR Landmark - OPP RPC LAYOUT BUS STOP\r\n', '560040', 'RPC Layout\r\n', 'Bangalore\r\n', 'BHASKAR - 9964079608\r\n', '5:00 TO 22:30\r\n', 'Sunday Open'),
(57, 'SRI BRAHMALINGESHWARA CONDIMENTS and Fruit Juice Centre\r\n', '#74 1st Stage  Teacher''s Colony, Kumaraswamy Layout Landmark - Near Dayananda Sagar College\r\n', '560078', 'Kumaraswamy Layout\r\n', 'Bangalore\r\n', NULL, '4:30 to 23:00\r\n', 'SUNDAY HOLIDAY\r\n'),
(58, 'SR Bakery and Sweets\r\n', '#389 100Ft Ring Road  Sarakki, JP Nagar Landmark - Jaraganahally Signal, Next to Nandi Bar\r\n', '560078', 'Sarakki\r\n', 'Bangalore\r\n', 'Gundurao - 9886006500\r\n', '5:30 to 23:00\r\n', 'All Days Including Sunday\r\n'),
(59, 'NANDINI MILK PARLOUR\r\n', '  6th Phase Bus Stand  Landmark - Last Bus Stop JP Nagar\r\n', '560078', 'JP Nagar\r\n', 'Bangalore\r\n', 'MANJUNATH - 9880258525\r\n', '3:30 to 12:00, 16:00 to 21:00\r\n', 'SUNDAY HOLIDAY\r\n'),
(61, 'Devi Condiments\r\n', ' 3rd Main Road, DC Hally Main Road  Bilekally Landmark - CERA SANNIDAY Enterprises\r\n', '560076', 'Bilekahalli\r\n', 'Bangalore\r\n', 'Mukesh Kumar - 9964447757\r\n', '8:00 to 21:30\r\n', 'All Days Including Sunday\r\n'),
(62, 'Sri Siri Condiments\r\n', '#90/3 Bannerghatta Road CRR Garden, Arekere, BTS Layout Arekere, BTS Layout Landmark - Near RTO Office\r\n', '560076', 'Arekere\r\n', 'Bangalore\r\n', 'Dinesh - 8183085551\r\n', '6:00 to 21:30\r\n', 'SUNDAY UP TO 15.00\r\n'),
(63, 'Sri Brahmalingeshwara Condiments\r\n', '#82 Kadirenahally Main Road 100Ft Ring Road BSK 2nd Stage Landmark - Kadirenahally Park\r\n', '560070', 'Kadirenahally Park\r\n', 'Bangalore\r\n', 'Raju - 9611844787/8123879978\r\n', '5:00 to 21:30\r\n', 'TUESDAY HOLIDAY\r\n'),
(64, 'Sri Durgaparameshwari Juice and Condiments\r\n', '#340 4th Cross, Water Tank Road  Hosakere Hally, BBMP Office Landmark - Next to Surya Galaxy Hospital\r\n', '560085', 'Hosakere Hally\r\n', 'Bangalore\r\n', 'Ganesh - 9535802424\r\n', '6:00 to 23:00\r\n', 'TUESDAY HOLIDAY\r\n'),
(65, 'Chowdeshwari Provision Stores\r\n', '#2 Mariyamma Temple Beside building BSK 3rd Stage Kadirenahally Village Landmark - Mariyamma Templ Beside\r\n', '560085', 'Kadirenahally Village/Katriguppe\r\n', 'Bangalore\r\n', 'Yogish - 9060804559\r\n', '5:00 to 23:00\r\n', 'All Days Including Sunday\r\n'),
(66, 'NANDINI MILK PARLOUR\r\n', ' 22nd Main Road  BSK 2nd Stage Landmark - Near BDA Complex\r\n', '560070', 'BSK 2nd Stage\r\n', 'Bangalore\r\n', 'Sri Ramareddy - 9480209858\r\n', '6:00 to 23:00\r\n', 'All Days Including Sunday\r\n'),
(67, 'Shakthi Condiments\r\n', '#70 24th A'' Cross BSK2nd Stage Karisandra Main Road Landmark - Sri Annamma Devi Trust Building\r\n', '560070', 'BSK 2nd Stage\r\n', 'Bangalore\r\n', 'Prasad - 8050097371\r\n', '6:30 to 22:45\r\n', 'All Days Including Sunday\r\n'),
(68, 'Krishna Stationary World\r\n', '#3 40th Cross, 5th Main 5TH BLOCK Jayanagar Landmark - Opp to Canara Bank ATM\r\n', '560041', 'Jayanagar\r\n', 'Bangalore\r\n', 'Naresh - 9986497669\r\n', '8:00 to 21:30\r\n', 'All Days Including Sunday\r\n'),
(69, 'Grid Line\r\n', '#172/B2 Lucky Paradise Complex, 22nd Cross 3rd Block Jayanagar Landmark - Opp to ICICI Bank\r\n', '560011', 'Jayanagar\r\n', 'Bangalore\r\n', 'Tejas CS/Niranjan - 998627270/8453970846\r\n', '9:00 to 21:00\r\n', 'All Days Including Sunday\r\n'),
(70, 'Witco Stores\r\n', '#269 10th Cross Byrasandra/Sagar Automobiles Road Jayanagar Landmark - Canara Bank Coloby\r\n', '560011', 'Jayanagar\r\n', 'Bangalore\r\n', 'Matha Chan - 8028918256\r\n', '7:30 to 2:00, 5:30 9:30\r\n', NULL),
(71, 'Honey Sweets\r\n', '   Shanthi Nagar Bus Stop Landmark - TTMC B-BLOCK\r\n', '560027', 'Shanthinagar\r\n', 'Bangalore\r\n', 'Mahesh - 9591360133\r\n', '5:00 to 22:00\r\n', 'Sunday upto  13:00\r\n'),
(72, 'Santosh Stall\r\n', ' Lal Bagh Road   Landmark - Opp to Urvashi Theatre & Opp to MTR Hotel\r\n', '560027', 'Shanthinagar\r\n', 'Bangalore\r\n', 'Santosh - 8147797893\r\n', '5:00 to 23:00\r\n', 'All Days Including Sunday\r\n'),
(73, 'Sri Maruthi Stores\r\n', '#35 Krumbigal Road  Dodda Mavalli Landmark - Lalbagh Main Gate Bus Stop\r\n', '560004', 'Lal Bagh Main Gate\r\n', 'Bangalore\r\n', 'Aravind - 9880670775/9900150775\r\n', '7:00 to 20:00\r\n', 'All Days Including Sunday\r\n'),
(74, 'Sri Vinayaka General Stores\r\n', '#3 3rd Cross Someshwaranagar, 4th Block Jayanagar Landmark - Back Side NIMHANS\r\n', '560011', 'Jayanagar\r\n', 'Bangalore\r\n', 'S Venkatram - 9019311937\r\n', '6:30 to 22:00\r\n', 'All Days Including Sunday\r\n'),
(75, 'Rathan Stores\r\n', '#375 Siddaiah Road  Wilson Garden Landmark - Opp to Wilson Garden Police Station\r\n', '560027', 'Wilson Garden\r\n', 'Bangalore\r\n', 'Masood - 9845095313\r\n', '6:00 to 23:00\r\n', 'All Days Including Sunday\r\n'),
(76, 'Asian Car Links\r\n', '#19/E RV Road South End Circle Basavanagudi Landmark - Opp to South End Circle Church\r\n', '560004', 'Basavanagudi\r\n', 'Bangalore\r\n', 'Mahadevayya HB - 9880095657\r\n', '9:00 to 22:00\r\n', 'All Days Including Sunday\r\n'),
(77, 'SLV Bakery and Condiments\r\n', '#26/2 Outer Ring Road  Near AOL Bellandur Landmark - ECO Space\r\n', '560037', 'Bellandur\r\n', 'Bangalore\r\n', 'Harshad - 9740374249\r\n', '5:30 to 23:30\r\n', 'All Days Including Sunday\r\n'),
(78, 'Sri Krishna Stores\r\n', ' 24th Main, Tirumala Theatre Road 1st Sector Agara, HSR Layout Landmark - Opp to Five Star Chicken\r\n', '560102', 'HSR Layout\r\n', 'Bangalore\r\n', 'Girija - 9241277847\r\n', '7:00 TO 22:30 \r\n', 'All Days Including Sunday\r\n'),
(79, 'Pragathi Book Station\r\n', '#614 GNS Arcade, 28th Main 2ND STAGE, 100Ft RIngRoad BTM Landmark - Opp to Karur Vysya Bank and Diamond Tata Motors and Opp to AXA Building\r\n', '560076', 'BTM Layout\r\n', 'Bangalore\r\n', 'Balaji - 9886125646\r\n', '10:30 to 22:00\r\n', 'All Days Including Sunday\r\n'),
(80, 'Condiments', '#31 2nd Main Mysore Road Byatarayana Pura Landmark - Next to Karnataka Bank\r\n', '560026', 'Byatarayanapura\r\n', 'Bangalore\r\n', 'Nandish - 9742787074\r\n', '7:00 TO 22:30 \r\n', 'All Days Including Sunday\r\n'),
(81, 'Nanjundeshwara Stores\r\n', '#18 3rd Cross, 9th Main 3rd Stage BSK, Avalahally Landmark - Near Kuvempu Rangamandira\r\n', '560085', 'Avalahally\r\n', 'Bangalore\r\n', 'Mallikarjunappa - 9844508443\r\n', '5:00 to 10:00, 16:00 to 22:00\r\n', 'All Days Including Sunday\r\n'),
(82, 'Padmashree Enterprises\r\n', '#1517/1 50Feet Road, 18th Main Road Muneshwara Block  Landmark - Near Venkateshwara Theatre Corner\r\n', '560026', 'Muneshwara Block\r\n', 'Bangalore\r\n', 'Raghavendra - 9449470761\r\n', '6:00 to 22:00\r\n', 'All Days Including Sunday\r\n'),
(83, 'Sri Nandini Condiments\r\n', ' Maruthi Circle  Hanumantha Nagara Landmark - Maruthi Circle\r\n', '560019', 'Hanumanthanagara\r\n', 'Bangalore\r\n', 'Krishna - 9742123499\r\n', '6:00 to 22:30\r\n', 'All Days Including Sunday\r\n'),
(84, 'Annapurna Traders\r\n', '#174/1 10th Main  Srinagara Landmark - Srinagar Last Bus Stop, Next to Coffee Day\r\n', '560050', 'Srinagar\r\n', 'Bangalore\r\n', 'Sri Vani - 8088888175\r\n', '9:00 to 14:00, 17:00 to 22:00\r\n', 'Friday 2 Hours Break\r\n'),
(85, 'Sri Durgaparameshwari Condiments\r\n', '#93 9th Cross,Ramanjaneya Road  Hanumantha Nagara Landmark - \r\n', '560019', 'Hanumanthanagara\r\n', 'Bangalore\r\n', 'Krishna Kundan - 9900416478\r\n', '5:30 to 22:30\r\n', 'All Days Including Sunday\r\n'),
(86, 'Ashwini Stores\r\n', '#107 Gandhi Bazar  Basavanagudi Landmark - Opp to Vyasaraj Mutt\r\n', '560019', 'Basavanagudi\r\n', 'Bangalore\r\n', 'Srinivasa/Lokesh - 9620677177\r\n', '7:00 to 22:00\r\n', 'All Days Including Sunday\r\n'),
(87, 'SRI RAGHAVENDRA Stores\r\n', '#34 4th Main, 3rd Cross  Chamarajpet Landmark - Next to Davanagere Benne Dose\r\n', '560018', 'Chamrajpet\r\n', 'Bangalore\r\n', 'Krishna Murth - 8026613012\r\n', '8:30 to 13:30, 17:00 to 21:30\r\n', 'All Days Including Sunday\r\n'),
(88, 'Arasamma Condiments\r\n', '#158 9th Cross, 1st Main Road  Chamarajpet Landmark - Mysore Circle and Near Madan Choultry\r\n', '560018', 'Chamrajpet\r\n', 'Bangalore\r\n', 'Mahesh - 9035756556\r\n', '3:00 to 22:30\r\n', 'All Days Including Sunday\r\n'),
(89, 'CPK News Agency\r\n', ' Nagarthapet Road, Near Dharmaraya Temple   Landmark - SRS Tube and Puncture parallel to SP Road\r\n', '560002', 'SP Road\r\n', 'Bangalore\r\n', 'Ismail/Siraj - 9945451200/9035197574\r\n', '7:30 to 21:30\r\n', 'All Days Including Sunday\r\n'),
(90, 'MDS Enterprises, Helmet Shop\r\n', '#8 Trinity Circle Vivekananda Swamy Road Ulsoor Landmark - Opp to Lido Mall\r\n', '560008', 'Ulsoor\r\n', 'Bangalore\r\n', 'MD IMAM - 9845475286\r\n', '10:00 to 22:00\r\n', 'All Days Including Sunday\r\n'),
(91, 'Sri Puja Bakery\r\n', '#1  Vivekananda Swamy Road Ulsoor Landmark - Near Windshield World Car Service\r\n', '560008', 'Ulsoor\r\n', 'Bangalore\r\n', 'Annappa - 9880457301\r\n', '4:00 to 24:00\r\n', 'All Days Including Sunday\r\n'),
(92, 'Priyanka Stores\r\n', '#33/3   Indirangar Landmark - Opp to Punjab National Bank/Canara Bank/BDA Complex\r\n', '560038', 'Indiranagar\r\n', 'Bangalore\r\n', 'Seema Bannerji - 9902537220\r\n', '6:00 to 22:00\r\n', 'All Days Including Sunday\r\n'),
(93, 'Welcome Bakery\r\n', '#108/2 3rd Main Road, TMN Street  New Thippasandra Landmark - Near Nobel Super Market\r\n', '560075', 'New Thippasandra\r\n', 'Bangalore\r\n', 'Abdul Ameed - 9164228672\r\n', '6:00 to 22:30\r\n', 'All Days Including Sunday\r\n'),
(94, 'Fone ZONE\r\n', '#4 HAL Market   Landmark - HAL Fruit Market/Opp to Surya Hotel/Next to India Medical\r\n', '560017', 'HAL Fruit Market\r\n', 'Bangalore\r\n', 'Mohammed ILyaz - 9066776155\r\n', '9:00 to 21:00\r\n', 'SUNDAY OPEN, Upto 21:30\r\n'),
(95, 'Shakti Xerox\r\n', '#21 HAL OLD Airport Road Shankarappa Complex Konenna Agrahara Landmark - Rajeshwari Theatre\r\n', '560017', 'Konena Agrahara\r\n', 'Bangalore\r\n', 'Kartikeyan - 9845679451\r\n', '9:30 to 22:00\r\n', 'All Days Including Sunday\r\n'),
(96, 'PK Telecommunications\r\n', '#52 Old Airport Road  Kodihally Landmark - Diamond District Gate No 2 or Next to Surya Bar\r\n', '560008', 'Kodihally\r\n', 'Bangalore\r\n', 'Naveen - 9972024617\r\n', '7:00 TO 22:30 \r\n', 'SUNDAY OPEN/MONDAY Holiday\r\n'),
(97, 'Geeta Oil Stores\r\n', '#10/1 2ND CROSS, SNR Complex  Domalur Village, HAL Mainroad Landmark - Opp to Mahalakshmi Temple\r\n', '560071', 'Domalur Village\r\n', 'Bangalore\r\n', 'R Saravanan - 9008244938\r\n', '10:00 to 14:00, 17:30 to 21:30\r\n', 'All Days Including Sunday\r\n'),
(98, 'Guhan Oil Stores\r\n', '#163 2nd Main Road  Domalur Layout Landmark - Behind Shanthi Sagar Hotel or More\r\n', '560071', 'Domalur Village\r\n', 'Bangalore\r\n', 'R Bhavani - 9731115843/9008244938\r\n', '10:00 to 14:00, 17:30 to 21:30\r\n', 'All Days Including Sunday\r\n'),
(99, 'Gala Juice Centre\r\n', '   Vidhanasoudha Landmark - MS Building, Gate No 3\r\n', '560001', 'Vidhanasaudha\r\n', 'Bangalore\r\n', 'Srinivasa Achar - 9880301109\r\n', '9:30 to 19:30\r\n', 'All Days Including Sunday\r\n'),
(100, 'Sri Durga Pan\r\n', '#26/1 Meenakshi Koil Street  Opp to Shivajinagar Bus Stand Landmark - Matashree Bar\r\n', '560051', 'Shivajinagar\r\n', 'Bangalore\r\n', 'Subash Shetty - 9972434667\r\n', '8:00 to 23:30\r\n', 'All Days Including Sunday\r\n'),
(101, 'Venkatesh Stores(Kati Stores)\r\n', '#43 Ibrahim Saheeb Street  Shivajinagar Landmark - Parallel to Commercial Street\r\n', '560001', 'Shivajinagar\r\n', 'Bangalore\r\n', 'Venkatesh - 9980228666\r\n', '6:00 to 23:00\r\n', 'All Days Including Sunday\r\n'),
(102, 'SKP Enterprises\r\n', '#21 Veerapillai Street  Shivajinagar Landmark - Bajaj Automobile Junction\r\n', '560001', 'Shivajinagar\r\n', 'Bangalore\r\n', 'Prakash KS - 9844423777\r\n', '9:30 to 14:30, 17:00 to 23:00\r\n', 'All Days Including Sunday\r\n'),
(103, 'NANDINI MILK PARLOUR(Link with Gala Juice)\r\n', ' Near Railway Station Underground Bridge  Majestic Landmark - BMTC Bus Stand and Railway Under Bridge or Pedestrian Bridge\r\n', '560009', 'Majestic\r\n', 'Bangalore\r\n', 'Manjanna - 9880301109\r\n', '6:00 to 22:30\r\n', 'All Days Including Sunday\r\n'),
(104, 'NANDINI MILK PARLOUR(Link with Gala Juice)\r\n', '   4th Block Jayanagar Complex Landmark - Near Water Tank Compound\r\n', '560011', 'Jayanagar\r\n', 'Bangalore\r\n', 'Srinivas - 9880301109\r\n', '6:00 to 19:00\r\n', 'All Days Including Sunday\r\n'),
(105, 'Cafeteria\r\n', ' Cunningham Road Shah Sultan Complex Shivajinagar Landmark - Opp to Sigma Mall\r\n', '560052', 'Shivajinagar\r\n', 'Bangalore\r\n', 'Nawaz - 8792699837\r\n', '6:00 to 23:00\r\n', 'All Days Including Sunday\r\n'),
(106, 'Karnataka Stores\r\n', '#48 8th Main Road  Vasanth Nagar Landmark - Opp to Kinara Thatte Idly\r\n', '560052', 'Vasanth Nagar\r\n', 'Bangalore\r\n', 'Babji - 9738306640\r\n', '7:00 to 14:00, 16:30 to 22:00\r\n', 'Sunday upto 13:00\r\n'),
(107, 'Home Needs\r\n', '#88/1-1 Cooles Road  Frazer Town Landmark - Opp to Reliance Fresh\r\n', '560005', 'Frazer Town\r\n', 'Bangalore\r\n', ' - \r\n', '10:15 to 22:15\r\n', 'Sunday upto 13:00\r\n'),
(108, 'Star Rice Corner\r\n', '#351 Wheelers Road  Cox Town Landmark - Opp to Priyanka Pharmacy\r\n', '560084', 'Cox Town\r\n', 'Bangalore\r\n', 'Mohammed - 9739422100\r\n', '8:00 to 23:00\r\n', 'Sunday Close\r\n'),
(109, 'Mobile Link\r\n', '#158 Venkatesha Puram Main Road   Landmark - Opp to Syndicate Bank\r\n', '560045', 'Venkatesh Puram\r\n', 'Bangalore\r\n', 'Nadeem - 9880092984\r\n', '8:00 to 23:00\r\n', 'All Days Including Sunday\r\n'),
(110, 'Syed and Sons and Mobile Zonw\r\n', '#90 Govindapura Main Road Near Haneefiya Masjid AC POST Landmark - Next to HDFC ATM\r\n', '560045', 'Govindapura\r\n', 'Bangalore\r\n', 'Syed Rehmatulla - 7411732442/9916536992\r\n', '8:30 to 23:30\r\n', 'All Days Including Sunday\r\n'),
(111, 'Iyengar Bakery\r\n', '#849/1 A-Block  Sahakarnagar Landmark - Opp to Canara Bank\r\n', '560092', 'Sahakarnagar\r\n', 'Bangalore\r\n', 'Shashikumar - 9880190821\r\n', '7:30 to 22:00\r\n', 'All Days Including Sunday\r\n'),
(112, 'Sri Krishna Bakery\r\n', '  Attur 2nd Stage Thirumalappa Nagar, Yelahanka Landmark - Thirumala Dhaba\r\n', '560064', 'Thirumalappa Nagar\r\n', 'Bangalore\r\n', 'Haridas - 9902882422\r\n', '6:00 to 22:00\r\n', 'All Days Including Sunday\r\n'),
(113, 'Faya Telecom\r\n', '#7 MIG 1st Main, 4th Phase, 707 Yelahanka New Town Landmark - Opp to Bata Showroom\r\n', '560064', 'Yelahanka New Town\r\n', 'Bangalore\r\n', 'Hidayath - 9611244424\r\n', '9:30 to 22:30\r\n', 'All Days Including Sunday\r\n'),
(114, 'Selvi Bakery\r\n', ' NES Complex Suggappa Layout Yelahanka Landmark - Opp to Yelahanka Bus Stand\r\n', '560064', 'Yelahanka\r\n', 'Bangalore\r\n', 'C Ganesh - 9986592191\r\n', '9:00 to 21:00\r\n', 'All Days Including Sunday\r\n'),
(115, 'Amruta Bakery\r\n', '#52/53 MBT Compound  Bommanahally Landmark - Eicher Show Room\r\n', '560068', 'Bommanahally\r\n', 'Bangalore\r\n', 'Ribesh - 9880650175\r\n', '6:00 to 22:00\r\n', 'All Days Including Sunday\r\n'),
(116, 'Nandini Milk Parlour\r\n', '#1145 Old Post Office Building, Mangammana Palya Main Road  Bommanahally Landmark - Opp to SBI\r\n', '560068', 'Bommanahally\r\n', 'Bangalore\r\n', 'Neeraj - 9916500668\r\n', '6:00 to 24:00\r\n', 'All Days Including Sunday\r\n'),
(117, 'SJ Iyengar Bakery\r\n', '#118 2nd Cross, Bandepalya Main Road Garve Bhavi Palya Bommanahally Landmark - Near KK Bakery/Opp to Bande Palya Market\r\n', '560068', 'Bommanahally\r\n', 'Bangalore\r\n', 'Prakash - 8497038314\r\n', '6:30 to 22:30\r\n', 'All Days Including Sunday\r\n'),
(118, 'Sri Mookambika Juice and Condiments\r\n', '#48/2 SKS Masjid Compound, Hosur Main Road Kudlu Gate Kudlu Gate Landmark - Next to Masjid\r\n', '560068', 'Kudlu Gate\r\n', 'Bangalore\r\n', 'Sunil - 9886393906\r\n', '4:00 to 23:00\r\n', 'All Days Including Sunday\r\n'),
(119, 'SLV Condiments\r\n', '   Singasandra Hosur Main Road Landmark - Near Canara Bank/Thirumala Bar\r\n', '560068', 'Singasandra\r\n', 'Bangalore\r\n', 'Badri - 8722884950\r\n', '9:30 to 21:00\r\n', 'All Days Including Sunday\r\n'),
(120, 'Novelty Stores\r\n', ' Hosur Main Road Electronics City, Phase-I Konappana Agrahara Landmark - Opp to Muttot Fin Corp\r\n', '560100', 'Konappana Agrahara/Electronic City Phase-1\r\n', 'Bangalore\r\n', 'Hamsa - 9916226169\r\n', '4:00 to 23:00\r\n', 'All Days Including Sunday\r\n'),
(121, 'Shravya Juice Condiments\r\n', ' Hosur Main Road Electronics City, Phase-II  Landmark - Near BMTC Bus Depot\r\n', '560100', 'Electronic City Phase-2\r\n', 'Bangalore\r\n', 'Lakshman Pujari - 9886224697\r\n', '6:00 to 23:00\r\n', 'All Days Including Sunday\r\n'),
(122, 'Raghavendra Condiments\r\n', ' Krishnappa Building, Neeladri Road Electronics City, Phase-II  Landmark - Opp to Wipro Gate #12, Near Hyderabad Spicy and Punjabi Food Corner\r\n', '560100', 'Electronic City Phase-2\r\n', 'Bangalore\r\n', 'Sudhakar - 8971106538\r\n', '5:00 to 23:00\r\n', 'All Days Including Sunday\r\n'),
(123, 'Tejaswini Bakery\r\n', ' Hosur Main Road Electronics City, Phase-I Konappana Agrahara Landmark - Opp Bajaj Show Room\r\n', '560100', 'Konappana Agrahara/Electronic City Phase-1\r\n', 'Bangalore\r\n', 'Shiva Rudrappa - 9880680366\r\n', '5:30 to 24:00\r\n', 'All Days Including Sunday\r\n'),
(124, 'Royal Bakery Juice Centre\r\n', ' Hosur Main Road  Singasandra Landmark - Near E-CITY Restaurant\r\n', '560068', 'Electronic City Phase-1\r\n', 'Bangalore\r\n', 'Dinesh - 9448019472\r\n', '6:00 to 23:00\r\n', 'All Days Including Sunday\r\n'),
(125, 'Palace Bakery\r\n', '#49/7 Chikka Begur Gate, Hosur Main Road  Madivala Post Landmark - Near Hotel Srinidhi\r\n', '560068', 'Electronic City Phase-1\r\n', 'Bangalore\r\n', 'Naushad/Shaffiqui - 9845963382/8904126132\r\n', '8:00 to 22:00\r\n', 'All Days Including Sunday\r\n'),
(126, 'Arokya Milk Parlour\r\n', ' 2nd Cross, 1st Main  Ashwath Nagar, Marathally Landmark - Sri Sai Ram PG\r\n', '560037', 'Marathally\r\n', 'Bangalore\r\n', 'Mahadevaswamy - 9620809727\r\n', '5:00 to 11:00\r\n', 'All Days Including Sunday\r\n'),
(127, 'Royal Bakery\r\n', '#37 Vartur Main Road  Kunthala Hally Landmark - Kuntalahally Signal/ITPL Turn Signal\r\n', '560037', 'Kuntalahally\r\n', 'Bangalore\r\n', 'Vinod Kumar - 9986178133\r\n', '6:00 to 24:00\r\n', 'All Days Including Sunday\r\n'),
(128, 'Sri Ram Bakery\r\n', '  White Field Post Siddapur/Vartur Main Road Landmark - Near Shell Petrol Bunk and Siddapura Bus Stop\r\n', '560066', 'Vartur Main Road\r\n', 'Bangalore\r\n', 'Venu E Nair - 8123656780/8123586667\r\n', '5:30 to 22:30\r\n', 'All Days Including Sunday\r\n'),
(129, 'Triveni Bakery\r\n', '  Varturi Kodi Vartur Main Road Landmark - Near Petrol Bunk\r\n', '560066', 'Vartur Kodi\r\n', 'Bangalore\r\n', 'Sujith Kumar - 9620603995\r\n', '6:00 to 22:00\r\n', 'All Days Including Sunday\r\n'),
(130, 'Ashok Enterprises\r\n', '#300 Purnima Complex  White Field Landmark - Opp to Mayura Bakery\r\n', '560066', 'White Field\r\n', 'Bangalore\r\n', 'Amshith - 9740585848\r\n', '8:00 to 21:30\r\n', 'All Days Including Sunday\r\n'),
(131, 'Sri Krishna Bakery\r\n', ' KIADB Complex   Landmark - Opp to ITPL\r\n', '560066', 'ITPL\r\n', 'Bangalore\r\n', 'Mukundan - 9739179256\r\n', '6:30 to 22:00\r\n', 'SUNDAY 13:00\r\n'),
(132, 'Maruthi Enterprises\r\n', '#10  Bettur Bus Stop Kadugodi Landmark - Near Bettur Bus Stop\r\n', '560067', 'Kadugodi\r\n', 'Bangalore\r\n', 'Girish - 8970375557\r\n', '7:00 to 22:00\r\n', 'All Days Including Sunday\r\n'),
(133, 'Bakery n Joy\r\n', ' 6th Cross Mahadevapura Post Raj Palya Bus Stop Landmark - \r\n', '560046', 'Mahadevapura\r\n', 'Bangalore\r\n', 'Vinod - 9742610600\r\n', '5:00 to 22:00\r\n', 'All Days Including Sunday\r\n'),
(134, 'Srinivasa Stores\r\n', ' Graphite India Road  Manikadirappa Layout, Hoodi Landmark - Near Bhagini Restaurant\r\n', '560048', 'Manikadirappa Layout\r\n', 'Bangalore\r\n', 'Maruthi - 9886855328\r\n', '6:00 to 21:00\r\n', 'All Days Including Sunday\r\n'),
(135, 'Sri Nandi Medicals\r\n', '#120/A BMTC Complex EPIP Industrial Area  Landmark - Near Vydehi Hospital, BMTC Bus Stop\r\n', '560056', 'ITPL\r\n', 'Bangalore\r\n', 'Amarnatha Reddy - 9900199241\r\n', '8:00 to 21:00\r\n', 'All Days Including Sunday\r\n'),
(136, 'Ramesh Xerox\r\n', '#127 White Field Road, Mahadevapura Road   Landmark - Opp to BESCOM/SBI/POST Office\r\n', '560048', 'Mahadevapura\r\n', 'Bangalore\r\n', 'Ramesh C - 9972278561\r\n', '9:00 to 19:00\r\n', 'All Days Including Sunday\r\n'),
(137, 'Manjunatha Stores\r\n', ' White Field Road  Narayana Pura, Dooravani Nagar Post Landmark - Kavya Bar/Honda Show Room\r\n', '560016', 'Dooravani Nagar\r\n', 'Bangalore\r\n', 'Pradeep - 8123550078\r\n', '8:30 to 23:30\r\n', 'SUNDAY Upto 21:00\r\n'),
(138, 'The Mobile World\r\n', '   Dooravani Nagar Post Landmark - Opp to KR Puram Railway Station\r\n', '560016', 'KR Puram\r\n', 'Bangalore\r\n', 'Imran - 9035256177\r\n', '8:00 to 22:00\r\n', 'All Days Including Sunday\r\n'),
(139, 'Megha Foot Wear(House and Shop Same)\r\n', '#1 14th Cross Old Police Station Road Maruthi Nagar, Chandralayout Landmark - Siddaganga School Main Road/SBI ATM\r\n', '560073', 'Maruthi Nagar\r\n', 'Bangalore\r\n', 'SR Manjegowda - 9902248704\r\n', '9:30 to 22:00\r\n', 'All Days Including Sunday'),
(140, 'Daren Industrial Accessories\r\n', '#11/5 3rd Main Industrial Estate Rajajinagar Landmark - Behind ABB Building\r\n', '560010', 'Rajajinagar\r\n', 'Bangalore\r\n', 'Mohsin - 9886241170\r\n', '9:00 to 20:00\r\n', 'All Days Including Sunday\r\n'),
(141, 'Durga Parameshwari Condiments\r\n', '#15 72nd Cross 5TH BLOCK Rajajinagar Landmark - Next to the Corporation Community Hall and Rajkumar Glass House\r\n', '560010', 'Rajajinagar\r\n', 'Bangalore\r\n', 'Shivaram K - 7259724038\r\n', '7:00 to 21:30\r\n', 'All Days Including Sunday\r\n'),
(142, 'Srinidhi Enterprises\r\n', '#391 57th Cross, 12th Main 3rd Block, Bhashyam Circle Rajajinagar Landmark - Opp to More Super Market\r\n', '560010', 'Rajajinagar\r\n', 'Bangalore\r\n', 'Subhash - 9945775828\r\n', '9:30 to 21:30\r\n', 'All Days Including Sunday\r\n'),
(143, 'Uttara Karnataka Home Foods\r\n', '#955 12th Main 3rd Block Rajajinagar Landmark - Near ESI Signal\r\n', '560010', 'Rajajinagar\r\n', 'Bangalore\r\n', ' - 9845630585\r\n', '10:30 to 15:00 17:30 to 22:00\r\n', 'All Days Including Sunday\r\n'),
(144, 'Kalidasa Enterprises\r\n', '#81/A 32nd Cross 2nd Block Rajajinagar Landmark - Opp to Basaveshwara College\r\n', '560010', 'Rajajinagar\r\n', 'Bangalore\r\n', 'Gururaj - 8147777929\r\n', '9:00 to 22:00\r\n', 'All Days Including Sunday\r\n'),
(145, 'Srinidhi Xerox\r\n', '#672 MKK Road 2nd Block Rajajinagar Landmark - Opp Navarang Bus Stop\r\n', '560010', 'Rajajinagar\r\n', 'Bangalore\r\n', 'HC Rajashekar - 9945171351/08023325887\r\n', '9:30 to 20:30\r\n', 'Sunday 13:00\r\n'),
(146, 'Nandini Milk Parlour\r\n', ' 11th Cross, 19th Main 1st Block Rajajinagar Landmark - Opp to Benaka Party Hall\r\n', '560010', 'Rajajinagar\r\n', 'Bangalore\r\n', 'Kiran - 9845464417\r\n', '5:00 to 22:00\r\n', 'All Days Including Sunday\r\n'),
(147, 'Brahmalingeshwara Store\r\n', '#107 8th Main Road 6th Phase, 1st Stage Basaveshwaranagar Landmark - Near Carmel College\r\n', '560044', 'Basaveshwaranagar\r\n', 'Bangalore\r\n', 'Ramesh - 9141368686\r\n', '7:30 to 22:15\r\n', 'All Days Including Sunday\r\n'),
(148, 'Sri Vinayaka ICE Cream and Condiments\r\n', '#71 2nd Stage 3rd Block Thimmayya Layout, Basaveshwaranagar Landmark - Gangamma Thimmayya Convention Hall\r\n', '560079', 'Basaveshwaranagar\r\n', 'Bangalore\r\n', 'Krishna - 9980927770\r\n', '5:30 to 22:30\r\n', 'All Days Including Sunday\r\n'),
(149, 'Ratna Condiments\r\n', '#3123 14th Main Road  RPC Layout, Attiguppe, Vijayanagar Landmark - Water Tank\r\n', '560040', 'Vijayanagar\r\n', 'Bangalore\r\n', 'BR Babu - 7829942729\r\n', '4:30 to 22:30\r\n', 'SUNDAY HOLIDAY\r\n'),
(150, 'Devi Shree Sweets and Condiments\r\n', '#239 MYSORE ROAD  Bapujinagar Landmark - Behind Beereshwara Temple, Near Gaali Anjaneya Temple/Opp to Hema Wines\r\n', '560026', 'Bapujinagar\r\n', 'Bangalore\r\n', 'Ratnakar Shetty - 9141321215/8123101215\r\n', '5:00 to 22:30\r\n', 'All Days Including Sunday\r\n'),
(151, 'Sri Balaji Condiments\r\n', '#1/1 Nehru Road New Guddadahally Mysore Road Landmark - Behind Veeranjaneya Swamy Temple\r\n', '560026', 'New Guddadahally\r\n', 'Bangalore\r\n', 'Naresh Kumar - 9686332944\r\n', '6:00 to 14:00, 16:30 to 22:00\r\n', 'All Days Including Sunday\r\n'),
(152, 'Karnataka Tea Stall\r\n', ' Mysore Road, Toll Gate   Landmark - Near Goapalan Mall\r\n', '560026', 'Mysore Road\r\n', 'Bangalore\r\n', 'Haris K/Karim - 9036403762/948063835\r\n', '5:00 to 20:00\r\n', 'All Days Including Sunday\r\n'),
(153, 'Kalyani Stores(Home cum Shop)(24x7 Service Ready)\r\n', '#(Old)120/98/2(New) Mysore Road   Landmark - Near Vinayaka Theatre\r\n', '560018', 'Mysore Road\r\n', 'Bangalore\r\n', 'Aravind Kumar - 9880903549\r\n', '8:00 to 22:00\r\n', 'All Days Including Sunday\r\n'),
(154, 'Nunu Bakeries\r\n', '  Bamboo Bazar Kalasipalya, KR Market Landmark - Opp to Pradeep Theatre\r\n', '560002', 'KR Market\r\n', 'Bangalore\r\n', 'Yunus/Rahim - 7676116698/8762205300\r\n', '4:30 to 22:00\r\n', 'SUNDAY 10:00 to 14:00\r\n'),
(155, 'Rajeshwari Condiments\r\n', ' Kalasipalya Main Road   Landmark - Opp to Aiyappa Temple\r\n', '560002', 'Kalasipalya\r\n', 'Bangalore\r\n', 'Eshu - 9008828488\r\n', '5:00 to 22:00\r\n', 'All Days Including Sunday\r\n'),
(156, 'Prabhath Typing Centre\r\n', '#233 Prabhath Complex, #8   Landmark - Opp to Bhumika Theatre or Old States Theatre\r\n', '560009', 'Avenue Road\r\n', 'Bangalore\r\n', 'Achuta - 9242421334\r\n', '10:30 to 20:00\r\n', 'SUNDAY 13:00\r\n'),
(157, 'Ramesh Stores\r\n', '#154 RT Street  Balepet Cross Landmark - Jain Temple\r\n', '560053', 'Balepet\r\n', 'Bangalore\r\n', 'Nagendra KR - 9886396425\r\n', '6:00 to 21:30\r\n', 'All Days Including Sunday\r\n'),
(158, 'Sridhar Stores\r\n', '#74/75 Cotton Pet Main Road   Landmark - Opp to Vandana Hotel or Cycle Shop\r\n', '560053', 'Cotton Pet\r\n', 'Bangalore\r\n', 'Parvatamma/Saroja - 9886519352\r\n', '7:00 to 23:00\r\n', 'All Days Including Sunday\r\n'),
(159, 'Brahmalingeshwara Condiments\r\n', '#31 7th Main, 8th Cross  Sampangirama Nagar Landmark - Geo Hotel/Old Police Station\r\n', '560027', 'Sampangirama nagar\r\n', 'Bangalore\r\n', 'Ranjit Shetty - 9611402520\r\n', '6:30 To 21:30\r\n', 'All Days Including Sunday\r\n'),
(160, 'Sri Venkateshwara Stores(24x7) Service Ready\r\n', '#217 1st Main Road, 8th Cross  Sampangirama Nagar Landmark - Wood Lands Hotel Road\r\n', '560027', 'Sampangirama nagar\r\n', 'Bangalore\r\n', 'Srinath N - 9632512868\r\n', '8:00 to 22:00\r\n', 'All Days Including Sunday\r\n'),
(161, 'Kishor Copiers\r\n', '#31 CCR Building Karagappa Garden, Mission Road Sampangirama Nagar Landmark - \r\n', '560027', 'Sampangirama nagar\r\n', 'Bangalore\r\n', 'CG Manohar - 9535158355\r\n', '9:30 to 20:00\r\n', 'SUNDAY Half Day\r\n'),
(162, 'Keertana Communications\r\n', '#17 2nd Cross, 2nd Main CKC Garden  Landmark - Suzuki Service Centre/Foundation House\r\n', '560027', 'CKC Garden\r\n', 'Bangalore\r\n', 'V Krishnappa - 9845109848\r\n', '9:30 to 21:30\r\n', 'All Days Including Sunday\r\n'),
(163, 'Deepika Enterprises\r\n', ' 1st Cross RR Market Rajaram Mohan Roy Extension, KH Road Landmark - Near Cancer Hospital\r\n', '560027', 'CKC Garden\r\n', 'Bangalore\r\n', 'Nagaraj - 9845181651\r\n', '9:00 to 21:00\r\n', 'All Days Including Sunday\r\n'),
(164, 'Manjunatha juice & condiments\r\n', '#4 2nd cross C.K.C garden, sudhama nagar, Landmark - Near Cancer Hospital\r\n', '560027', 'Sudhamanagar\r\n', 'Bangalore\r\n', 'saleem - 9742701040\r\n', '5.30 to 22.00\r\n', 'SUNDAY Upto 16:00\r\n'),
(165, 'Orion Land\r\n', '#30/10 1st cross, jc road, near mahaveerajain college  Landmark - opp total petrol bunk/mahaveer jain college \r\n', '560027', 'Sudhamanagar\r\n', 'Bangalore\r\n', 'Shaharban  - 9986100653\r\n', '8.00 to 21.00\r\n', 'All Days Including Sunday\r\n'),
(166, 'Sri Mookambika Condiments\r\n', ' Outer Ring Road  Devarabeesanahally Landmark - Near Sakra World Hospital\r\n', '560103', 'Devarabeesanahally\r\n', 'Bangalore\r\n', 'Sujay Shetty - 9743629255\r\n', '5.00 to 22.30\r\n', 'SUNDAY upto 15:00\r\n'),
(167, 'Patel Milk Parlour\r\n', ' 2nd Cross Kariamma Agrahara, Bellandur HAL Layout Landmark - Near Nuhorizon College or Next to Punjabi Dhaba\r\n', '560103', 'Bellandur\r\n', 'Bangalore\r\n', 'Iqbal - 9980429568\r\n', '6:00 to 22:30\r\n', 'All Days Including Sunday\r\n'),
(168, 'Thimmaraya Swamy Stores\r\n', '  Marathally Outer Ringroad Kadubeesanahally Landmark - Next to Indianoil Petrol Bunk\r\n', '560103', 'Kadubeesanahally\r\n', 'Bangalore\r\n', 'Munireddy - 9448800828\r\n', '5:30 to 23:00\r\n', 'SUNDAY 13:00\r\n'),
(169, 'Athithi Condiments\r\n', ' Manjunatha Reddy Building 1st Main Anand Nagar Marathally Bridge Landmark - Opp to Kalamandir\r\n', '560037', 'Marathally\r\n', 'Bangalore\r\n', 'Gopal Pujari - 9901062220\r\n', '8:00 to 20:00\r\n', 'All Days Including Sunday\r\n'),
(170, 'Renuka General Stores\r\n', ' Asta Lakshmi Temple Road Madhura Nagar, 2nd Stage Vartur Landmark - Govt Student Hostel\r\n', '560087', 'Madhura Nagar\r\n', 'Bangalore\r\n', 'Nagendra - 9900418072\r\n', '6:00 to 21:00\r\n', 'SUNDAY HOLIDAY\r\n'),
(171, 'Plaza Food Court\r\n', '#102/2 Narayana Reddy Building Outer Ringroad Doddanekkundi Landmark - Near BBMP Office or Plaza Super Market\r\n', '560037', 'Doddanekkundi\r\n', 'Bangalore\r\n', 'Abdul Khadar - 9036571579\r\n', '7:30 to 22:30\r\n', 'Sunday Close\r\n'),
(172, 'Jaswanth Cool and Hot Point\r\n', ' Near MTB Outer Ring road  Doddanekkundi Landmark - Opp to EMC2 Square\r\n', '560037', 'Doddanekkundi\r\n', 'Bangalore\r\n', 'Shivareddy - 9686312220\r\n', '9:30 to 22:30\r\n', 'SUNDAY 10:30 to 14:00\r\n'),
(173, 'Krupa Enterprises\r\n', '#3 Kantharaj Building, 1st Main, 2nd Cross Mahadevapura Saraswathi Nagar Landmark - Near Maheshwari Temple\r\n', '560048', 'Mahadevapura\r\n', 'Bangalore\r\n', 'Boby Tony - 9448122679\r\n', '11:00 to 21:30(15:30 to 16:30)\r\n', 'All Days Including Sunday\r\n'),
(174, 'Choice Bakery\r\n', ' Ramappa Complex Outer Ringroad Mahadevapura Landmark - Mahadevapura Bus Stop\r\n', '560048', 'Mahadevapura\r\n', 'Bangalore\r\n', 'Vasu - 7760889925\r\n', '6:00 to 22:00\r\n', 'SUNDAY 9.00 to 19.00\r\n'),
(175, 'Sweet and Spicy\r\n', '  Near Karumariyamma Temple, Water Tank Road A Narayanaoura Landmark - Karu Mariyamma Temple, Near KR Puram Railway Station\r\n', '560016', 'KR Puram\r\n', 'Bangalore\r\n', 'P Mustafa - 8748842425\r\n', '6:00 to 22:00\r\n', 'SUNDAY Half Day\r\n'),
(176, 'Revana Sidda Tea Stall\r\n', ' Old Madras Road Udayanagar, Near Muttu mariyamma Temple Tin Factory Bus Stand Landmark - Salarpuria Apartments/TTK\r\n', '560016', 'Tin Factory\r\n', 'Bangalore\r\n', 'Bala - 9945308720\r\n', '7:00 to 18:00\r\n', 'All Days Including Sunday\r\n'),
(177, 'Manasa Enterprises\r\n', '#248/13  3rd Block, Behind Ramamandir Play Ground Rajajinagar Landmark - Ramamandir\r\n', '560010', 'Rajajinagar\r\n', 'Bangalore\r\n', 'Ganga - 9448539739\r\n', '10:30 to 20:00\r\n', 'All Days Including Sunday\r\n'),
(178, 'Sri Manjunath Sweets\r\n', '#1 10th Main Road Shivanagar Rajajinagar Landmark - Opp to NRS Power House\r\n', '560010', 'Rajajinagar\r\n', 'Bangalore\r\n', 'Manjunath - 9902777477\r\n', '8:00 to 22:45\r\n', 'All Days Including Sunday\r\n'),
(179, 'Updupi Sri Krishna Sweets and Condiments\r\n', ' 9TH MAIN ROAD, West of Chord Road  Mahalakshmipuram Landmark - Opp to Bata Showroom\r\n', '560086', 'Mahalakshmi Layout\r\n', 'Bangalore\r\n', 'Suman/Teja - 9686482935/8105580357\r\n', '5:30 TO 21:00\r\n', 'All Days Including Sunday\r\n'),
(180, 'Surabhi Condiments\r\n', '#85/B 13th Cross  Mahalakshmi Layout Landmark - Near Venkateshwara Temple/Karumariamma Arch\r\n', '560086', 'Mahalakshmi Layout\r\n', 'Bangalore\r\n', 'Lokesh - 9742023163\r\n', '11:00 to 23:00\r\n', 'All Days Including Sunday\r\n'),
(181, 'Varamahalakshmi Provision Stores\r\n', '#19 1st Cross  Mahalakshmi Layout Landmark - Mahalakshmi Layout Bus Stop\r\n', '560086', 'Mahalakshmi Layout\r\n', 'Bangalore\r\n', 'LG Krishnegowda - 8880611100\r\n', '7:00 to 23:00\r\n', 'All Days Including Sunday\r\n'),
(182, 'Lakshmi Janardhana Iyengar Bakery\r\n', '#145 1st Main Road  Shankaranagar, Mahalakshmi Layout Landmark - Opp to Axis Bank ATM\r\n', '560096', 'Shankaranagar\r\n', 'Bangalore\r\n', 'Chandra Shankar - 8151968407\r\n', '8:00 to 21:00\r\n', 'All Days Including Sunday\r\n'),
(183, 'Sai Baba Provision Stores\r\n', '#92  Ramakrishna Nagar Nandini Layout Landmark - Near Nandini Bakery\r\n', '560096', 'Nandini Layout\r\n', 'Bangalore\r\n', 'Rabindra Mishra - 9535296128\r\n', '6:00 to 14:00, 17:0 to 22:30\r\n', 'All Days Including Sunday\r\n'),
(184, 'Sri Lakshmi Janardhana Bakery and Sweets\r\n', '#27/17 16th Main Road 4th Block Nandini Layout Landmark - Near Ring Road/80F Bus Last Stop\r\n', '560096', 'Nandini Layout\r\n', 'Bangalore\r\n', 'HS Mallegowds - 9945617549\r\n', '6:30 to 22:30\r\n', 'All Days Including Sunday\r\n'),
(185, 'Mathrushri Bakery\r\n', '#56/1 Ringroad  Narasimha Layout, Laggere Bridge Landmark - Next to Puncher Shop\r\n', '560058', 'Laggere Bridge\r\n', 'Bangalore\r\n', 'Nagaraj - 7353876421\r\n', '5:30 to 23:00\r\n', 'All Days Including Sunday\r\n'),
(186, 'Happy Condiments\r\n', ' Police Road, BVK Iyengar Road Cross City Market  Landmark - Behind Mamata Bar\r\n', '560053', 'BVK Iyengar Road\r\n', 'Bangalore\r\n', 'Sharath/Sindo - 9908722104/9739213696\r\n', '5:30 to 22:00\r\n', 'Sunday Close\r\n'),
(187, 'Nandini Stores\r\n', '#177/1, S-4 BT Street Arelepet Avenue Road Cross Landmark - From Market Near Ganesh Bhandar and Church\r\n', '560002', 'Avenue Road\r\n', 'Bangalore\r\n', 'Mahendra G - 7406264596\r\n', '5:30 to 23:00\r\n', 'All Days Including Sunday\r\n'),
(188, 'Brahmalingeshwara Sweets and Condiments\r\n', '#205 Cubbon Pet Main Road   Landmark - Near Ulsoor Police Station/Amulya Sagar Hotel\r\n', '560002', 'Cubbon Pet\r\n', 'Bangalore\r\n', 'Ravi - 9164567201\r\n', '5:00 to 11:00\r\n', 'All Days Including Sunday\r\n'),
(189, 'Gurushree Bakery and Condiments\r\n', '#17 16th Cross Malagala, Nagarbhavi Ringroad  Landmark - Near Deepashree Hospital\r\n', '560091', 'Nagarbhavi\r\n', 'Bangalore\r\n', 'Ganesh - 9980760858\r\n', '5:30 to 22:00\r\n', 'All Days Including Sunday\r\n'),
(190, 'Nandini Milk parlour\r\n', ' Magadi Main Road, Sumanahally Signal   Landmark - Under Bridge, Sumanahally Signal\r\n', '560091', 'Sumanahally\r\n', 'Bangalore\r\n', 'Kantaraju - 9902549407\r\n', '4:30 to 13:00 17:00 to 22:00\r\n', 'All Days Including Sunday\r\n'),
(191, 'Karunya Condiments\r\n', ' Pipeline Road  Chowdeshwari Nagar Circle Landmark - CMH Bar\r\n', '560073', 'Chowdeshwary Nagar\r\n', 'Bangalore\r\n', 'Lakshman/Krishna - 9980066074/9902341787\r\n', '6:00 to 22:00\r\n', 'All Days Including Sunday\r\n'),
(192, 'Kavyashree Juice Centre\r\n', '#103 1st Main, 1st Cross  Kamalanagar Market Landmark - Flower Market\r\n', '560079', 'Kamalanagar Market\r\n', 'Bangalore\r\n', 'Ashok - 9972334463\r\n', '8:00 to 23:00\r\n', 'All Days Including Sunday\r\n'),
(193, 'Mahadeshwara Juice and Condiments\r\n', '#13/14 1st Main Road, 2nd Block  Nandini Layout/Jarakbande Kaval Landmark - Near Rajkumar Smaraka or Kanteerava Studio Signal\r\n', '560096', 'Nandini Layout\r\n', 'Bangalore\r\n', 'Lokesh - 9535575350\r\n', '6:00 to 22:30\r\n', 'All Days Including Sunday\r\n'),
(194, 'Asha Bakeries\r\n', '#2/1   Goragunte Palya Landmark - Opp to Reliance Petrol Bunk\r\n', '560022', 'Goragunte Palya\r\n', 'Bangalore\r\n', 'Shashikumar - 8147715343\r\n', '5:45 to 22:00\r\n', 'All Days Including Sunday\r\n'),
(195, 'Sri Brahmalingeshwara Condiments\r\n', ' MES Road, Outer Ring Road Near BEL Circle Jalahally Landmark - Opp Bhaskar Wines\r\n', '560013', 'Jalahally\r\n', 'Bangalore\r\n', 'Pandu - 9902658527\r\n', '6:00 to 22:00\r\n', 'All Days Including Sunday\r\n'),
(196, 'Sri Lakshmi Stores(24 Hours Service)\r\n', ' Radamma Building, Kodige Hally Mainraod Bhadrappa layout Nagashetty Hally Landmark - Near SBI next to Abhilash Bakery\r\n', '560094', 'Nagashetty Hally\r\n', 'Bangalore\r\n', 'K Lakshmamma/Srinivas - 9900884701\r\n', '7:00 to 21:00\r\n', 'All Days Including Sunday\r\n'),
(197, 'Manjunath Condiments\r\n', ' Service Road Nagawara Signal  Landmark - Outer Ring Road, Nagawara Signal\r\n', '560077', 'Nagawara\r\n', 'Bangalore\r\n', 'Komal - 9164601248\r\n', '7:30 to 21:30\r\n', 'All Days Including Sunday\r\n'),
(198, 'Friends Bakery\r\n', ' 2nd Cross Kalyananagar Post HRBR Layout Landmark - Hennur Bus Depot\r\n', '560043', 'HRBR Layout\r\n', 'Bangalore\r\n', 'Suhail - 8892285069\r\n', '7:00 to 22:00\r\n', 'SUNDAY upto 13:00\r\n'),
(199, 'Nandini Parlour\r\n', '#20 7th Cross, Nanjappa Garden Babusa Palya Kalyan Nagar Landmark - Opp to Pavan Apartment or Bijith Plaza\r\n', '560043', 'Babusa Palya\r\n', 'Bangalore\r\n', 'Madusudhan B - 8123544003/9743820999\r\n', '6:30 to 22:00\r\n', 'All Days Including Sunday\r\n'),
(200, 'Brahmalingeshwara Condiments\r\n', ' 1st A Cross  SR Layout, Vijinapura Landmark - FCI Godown\r\n', '560016', 'Vijinapura\r\n', 'Bangalore\r\n', 'Shantharaju - 9741401898\r\n', '5:00 to 22:00\r\n', 'All Days Including Sunday\r\n'),
(201, 'Petrol Bunk Tea Shop\r\n', ' Horamavu Main Road  Banaswadi Landmark - Opp to Ganga Steel\r\n', '560043', 'Banaswadi\r\n', 'Bangalore\r\n', 'Madhusudan - 9980281193\r\n', '4:30 to 22:15\r\n', 'All Days Including Sunday\r\n'),
(202, 'Manjunath Tea Stall\r\n', ' 100 Ft Ring Road BSK 3rd Stage Hosakere Hally Landmark - Opp to PES College\r\n', '560085', 'Hosakere Hally\r\n', 'Bangalore\r\n', 'Sharath - 9008324424\r\n', '4:00 to 22:30\r\n', 'SUNDAY Upto 16:00\r\n'),
(203, 'Sri Brahmalingeshwara Condiments\r\n', '#283 76th Cross, 12th A Main 6TH BLOCK  Rajajinagar Landmark - Opp to BESCOM/Mayura Restaurant\r\n', '560085', 'Rajajinagar\r\n', 'Bangalore\r\n', 'Manjunath - 9379881973\r\n', '6:00 to 22:30\r\n', 'All Days Including Sunday\r\n'),
(204, 'Gayathri Sweets\r\n', ' 1st Cross, Magadi Road  Vidyaranya Nagar Landmark - Opp to Banashankari Temple and Near Prasanna Theatre\r\n', '560023', 'Vidyaranya Nagar\r\n', 'Bangalore\r\n', 'Chidambaram - 7795233684\r\n', '8:00 to 21:30\r\n', 'All Days Including Sunday\r\n'),
(205, 'Manjunath Condiments\r\n', '#59/11 SSI Area 5TH BLOCK Rajajinagar Landmark - Near Andhra Bank/Gopalpuram Bus Stop/SJR School\r\n', '560010', 'Rajajinagar\r\n', 'Bangalore\r\n', 'Umesh - 8553337696\r\n', '6:30 To 21:30\r\n', 'All Days Including Sunday\r\n'),
(206, 'Sri Manjunath Condiments\r\n', '#195 2nd Main  Ramachandrapuram Landmark - Near Sujatha Theatr Arch\r\n', '560021', 'Ramachandrapuram\r\n', 'Bangalore\r\n', 'HV Raghavendra - 9481427072\r\n', '9:00 to 22:00\r\n', 'All Days Including Sunday\r\n');
INSERT INTO `tbl_sdcs_offices` (`office_id`, `office_name`, `office_address`, `office_pincode`, `office_area_name`, `office_city_name`, `office_contact_details`, `office_available_time`, `office_opening_days`) VALUES
(207, 'Vinu Bakery\r\n', ' 5th Main, 5th Cross  Okalipuram Landmark - Next to Aiyappa Temple/RR Kalyanamantap\r\n', '560021', 'Okalipuram\r\n', 'Bangalore\r\n', 'Suresh - 9008716825\r\n', '5:00 to 22:00\r\n', 'All Days Including Sunday\r\n'),
(208, 'Raghavendra Condiments\r\n', ' Platform Road Krishna Flour Mill Sheshadhri Puram Landmark - Krishna Flour Mill\r\n', '560020', 'Sheshadripuram\r\n', 'Bangalore\r\n', 'Vishwanatha - 8105172230\r\n', '4:30 to 21:00\r\n', 'All Days Including Sunday\r\n'),
(209, 'Kiran Stores\r\n', ' 11th Cross, Sampige Road  Malleshwaram Landmark - Opp to Mohan Bhandar Next to Mobile Mane\r\n', '560003', 'Malleshwaram\r\n', 'Bangalore\r\n', 'Satya Narayan - 9036570983\r\n', '10:30 to 21:00\r\n', 'All Days Including Sunday\r\n'),
(210, 'Ananda Rao News Agent(Any Number of Courriers)\r\n', '#216 13th Cross, Sampige Road  Malleshwaram Landmark - Opp to Mc Donalds\r\n', '560003', 'Malleshwaram\r\n', 'Bangalore\r\n', 'Gautam - 9886455534/080-41280896\r\n', '6:30 to 21:00\r\n', 'All Days Including Sunday\r\n'),
(211, 'Harsha Bakery\r\n', '#14 8th Cross HMT Main Road Dewanarapalya Landmark - Near St Joseph Church/IISC Gate\r\n', '560014', 'HMT Main Road\r\n', 'Bangalore\r\n', 'Preman - 9986252038\r\n', '6:30 to 22:00\r\n', 'All Days Including Sunday\r\n'),
(212, 'Sagar Stationaries\r\n', ' 13th Cross Bashyam Circle Sadashivanagar Landmark - Near Shanthi Sagar\r\n', '560080', 'Sadashivanagar\r\n', 'Bangalore\r\n', 'Panduranganayak - 9845016863\r\n', '7:00 to 22:00\r\n', 'All Days Including Sunday\r\n'),
(213, 'Mayura Juice Centra\r\n', '#17 6th Cross Jabbar Block Vayalikaval Landmark - Opp to Karnataka Bank or Vyalikaval Police Station\r\n', '560003', 'Vayalikaval\r\n', 'Bangalore\r\n', 'Shekar Babu - 8792851832\r\n', '6:00 to 21:00\r\n', 'All Days Including Sunday\r\n'),
(214, 'Marikamba Condiments\r\n', '#106 Anjaneya Swamy temple Complex Sheshadri Puram Main Road Palace Guttally Circle Landmark - Opp to Govt Hospital\r\n', '560020', 'Sheshadripuram\r\n', 'Bangalore\r\n', 'Lokesh K Nayak - 9901844260\r\n', '5:30 TO 21:00\r\n', 'SUNDAY 13:00\r\n'),
(215, 'Sri Vinayaka Condiments\r\n', '#82 1st Main Sheshadri Puram  Landmark - Opp to SBI Bank, Kumara Krupa Branch\r\n', '560020', 'Sheshadripuram\r\n', 'Bangalore\r\n', 'Ravi - 9449669897\r\n', '6:00 to 22:30\r\n', 'SUNDAY 13:00\r\n'),
(216, 'Sri Krishna Stores\r\n', '#207 1st Main Sheshadri Puram  Landmark - Near Sheshadripuram Circle\r\n', '560020', 'Sheshadripuram\r\n', 'Bangalore\r\n', 'Prabhakar KR - 94811472618\r\n', '9:00 to 14:30, 16:30 to 21:30\r\n', 'All Days Including Sunday\r\n'),
(217, 'Sri Manjunatha Bakery and Sweets\r\n', '#474 Chowdamma Arcade, 2nd Cross 2nd Block Tumkur Main Road, Peenya 1st Stage Landmark - Opp High Way Pillar Number 19\r\n', '560058', 'Peenya\r\n', 'Bangalore\r\n', 'Sowmya - 8762735672\r\n', '8:30 to 21:30\r\n', 'Sunday 4:30 to 13:00\r\n'),
(218, 'Dharmasthala Bakery and Sweets\r\n', '  Tumkur Road T Dasarahally Landmark - Opp to Dasarahally Metro Bus Stop\r\n', '560057', 'Peenya Dasarahally\r\n', 'Bangalore\r\n', 'Basavaraju - 9945866123\r\n', '7:00 to 23:00\r\n', 'All Days Including Sunday\r\n'),
(219, 'Sri Venkateshwara Bakery\r\n', '#17 TVS Cross KIADB Complex Peenya Landmark - TVS Cross\r\n', '560058', 'Peenya\r\n', 'Bangalore\r\n', 'Srinivas/Ajith - 9008465662/8147496539\r\n', '6:00 to 22:30\r\n', 'All Days Including Sunday\r\n'),
(220, NULL, NULL, NULL, 'Kakkanad', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sdcs_receiver_details`
--

CREATE TABLE IF NOT EXISTS `tbl_sdcs_receiver_details` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `booking_id` bigint(20) NOT NULL,
  `receiver_name` varchar(256) DEFAULT NULL,
  `receiver_address` text,
  `receiver_landmark` text,
  `receiver_pincode` text,
  `receiver_phone` varchar(20) DEFAULT NULL,
  `receiver_mail` varchar(256) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sdcs_sender_details`
--

CREATE TABLE IF NOT EXISTS `tbl_sdcs_sender_details` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `booking_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `sender_name` text,
  `sender_address` text,
  `sender_landmark` text,
  `sender_pincode` text,
  `sender_phone` text,
  `sender_email` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sdcs_transaction`
--

CREATE TABLE IF NOT EXISTS `tbl_sdcs_transaction` (
  `transaction_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `booking_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `payment_transaction_number` text,
  `payment_transaction_status` varchar(256) DEFAULT NULL,
  `payment_gateway` varchar(256) DEFAULT 'Direct Pay',
  `country` varchar(10) DEFAULT 'IND',
  `currency` varchar(10) NOT NULL DEFAULT 'INR',
  `order_no` varchar(256) DEFAULT NULL,
  `amount` double NOT NULL,
  `transaction_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`transaction_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sdcs_user`
--

CREATE TABLE IF NOT EXISTS `tbl_sdcs_user` (
  `user_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(256) DEFAULT NULL,
  `mobile_number` varchar(15) DEFAULT NULL,
  `email_address` varchar(256) DEFAULT NULL,
  `access_code` varchar(256) DEFAULT NULL,
  `last_login` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `account_status` int(11) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
