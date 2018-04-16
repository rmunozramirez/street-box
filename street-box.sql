-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 16-04-2018 a las 16:35:21
-- Versión del servidor: 5.7.19
-- Versión de PHP: 7.1.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `street-box`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subtitle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `excerpt` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `about_category` text COLLATE utf8mb4_unicode_ci,
  `status` enum('active','inactive','on_hold') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_featured` tinyint(1) NOT NULL DEFAULT '0',
  `in_menu` tinyint(1) NOT NULL DEFAULT '1',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `title`, `slug`, `subtitle`, `excerpt`, `about_category`, `status`, `image`, `is_featured`, `in_menu`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'Category One', 'category-one', 'Subtitle Category One', 'This is the excerpt of the Category one', 'This is the description of the Category one', 'active', 'bmw.jpg', 1, 1, NULL, '2018-04-15 19:18:42', '2018-04-15 19:18:42'),
(2, 'Category Two', 'category-two', 'Subtitle Category Two', 'This is the excerpt of the Category Two', 'This is the description of the Category Two', 'active', 'concerto.jpg', 1, 1, NULL, '2018-04-15 19:18:42', '2018-04-15 19:18:42'),
(3, 'Category Three', 'category-three', 'Subtitle Category Three', 'This is the excerpt of the Category Three', 'This is the description of the Category Three', 'inactive', 'cha-cha-cha.jpg', 0, 0, NULL, '2018-04-15 19:18:42', '2018-04-15 19:18:42'),
(4, 'Category Four', 'category-four', 'Subtitle Category Four', 'This is the excerpt of the Category Four', 'This is the description of the Category Four', 'inactive', 'bolliwood.jpg', 0, 0, NULL, '2018-04-15 19:18:42', '2018-04-15 19:18:42'),
(5, 'Category Five', 'category-five', 'Subtitle Category Five', 'This is the excerpt of the Category Five', 'This is the description of the Category Five', 'inactive', 'berlin.jpg', 0, 0, NULL, '2018-04-15 19:18:42', '2018-04-15 19:18:42');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chanels`
--

CREATE TABLE `chanels` (
  `id` int(10) UNSIGNED NOT NULL,
  `subcategory_id` int(10) UNSIGNED NOT NULL,
  `profile_id` int(10) UNSIGNED NOT NULL,
  `status` enum('active','inactive','on_hold','banned') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'inactive',
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subtitle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `excerpt` text COLLATE utf8mb4_unicode_ci,
  `about_chanel` text COLLATE utf8mb4_unicode_ci,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `video` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_featured` tinyint(1) NOT NULL DEFAULT '0',
  `likes` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `is_testimonial` tinyint(1) NOT NULL DEFAULT '0',
  `web` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `facebook` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `googleplus` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twitter` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linkedin` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `youtube` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `chanels`
--

INSERT INTO `chanels` (`id`, `subcategory_id`, `profile_id`, `status`, `title`, `slug`, `subtitle`, `excerpt`, `about_chanel`, `image`, `video`, `is_featured`, `likes`, `is_testimonial`, `web`, `facebook`, `googleplus`, `twitter`, `linkedin`, `youtube`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 1, 'active', 'Chanel One-one-one', 'chanel-one-one-one', 'Subtitle Chanel One-one-one', 'This is the excerpt of the Chanel One-one-one', 'This is the description of the Chanel One-one-one', 'bmw.jpg', 'bmw.mp4', 1, 10, 0, 'mysite.com', 'youtube.com', 'google.de', 'twitter.com', 'linkedin.com', 'youtube.com', '2018-04-15 19:18:42', '2018-04-15 19:18:42', NULL),
(2, 1, 2, 'active', 'Chanel One-One-Two', 'chanel-one-one-two', 'Subtitle Chanel One-One-Two', 'This is the excerpt of the Chanel One-One-Two', 'This is the description of the Chanel One-One-Two', 'auto-clasico.jpg', NULL, 1, 10, 0, 'mysite.com', 'youtube.com', 'google.de', 'twitter.com', 'linkedin.com', 'youtube.com', '2018-04-15 19:18:42', '2018-04-15 19:18:42', NULL),
(3, 2, 3, 'active', 'Amelies Channel', 'amelies-channel', 'Subtitle Chanel One-two-One', 'This is the excerpt of the Chanel One-two-One', 'Enero de 2012 trajo consigo la creación de su Fundación Maestro Cares, junto a su socio Henry Cárdenas, con la meta de luchar contra las dificultades de viviendas, educación, y salud que enfrentan a los niños huérfanos en los países en desarrollo en Latinoamérica. El 2 de abril de 2014, la organización sin fines de lucro abrió las puertas del orfanato “Niños de Cristo” en La Romana, República Dominicana para albergar a más de 150 niños necesitados. En abril del 2015 se inauguró el segundo hogar “Monsenor Victor Tamayo” en Barranquilla, Colombia, la fundación adoptó el proyecto MABA en Lima, Peru y el 9 de marzo abrió las puertas del nuevo Casa Hogar Alegría en Cacalomacán, México.\r\n\r\nMarc Anthony también anunció una nueva estructura de negocios en abril del 2015 bajo el nombre Magnus Media. Con una división de mercadeo centrada en el entretenimiento para equilibrar el poder y potencial de los grandes creadores de contenidos latinos en los EE.UU. y alrededor del mundo, las unidades operativas incluyen una compañía de manejo de artistas, editora musical, creación de contenido digital, cine y televisión y un sello discográfico. Meses después, Magnus Media estrenó Magnus Sports, una división exclusivamente dedicada a la representación de atletas a nivel mundial.', 'bad-wimpfen.jpg', 'hvhv', 1, 10, 0, 'mysite.com', 'youtube.com', 'google.de', 'twitter.com', 'linkedin.com', 'youtube.com', '2018-04-15 19:18:42', '2018-04-16 13:46:40', NULL),
(4, 2, 4, 'active', 'Chanel One-two-Two', 'chanel-one-two-two', 'Subtitle Chanel One-two-Two', 'This is the excerpt of the Chanel One-two-Two', 'This is the description of the Chanel One-two-Two', 'ballet.jpg', NULL, 1, 10, 0, 'mysite.com', 'youtube.com', 'google.de', 'twitter.com', 'linkedin.com', 'youtube.com', '2018-04-15 19:18:42', '2018-04-15 19:18:42', NULL),
(5, 2, 5, 'active', 'Chanel One-two-Three', 'chanel-one-two-three', 'Subtitle Chanel One-two-Three', 'This is the excerpt of the Chanel One-two-Three', 'This is the description of the Chanel One-two-Three', 'kite.jpg', NULL, 1, 10, 0, 'mysite.com', 'youtube.com', 'google.de', 'twitter.com', 'linkedin.com', 'youtube.com', '2018-04-15 19:18:42', '2018-04-15 19:18:42', NULL),
(6, 1, 6, 'active', 'Chanel two-one-one', 'chanel-two-one-one', 'Subtitle Chanel two-one-one', 'This is the excerpt of the Chanel two-one-one', 'This is the description of the Chanel two-one-one', 'dance.jpg', NULL, 1, 10, 0, 'mysite.com', 'youtube.com', 'google.de', 'twitter.com', 'linkedin.com', 'youtube.com', '2018-04-15 19:18:42', '2018-04-15 19:18:42', NULL),
(7, 1, 7, 'active', 'Chanel Three-one-one', 'chanel-three-one-one', 'Subtitle Chanel Three-one-one', 'This is the excerpt of the Chanel Three-one-one', 'This is the description of the Chanel Three-one-one', 'berlin.jpg', NULL, 1, 10, 0, 'mysite.com', 'youtube.com', 'google.de', 'twitter.com', 'linkedin.com', 'youtube.com', '2018-04-15 19:18:42', '2018-04-15 19:18:42', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `discussions`
--

CREATE TABLE `discussions` (
  `id` int(10) UNSIGNED NOT NULL,
  `profile_id` int(10) UNSIGNED NOT NULL,
  `status` enum('active','inactive','on_hold','banned') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'inactive',
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `body` text COLLATE utf8mb4_unicode_ci,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `likes` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `is_testimonial` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `discussions`
--

INSERT INTO `discussions` (`id`, `profile_id`, `status`, `title`, `slug`, `body`, `image`, `likes`, `is_testimonial`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 3, 'active', 'This is Amelies First Discussions', 'this-is-amelies-first-discussions', 'Ihr Gastgeber stellt sich vor\r\n\r\nFereinhof Täuber - Urlaub auf dem Bauernhof in direkter Waldnähe im schönen Fichtelgebirge.Wir bieten gemütliche Atmosphäre in unseren Unterkünften. Komplett ausgestattetes Ferienhaus mit großer Wohn- und Essküche, Spülmaschine, Waschmaschine vorhanden. Großzügige Dacheschoßferienwohnung mit Bad/Dusche, ebenfalls mit Waschmaschine ausgestattet. Außerdem stehen Ihnen unser Grillplatz mit offener Feuerstelle am Teich, Aufenthaltsraum mit überdachtem Freisitz für gemeinsames Beisammensitzen am Abend an der Bar zur Verfügung. Auch die Kleinsten kommen bei uns nicht zu kurz. Richtig austoben können sich diese im Garten mit Kinderspielplatz, großem Tampolin, Streicheltiere wie Hasen,Katzen und Hühner warten darauf entdeckt zu werden.Täglich frische Eier vom Hof erhältlich.', '1523854858-bad-wimpfen.jpg', 0, 0, '2018-04-16 03:00:58', '2018-04-16 03:00:58', NULL),
(2, 3, 'inactive', 'This is the second Discussion from Amelie', 'this-is-the-second-discussion-from-amelie', 'Hi!<br>\r\n<br>\r\nAre you a fan of podcasts? These audio recordings are hard to index for Google, as it simply cannot listen to them. So in this week\'s Ask Yoast: <strong id=\"yui_3_16_0_ym19_1_1523828892997_7267\">how do you optimize for audio podcasts? </strong>We\'ve rounded up some <strong id=\"yui_3_16_0_ym19_1_1523828892997_8945\">reading material</strong> for you as well so you\'ll be up to speed in no time. Enjoy the rest of your weekend!', '1523855110-berlin.jpg', 0, 0, '2018-04-16 03:05:10', '2018-04-16 03:05:10', NULL),
(3, 6, 'active', 'First Discussion from Miguel', 'first-discussion-from-miguel', '<p>Suchen Sie Entspannung und Ruhe? Bei uns finden Sie einen kinderfreundlichen Hof mit viel Platz und herrlicher Aussicht, Südhanglage, mit Milchkühen, Kälbern, Hasen und Katzen. Besonderheit unseres Hofes ist ein 2007 neu erbauter Milchviehlaufstall mit Melkroboter.\r\n </p><p>\r\nErholen Sie sich bei Wanderungen oder Radtouren in der herrlichen Natur des Frankenwalds, oder entspannen Sie einfach auf unserer Liegewiese oder beim gemütlichen Grillabend an unserem Grillplatz.Für Ihre Kinder haben wir Schaukeln, Rutsche, auf Anfrage Tischtennis und jede Menge Platz zum Spielen.\r\n </p><p>\r\nFreibad, Badesee, Skilift und Langlaufloipen befinden sich in der Nähe, somit ist unser Hof der ideale Ausgangspunkt für Ihre Ferienaktivitäten - egal, zu welcher Jahreszeit!Unser Hof ist zentral gelegen zu den Kreisstädten Kulmbach, Kronach, Hof.</p>', '1523859586-auto-clasico.jpg', 0, 0, '2018-04-16 04:19:46', '2018-04-16 04:20:51', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `likes`
--

CREATE TABLE `likes` (
  `id` int(10) UNSIGNED NOT NULL,
  `reply_id` int(10) UNSIGNED NOT NULL,
  `profile_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `likes`
--

INSERT INTO `likes` (`id`, `reply_id`, `profile_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '2018-04-16 04:30:19', '2018-04-16 04:30:19'),
(2, 1, 4, '2018-04-16 05:03:53', '2018-04-16 05:03:53'),
(3, 2, 3, '2018-04-16 05:08:02', '2018-04-16 05:08:02'),
(4, 3, 6, '2018-04-16 05:08:53', '2018-04-16 05:08:53');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(543, '2014_10_12_000000_create_users_table', 1),
(544, '2014_10_12_100000_create_password_resets_table', 1),
(545, '2018_03_30_114433_create_posts_table', 1),
(546, '2018_03_31_095440_create_postcategories_table', 1),
(547, '2018_03_31_130322_create_subcategories_table', 1),
(548, '2018_03_31_142116_create_categories_table', 1),
(549, '2018_03_31_143733_create_chanels_table', 1),
(550, '2018_04_05_175611_create_roles_table', 1),
(551, '2018_04_06_090602_create_posttags_table', 1),
(552, '2018_04_06_091545_create_posts_posttags_table', 1),
(553, '2018_04_11_155351_create_pages_table', 1),
(554, '2018_04_12_041929_create_profiles_table', 1),
(555, '2018_04_13_143301_create_discussions_table', 1),
(556, '2018_04_14_173121_create_replies_table', 1),
(557, '2018_04_15_093110_create_likes_table', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pages`
--

CREATE TABLE `pages` (
  `id` int(10) UNSIGNED NOT NULL,
  `status` enum('published','programmed','draf') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'published',
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subtitle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `excerpt` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `body` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `pages`
--

INSERT INTO `pages` (`id`, `status`, `title`, `slug`, `subtitle`, `excerpt`, `body`, `image`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'published', 'AGB', 'agb', 'AGB', 'These are the AGBs', 'hier a lot of words', 'bmw.jpg', NULL, '2018-04-15 19:18:42', '2018-04-15 19:18:42'),
(2, 'published', 'Impressum', 'impressum', 'The impressum subtitle', 'These are the excerpt of the impressum', 'These are the details of the impressum', 'berlin.jpg', NULL, '2018-04-15 19:18:42', '2018-04-15 19:18:42'),
(3, 'published', 'Contact', 'contact', 'The Contact subtitle', 'These are the excerpt of Contact page', 'hier a lot of words about how to get in contact', 'concert.jpg', NULL, '2018-04-15 19:18:42', '2018-04-15 19:18:42');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `postcategories`
--

CREATE TABLE `postcategories` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subtitle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `excerpt` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `about_category` text COLLATE utf8mb4_unicode_ci,
  `status` enum('active','inactive','on_hold') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_featured` tinyint(1) NOT NULL DEFAULT '0',
  `in_menu` tinyint(1) NOT NULL DEFAULT '0',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `postcategories`
--

INSERT INTO `postcategories` (`id`, `title`, `slug`, `subtitle`, `excerpt`, `about_category`, `status`, `image`, `is_featured`, `in_menu`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'Postcategory One', 'postcategory-one', 'Subtitle Category One', 'This is the excerpt of the Category one', 'This is the description of the Category one', 'active', 'bmw.jpg', 1, 1, NULL, '2018-04-15 19:18:42', '2018-04-15 19:18:42'),
(2, 'Postcategory Two', 'postcategory-two', 'Subtitle Category Two', 'This is the excerpt of the Category Two', 'This is the description of the Category Two', 'active', 'bolliwood.jpg', 1, 1, NULL, '2018-04-15 19:18:42', '2018-04-15 19:18:42'),
(3, 'Postcategory Three', 'postcategory-three', 'Subtitle Category Three', 'This is the excerpt of the Category Three', 'This is the description of the Category Three', 'inactive', 'concerto.jpg', 0, 0, NULL, '2018-04-15 19:18:42', '2018-04-15 19:18:42');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE `posts` (
  `id` int(10) UNSIGNED NOT NULL,
  `postcategory_id` int(10) UNSIGNED NOT NULL,
  `status` enum('published','programmed','draf') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'published',
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subtitle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `excerpt` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `body` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_featured` tinyint(1) NOT NULL DEFAULT '0',
  `likes` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `published_at` datetime DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `posts`
--

INSERT INTO `posts` (`id`, `postcategory_id`, `status`, `title`, `slug`, `subtitle`, `excerpt`, `body`, `image`, `is_featured`, `likes`, `deleted_at`, `published_at`, `created_at`, `updated_at`) VALUES
(1, 1, 'published', 'Post One', 'post-one', 'Subtitle Category One', 'This is the excerpt of the Category one', 'This is the description of the Category one', 'bmw.jpg', 1, 1, NULL, NULL, '2018-04-15 19:18:42', '2018-04-15 19:18:42'),
(2, 2, 'published', 'Post Two', 'post-two', 'Subtitle Post Two', 'This is the excerpt of the Category TwoTwo', 'This is the description of the Category Two', 'berlin.jpg', 1, 1, NULL, NULL, '2018-04-15 19:18:42', '2018-04-15 19:18:42'),
(3, 2, 'published', 'Post Three', 'post-three', 'Subtitle Category Three', 'This is the excerpt of the Category ThreeThree', 'This is the description of the Category Three', 'cha-cha-cha.jpg', 1, 1, NULL, NULL, '2018-04-15 19:18:42', '2018-04-15 19:18:42'),
(4, 1, 'published', 'Post Four', 'post-four', 'Subtitle Category One', 'This is the excerpt of the Category Four', 'This is the description of the Category Four', 'concert.jpg', 3, 1, NULL, NULL, '2018-04-15 19:18:42', '2018-04-15 19:18:42');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts_posttags`
--

CREATE TABLE `posts_posttags` (
  `id` int(10) UNSIGNED NOT NULL,
  `post_id` int(10) UNSIGNED NOT NULL,
  `posttag_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posttags`
--

CREATE TABLE `posttags` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `posttags`
--

INSERT INTO `posttags` (`id`, `name`, `slug`, `created_at`, `updated_at`) VALUES
(1, 'Dance', 'dance', '2018-04-15 19:18:42', '2018-04-15 19:18:42'),
(2, 'Artes plasticas', 'artes-plasticas', '2018-04-15 19:18:42', '2018-04-15 19:18:42'),
(3, 'Theather', 'theather', '2018-04-15 19:18:42', '2018-04-15 19:18:42'),
(4, 'Music', 'music', '2018-04-15 19:18:42', '2018-04-15 19:18:42');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profiles`
--

CREATE TABLE `profiles` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `status` enum('active','inactive','on_hold','banned') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'inactive',
  `birthday` date DEFAULT NULL,
  `about_user` text COLLATE utf8mb4_unicode_ci,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user.png',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `profiles`
--

INSERT INTO `profiles` (`id`, `user_id`, `status`, `birthday`, `about_user`, `image`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 'active', '1966-05-19', 'Rafael Muñoz Pérez (born 3 March 1988 in Córdoba) is an Olympic swimmer from Spain. He competed for the Spanish Olympic team at the 2008 Olympic Games. He is coached by Romain Barnier in France in the Cercle des Nageurs de Marseille team.', 'rafael.png', '2018-04-15 19:18:42', '2018-04-15 19:18:42', NULL),
(2, 2, 'active', '2007-08-23', 'Minions ipsum occaecat sit amet poulet tikka masala sit amet labore baboiii ut nostrud. Nisi baboiii dolor bananaaaa. Uuuhhh sit amet jiji chasy qui aute. Me want bananaaa! gelatooo poulet tikka masala chasy nisi aliqua aaaaaah. Aliquip sed consectetur butt para tú ad aute commodo. Ut aliqua pepete consequat duis enim gelatooo hahaha veniam velit bananaaaa.', 'kike.jpg', '2018-04-15 19:18:42', '2018-04-15 19:18:42', NULL),
(3, 3, 'active', '2005-09-29', 'Aliquip tatata bala tu aliqua bappleees magna et poopayee wiiiii. Hana dul sae sed exercitation reprehenderit. Adipisicing et enim commodo voluptate poulet tikka masala daa minim hahaha chasy aute. Sit amet exercitation hahaha nostrud cillum. Poopayee uuuhhh incididunt underweaaar hana dul sae enim. Consectetur qui tempor velit veniam. Tempor tempor potatoooo ti aamoo! Sed jeje velit laboris ex. Aaaaaah dolore underweaaar consectetur. ', 'amelie.jpg', '2018-04-15 19:18:42', '2018-04-15 19:18:42', NULL),
(4, 4, 'active', '1965-06-10', 'Pamela Denise Anderson (* 1. Juli 1967 in Ladysmith, British Columbia, Kanada) ist eine kanadisch-US-amerikanische Schauspielerin und ein Pin-up-Girl. In ihrer Rolle als Rettungsschwimmerin in der Erfolgsserie Baywatch wurde sie international zum Star. Sie gilt als das Sexsymbol der 1990er Jahre und war jahrelang die meistgeklickte Frau im Internet.', 'pamela_rodriguez.jpg', '2018-04-15 19:18:42', '2018-04-15 19:18:42', NULL),
(5, 5, 'active', '1977-01-11', 'Hahaha belloo! Jeje potatoooo. Tank yuuu! baboiii potatoooo butt uuuhhh po kass jiji la bodaaa. Me want bananaaa! jiji aaaaaah jiji para tú me want bananaaa! Jiji tank yuuu! Belloo! Chasy butt jiji uuuhhh poulet tikka masala jeje belloo! Uuuhhh la bodaaa. Belloo! hahaha tulaliloo para tú jiji poopayee. Pepete po kass bee do bee do bee do daa poulet tikka masala hana dul sae bananaaaa me want bananaaa! Ti aamoo! ', 'arnaldo-schmidth.jpg', '2018-04-15 19:18:42', '2018-04-15 19:18:42', NULL),
(6, 6, 'active', '1982-11-25', 'Para tú para tú bananaaaa potatoooo bappleees aaaaaah pepete hana dul sae poulet tikka masala ti aamoo! Uuuhhh aaaaaah gelatooo uuuhhh jiji hana dul sae daa aaaaaah hahaha. Ti aamoo! baboiii baboiii poopayee. Po kass potatoooo bee do bee do bee do hahaha hahaha poopayee daa pepete. Bee do bee do bee do me want bananaaa! Uuuhhh baboiii underweaaar me want bananaaa!', 'miguel-strogov.jpg', '2018-04-15 19:18:42', '2018-04-15 19:18:42', NULL),
(7, 7, 'active', '1978-03-05', 'Well, the way they make shows is, they make one show. That shows called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they are going to make more shows. Some pilots get picked and become television programs. Some do not, become nothing. She starred in one of the ones that became nothing.', 'tomas-mann', '2018-04-15 19:18:42', '2018-04-15 19:18:42', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `replies`
--

CREATE TABLE `replies` (
  `id` int(10) UNSIGNED NOT NULL,
  `profile_id` int(10) UNSIGNED NOT NULL,
  `discussion_id` int(10) UNSIGNED NOT NULL,
  `body` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `replies`
--

INSERT INTO `replies` (`id`, `profile_id`, `discussion_id`, `body`, `created_at`, `updated_at`) VALUES
(1, 6, 1, 'The first reply from Miguel', '2018-04-16 04:21:16', '2018-04-16 04:21:16'),
(2, 1, 1, 'And this is the answer from Rafael', '2018-04-16 04:30:11', '2018-04-16 04:30:11'),
(3, 3, 1, 'This Amelies answer', '2018-04-16 05:08:32', '2018-04-16 05:08:32');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `name`, `slug`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'admin', '2018-04-15 19:18:42', '2018-04-15 19:18:42'),
(2, 'Author', 'author', '2018-04-15 19:18:42', '2018-04-15 19:18:42'),
(3, 'Subscriber', 'subscriber', '2018-04-15 19:18:42', '2018-04-15 19:18:42');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subcategories`
--

CREATE TABLE `subcategories` (
  `id` int(10) UNSIGNED NOT NULL,
  `category_id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subtitle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `excerpt` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum('active','inactive','on_hold') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `about_subcategory` text COLLATE utf8mb4_unicode_ci,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_featured` tinyint(1) NOT NULL DEFAULT '0',
  `in_menu` tinyint(1) NOT NULL DEFAULT '1',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `subcategories`
--

INSERT INTO `subcategories` (`id`, `category_id`, `title`, `subtitle`, `slug`, `excerpt`, `status`, `about_subcategory`, `image`, `is_featured`, `in_menu`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 1, 'Subcategory One-One', 'Subtitle Subcategory One-One', 'subcategory-one-one', 'This is the excerpt of the Subcategory one-one', 'active', 'This is the description of the Subcategory one-one', 'bmw.jpg', 1, 1, NULL, '2018-04-15 19:18:42', '2018-04-15 19:18:42'),
(2, 1, 'Subcategory One-Two', 'Subtitle Subcategory One-Two', 'subcategory-one-two', 'This is the excerpt of the Subcategory One-Two', 'active', 'This is the description of the Subcategory One-Two', 'berlin.jpg', 1, 1, NULL, '2018-04-15 19:18:42', '2018-04-15 19:18:42'),
(3, 2, 'Subcategory Two-One', 'Subtitle Subcategory Two-one', 'subcategory-two-one', 'This is the excerpt of the Subcategory Two-one', 'inactive', 'This is the description of the Subcategory Two-one', 'concert.jpg', 0, 0, NULL, '2018-04-15 19:18:42', '2018-04-15 19:18:42'),
(4, 3, 'Subcategory Three-One', 'Subtitle Subcategory Three-one', 'subcategory-three-one', 'This is the excerpt of the Subcategory Three-one', 'inactive', 'This is the description of the Subcategory Three-one', 'concerto.jpg', 0, 0, NULL, '2018-04-15 19:18:42', '2018-04-15 19:18:42');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role_id` int(11) NOT NULL DEFAULT '3',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `slug`, `email`, `password`, `role_id`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Rafael Muñoz', 'rafael-munoz', 'rafaelmunoznl@yahoo.com', '$2y$10$jl/fpKS97HnSL4ruj5nFnu6LwWfoY/O4Qj3KulnWKpE0.ZOrm44eS', 1, '7fdZBH8HJtvSB5xSB0qJaV1edgObdqJq2HeXsxF7f10tZuAqjjL4872OVX7m', '2018-04-15 19:18:42', '2018-04-15 19:18:42'),
(2, 'Enrique (Kike) Muñoz Botschka', 'enrique-kike-munoz-botschka', 'kike901@gmail.com', '$2y$10$sKiyhQRuObpUPTG37vOmFuru4EsogEo5.igEk5HsZkCsszXgKoAqu', 1, NULL, '2018-04-15 19:18:42', '2018-04-15 19:18:42'),
(3, 'Amelie Muñoz Botschka', 'amelie-munoz-botschka', 'amelie@yahoo.com', '$2y$10$AgUTCDA0EPEsMI3.zIXCFu3rsMU46tP0O4C5RPc9K85bJXECHnkfy', 2, 'GdibrS0pFr9dnS0z89lkIMIVongvtVeUhTaWq0onfH0iS1YXhF6eLUXT9Jf3', '2018-04-15 19:18:42', '2018-04-15 19:18:42'),
(4, 'Pamela Rodriguez', 'pamela-rodriguez', 'prdguez@yahoo.com', '$2y$10$NFXsi0ldgLvefMx3GsDVX.Adb33MkqWNiulFrau40gjvt/Rw1ec.y', 2, 'BWIPZlWohgsOeHpxyJ5EtOGAItUKfolSGtOWeC73Iw0ZxWMSxpB74J8PbUJY', '2018-04-15 19:18:42', '2018-04-15 19:18:42'),
(5, 'Arnaldo Schmidth', 'arnaldo-schmidth', 'a.schmidth@smidth-and-sons.com', '$2y$10$bY5BuoMK3rSy867NDjDNlOsanPEmpFJi9JeHK7WLFPI7V6quABdN2', 3, NULL, '2018-04-15 19:18:42', '2018-04-15 19:18:42'),
(6, 'Miguel Strogov', 'miguel-strogov', 'mstrogov@stroganov.ru', '$2y$10$QuSGKxT61H64mYf8nSGKeu49Cre0otphxXU/tplq8l0hQj.LUto0.', 3, 'HV56ehFFtSXD9w28t9LTNYv8bbMVmKNxCLVHrfSClsFNy0CRxmqK5vHrYT1Y', '2018-04-15 19:18:42', '2018-04-15 19:18:42'),
(7, 'Tomas Mann', 'tomas-mann', 't.lee@lee.cn', '$2y$10$rcIBBwRVbkiPxgTKRdekIeA3FmRogo/VLzSMeo3qD1WzN2Qd84UBu', 3, NULL, '2018-04-15 19:18:42', '2018-04-15 19:18:42');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_title_unique` (`title`),
  ADD UNIQUE KEY `categories_slug_unique` (`slug`),
  ADD UNIQUE KEY `categories_image_unique` (`image`);

--
-- Indices de la tabla `chanels`
--
ALTER TABLE `chanels`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `chanels_title_unique` (`title`),
  ADD UNIQUE KEY `chanels_slug_unique` (`slug`),
  ADD UNIQUE KEY `chanels_image_unique` (`image`),
  ADD UNIQUE KEY `chanels_video_unique` (`video`),
  ADD KEY `chanels_subcategory_id_index` (`subcategory_id`),
  ADD KEY `chanels_profile_id_index` (`profile_id`);

--
-- Indices de la tabla `discussions`
--
ALTER TABLE `discussions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `discussions_title_unique` (`title`),
  ADD UNIQUE KEY `discussions_slug_unique` (`slug`),
  ADD UNIQUE KEY `discussions_image_unique` (`image`),
  ADD KEY `discussions_profile_id_index` (`profile_id`);

--
-- Indices de la tabla `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `likes_reply_id_index` (`reply_id`),
  ADD KEY `likes_profile_id_index` (`profile_id`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pages`
--
ALTER TABLE `pages`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `pages_title_unique` (`title`),
  ADD UNIQUE KEY `pages_slug_unique` (`slug`),
  ADD UNIQUE KEY `pages_image_unique` (`image`);

--
-- Indices de la tabla `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indices de la tabla `postcategories`
--
ALTER TABLE `postcategories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `postcategories_title_unique` (`title`),
  ADD UNIQUE KEY `postcategories_slug_unique` (`slug`),
  ADD UNIQUE KEY `postcategories_image_unique` (`image`);

--
-- Indices de la tabla `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `posts_title_unique` (`title`),
  ADD UNIQUE KEY `posts_slug_unique` (`slug`),
  ADD UNIQUE KEY `posts_image_unique` (`image`),
  ADD KEY `posts_postcategory_id_index` (`postcategory_id`);

--
-- Indices de la tabla `posts_posttags`
--
ALTER TABLE `posts_posttags`
  ADD PRIMARY KEY (`id`),
  ADD KEY `posts_posttags_post_id_foreign` (`post_id`),
  ADD KEY `posts_posttags_posttag_id_foreign` (`posttag_id`);

--
-- Indices de la tabla `posttags`
--
ALTER TABLE `posttags`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `posttags_name_unique` (`name`),
  ADD UNIQUE KEY `posttags_slug_unique` (`slug`);

--
-- Indices de la tabla `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `profiles_user_id_index` (`user_id`);

--
-- Indices de la tabla `replies`
--
ALTER TABLE `replies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `replies_profile_id_index` (`profile_id`),
  ADD KEY `replies_discussion_id_index` (`discussion_id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_slug_unique` (`slug`);

--
-- Indices de la tabla `subcategories`
--
ALTER TABLE `subcategories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `subcategories_title_unique` (`title`),
  ADD UNIQUE KEY `subcategories_slug_unique` (`slug`),
  ADD UNIQUE KEY `subcategories_image_unique` (`image`),
  ADD KEY `subcategories_category_id_index` (`category_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_slug_unique` (`slug`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_role_id_index` (`role_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `chanels`
--
ALTER TABLE `chanels`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `discussions`
--
ALTER TABLE `discussions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `likes`
--
ALTER TABLE `likes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=558;

--
-- AUTO_INCREMENT de la tabla `pages`
--
ALTER TABLE `pages`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `postcategories`
--
ALTER TABLE `postcategories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `posts_posttags`
--
ALTER TABLE `posts_posttags`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `posttags`
--
ALTER TABLE `posttags`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `profiles`
--
ALTER TABLE `profiles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `replies`
--
ALTER TABLE `replies`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `subcategories`
--
ALTER TABLE `subcategories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `posts_posttags`
--
ALTER TABLE `posts_posttags`
  ADD CONSTRAINT `posts_posttags_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`),
  ADD CONSTRAINT `posts_posttags_posttag_id_foreign` FOREIGN KEY (`posttag_id`) REFERENCES `posttags` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
