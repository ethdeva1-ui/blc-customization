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
        'blc-customization',
        BLC_CUSTOMIZATION_URL . 'assets/js/main.js',
        array(),
        BLC_CUSTOMIZATION_VERSION,
        true
    );
}

add_action(
    'wp_enqueue_scripts',
    'blc_customization_enqueue_assets'
);