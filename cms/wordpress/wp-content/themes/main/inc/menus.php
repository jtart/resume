<?php

// Add About Us menu
function register_menus() {
	register_nav_menu( 'header-menu', __( 'Header Menu', 'main' ) );
}
add_action( 'after_setup_theme', 'register_menus' );
