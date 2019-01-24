<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
	<link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="<?php bloginfo('stylesheet_url');?>" />
    <title><?php the_title(); ?></title>
	<?php wp_head(); ?>

</head>
<body>
	<!--HEADER-->
	<header>
		<a href="#"><img src="<?php bloginfo('template_url')?>/img/logo.png" alt="logo de Green office" /></a>
		<nav>
		<?php $menu = wp_nav_menu(['echo'=>false]);
		echo strip_tags($menu, '<a>') ?>
		</nav>
	</header>
	<!--MAIN CONTENT-->
	<main>
