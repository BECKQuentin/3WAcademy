<?php get_header(); ?>

	<?php if (have_posts()) : ?>
	<?php while (have_posts()) : the_post(); ?>
		<article>
			<h2><i class="fa fa-pagelines"></i><?php the_title(); ?></h2>
			<?php the_content(); ?>
			<a href="<?php the_permalink(); ?>">Read more</a>
			<div class="clear"></div>
		</article>
		<?php endwhile; ?>
		<?php else : ?>
			<p>Aucun article !</p>
		<?php endif; ?>
<?php get_footer(); ?>


