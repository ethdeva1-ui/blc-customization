<?php

/**
 * Plugin Name: BLC Customization
 * Description: Custom CSS and JavaScript for Balanced Life Care.
 * Version: 1.0.0
 * Author: Ethelyn Matias
 * Text Domain: blc-customization
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

define( 'BLC_CUSTOMIZATION_VERSION', '1.0.0' );
define( 'BLC_CUSTOMIZATION_PATH', plugin_dir_path( __FILE__ ) );
define( 'BLC_CUSTOMIZATION_URL', plugin_dir_url( __FILE__ ) );

require_once BLC_CUSTOMIZATION_PATH . 'includes/enqueue.php';