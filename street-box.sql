-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 13-04-2018 a las 18:41:57
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
(1, 'Category One', 'category-one', 'Subtitle Category One', 'This is the excerpt of the Category one', 'This is the description of the Category one', 'active', 'bmw.jpg', 1, 1, NULL, '2018-04-13 06:42:03', '2018-04-13 06:42:03'),
(2, 'Category Two', 'category-two', 'Subtitle Category Two', 'This is the excerpt of the Category Two', 'This is the description of the Category Two', 'active', 'concerto.jpg', 1, 1, NULL, '2018-04-13 06:42:03', '2018-04-13 06:42:03'),
(3, 'Category Three', 'category-three', 'Subtitle Category Three', 'This is the excerpt of the Category Three', 'This is the description of the Category Three', 'inactive', 'cha-cha-cha.jpg', 0, 0, NULL, '2018-04-13 06:42:03', '2018-04-13 06:42:03'),
(4, 'Category Four', 'category-four', 'Subtitle Category Four', 'This is the excerpt of the Category Four', 'This is the description of the Category Four', 'inactive', 'bolliwood.jpg', 0, 0, NULL, '2018-04-13 06:42:03', '2018-04-13 06:42:03'),
(5, 'Category Five', 'category-five', 'Subtitle Category Five', 'This is the excerpt of the Category Five', 'This is the description of the Category Five', 'inactive', 'berlin.jpg', 0, 0, NULL, '2018-04-13 06:42:03', '2018-04-13 06:42:03');

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
(1, 1, 'active', 'Chanel One-one-one', 'chanel-one-one-one', 'Subtitle Chanel One-one-one', 'This is the excerpt of the Chanel One-one-one', 'This is the description of the Chanel One-one-one', 'bmw.jpg', 'bmw.mp4', 1, 10, 0, 'mysite.com', 'youtube.com', 'google.de', 'twitter.com', 'linkedin.com', 'youtube.com', '2018-04-13 06:42:03', '2018-04-13 06:42:03', NULL),
(2, 1, 'active', 'Chanel One-One-Two', 'chanel-one-one-two', 'Subtitle Chanel One-One-Two', 'This is the excerpt of the Chanel One-One-Two', 'This is the description of the Chanel One-One-Two', 'auto-clasico.jpg', NULL, 1, 10, 0, 'mysite.com', 'youtube.com', 'google.de', 'twitter.com', 'linkedin.com', 'youtube.com', '2018-04-13 06:42:03', '2018-04-13 06:42:03', NULL),
(3, 2, 'active', 'Chanel One-two-One', 'chanel-one-two-one', 'Subtitle Chanel One-two-One', 'This is the excerpt of the Chanel One-two-One', 'This is the description of the Chanel One-two-One', 'bad-wimpfen.jpg', NULL, 1, 10, 0, 'mysite.com', 'youtube.com', 'google.de', 'twitter.com', 'linkedin.com', 'youtube.com', '2018-04-13 06:42:03', '2018-04-13 06:42:03', NULL),
(4, 2, 'active', 'Chanel One-two-Two', 'chanel-one-two-two', 'Subtitle Chanel One-two-Two', 'This is the excerpt of the Chanel One-two-Two', 'This is the description of the Chanel One-two-Two', 'ballet.jpg', NULL, 1, 10, 0, 'mysite.com', 'youtube.com', 'google.de', 'twitter.com', 'linkedin.com', 'youtube.com', '2018-04-13 06:42:03', '2018-04-13 06:42:03', NULL),
(5, 2, 'active', 'Chanel One-two-Three', 'chanel-one-two-three', 'Subtitle Chanel One-two-Three', 'This is the excerpt of the Chanel One-two-Three', 'This is the description of the Chanel One-two-Three', 'kite.jpg', NULL, 1, 10, 0, 'mysite.com', 'youtube.com', 'google.de', 'twitter.com', 'linkedin.com', 'youtube.com', '2018-04-13 06:42:03', '2018-04-13 06:42:03', NULL),
(6, 1, 'active', 'Chanel two-one-one', 'chanel-two-one-one', 'Subtitle Chanel two-one-one', 'This is the excerpt of the Chanel two-one-one', 'This is the description of the Chanel two-one-one', 'dance.jpg', NULL, 1, 10, 0, 'mysite.com', 'youtube.com', 'google.de', 'twitter.com', 'linkedin.com', 'youtube.com', '2018-04-13 06:42:03', '2018-04-13 06:42:03', NULL),
(7, 1, 'active', 'Chanel Three-one-one', 'chanel-three-one-one', 'Subtitle Chanel Three-one-one', 'This is the excerpt of the Chanel Three-one-one', 'This is the description of the Chanel Three-one-one', 'berlin.jpg', NULL, 1, 10, 0, 'mysite.com', 'youtube.com', 'google.de', 'twitter.com', 'linkedin.com', 'youtube.com', '2018-04-13 06:42:03', '2018-04-13 06:42:03', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `discussions`
--

CREATE TABLE `discussions` (
  `id` int(10) UNSIGNED NOT NULL,
  `profile_id` int(11) NOT NULL,
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
(1, 4, 'active', 'First discussion', 'first-discussion', '<p>Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No?</p><p>Well, that\'s what you see at a toy store. And you must think you\'re in a toy store, because you\'re here shopping for an infant named Jeb.</p>', 'bmw.jpg', 12, 0, '2018-04-13 15:08:44', '2018-04-13 15:08:44', NULL),
(2, 4, 'inactive', 'Berlin', 'berlin', '<p>Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. </p><p>Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they\'re actually proud of that shit./p>', 'berlin.jpg', 0, 0, '2018-04-13 15:08:44', '2018-04-13 15:08:44', NULL),
(3, 1, 'inactive', 'Samuel L Jackson', 'samuel-l-jackson', '<p>\r\n\r\nYou think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don\'t know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I\'m breaking now. We said we\'d say it was the snow that killed the other two, but it wasn\'t. Nature is lethal but it doesn\'t hold a candle to man.\r\n</p><p>\r\nYour bones don\'t break, mine do. That\'s clear. Your cells react to bacteria and viruses differently than mine. You don\'t get sick, I do. That\'s also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We\'re on the same curve, just on opposite ends.\r\n\r\n</p>', 'concert.jpg', 23, 0, '2018-04-13 15:10:05', '2018-04-13 15:10:05', NULL);

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
(342, '2014_10_12_000000_create_users_table', 1),
(343, '2014_10_12_100000_create_password_resets_table', 1),
(344, '2018_03_30_114433_create_posts_table', 1),
(345, '2018_03_31_095440_create_postcategories_table', 1),
(346, '2018_03_31_130322_create_subcategories_table', 1),
(347, '2018_03_31_142116_create_categories_table', 1),
(348, '2018_03_31_143733_create_chanels_table', 1),
(349, '2018_04_05_175611_create_roles_table', 1),
(350, '2018_04_06_090602_create_posttags_table', 1),
(351, '2018_04_06_091545_create_posts_posttags_table', 1),
(352, '2018_04_11_155351_create_pages_table', 1),
(353, '2018_04_12_041929_create_profiles_table', 1),
(354, '2018_04_13_143301_create_discussions_table', 2);

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
(1, 'published', 'AGB', 'agb', 'AGB', 'These are the AGBs', 'hier a lot of words', 'bmw.jpg', NULL, '2018-04-13 06:42:03', '2018-04-13 06:42:03'),
(2, 'published', 'Impressum', 'impressum', 'The impressum subtitle', 'These are the excerpt of the impressum', 'These are the details of the impressum', 'berlin.jpg', NULL, '2018-04-13 06:42:03', '2018-04-13 06:42:03'),
(3, 'published', 'Contact', 'contact', 'The Contact subtitle', 'These are the excerpt of Contact page', 'hier a lot of words about how to get in contact', 'concert.jpg', NULL, '2018-04-13 06:42:03', '2018-04-13 06:42:03');

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
(1, 'Postcategory One', 'postcategory-one', 'Subtitle Category One', 'This is the excerpt of the Category one', 'This is the description of the Category one', 'active', 'bmw.jpg', 1, 1, NULL, '2018-04-13 06:42:03', '2018-04-13 06:42:03'),
(2, 'Postcategory Two', 'postcategory-two', 'Subtitle Category Two', 'This is the excerpt of the Category Two', 'This is the description of the Category Two', 'active', 'bolliwood.jpg', 1, 1, NULL, '2018-04-13 06:42:03', '2018-04-13 06:42:03'),
(3, 'Postcategory Three', 'postcategory-three', 'Subtitle Category Three', 'This is the excerpt of the Category Three', 'This is the description of the Category Three', 'inactive', 'concerto.jpg', 0, 0, NULL, '2018-04-13 06:42:03', '2018-04-13 06:42:03');

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
(1, 1, 'published', 'Post One', 'post-one', 'Subtitle Category One', 'This is the excerpt of the Category one', 'This is the description of the Category one', 'bmw.jpg', 1, 1, NULL, NULL, '2018-04-13 06:42:03', '2018-04-13 06:42:03'),
(2, 2, 'published', 'Post Two', 'post-two', 'Subtitle Post Two', 'This is the excerpt of the Category TwoTwo', 'This is the description of the Category Two', 'berlin.jpg', 1, 1, NULL, NULL, '2018-04-13 06:42:03', '2018-04-13 06:42:03'),
(3, 2, 'published', 'Post Three', 'post-three', 'Subtitle Category Three', 'This is the excerpt of the Category ThreeThree', 'This is the description of the Category Three', 'cha-cha-cha.jpg', 1, 1, NULL, NULL, '2018-04-13 06:42:03', '2018-04-13 06:42:03'),
(4, 1, 'published', 'Post Four', 'post-four', 'Subtitle Category One', 'This is the excerpt of the Category Four', 'This is the description of the Category Four', 'concert.jpg', 3, 1, NULL, NULL, '2018-04-13 06:42:03', '2018-04-13 06:42:03');

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
(1, 'Dance', 'dance', '2018-04-13 06:42:03', '2018-04-13 06:42:03'),
(2, 'Artes plasticas', 'artes-plasticas', '2018-04-13 06:42:03', '2018-04-13 06:42:03'),
(3, 'Theather', 'theather', '2018-04-13 06:42:03', '2018-04-13 06:42:03'),
(4, 'Music', 'music', '2018-04-13 06:42:03', '2018-04-13 06:42:03');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profiles`
--

CREATE TABLE `profiles` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `chanel_id` int(11) NOT NULL DEFAULT '-1',
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

INSERT INTO `profiles` (`id`, `user_id`, `chanel_id`, `birthday`, `about_user`, `image`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, -1, NULL, NULL, 'user.png', '2018-04-13 06:42:03', '2018-04-13 06:42:03', NULL),
(2, 2, -1, NULL, NULL, 'user.png', '2018-04-13 06:42:03', '2018-04-13 06:42:03', NULL),
(3, 3, -1, NULL, NULL, 'user.png', '2018-04-13 06:42:03', '2018-04-13 06:42:03', NULL),
(4, 4, -1, NULL, NULL, 'user.png', '2018-04-13 09:37:29', '2018-04-13 09:37:29', NULL);

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
(1, 'Admin', 'admin', '2018-04-13 06:42:03', '2018-04-13 06:42:03'),
(2, 'Author', 'author', '2018-04-13 06:42:03', '2018-04-13 06:42:03'),
(3, 'Subscriber', 'subscriber', '2018-04-13 06:42:03', '2018-04-13 06:42:03');

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
(1, 1, 'Subcategory One-One', 'Subtitle Subcategory One-One', 'subcategory-one-one', 'This is the excerpt of the Subcategory one-one', 'active', 'This is the description of the Subcategory one-one', 'bmw.jpg', 1, 1, NULL, '2018-04-13 06:42:03', '2018-04-13 06:42:03'),
(2, 1, 'Subcategory One-Two', 'Subtitle Subcategory One-Two', 'subcategory-one-two', 'This is the excerpt of the Subcategory One-Two', 'active', 'This is the description of the Subcategory One-Two', 'berlin.jpg', 1, 1, NULL, '2018-04-13 06:42:03', '2018-04-13 06:42:03'),
(3, 2, 'Subcategory Two-One', 'Subtitle Subcategory Two-one', 'subcategory-two-one', 'This is the excerpt of the Subcategory Two-one', 'inactive', 'This is the description of the Subcategory Two-one', 'concert.jpg', 0, 0, NULL, '2018-04-13 06:42:03', '2018-04-13 06:42:03'),
(4, 3, 'Subcategory Three-One', 'Subtitle Subcategory Three-one', 'subcategory-three-one', 'This is the excerpt of the Subcategory Three-one', 'inactive', 'This is the description of the Subcategory Three-one', 'concerto.jpg', 0, 0, NULL, '2018-04-13 06:42:03', '2018-04-13 06:42:03');

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
(1, 'Rafael Muñoz', 'rafael-munoz', 'rafaelmunoznl@yahoo.com', '$2y$10$uq7S4yj96FC0D9Oj6eOFsuwEu5z2vJ5Uxnw2ddDZhUQh7y.5qKSrS', 1, NULL, '2018-04-13 06:42:03', '2018-04-13 06:42:03'),
(2, 'Enrique (Kike) Muñoz Botschka', 'enrique-kike-munoz-botschka', 'kike901@gmail.com', '$2y$10$mVB3iEG6yu.87CRDlipySufabVIvrQa38aBQkpAS6qoyH3Tr7UnZu', 2, NULL, '2018-04-13 06:42:03', '2018-04-13 06:42:03'),
(3, 'Amelie Muñoz Botschka', 'amelie-munoz-botschka', 'amelie@yahoo.com', '$2y$10$OVxXmkK0Oa6/IkXcl7WU/u5U8DE3bouGIJvOKQoBI0Bc32ENq.eEO', 3, NULL, '2018-04-13 06:42:03', '2018-04-13 06:42:03'),
(4, 'Teresa Prieto', 'teresa-prieto', 'teresita@prietos.com', '$2y$10$1dafbCRJIxgYM6mVyt27QeadYpUg5A7OMvDiF3v8bXvojmAKLpOV2', 3, 'EFIW0Tn98WA9BmWTBEE2APwp2B38DEYDUWI21kRbukicXzyJ2TvAM43eCy2K', '2018-04-13 06:43:17', '2018-04-13 06:43:17');

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
-- Indices de la tabla `discussions`
--
ALTER TABLE `discussions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `discussions_title_unique` (`title`),
  ADD UNIQUE KEY `discussions_slug_unique` (`slug`),
  ADD UNIQUE KEY `discussions_image_unique` (`image`),
  ADD KEY `discussions_profile_id_index` (`profile_id`);

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
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=355;

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
