<?php
define( 'PROJECT_DIR', dirname( __FILE__ ) );
define( 'TMP_DIR', PROJECT_DIR . '/tmp' );
define( 'WP_DIR', PROJECT_DIR . '/wordpress' );

/**
 * This is project's console commands configuration for Robo task runner.
 *
 * @see http://robo.li/
 */
class RoboFile extends \Robo\Tasks {

	public function wordpressSetup( $opts = [
		'wp-user' => 'admin',
		'wp-pw' => 'admin',
		'wp-theme-dir' => 'main',
		'wp-theme-name' => 'WP Main',
		'wp-email' => 'admin@example-website.com',
		'wp-db-name' => 'example-website',
		'wp-description' => 'Headless Wordpress!',
		'wp-plugins' => array(),
	] ) {
		$confirm = $this->io()->confirm( 'This will replace your current ' .
		'WordPress install. Are you sure you want to do this?', false );

		if ( ! $confirm ) {
			return;
		}

		$this->_exec( "mysql -uroot -proot -h 0.0.0.0 -e 'create user if not exists " . $opts['wp-db-name'] . "'" );
		$this->_exec( "mysql -uroot -proot -h 0.0.0.0 -e 'create database if not exists " . $opts['wp-db-name'] . "'" );
		$this->_exec( 'mysql -uroot -proot -h 0.0.0.0 -e "grant all privileges on ' . $opts['wp-db-name']
		. ' . * to ' . $opts['wp-db-name'] . "@localhost identified by '" . $opts['wp-db-name'] . "'\"" );
		$this->_exec( "mysql -uroot -proot -h 0.0.0.0 -e 'flush privileges'" );

		$this->wp( 'core download --version=4.9.4 --locale=en_GB --force' );
		$this->wp( 'core config --dbname=' . $opts['wp-db-name'] . ' --dbuser=' . $opts['wp-db-name'] . ' --dbpass=' . $opts['wp-db-name'] . ' --dbhost=0.0.0.0' );
		$this->wp( 'db drop --yes' );
		$this->wp( 'db create' );

		$install_command = implode( ' ', array(
			'core install',
			'--url=localhost:8080',
			'--title="' . $opts['wp-theme-name'] . '"',
			'--admin_user="' . $opts['wp-user'] . '"',
			'--admin_password="' . $opts['wp-pw'] . '"',
			'--admin_email="' . $opts['wp-email'] . '"',
			'--skip-email',
		) );

		$this->wp( $install_command );

		$this->wp( 'theme activate ' . $opts['wp-theme-dir'] );
		$this->wp( 'theme delete twentyfourteen' );
		$this->wp( 'theme delete twentyfifteen' );
		$this->wp( 'theme delete twentysixteen' );
		$this->wp( 'theme delete twentyseventeen' );

		$this->wp( 'plugin delete akismet' );
		$this->wp( 'plugin delete hello' );

		if ( is_array( $opts['wp-plugins'] ) && sizeof( $opts['wp-plugins'] ) > 0 ) {
			$installed_plugin_directories = $opts['wp-plugins'];
		} else {
			$installed_plugins = array_filter( glob( WP_DIR . '/wp-content/plugins/*' ), 'is_dir' );
			$installed_plugin_directories = array_filter( str_replace( WP_DIR . '/wp-content/plugins/', '', $installed_plugins ) );
		}

		if ( sizeof( $installed_plugin_directories ) > 0 ) {
			$plugins_command = 'plugin activate ' . ( implode( ' ', $installed_plugin_directories ) );
			$this->wp( $plugins_command );
		}

		// Pretty URL structure required for wp-json path to work correctly
		$this->wp( 'rewrite structure "/%year%/%monthnum%/%day%/%postname%/"' );

		// Set the site description
		$this->wp( 'option update blogdescription "' . $opts['wp-description'] . '"' );

		// Update the Hello World post
		$this->wp( 'post update 1 wp-content/themes/main/post-content/sample-post.txt '.
			'--post_title="Sample Post" --post_name=sample-post' );

		// Create homepage content
		$this->wp( 'post create wp-content/themes/main/post-content/index.txt '.
			'--post_type=page --post_status=publish --post_name=index '.
			'--post_title="Home"' );

		// Set up example menu
		$this->wp( 'menu create "Header Menu"' );
		$this->wp( 'menu item add-post header-menu 1' );
		$this->wp( 'menu item add-post header-menu 2' );
		$this->wp( 'menu location assign header-menu header-menu' );

		$this->io()->success( 'Run `yarn start` then log into WordPress at: http://localhost:8080/wp-admin (' . $opts['wp-user'] . '/' . $opts['wp-pw'] . ')' );
	}

	public function server() {
		$this->wp( 'server' );
	}

	public function wp( $arg ) {
		$this->taskExec( 'wp' )
		 ->dir( WP_DIR )
		 ->rawArg( $arg )
		 ->run();
	}
}
