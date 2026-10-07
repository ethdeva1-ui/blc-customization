
(function () {

    const sidebar =
        document.querySelector(".blc-sidebar-scroll");

    if (!sidebar) {
        return;
    }

    const sidebarTitle =
        sidebar.querySelector(".blc-sidebar-title");

    const PRODUCT_ID = "2368";


    /* =====================================================
       GET ADD TO CART BUTTON
       ===================================================== */

    function getCartButton() {
        return document.querySelector(".blc-cart-button");
    }


    /* =====================================================
       UPDATE ADD TO CART LINK
       ===================================================== */

    function updateConsultationCartLink(
        mainCategory,
        subCategory
    ) {

        const cartButton = getCartButton();

        if (!cartButton || !mainCategory) {
            return;
        }

        let cartCategory = mainCategory.trim();

        if (subCategory) {

            const cleanSubCategory =
                subCategory.trim();

            if (cleanSubCategory) {

                cartCategory =
                    mainCategory.trim()
                    + " "
                    + cleanSubCategory;
            }
        }

        const encodedCategory =
            encodeURIComponent(cartCategory);

        const cartURL =
            "/?add-to-cart="
            + PRODUCT_ID
            + "&attribute_category="
            + encodedCategory;

        cartButton.href = cartURL;

        cartButton.setAttribute(
            "data-cart-category",
            cartCategory
        );

        cartButton.setAttribute(
            "data-main-category",
            mainCategory.trim()
        );

        if (subCategory) {

            cartButton.setAttribute(
                "data-subcategory",
                subCategory.trim()
            );

        } else {

            cartButton.removeAttribute(
                "data-subcategory"
            );
        }
    }


    /* =====================================================
       GET FIRST SUBCATEGORY
       ===================================================== */

    function getFirstSubcategory(mainCategory) {

        const wrapper =
            mainCategory.closest(
                ".blc-main-category-wrapper"
            );

        if (!wrapper) {
            return null;
        }

        const group =
            wrapper.querySelector(
                ".blc-subcategory-group"
            );

        if (!group) {
            return null;
        }

        return group.querySelector(
            ".blc-category"
        );
    }


    /* =====================================================
       SET ACTIVE MAIN CATEGORY + FIRST SUBCATEGORY
       ===================================================== */

    function activateMainCategory(mainCategory) {

        const wrapper =
            mainCategory.closest(
                ".blc-main-category-wrapper"
            );

        if (!wrapper) {
            return;
        }

        const subcategoryGroup =
            wrapper.querySelector(
                ".blc-subcategory-group"
            );

        if (!subcategoryGroup) {
            return;
        }


        /* Close all main categories */

        sidebar
            .querySelectorAll(".blc-main-category")
            .forEach(function (category) {

                category.classList.remove("open");

            });


        /* Close all subcategory groups */

        sidebar
            .querySelectorAll(".blc-subcategory-group")
            .forEach(function (group) {

                group.classList.remove("open");

            });


        /* Remove all active subcategories */

        sidebar
            .querySelectorAll(".blc-category")
            .forEach(function (category) {

                category.classList.remove("active");

            });


        /* Open selected main category */

        mainCategory.classList.add("open");

        subcategoryGroup.classList.add("open");


        /* Automatically select first subcategory */

        const firstSubcategory =
            getFirstSubcategory(mainCategory);

        if (!firstSubcategory) {

            const mainName =
                mainCategory.getAttribute(
                    "data-cart-category"
                );

            if (mainName) {
                updateConsultationCartLink(
                    mainName,
                    ""
                );
            }

            return;
        }


        firstSubcategory.classList.add("active");


        const categoryText =
            firstSubcategory.querySelector(
                ".blc-category-text"
            );

        const mainName =
            mainCategory.getAttribute(
                "data-cart-category"
            );

        const subName =
            categoryText
                ? categoryText.textContent.trim()
                : "";


        /* Update cart */

        if (mainName) {

            updateConsultationCartLink(
                mainName,
                subName
            );

        }


        /* Mobile title */

        if (
            window.innerWidth <= 767 &&
            sidebarTitle &&
            subName
        ) {

            sidebarTitle.textContent =
                subName;

        }
    }


    /* =====================================================
       DEFAULT ON PAGE LOAD
       ===================================================== */

    /*
     * No consultation category is selected or opened
     * automatically on page load.
     *
     * The sidebar starts completely collapsed. The content
     * area will show its promotional welcome state until
     * the user selects a consultation category.
     */


    /* =====================================================
       MOBILE DROPDOWN TOGGLE
       ===================================================== */

    if (sidebarTitle) {

        sidebarTitle.addEventListener(
            "click",
            function () {

                if (window.innerWidth <= 767) {

                    sidebar.classList.toggle(
                        "mobile-open"
                    );

                }

            }
        );

    }


    /* =====================================================
   MAIN CATEGORY CLICK
   ===================================================== */

sidebar
    .querySelectorAll(".blc-main-category")
    .forEach(function (mainCategory) {

        mainCategory.addEventListener(
            "click",
            function () {

                const wrapper =
                    mainCategory.closest(
                        ".blc-main-category-wrapper"
                    );

                if (!wrapper) {
                    return;
                }

                const subcategoryGroup =
                    wrapper.querySelector(
                        ".blc-subcategory-group"
                    );

                if (!subcategoryGroup) {
                    return;
                }


                /* If already open, close it */

                if (
                    mainCategory.classList.contains("open")
                ) {

                    mainCategory.classList.remove("open");

                    subcategoryGroup.classList.remove("open");

                    return;
                }


                /*
                 * If closed, open it and automatically
                 * select the first subcategory.
                 */

                activateMainCategory(
                    mainCategory
                );

            }
        );

    });


    /* =====================================================
       SUBCATEGORY CLICK
       ===================================================== */

    sidebar
        .querySelectorAll(".blc-category")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    /* Remove active state */

                    sidebar
                        .querySelectorAll(
                            ".blc-category"
                        )
                        .forEach(function (otherButton) {

                            otherButton.classList.remove(
                                "active"
                            );

                        });


                    /* Activate clicked subcategory */

                    button.classList.add(
                        "active"
                    );


                    /* Get subcategory text */

                    const categoryText =
                        button.querySelector(
                            ".blc-category-text"
                        );

                    if (!categoryText) {
                        return;
                    }


                    const subCategory =
                        categoryText.textContent.trim();


                    /* Find parent wrapper */

                    const wrapper =
                        button.closest(
                            ".blc-main-category-wrapper"
                        );

                    if (!wrapper) {
                        return;
                    }


                    /* Find parent main category */

                    const mainCategoryButton =
                        wrapper.querySelector(
                            ".blc-main-category"
                        );

                    if (!mainCategoryButton) {
                        return;
                    }


                    const mainCategory =
                        mainCategoryButton.getAttribute(
                            "data-cart-category"
                        );

                    if (!mainCategory) {
                        return;
                    }


                    /* Keep parent category open */

                    sidebar
                        .querySelectorAll(
                            ".blc-main-category"
                        )
                        .forEach(function (category) {

                            category.classList.remove(
                                "open"
                            );

                        });


                    mainCategoryButton.classList.add(
                        "open"
                    );


                    /* Keep parent subcategory group open */

                    const group =
                        wrapper.querySelector(
                            ".blc-subcategory-group"
                        );

                    if (group) {
                        group.classList.add("open");
                    }


                    /* Update Add to Cart */

                    updateConsultationCartLink(
                        mainCategory,
                        subCategory
                    );


                    /* Mobile title */

                    if (
                        window.innerWidth <= 767 &&
                        sidebarTitle
                    ) {

                        sidebarTitle.textContent =
                            subCategory;

                        sidebar.classList.remove(
                            "mobile-open"
                        );

                    }

                }
            );

        });


    /* =====================================================
       HANDLE WINDOW RESIZE
       ===================================================== */

    window.addEventListener(
        "resize",
        function () {

            if (
                window.innerWidth > 767 &&
                sidebarTitle
            ) {

                sidebarTitle.textContent =
                    "Choose Consultation Category";

            }

        }
    );


})();