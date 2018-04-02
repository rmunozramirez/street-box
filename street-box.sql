-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 02-04-2018 a las 09:36:39
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
  `title` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subtitle` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `excerpt` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
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
(1, 'Category One', 'category-one', 'Subtitle Category One', 'This is the excerpt of the Category one', 'This is the description of the Category one', 'active', 'bmw.jpg', 1, 1, NULL, '2018-03-31 16:39:44', '2018-03-31 16:39:44'),
(2, 'Category Two', 'category-two', 'Subtitle Category Two', 'This is the excerpt of the Category Two', 'This is the description of the Category Two', 'active', 'concerto.jpg', 1, 1, NULL, '2018-03-31 16:39:44', '2018-03-31 16:39:44'),
(3, 'Category Three', 'category-three', 'Subtitle Category Three', 'This is the excerpt of the Category Three', 'This is the description of the Category Three', 'inactive', 'cha-cha-cha.jpg', 0, 0, NULL, '2018-03-31 16:39:44', '2018-03-31 16:39:44'),
(4, 'Category Four', 'category-four', 'Subtitle Category Four', 'This is the excerpt of the Category Four', 'This is the description of the Category Four', 'inactive', 'bolliwood.jpg', 0, 0, NULL, '2018-03-31 16:39:44', '2018-03-31 16:39:44'),
(5, 'Category Five', 'category-five', 'Subtitle Category Five', 'This is the excerpt of the Category Five', 'This is the description of the Category Five', 'inactive', 'berlin.jpg', 0, 0, NULL, '2018-03-31 16:39:44', '2018-03-31 16:39:44');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `chanels`
--

CREATE TABLE `chanels` (
  `id` int(10) UNSIGNED NOT NULL,
  `subcategory_id` int(10) UNSIGNED NOT NULL,
  `status` enum('active','inactive','on_hold','banned') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'inactive',
  `title` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subtitle` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `excerpt` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `about_chanel` text COLLATE utf8mb4_unicode_ci,
  `image` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL,
  `video` varchar(80) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_featured` tinyint(1) NOT NULL DEFAULT '0',
  `likes` int(10) UNSIGNED NOT NULL,
  `is_testimonial` tinyint(1) NOT NULL DEFAULT '0',
  `web` varchar(160) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `facebook` varchar(160) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `googleplus` varchar(160) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twitter` varchar(160) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linkedin` varchar(160) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `youtube` varchar(160) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `chanels`
--

INSERT INTO `chanels` (`id`, `subcategory_id`, `status`, `title`, `slug`, `subtitle`, `excerpt`, `about_chanel`, `image`, `video`, `is_featured`, `likes`, `is_testimonial`, `web`, `facebook`, `googleplus`, `twitter`, `linkedin`, `youtube`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 'active', 'Chanel One-one-one', 'chanel-one-one-one', 'Subttle Chanel One-one-one', 'This is the excerpt of the Chanel One-one-one', 'This is the description of the Chanel One-one-one', 'bmw.jpg', 'bmw.mp4', 1, 10, 0, 'mysite.com', 'youtube.com', 'google.de', 'twitter.com', 'linkedin.com', 'youtube.com', '2018-03-31 16:39:44', '2018-03-31 16:39:44', NULL),
(2, 1, 'active', 'Chanel One-One-Two', 'chanel-one-one-two', 'Subttle Chanel One-One-Two', 'This is the excerpt of the Chanel One-One-Two', 'This is the description of the Chanel One-One-Two', 'auto-clasico.jpg', NULL, 1, 10, 0, 'mysite.com', 'youtube.com', 'google.de', 'twitter.com', 'linkedin.com', 'youtube.com', '2018-03-31 16:39:44', '2018-03-31 16:39:44', NULL),
(3, 2, 'active', 'Chanel One-two-One', 'chanel-one-two-one', 'Subttle Chanel One-two-One', 'This is the excerpt of the Chanel One-two-One', 'This is the description of the Chanel One-two-One', 'bad-wimpfen.jpg', NULL, 1, 10, 0, 'mysite.com', 'youtube.com', 'google.de', 'twitter.com', 'linkedin.com', 'youtube.com', '2018-03-31 16:39:44', '2018-03-31 16:39:44', NULL),
(4, 2, 'active', 'Chanel One-two-Two', 'chanel-one-two-two', 'Subttle Chanel One-two-Two', 'This is the excerpt of the Chanel One-two-Two', 'This is the description of the Chanel One-two-Two', 'ballet.jpg', NULL, 1, 10, 0, 'mysite.com', 'youtube.com', 'google.de', 'twitter.com', 'linkedin.com', 'youtube.com', '2018-03-31 16:39:44', '2018-03-31 16:39:44', NULL),
(5, 2, 'active', 'Chanel One-two-Three', 'chanel-one-two-three', 'Subttle Chanel One-two-Three', 'This is the excerpt of the Chanel One-two-Three', 'This is the description of the Chanel One-two-Three', 'kite.jpg', NULL, 1, 10, 0, 'mysite.com', 'youtube.com', 'google.de', 'twitter.com', 'linkedin.com', 'youtube.com', '2018-03-31 16:39:44', '2018-03-31 16:39:44', NULL),
(6, 1, 'active', 'Chanel two-one-one', 'chanel-two-one-one', 'Subttle Chanel two-one-one', 'This is the excerpt of the Chanel two-one-one', 'This is the description of the Chanel two-one-one', 'dance.jpg', NULL, 1, 10, 0, 'mysite.com', 'youtube.com', 'google.de', 'twitter.com', 'linkedin.com', 'youtube.com', '2018-03-31 16:39:44', '2018-03-31 16:39:44', NULL),
(7, 1, 'active', 'Chanel Three-one-one', 'chanel-three-one-one', 'Subttle Chanel Three-one-one', 'This is the excerpt of the Chanel Three-one-one', 'This is the description of the Chanel Three-one-one', 'berlin.jpg', NULL, 1, 10, 0, 'mysite.com', 'youtube.com', 'google.de', 'twitter.com', 'linkedin.com', 'youtube.com', '2018-03-31 16:39:44', '2018-03-31 16:39:44', NULL);

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
(210, '2014_10_12_000000_create_users_table', 1),
(211, '2014_10_12_100000_create_password_resets_table', 1),
(212, '2018_03_30_114433_create_posts_table', 1),
(213, '2018_03_31_095440_create_postcategories_table', 1),
(214, '2018_03_31_130322_create_subcategories_table', 1),
(215, '2018_03_31_142116_create_categories_table', 1),
(216, '2018_03_31_143733_create_chanels_table', 1);

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
  `title` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subtitle` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `excerpt` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
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
-- Volcado de datos para la tabla `postcategories`
--

INSERT INTO `postcategories` (`id`, `title`, `slug`, `subtitle`, `excerpt`, `about_category`, `status`, `image`, `is_featured`, `in_menu`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'Post category One', 'postcategory-one', 'Subtitle Sub Category One', 'This is the excerpt of the Category one', 'This is the description of the Category one', 'active', 'bmw.jpg', 1, 1, NULL, '2018-03-31 16:39:44', '2018-04-01 06:59:08'),
(2, 'Post category Two', 'postcategory-two', 'Subtitle Category Two', 'This is the excerpt of the Category Two', 'This is the description of the Category Two', 'active', 'berlin.jpg', 1, 1, NULL, '2018-03-31 16:39:44', '2018-04-01 07:29:39'),
(3, 'Post category Three', 'postcategory-three', 'Subtitle Category Three', 'This is the excerpt of the Category Three', 'This is the description of the Category Three', 'inactive', 'bolliwood.jpg', 0, 0, NULL, '2018-03-31 16:39:44', '2018-04-01 07:29:46');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `posts`
--

CREATE TABLE `posts` (
  `id` int(10) UNSIGNED NOT NULL,
  `postcategory_id` int(10) UNSIGNED NOT NULL,
  `status` enum('published','programmed','draf') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'published',
  `title` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subtitle` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `excerpt` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `body` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_featured` tinyint(1) NOT NULL DEFAULT '0',
  `likes` int(10) UNSIGNED NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `published_at` datetime DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `posts`
--

INSERT INTO `posts` (`id`, `postcategory_id`, `status`, `title`, `slug`, `subtitle`, `excerpt`, `body`, `image`, `is_featured`, `likes`, `deleted_at`, `published_at`, `created_at`, `updated_at`) VALUES
(1, 1, 'published', 'Post One', 'post-one', 'Subtitle Post One', 'This is the excerpt of the Category one', 'This is the description of the Category one', 'bmw.jpg', 1, 1, NULL, NULL, '2018-03-31 16:39:44', '2018-04-01 07:11:45'),
(2, 2, 'published', 'Post Two', 'post-two', 'Subtitle Post Two', 'This is the excerpt of the Category TwoTwo', 'This is the description of the Category Two', 'berlin.jpg', 1, 1, NULL, NULL, '2018-03-31 16:39:44', '2018-03-31 16:39:44'),
(3, 2, 'published', 'Post Three', 'post-three', 'Subtitle Post Three', 'This is the excerpt of the Category ThreeThree', 'This is the description of the Category Three', 'cha-cha-cha.jpg', 1, 1, NULL, NULL, '2018-03-31 16:39:44', '2018-04-01 07:11:55'),
(4, 1, 'published', 'Post Four', 'post-four', 'Subtitle post number four', 'This is the excerpt of the Category Four', '<h2>This is a good Post</h2>\r\n\r\n<p>Your bones don\'t break, mine do. That\'s clear. Your cells react to bacteria and viruses differently than mine. You don\'t get sick, I do. <em>That\'s also clear</em>. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. <strong>This is an strong</strong>.</p>\r\n<ul>\r\n	<li>Number one</li>\r\n	<li>Number two</li>\r\n	<li>Number three</li>\r\n		<ul>\r\n			<li>Number one</li>\r\n			<li>Number two</li>\r\n			<li>Number three</li>\r\n		</ul>\r\n</ul>\r\n<h3>This is ein h3</h3>\r\n<p>Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven\'t seen you in a year. And the good thing about dogs... is they got different dogs for different people. Like pit bulls. <br />The dog of dogs. Pit bull can be the right man\'s best friend... or the wrong man\'s worst enemy. You going to give me a dog for a pet, give me a pit bull. Give me... Raoul. Right, Omar? Give me Raoul.</p>\r\n<h4>This is ein h4</h4>\r\n<p>Your bones don\'t break, mine do. That\'s clear. Your cells react to bacteria and viruses differently than mine. You don\'t get sick, I do. That\'s also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We\'re on the same curve, just on opposite ends.</p>\r\n<hr />\r\n<p>Well, the way they make shows is, they make one show. That show\'s called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they\'re going to make more shows. Some pilots get picked and become television programs. Some don\'t, become nothing. She starred in one of the ones that became nothing.</p>\r\n<p>You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don\'t know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I\'m breaking now. We said we\'d say it was the snow that killed the other two, but it wasn\'t. Nature is lethal but it doesn\'t hold a candle to man.</p>', 'concert.jpg', 3, 1, NULL, NULL, '2018-03-31 16:39:44', '2018-04-01 10:58:31'),
(6, 3, 'published', 'Post Five', 'post-five', 'This is the post number five', 'This is the post number five excerpt', 'This is the post number five content', 'concerto.jpg', 0, 165, NULL, NULL, '2018-04-01 05:01:09', '2018-04-01 06:01:33');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subcategories`
--

CREATE TABLE `subcategories` (
  `id` int(10) UNSIGNED NOT NULL,
  `category_id` int(11) NOT NULL,
  `title` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subtitle` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL,
  `excerpt` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
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
(1, 1, 'Subcategory One-One', 'Subtitle Subcategory One-One', 'subcategory-one-one', 'This is the excerpt of the Subcategory one-one', 'active', 'This is the description of the Subcategory one-one', 'bmw.jpg', 1, 1, NULL, '2018-03-31 16:39:44', '2018-03-31 16:39:44'),
(2, 1, 'Subcategory One-Two', 'Subtitle Subcategory One-Two', 'subcategory-one-two', 'This is the excerpt of the Subcategory One-Two', 'active', 'This is the description of the Subcategory One-Two', 'berlin.jpg', 1, 1, NULL, '2018-03-31 16:39:44', '2018-03-31 16:39:44'),
(3, 2, 'Subcategory Two-One', 'Subtitle Subcategory Two-one', 'subcategory-two-one', 'This is the excerpt of the Subcategory Two-one', 'inactive', 'This is the description of the Subcategory Two-one', 'concert.jpg', 0, 0, NULL, '2018-03-31 16:39:44', '2018-03-31 16:39:44'),
(4, 3, 'Subcategory Three-One', 'Subtitle Subcategory Three-one', 'subcategory-three-one', 'This is the excerpt of the Subcategory Three-one', 'inactive', 'This is the description of the Subcategory Three-one', 'concerto.jpg', 0, 0, NULL, '2018-03-31 16:39:44', '2018-03-31 16:39:44'),
(5, 3, 'Subcategory Three-Two', 'This is the Subcategory 5', 'this-is-the-5', 'This is the Subcategory 5', 'active', 'This is the Subcategory 5', 'bolliwood.jpg', 0, 1, NULL, '2018-04-01 11:24:01', '2018-04-01 13:11:47'),
(6, 2, 'Subcategory Two-Two', 'Otra subcategoria', 'Otra subcategoria', 'Otra subcategoria', 'active', 'Otra subcategoria', 'gorrion.jpg', 0, 1, NULL, '2018-04-01 12:14:21', '2018-04-01 14:49:40');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Rafael Muñoz', 'rafaelmunoznl@yahoo.com', '$2y$10$uaJJMj3WK3yYU5/6yX/QCe4JkGEPBdqI2nRCjc2kRIyQawZby.Shq', NULL, '2018-03-31 16:39:44', '2018-03-31 16:39:44');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_title_unique` (`title`),
  ADD UNIQUE KEY `categories_slug_unique` (`slug`);

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
  ADD UNIQUE KEY `postcategories_slug_unique` (`slug`);

--
-- Indices de la tabla `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `posts_title_unique` (`title`),
  ADD UNIQUE KEY `posts_slug_unique` (`slug`),
  ADD KEY `posts_postcategory_id_index` (`postcategory_id`);

--
-- Indices de la tabla `subcategories`
--
ALTER TABLE `subcategories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `subcategories_title_unique` (`title`),
  ADD UNIQUE KEY `subcategories_slug_unique` (`slug`),
  ADD KEY `subcategories_category_id_index` (`category_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=217;

--
-- AUTO_INCREMENT de la tabla `postcategories`
--
ALTER TABLE `postcategories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `subcategories`
--
ALTER TABLE `subcategories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
