-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 12-04-2018 a las 18:23:04
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
(1, 'Category One', 'category-one', 'Subtitle Category One', 'This is the excerpt of the Category one', 'This is the description of the Category one', 'active', 'bmw.jpg', 1, 1, NULL, '2018-04-12 08:09:00', '2018-04-12 08:09:00'),
(2, 'Category Two', 'category-two', 'Subtitle Category Two', 'This is the excerpt of the Category Two', 'This is the description of the Category Two', 'active', 'concerto.jpg', 1, 1, NULL, '2018-04-12 08:09:00', '2018-04-12 08:09:00'),
(3, 'Category Three', 'category-three', 'Subtitle Category Three', 'This is the excerpt of the Category Three', 'This is the description of the Category Three', 'inactive', 'cha-cha-cha.jpg', 0, 0, NULL, '2018-04-12 08:09:00', '2018-04-12 08:09:00'),
(4, 'Category Four', 'category-four', 'Subtitle Category Four', 'This is the excerpt of the Category Four', 'This is the description of the Category Four', 'inactive', 'bolliwood.jpg', 0, 0, NULL, '2018-04-12 08:09:00', '2018-04-12 08:09:00'),
(5, 'Category Five', 'category-five', 'Subtitle Category Five', 'This is the excerpt of the Category Five', 'This is the description of the Category Five', 'inactive', 'berlin.jpg', 0, 0, NULL, '2018-04-12 08:09:00', '2018-04-12 08:09:00');

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
(1, 1, 'active', 'Chanel One-one-one', 'chanel-one-one-one', 'Subtitle Chanel One-one-one', 'This is the excerpt of the Chanel One-one-one', 'This is the description of the Chanel One-one-one', 'bmw.jpg', 'bmw.mp4', 1, 10, 0, 'mysite.com', 'youtube.com', 'google.de', 'twitter.com', 'linkedin.com', 'youtube.com', '2018-04-12 08:09:00', '2018-04-12 08:09:00', NULL),
(2, 1, 'active', 'Chanel One-One-Two', 'chanel-one-one-two', 'Subtitle Chanel One-One-Two', 'This is the excerpt of the Chanel One-One-Two', 'This is the description of the Chanel One-One-Two', 'auto-clasico.jpg', NULL, 1, 10, 0, 'mysite.com', 'youtube.com', 'google.de', 'twitter.com', 'linkedin.com', 'youtube.com', '2018-04-12 08:09:00', '2018-04-12 08:09:00', NULL),
(3, 2, 'active', 'Chanel One-two-One', 'chanel-one-two-one', 'Subtitle Chanel One-two-One', 'This is the excerpt of the Chanel One-two-One', 'This is the description of the Chanel One-two-One', 'bad-wimpfen.jpg', NULL, 1, 10, 0, 'mysite.com', 'youtube.com', 'google.de', 'twitter.com', 'linkedin.com', 'youtube.com', '2018-04-12 08:09:00', '2018-04-12 08:09:00', NULL),
(4, 2, 'active', 'Chanel One-two-Two', 'chanel-one-two-two', 'Subtitle Chanel One-two-Two', 'This is the excerpt of the Chanel One-two-Two', 'This is the description of the Chanel One-two-Two', 'ballet.jpg', NULL, 1, 10, 0, 'mysite.com', 'youtube.com', 'google.de', 'twitter.com', 'linkedin.com', 'youtube.com', '2018-04-12 08:09:00', '2018-04-12 08:09:00', NULL),
(5, 2, 'active', 'Chanel One-two-Three', 'chanel-one-two-three', 'Subtitle Chanel One-two-Three', 'This is the excerpt of the Chanel One-two-Three', 'This is the description of the Chanel One-two-Three', 'kite.jpg', NULL, 1, 10, 0, 'mysite.com', 'youtube.com', 'google.de', 'twitter.com', 'linkedin.com', 'youtube.com', '2018-04-12 08:09:00', '2018-04-12 08:09:00', NULL),
(6, 1, 'active', 'Chanel two-one-one', 'chanel-two-one-one', 'Subtitle Chanel two-one-one', 'This is the excerpt of the Chanel two-one-one', 'This is the description of the Chanel two-one-one', 'dance.jpg', NULL, 1, 10, 0, 'mysite.com', 'youtube.com', 'google.de', 'twitter.com', 'linkedin.com', 'youtube.com', '2018-04-12 08:09:00', '2018-04-12 08:09:00', NULL),
(7, 1, 'active', 'Chanel Three-one-one', 'chanel-three-one-one', 'Subtitle Chanel Three-one-one', 'This is the excerpt of the Chanel Three-one-one', 'This is the description of the Chanel Three-one-one', 'berlin.jpg', NULL, 1, 10, 0, 'mysite.com', 'youtube.com', 'google.de', 'twitter.com', 'linkedin.com', 'youtube.com', '2018-04-12 08:09:00', '2018-04-12 08:09:00', NULL);

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
(318, '2014_10_12_000000_create_users_table', 1),
(319, '2014_10_12_100000_create_password_resets_table', 1),
(320, '2018_03_30_114433_create_posts_table', 1),
(321, '2018_03_31_095440_create_postcategories_table', 1),
(322, '2018_03_31_130322_create_subcategories_table', 1),
(323, '2018_03_31_142116_create_categories_table', 1),
(324, '2018_03_31_143733_create_chanels_table', 1),
(325, '2018_04_05_175611_create_roles_table', 1),
(326, '2018_04_06_090602_create_posttags_table', 1),
(327, '2018_04_06_091545_create_posts_posttags_table', 1),
(328, '2018_04_11_155351_create_pages_table', 1),
(329, '2018_04_12_041929_create_profiles_table', 1);

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
(1, 'published', 'AGB', 'agb', 'AGB', 'These are the AGBs', 'hier a lot of words', 'bmw.jpg', NULL, '2018-04-12 08:09:00', '2018-04-12 08:09:00'),
(2, 'published', 'Impressum', 'impressum', 'The impressum subtitle', 'These are the excerpt of the impressum', 'These are the details of the impressum', 'berlin.jpg', NULL, '2018-04-12 08:09:00', '2018-04-12 08:09:00'),
(3, 'published', 'Contact', 'contact', 'The Contact subtitle', 'These are the excerpt of Contact page', 'hier a lot of words about how to get in contact', 'concert.jpg', NULL, '2018-04-12 08:09:00', '2018-04-12 08:09:00');

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
(1, 'Postcategory One', 'postcategory-one', 'Subtitle Category One', 'This is the excerpt of the Category one', 'This is the description of the Category one', 'active', 'bmw.jpg', 1, 1, NULL, '2018-04-12 08:09:00', '2018-04-12 08:09:00'),
(2, 'Postcategory Two', 'postcategory-two', 'Subtitle Category Two', 'This is the excerpt of the Category Two', 'This is the description of the Category Two', 'active', 'bolliwood.jpg', 1, 1, NULL, '2018-04-12 08:09:00', '2018-04-12 08:09:00'),
(3, 'Postcategory Three', 'postcategory-three', 'Subtitle Category Three', 'This is the excerpt of the Category Three', 'This is the description of the Category Three', 'inactive', 'concerto.jpg', 0, 0, NULL, '2018-04-12 08:09:00', '2018-04-12 08:09:00');

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
(1, 1, 'published', 'Post One', 'post-one', 'Subtitle Category One', 'This is the excerpt of the Category one', 'This is the description of the Category one', 'bmw.jpg', 1, 1, NULL, NULL, '2018-04-12 08:09:00', '2018-04-12 08:09:00'),
(2, 2, 'published', 'Post Two', 'post-two', 'Subtitle Post Two', 'This is the excerpt of the Category TwoTwo', 'This is the description of the Category Two', 'berlin.jpg', 1, 1, NULL, NULL, '2018-04-12 08:09:00', '2018-04-12 08:09:00'),
(3, 2, 'published', 'Post Three', 'post-three', 'Subtitle Category Three', 'This is the excerpt of the Category ThreeThree', 'This is the description of the Category Three', 'cha-cha-cha.jpg', 1, 1, NULL, NULL, '2018-04-12 08:09:00', '2018-04-12 08:09:00'),
(4, 1, 'published', 'Post Four', 'post-four', 'Subtitle Category One', 'This is the excerpt of the Category Four', 'This is the description of the Category Four', 'concert.jpg', 3, 1, NULL, NULL, '2018-04-12 08:09:00', '2018-04-12 08:09:00');

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
(1, 'Dance', 'dance', '2018-04-12 08:09:00', '2018-04-12 08:09:00'),
(2, 'Artes plasticas', 'artes-plasticas', '2018-04-12 08:09:00', '2018-04-12 08:09:00'),
(3, 'Theather', 'theather', '2018-04-12 08:09:00', '2018-04-12 08:09:00'),
(4, 'Music', 'music', '2018-04-12 08:09:00', '2018-04-12 08:09:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profiles`
--

CREATE TABLE `profiles` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `chanel_id` int(11) NOT NULL DEFAULT '-1',
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
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

INSERT INTO `profiles` (`id`, `user_id`, `chanel_id`, `slug`, `birthday`, `about_user`, `image`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, -1, 'profile_rafael-munoz', NULL, NULL, 'user.png', '2018-04-12 08:09:00', '2018-04-12 08:09:00', NULL),
(2, 2, -1, 'profile_enrique-kike-munoz-botschka', NULL, NULL, 'user.png', '2018-04-12 08:09:00', '2018-04-12 08:09:00', NULL),
(3, 3, -1, 'profile_amelie-munoz-botschka', NULL, NULL, 'user.png', '2018-04-12 08:09:00', '2018-04-12 08:09:00', NULL),
(4, 4, -1, 'profileteresa-prieto', NULL, NULL, 'user.png', '2018-04-12 08:15:09', '2018-04-12 08:15:09', NULL),
(5, 5, -1, 'profilemaria-la-o', NULL, NULL, 'user.png', '2018-04-12 08:17:19', '2018-04-12 08:17:19', NULL),
(6, 4, -1, 'profile-teresa-prieto', NULL, NULL, 'user.png', '2018-04-12 12:30:15', '2018-04-12 12:30:15', NULL);

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
(1, 'Admin', 'admin', '2018-04-12 08:09:00', '2018-04-12 08:09:00'),
(2, 'Author', 'author', '2018-04-12 08:09:00', '2018-04-12 08:09:00'),
(3, 'Subscriber', 'subscriber', '2018-04-12 08:09:00', '2018-04-12 08:09:00');

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
(1, 1, 'Subcategory One-One', 'Subtitle Subcategory One-One', 'subcategory-one-one', 'This is the excerpt of the Subcategory one-one', 'active', 'This is the description of the Subcategory one-one', 'bmw.jpg', 1, 1, NULL, '2018-04-12 08:09:00', '2018-04-12 08:09:00'),
(2, 1, 'Subcategory One-Two', 'Subtitle Subcategory One-Two', 'subcategory-one-two', 'This is the excerpt of the Subcategory One-Two', 'active', 'This is the description of the Subcategory One-Two', 'berlin.jpg', 1, 1, NULL, '2018-04-12 08:09:00', '2018-04-12 08:09:00'),
(3, 2, 'Subcategory Two-One', 'Subtitle Subcategory Two-one', 'subcategory-two-one', 'This is the excerpt of the Subcategory Two-one', 'inactive', 'This is the description of the Subcategory Two-one', 'concert.jpg', 0, 0, NULL, '2018-04-12 08:09:00', '2018-04-12 08:09:00'),
(4, 3, 'Subcategory Three-One', 'Subtitle Subcategory Three-one', 'subcategory-three-one', 'This is the excerpt of the Subcategory Three-one', 'inactive', 'This is the description of the Subcategory Three-one', 'concerto.jpg', 0, 0, NULL, '2018-04-12 08:09:00', '2018-04-12 08:09:00');

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
(1, 'Rafael Muñoz', 'rafael-munoz', 'rafaelmunoznl@yahoo.com', '$2y$10$2Ihxcl5nCZoi8Yyl.bUj.urE4XVU..beKGs8RnEr1msojg96ZuFHy', 1, NULL, '2018-04-12 08:09:00', '2018-04-12 08:09:00'),
(2, 'Enrique (Kike) Muñoz Botschka', 'enrique-kike-munoz-botschka', 'kike901@gmail.com', '$2y$10$YcFEMu8iMiM/7/DtScY3fe0FFnIilX6CCeyElQ45xHilp5qMtdVCW', 2, NULL, '2018-04-12 08:09:00', '2018-04-12 08:09:00'),
(3, 'Amelie Muñoz Botschka', 'amelie-munoz-botschka', 'amelie@yahoo.com', '$2y$10$lgBVL.m29szb25NEoO5Ej.26xxmRoA0gt.U2J4cTJNMGVxDQlO17y', 3, NULL, '2018-04-12 08:09:00', '2018-04-12 08:09:00'),
(4, 'Teresa Prieto', 'teresa-prieto', 'teresita@prietos.com', '$2y$10$v/od3PJO4l3bCCW6LbXUFuizHv5./Sd9rgcItOfTZyHExNUFIhFBe', 3, NULL, '2018-04-12 08:15:09', '2018-04-12 08:15:09'),
(5, 'Maria La O', 'maria-la-o', 'marialao@saving.com', '$2y$10$wyNXugOMkjJe1uFYQvnW9./N7NRaxOehjT5IHY/riDNA.u.b8VetK', 3, NULL, '2018-04-12 08:17:19', '2018-04-12 08:17:19'),
(6, 'Jesus de Nazarreth', 'jesus-de-nazarreth', 'jesus@nazareth.com', '$2y$10$MqmawFQu7zJawGxnRDQZ6OX2/ZEzZn0vKBXZraGToneW/Y1O8Zbyq', 3, 'wSFNa9zQfHWYuFHzQ5b9VakQ1p6JN65QzyatnNXxhoUUdW9ZJ8xcr7gp7anR', '2018-04-12 08:55:16', '2018-04-12 08:55:16'),
(7, 'Manolo del Valle', 'manolo-del-valle', 'm.valle@monolon.com', '$2y$10$ipGz3gOB0jypf.vdQK/IkubrTuYcQu2ZTZiAT5aXX0jqVvyHM2OLi', 3, NULL, '2018-04-12 09:03:23', '2018-04-12 09:03:23');

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
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=330;

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

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
