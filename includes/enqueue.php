<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function blc_customization_enqueue_assets() {

    wp_enqueue_style(
        'blc-customization',
        BLC_CUSTOMIZATION_URL . 'assets/css/style.css',
        array(),
        BLC_CUSTOMIZATION_VERSION
    );

    wp_enqueue_script(
        'blc-customization-sidebar',
        BLC_CUSTOMIZATION_URL . 'assets/js/sidebar.js',
        array(),
        BLC_CUSTOMIZATION_VERSION,
        true
    );

    wp_enqueue_script(
        'blc-customization-content',
        BLC_CUSTOMIZATION_URL . 'assets/js/content.js',
        array( 'blc-customization-sidebar' ),
        BLC_CUSTOMIZATION_VERSION,
        true
    );
}

add_action(
    'wp_enqueue_scripts',
    'blc_customization_enqueue_assets'
);