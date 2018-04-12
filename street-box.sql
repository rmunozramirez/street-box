-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 12-04-2018 a las 07:28:29
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
(1, 'Category One', 'category-one', 'Subtitle Category One', 'This is the excerpt of the Category one', 'This is the description of the Category one', 'active', 'bmw.jpg', 1, 1, NULL, '2018-04-09 02:56:27', '2018-04-09 02:56:27'),
(2, 'Category Two', 'category-two', 'Subtitle Category Two', 'This is the excerpt of the Category Two', 'This is the description of the Category Two', 'active', 'concerto.jpg', 1, 1, NULL, '2018-04-09 02:56:27', '2018-04-09 02:56:27'),
(3, 'Category Three', 'category-three', 'Subtitle Category Three', 'This is the excerpt of the Category Three', 'This is the description of the Category Three', 'inactive', 'cha-cha-cha.jpg', 0, 0, NULL, '2018-04-09 02:56:27', '2018-04-09 02:56:27'),
(4, 'Category Four', 'category-four', 'Subtitle Category Four', 'This is the excerpt of the Category Four', 'This is the description of the Category Four', 'inactive', 'bolliwood.jpg', 0, 0, NULL, '2018-04-09 02:56:27', '2018-04-09 02:56:27'),
(5, 'Category Five +1', 'category-five-1', 'Subtitle Category Five', 'This is the excerpt of the Category Five', 'This is the description of the Category Five', 'inactive', 'berlin.jpg', 0, 0, NULL, '2018-04-09 02:56:27', '2018-04-09 19:20:11'),
(6, 'This is the first Category tuya', 'this-is-the-first-category-tuya', 'This is the first Category sub-title', 'This is the first Category excrpt', 'admin-Upload a Featured Image', 'active', '1523308841-breadcrumb.PNG', 1, 1, '2018-04-11 12:48:05', '2018-04-09 19:20:41', '2018-04-11 12:48:05');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chanels`
--

CREATE TABLE `chanels` (
  `id` int(10) UNSIGNED NOT NULL,
  `subcategory_id` int(10) UNSIGNED NOT NULL,
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

INSERT INTO `chanels` (`id`, `subcategory_id`, `status`, `title`, `slug`, `subtitle`, `excerpt`, `about_chanel`, `image`, `video`, `is_featured`, `likes`, `is_testimonial`, `web`, `facebook`, `googleplus`, `twitter`, `linkedin`, `youtube`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 'active', 'Chanel One-one-one edited', 'chanel-one-one-one-edited', 'Subtitle Chanel One-one-one', 'This is the excerpt of the Chanel One-one-one', 'This is the description of the Chanel One-one-one', 'bmw.jpg', 'bmw.mp4', 1, 10, 0, 'mysite.com', 'youtube.com', 'google.de', 'twitter.com', 'linkedin.com', 'youtube.com', '2018-04-09 02:56:27', '2018-04-09 05:15:53', NULL),
(2, 1, 'active', 'Chanel One-One-Two', 'chanel-one-one-two', 'Subtitle Chanel One-One-Two', 'This is the excerpt of the Chanel One-One-Two', 'This is the description of the Chanel One-One-Two', 'auto-clasico.jpg', NULL, 1, 10, 0, 'mysite.com', 'youtube.com', 'google.de', 'twitter.com', 'linkedin.com', 'youtube.com', '2018-04-09 02:56:27', '2018-04-09 02:56:27', NULL),
(3, 2, 'active', 'Chanel One-two-One', 'chanel-one-two-one', 'Subtitle Chanel One-two-One', 'This is the excerpt of the Chanel One-two-One', 'This is the description of the Chanel One-two-One', 'bad-wimpfen.jpg', NULL, 1, 10, 0, 'mysite.com', 'youtube.com', 'google.de', 'twitter.com', 'linkedin.com', 'youtube.com', '2018-04-09 02:56:27', '2018-04-09 02:56:27', NULL),
(4, 2, 'active', 'Chanel One-two-Two', 'chanel-one-two-two', 'Subtitle Chanel One-two-Two', 'This is the excerpt of the Chanel One-two-Two', 'This is the description of the Chanel One-two-Two', 'ballet.jpg', NULL, 1, 10, 0, 'mysite.com', 'youtube.com', 'google.de', 'twitter.com', 'linkedin.com', 'youtube.com', '2018-04-09 02:56:27', '2018-04-09 02:56:27', NULL),
(5, 2, 'active', 'Chanel One-two-Three', 'chanel-one-two-three', 'Subtitle Chanel One-two-Three', 'This is the excerpt of the Chanel One-two-Three', 'This is the description of the Chanel One-two-Three', 'kite.jpg', NULL, 1, 7, 0, 'mysite.com', 'youtube.com', 'google.de', 'twitter.com', 'linkedin.com', 'youtube.com', '2018-04-09 02:56:27', '2018-04-11 14:42:08', NULL),
(6, 1, 'active', 'Chanel two-one-one', 'chanel-two-one-one', 'Subtitle Chanel two-one-one', 'This is the excerpt of the Chanel two-one-one', 'This is the description of the Chanel two-one-one', 'dance.jpg', NULL, 1, 10, 0, 'mysite.com', 'youtube.com', 'google.de', 'twitter.com', 'linkedin.com', 'youtube.com', '2018-04-09 02:56:27', '2018-04-09 02:56:27', NULL),
(7, 1, 'active', 'Chanel Three-one-one', 'chanel-three-one-one', 'Subtitle Chanel Three-one-one', 'This is the excerpt of the Chanel Three-one-one', 'This is the description of the Chanel Three-one-one', 'berlin.jpg', NULL, 1, 10, 0, 'mysite.com', 'youtube.com', 'google.de', 'twitter.com', 'linkedin.com', 'youtube.com', '2018-04-09 02:56:27', '2018-04-09 02:56:27', NULL),
(8, 2, 'inactive', 'This is the first Chanel', 'this-is-the-first-chanel', 'This is the first Category sub-title', 'This is the first Category excrpt', 'INTEY Faszienrolle Massagerolle 2 in 1 Schaumstoffrolle für Triggerpunkt-Massage, Gymnastikrolle Foam Roller zur Selbstmassage mit Tragetasche beim Faszientraining, Schwarz/Orange Rolle', '1523258217-met-3.PNG', 'https://www.amazon.de/', 0, 0, 0, 'https://www.amazon.de/', 'https://www.amazon.de/', 'https://www.amazon.de/', 'https://www.amazon.de/', 'https://www.amazon.de/', NULL, '2018-04-09 05:16:57', '2018-04-11 04:13:24', NULL),
(10, 2, 'inactive', 'This is the first Category title to be deleted si', 'this-is-the-first-category-title-to-be-deleted-si', 'Untertitel 2018', 'This is the first Category excrpt', 'Icons. Easy. Done.\r\n\r\nGet vector icons and social logos on your website with Font Awesome, the web’s most popular icon set and toolkit.', '1523287415-ballet-revolution.jpg', 'gntuj', 0, 0, 0, 'https://www.amazon.de/', 'https://www.amazon.de/', 'https://www.amazon.de/', 'https://www.amazon.de/', 'https://www.amazon.de/', NULL, '2018-04-09 13:23:35', '2018-04-09 13:24:16', '2018-04-09 13:24:16'),
(11, 1, 'inactive', 'This is the first Category title to be deleted', 'this-is-the-first-category-title-to-be-deleted', 'This is the first Category sub-title', 'si', 'Este es el no video chanel', '1523290339-met-2.PNG', 'no-video', 0, 0, 0, 'si', 'si', 'si', 'si', 'si', NULL, '2018-04-09 14:12:19', '2018-04-09 14:14:27', '2018-04-09 14:14:27'),
(12, 1, 'inactive', 'Otro mas no', 'otro-mas-no', 'This is an untertitle', 'This is the first Category excrpt', 'si', '1523290431-IMG_20171107_190709.jpg', 'si', 0, 0, 0, 'https://www.amazon.de/', 'si', 'si', 'si', 'si', NULL, '2018-04-09 14:13:30', '2018-04-09 14:14:08', '2018-04-09 14:14:08');

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
(294, '2014_10_12_000000_create_users_table', 1),
(295, '2014_10_12_100000_create_password_resets_table', 1),
(296, '2018_03_30_114433_create_posts_table', 1),
(297, '2018_03_31_095440_create_postcategories_table', 1),
(298, '2018_03_31_130322_create_subcategories_table', 1),
(299, '2018_03_31_142116_create_categories_table', 1),
(300, '2018_03_31_143733_create_chanels_table', 1),
(301, '2018_04_05_175611_create_roles_table', 1),
(302, '2018_04_06_090602_create_posttags_table', 1),
(303, '2018_04_06_091545_create_posts_posttags_table', 1),
(304, '2018_04_11_155351_create_pages_table', 2),
(305, '2018_04_12_041929_create_profiles_table', 3);

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
(1, 'published', 'Allgemeine Geschäftsbedingungen', 'agb', '\r\n\r\nDiese Bedingungen gelten für Deutschland. Um die AGB für ein anderes Land anzuzeigen, treffen Sie Ihre Auswahl aus der Liste unten.', 'Diese Bedingungen gelten für Deutschland. Um die AGB für ein anderes Land anzuzeigen, treffen Sie Ihre Auswahl aus der Liste unten.', 'You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don\'t know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I\'m breaking now. We said we\'d say it was the snow that killed the other two, but it wasn\'t. Nature is lethal but it doesn\'t hold a candle to man.', 'bmw.jpg', NULL, '2018-04-04 22:00:00', NULL),
(2, 'published', 'Contact', 'contact', 'contact subtitle', ' You going to give me a dog for a pet, give me a pit bull. Give me... Raoul. Right, Omar? Give me Raoul.', 'You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don\'t know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I\'m breaking now. We said we\'d say it was the snow that killed the other two, but it wasn\'t. Nature is lethal but it doesn\'t hold a candle to man.\r\n\r\nThe lysine contingency - it\'s intended to prevent the spread of the animals is case they ever got off the island. Dr. Wu inserted a gene that makes a single faulty enzyme in protein metabolism. The animals can\'t manufacture the amino acid lysine. Unless they\'re continually supplied with lysine by us, they\'ll slip into a coma and die.\r\n', 'berlin.jpg', NULL, '2018-04-01 22:00:00', NULL);

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
(1, 'Postcategory One', 'postcategory-one', 'Subtitle Category One', 'This is the excerpt of the Category one', 'This is the description of the Category one', 'active', 'bmw.jpg', 1, 1, NULL, '2018-04-09 02:56:27', '2018-04-09 02:56:27'),
(2, 'Postcategory Two', 'postcategory-two', 'Subtitle Category Two', 'This is the excerpt of the Category Two', 'This is the description of the Category Two', 'active', 'bolliwood.jpg', 1, 1, NULL, '2018-04-09 02:56:27', '2018-04-09 02:56:27'),
(3, 'Postcategory Three', 'postcategory-three', 'Subtitle Category Three', 'This is the excerpt of the Category Three', 'This is the description of the Category Three', 'inactive', 'concerto.jpg', 0, 0, NULL, '2018-04-09 02:56:27', '2018-04-09 02:56:27');

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
(1, 1, 'published', 'Post One', 'post-one', 'Subtitle Category One', 'This is the excerpt of the Category one', 'This is the description of the Category one', 'bmw.jpg', 1, 1, NULL, NULL, '2018-04-09 02:56:27', '2018-04-09 02:56:27'),
(2, 2, 'published', 'Post Two', 'post-two', 'Subtitle Post Two', 'This is the excerpt of the Category TwoTwo', 'This is the description of the Category Two', 'berlin.jpg', 1, 1, NULL, NULL, '2018-04-09 02:56:27', '2018-04-09 02:56:27'),
(3, 2, 'published', 'Post Three', 'post-three', 'Subtitle Category Three', 'This is the excerpt of the Category ThreeThree', 'This is the description of the Category Three', 'cha-cha-cha.jpg', 1, 1, NULL, NULL, '2018-04-09 02:56:27', '2018-04-09 02:56:27'),
(4, 1, 'published', 'Post Four', 'post-four', 'Subtitle Category One', 'This is the excerpt of the Category Four', 'This is the description of the Category Four', 'concert.jpg', 3, 1, NULL, NULL, '2018-04-09 02:56:27', '2018-04-09 02:56:27'),
(5, 1, 'published', 'small-green-line is the best', 'small-green-line-is-the-best', 'This is an untertitle', 'This is the first Category excrpt', 'This is a content', '1523289537-kobolde-und-katakomben-wallpaper.jpg', 1, 0, '2018-04-09 14:01:56', NULL, '2018-04-09 13:58:57', '2018-04-09 14:01:56');

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
(1, 'Dance', 'dance', NULL, NULL),
(2, 'Theather', 'theater', NULL, NULL),
(3, 'Artes plásticas', 'artes-plasticas', NULL, NULL),
(4, 'Music', 'music', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profiles`
--

CREATE TABLE `profiles` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `chanel_id` int(10) UNSIGNED NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `birthday` date NOT NULL,
  `about_user` text COLLATE utf8mb4_unicode_ci,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
(1, 'Admin', 'admin', NULL, NULL),
(2, 'Author', 'author', NULL, NULL),
(3, 'Subscriber', 'Subscriber', NULL, NULL);

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
(1, 1, 'Subcategory One-One', 'Subtitle Subcategory One-One', 'subcategory-one-one', 'This is the excerpt of the Subcategory one-one', 'active', '<p>Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven\'t seen you in a year. And the good thing about dogs... is they got different dogs for different people. Like pit bulls. The dog of dogs. Pit bull can be the right man\'s best friend... or the wrong man\'s worst enemy. You going to give me a dog for a pet, give me a pit bull. Give me... Raoul. Right, Omar? Give me Raoul.</p>\r\n\r\n<p>Now that we know who you are, I know who I am. I\'m not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain\'s going to be? He\'s the exact opposite of the hero. And most times they\'re friends, like you and me! I should\'ve known way back when... You know why, David? Because of the kids. They called me Mr Glass.</p>\r\n\r\n<p>The lysine contingency - it\'s intended to prevent the spread of the animals is case they ever got off the island. Dr. Wu inserted a gene that makes a single faulty enzyme in protein metabolism. The animals can\'t manufacture the amino acid lysine. Unless they\'re continually supplied with lysine by us, they\'ll slip into a coma and die.</p>', 'bmw.jpg', 1, 1, NULL, '2018-04-09 02:56:27', '2018-04-11 12:33:54'),
(2, 1, 'Subcategory One-Two', 'Subtitle Subcategory One-Two', 'subcategory-one-two', 'This is the excerpt of the Subcategory One-Two', 'active', 'This is the description of the Subcategory One-Two', 'berlin.jpg', 1, 1, NULL, '2018-04-09 02:56:27', '2018-04-09 02:56:27'),
(3, 2, 'Subcategory Two-One', 'Subtitle Subcategory Two-one', 'subcategory-two-one', 'This is the excerpt of the Subcategory Two-one', 'inactive', 'This is the description of the Subcategory Two-one', 'concert.jpg', 0, 0, NULL, '2018-04-09 02:56:27', '2018-04-09 02:56:27'),
(4, 3, 'Subcategory Three-One', 'Subtitle Subcategory Three-one', 'subcategory-three-one', 'This is the excerpt of the Subcategory Three-one', 'inactive', 'This is the description of the Subcategory Three-one', 'concerto.jpg', 0, 0, NULL, '2018-04-09 02:56:27', '2018-04-09 02:56:27');

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
(1, 'Rafael Muñoz', 'rafael-munoz', 'rafaelmunoznl@yahoo.com', '$2y$10$3/5DAc3k3/lGOsLQ.tzZXe5.Vdvgnn6RB6Q9QVCYzBCXx0/ne2pa2', 1, '0hQRZ5LmAsgcliTnhrXi05nab0UT5ecN0gqzfOMgcRnd567au0QqALgxZpvp', '2018-04-09 02:56:27', '2018-04-09 02:56:27'),
(2, 'Enrique (Kike) Muñoz Botschka', 'enrique-kike-munoz-botschka', 'kike901@gmail.com', '$2y$10$ff7a45UHDptqb0t/sz8TmOoR10sUH169/ozNS8bPPgvgpJO9st86e', 2, NULL, '2018-04-09 02:56:27', '2018-04-09 02:56:27'),
(3, 'Amelie Muñoz Botschka', 'amelie-munoz-botschka', 'amelie@yahoo.com', '$2y$10$3HoxmjqStaUmP0TzL3El.e4b455bmXL7.xxQdANm.VqJA8azkQG8C', 3, NULL, '2018-04-09 02:56:27', '2018-04-09 02:56:27'),
(5, 'Danilo Strogov', 'danilo-strogov', 'juanita@gmail.com', '$2y$10$MqWhSa8ldCg/Km0j67ClGujaXoy5WOgJoYAZiB.fwmdWKZuHyz.uG', 3, NULL, '2018-04-09 03:26:58', '2018-04-12 03:02:31'),
(7, 'Maritza Gomez', 'maritza-gomez', 'wdwqeqw@ss', '$2y$10$jGffkvWQbgAO1SSG3.zNAuSAtsKSsE/jBNlgRijiIdbqv6Y7XaX8O', 1, NULL, '2018-04-09 03:30:07', '2018-04-12 03:07:48'),
(8, 'Miguel Strogov', 'miguel-strogov', 'm.strogov@stroganov.ru', '$2y$10$WnOxLreSkic4wkn/P23GSekIRt9zPi71sol78QLMSPvSWKnj36856', 3, NULL, '2018-04-12 05:22:23', '2018-04-12 05:22:23');

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
  ADD KEY `chanels_subcategory_id_index` (`subcategory_id`);

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
  ADD UNIQUE KEY `profiles_slug_unique` (`slug`),
  ADD UNIQUE KEY `profiles_image_unique` (`image`),
  ADD KEY `profiles_user_id_index` (`user_id`),
  ADD KEY `profiles_chanel_id_index` (`chanel_id`);

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `chanels`
--
ALTER TABLE `chanels`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=306;

--
-- AUTO_INCREMENT de la tabla `pages`
--
ALTER TABLE `pages`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `postcategories`
--
ALTER TABLE `postcategories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

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
