<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function blc_customization_enqueue_assets() {

    /*
    |--------------------------------------------------------------------------
    | Global CSS
    |--------------------------------------------------------------------------
    | Includes Consultation Notice and General Consultation styles.
    */

    wp_enqueue_style(
        'blc-customization',
        BLC_CUSTOMIZATION_URL . 'assets/css/style.css',
        array(),
        BLC_CUSTOMIZATION_VERSION
    );

    /*
    |--------------------------------------------------------------------------
    | My Account CSS
    |--------------------------------------------------------------------------
    | Load only on the WooCommerce My Account page.
    */

    if ( function_exists( 'is_account_page' ) && is_account_page() ) {

        wp_enqueue_style(
            'blc-my-account',
            BLC_CUSTOMIZATION_URL . 'assets/css/my account/my-account.css',
            array( 'blc-customization' ),
            BLC_CUSTOMIZATION_VERSION
        );
    }

    /*
    |--------------------------------------------------------------------------
    | JavaScript
    |--------------------------------------------------------------------------
    */

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