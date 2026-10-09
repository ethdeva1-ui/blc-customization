<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function blc_customization_enqueue_assets() {

    /*
    |--------------------------------------------------------------------------
    | Global CSS
    |--------------------------------------------------------------------------
    | Keep this global only if style.css contains site-wide styles.
    */

    wp_enqueue_style(
        'blc-customization',
        BLC_CUSTOMIZATION_URL . 'assets/css/style.css',
        array(),
        BLC_CUSTOMIZATION_VERSION
    );

    /*
    |--------------------------------------------------------------------------
    | Consultation Notice Page
    |--------------------------------------------------------------------------
    */

    if ( is_page( 'consultation-notice' ) ) {

        wp_enqueue_style(
            'blc-consultation-notice',
            BLC_CUSTOMIZATION_URL . 'assets/css/consultation notice/consultation-notice.css',
            array( 'blc-customization' ),
            BLC_CUSTOMIZATION_VERSION
        );
    }

    /*
    |--------------------------------------------------------------------------
    | General Consultation Page
    |--------------------------------------------------------------------------
    */

    if ( is_page( 'general-consultation' ) ) {

        wp_enqueue_style(
            'blc-general-consultation-content',
            BLC_CUSTOMIZATION_URL . 'assets/css/general consultation/content.css',
            array( 'blc-customization' ),
            BLC_CUSTOMIZATION_VERSION
        );

        wp_enqueue_style(
            'blc-general-consultation-sidebar',
            BLC_CUSTOMIZATION_URL . 'assets/css/general consultation/sidebar.css',
            array( 'blc-customization' ),
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

    /*
    |--------------------------------------------------------------------------
    | WooCommerce My Account
    |--------------------------------------------------------------------------
    */

    if ( function_exists( 'is_account_page' ) && is_account_page() ) {

        wp_enqueue_style(
            'blc-my-account',
            BLC_CUSTOMIZATION_URL . 'assets/css/my account/my-account.css',
            array( 'blc-customization' ),
            BLC_CUSTOMIZATION_VERSION
        );
    }
}

add_action(
    'wp_enqueue_scripts',
    'blc_customization_enqueue_assets'
);