(function () {


    const consultationData = {


        hypertension: {

            category:
                "Maintenance medication renewal/refill — Hypertension",

            cart:
                "Maintenance Medication Refills Hypertension",

            diagnosis:
                "Established/stable high blood pressure.",

            medications: [
                "Amlodipine",
                "Losartan",
                "Lisinopril",
                "Hydrochlorothiazide (HCTZ)",
                "Valsartan",
                "Metoprolol succinate ER"
            ]

        },


        cholesterol: {

            category:
                "Maintenance medication renewal/refill — Cholesterol",

            cart:
                "Maintenance Medication Refills Cholesterol",

            diagnosis:
                "Established hyperlipidemia/high cholesterol.",

            medications: [
                "Atorvastatin",
                "Rosuvastatin",
                "Simvastatin",
                "Pravastatin"
            ]

        },


        diabetes: {

            category:
                "Maintenance medication renewal/refill — Type 2 diabetes",

            cart:
                "Maintenance Medication Refills Type 2 Diabetes",

            diagnosis:
                "Established type 2 diabetes.",

            medications: [
                "Metformin",
                "Metformin ER",
                "Glipizide"
            ]

        },


        thyroid: {

            category:
                "Maintenance medication renewal/refill — Thyroid",

            cart:
                "Maintenance Medication Refills Thyroid",

            diagnosis:
                "Established hypothyroidism.",

            medications: [
                "Levothyroxine"
            ]

        },


        "cold-cough": {

            category:
                "Cold/cough/upper respiratory",

            cart:
                "Everyday and Minor Health Concerns Cold",

            diagnosis:
                "Uncomplicated cold/URI symptoms; cough; selected bronchospasm.",

            medications: [
                "Benzonatate",
                "Fluticasone nasal spray",
                "Albuterol inhaler"
            ]

        },


        "sinus-allergy": {

            category:
                "Sinus / allergy",

            cart:
                "Everyday and Minor Health Concerns Sinus",

            diagnosis:
                "Allergic rhinitis; selected sinus complaints; bacterial sinusitis when diagnosed.",

            medications: [
                "Cetirizine",
                "Loratadine",
                "Fexofenadine",
                "Fluticasone nasal spray",
                "Azelastine nasal spray",
                "Amoxicillin/clavulanate",
                "Amoxicillin",
                "Doxycycline"
            ]

        },


        urinary: {

            category:
                "Urinary",

            cart:
                "Everyday and Minor Health Concerns Urinary",

            diagnosis:
                "Uncomplicated lower UTI when clinically appropriate.",

            medications: [
                "Nitrofurantoin",
                "Trimethoprim-sulfamethoxazole",
                "Fosfomycin",
                "Phenazopyridine"
            ]

        },


        dermatitis: {

            category:
                "Skin — dermatitis/eczema",

            cart:
                "Skin Hair and Eye Care Dermatitis",

            diagnosis:
                "Selected dermatitis, eczema, inflammatory rash.",

            medications: [
                "Hydrocortisone topical",
                "Triamcinolone topical",
                "Desonide topical"
            ]

        },


        acne: {

            category:
                "Skin — acne",

            cart:
                "Skin Hair and Eye Care Acne",

            diagnosis:
                "Acne.",

            medications: [
                "Tretinoin topical",
                "Clindamycin topical",
                "Benzoyl peroxide/clindamycin combination"
            ]

        },


        fungal: {

            category:
                "Skin — fungal",

            cart:
                "Skin Hair and Eye Care Fungal skin conditions",

            diagnosis:
                "Selected superficial fungal skin infections.",

            medications: [
                "Ketoconazole topical",
                "Clotrimazole topical",
                "Terbinafine topical"
            ]

        },


        eye: {

            category:
                "Eye",

            cart:
                "Skin Hair and Eye Care Eye concerns",

            diagnosis:
                "Selected bacterial conjunctivitis or allergic eye symptoms.",

            medications: [
                "Trimethoprim/polymyxin B ophthalmic",
                "Erythromycin ophthalmic ointment",
                "Olopatadine ophthalmic",
                "Ketotifen ophthalmic"
            ]

        },


        gastrointestinal: {

            category:
                "Gastrointestinal",

            cart:
                "Everyday and Minor Health Concerns Gastrointestinal",

            diagnosis:
                "Acid reflux/GERD/heartburn; selected nausea.",

            medications: [
                "Omeprazole",
                "Pantoprazole",
                "Famotidine",
                "Ondansetron"
            ]

        },


        hsv: {

            category:
                "HSV / cold sores",

            cart:
                "STI and Herpes Care HSV",

            diagnosis:
                "Oral or genital herpes management.",

            medications: [
                "Valacyclovir",
                "Acyclovir",
                "Famciclovir"
            ]

        },


        yeast: {

            category:
                "Vaginal health — Yeast infection",

            cart:
                "Womens Health Yeast infection",

            diagnosis:
                "Uncomplicated vulvovaginal candidiasis when appropriate.",

            medications: [
                "Fluconazole",
                "Clotrimazole",
                "Miconazole"
            ]

        },


        bv: {

            category:
                "Vaginal health — Bacterial vaginosis",

            cart:
                "Womens Health Bacterial vaginosis",

            diagnosis:
                "Bacterial vaginosis when clinically diagnosed.",

            medications: [
                "Metronidazole oral",
                "Metronidazole vaginal gel",
                "Clindamycin vaginal cream"
            ]

        },


        contraception: {

            category:
                "Contraception",

            cart:
                "Womens Health Contraception",

            diagnosis:
                "Initiation/renewal of selected contraceptive methods.",

            medications: [
                "Generic combined oral contraceptives",
                "Progestin-only pills",
                "Contraceptive patch",
                "Vaginal contraceptive ring"
            ]

        },


        emergency: {

            category:
                "Emergency contraception",

            cart:
                "Womens Health Emergency contraception",

            diagnosis:
                "Emergency contraception.",

            medications: [
                "Ulipristal acetate",
                "Levonorgestrel"
            ]

        },


        chlamydia: {

            category:
                "STI — Chlamydia",

            cart:
                "STI and Herpes Care Chlamydia",

            diagnosis:
                "Laboratory-confirmed or otherwise clinically managed chlamydial infection.",

            medications: [
                "Doxycycline",
                "Azithromycin (alternative in appropriate circumstances)",
                "Levofloxacin (alternative)"
            ]

        },


        gonorrhea: {

            category:
                "STI — Gonorrhea",

            cart:
                "STI and Herpes Care Gonorrhea",

            diagnosis:
                "Uncomplicated gonorrhea.",

            medications: [
                "Ceftriaxone IM",
                "Cefixime may be an alternative in specified circumstances"
            ]

        },


        trichomoniasis: {

            category:
                "STI — Trichomoniasis",

            cart:
                "STI and Herpes Care Trichomoniasis",

            diagnosis:
                "Trichomoniasis.",

            medications: [
                "Metronidazole",
                "Tinidazole"
            ]

        },


        menopause: {

            category:
                "Menopausal vaginal symptoms",

            cart:
                "Womens Health Menopausal vaginal symptoms",

            diagnosis:
                "Genitourinary symptoms of menopause, including vaginal dryness/discomfort.",

            medications: [
                "Local vaginal estradiol preparations, including cream/tablet/insert/ring, when appropriate"
            ]

        },


        migraine: {

            category:
                "Headache / migraine",

            cart:
                "Everyday and Minor Health Concerns Headache",

            diagnosis:
                "Selected migraine treatment; established migraine maintenance.",

            medications: [
                "Sumatriptan",
                "Rizatriptan",
                "Topiramate"
            ]

        },


        "hair-eyelash": {

            category:
                "Hair / eyelash-related established therapy",

            cart:
                "Skin Hair and Eye Care Established hair",

            diagnosis:
                "Selected eyelash hypotrichosis therapy.",

            medications: [
                "Bimatoprost ophthalmic (Latisse)"
            ]

        },


        other: {

            category:
                "Other minor non-emergency concerns",

            cart:
                "Other Minor Concerns",

            diagnosis:
                "Other conditions the licensed provider determines are appropriate for telehealth.",

            medications: [
                "Medication depends on the diagnosis and patient-specific clinical assessment"
            ]

        }

    };


    /* =====================================================
       LAB ORDER REQUEST DATA
       ===================================================== */

    const labData = {


        "general-health": {

            category:
                "General Health / Wellness",

            cart:
                "Lab Order Request General Health",

            tests:
                "CBC, CMP, lipid panel, A1C, fasting glucose, urinalysis"

        },


        "diabetes-metabolic": {

            category:
                "Diabetes / Metabolic Health",

            cart:
                "Lab Order Request Diabetes",

            tests:
                "A1C, fasting glucose, CMP, urine microalbumin/creatinine"

        },


        "cholesterol-cardiovascular": {

            category:
                "Cholesterol / Cardiovascular Risk",

            cart:
                "Lab Order Request Cholesterol",

            tests:
                "Lipid panel, CMP; sometimes ApoB or lipoprotein(a) when clinically appropriate"

        },


        "thyroid-health": {

            category:
                "Thyroid Health",

            cart:
                "Lab Order Request Thyroid Health",

            tests:
                "TSH, Free T4; sometimes Free T3 and thyroid antibodies depending on the concern"

        },


        "anemia-nutritional": {

            category:
                "Anemia / Nutritional Health",

            cart:
                "Lab Order Request Anemia",

            tests:
                "CBC, ferritin, iron/TIBC/transferrin saturation, vitamin B12, folate"

        },


        "vitamin-nutritional": {

            category:
                "Vitamin / Nutritional Testing",

            cart:
                "Lab Order Request Vitamin",

            tests:
                "Vitamin D, B12, folate; other testing based on symptoms/history"

        },


        "kidney-liver": {

            category:
                "Kidney / Liver Function",

            cart:
                "Lab Order Request Kidney",

            tests:
                "CMP, creatinine/eGFR, hepatic function panel, urinalysis"

        },


        "sexual-health-sti": {

            category:
                "Sexual Health & STI Testing",

            cart:
                "Lab Order Request Sexual Health and STI Testing",

            tests:
                "Chlamydia/gonorrhea NAAT, HIV Ag/Ab, syphilis testing, hepatitis B/C; trichomonas or site-specific testing when appropriate. CDC notes that STI testing should be individualized based on age, anatomy, sexual history, exposure sites and risk factors. (CDC)"

        },


        "urinary-concerns": {

            category:
                "Urinary Concerns",

            cart:
                "Lab Order Request Urinary Concerns",

            tests:
                "Urinalysis, urine culture; STI testing when clinically indicated"

        },


        "womens-health": {

            category:
                "Womens Health",

            cart:
                "Lab Order Request Womens Health",

            tests:
                "Pregnancy testing, CBC, iron studies, thyroid testing, STI testing, and other labs based on the concern"

        },


        "mens-general-health": {

            category:
                "Mens General Health",

            cart:
                "Lab Order Request Mens General Health",

            tests:
                "CBC, CMP, A1C/glucose, lipid panel, thyroid testing, PSA when clinically appropriate"

        },


        "other-specific-lab": {

            category:
                "Other / Specific Lab Request",

            cart:
                "Lab Order Request Other or Specific Lab Request",

            tests:
                "Patient enters the laboratory test(s) they would like to discuss with the provider"

        }

    };


    /* =====================================================
       ELEMENT REFERENCES
       ===================================================== */

    const welcomeContent =
        document.getElementById("blc-welcome-state");


    const selectionContent =
        document.getElementById("blc-selection-content");


    const categoryElement =
        document.getElementById("blc-selected-category");


    const referenceElement =
        document.getElementById("blc-reference-text");


    const diagnosisElement =
        document.getElementById("blc-diagnosis");


    const medicationsElement =
        document.getElementById("blc-medications");


    const standardContent =
        document.getElementById("blc-standard-content");


    const labContent =
        document.getElementById("blc-lab-content");


    const labTestsElement =
        document.getElementById("blc-lab-tests");


    const generalConsultation =
        document.getElementById("blc-general-consultation");


    const labConsultation =
        document.getElementById("blc-lab-consultation");


    /* =====================================================
       NORMALIZE TEXT
       ===================================================== */

    function normalizeText(value) {

        return (value || "")
            .replace(/&amp;/g, "&")
            .replace(/’/g, "'")
            .replace(/&/g, "and")
            .replace(/[\/\-]/g, " ")
            .replace(/\s+/g, " ")
            .trim()
            .toLowerCase();

    }


    /* =====================================================
       IDENTIFY LAB SUBCATEGORY
       ===================================================== */

    function getLabKey(button) {

        if (!button) {
            return null;
        }


        const wrapper =
            button.closest(".blc-main-category-wrapper");


        if (!wrapper) {
            return null;
        }


        const mainButton =
            wrapper.querySelector(".blc-main-category");


        if (!mainButton) {
            return null;
        }


        const mainName =
            normalizeText(
                mainButton.getAttribute("data-cart-category")
            );


        if (mainName !== "lab order request") {
            return null;
        }


        const categoryText =
            button.querySelector(".blc-category-text");


        const subName =
            normalizeText(
                categoryText
                    ? categoryText.textContent
                    : ""
            );


        const labKeyMap = {

            "general health":
                "general-health",

            "diabetes":
                "diabetes-metabolic",

            "diabetes metabolic health":
                "diabetes-metabolic",

            "cholesterol":
                "cholesterol-cardiovascular",

            "cholesterol cardiovascular risk":
                "cholesterol-cardiovascular",

            "thyroid":
                "thyroid-health",

            "thyroid health":
                "thyroid-health",

            "anemia":
                "anemia-nutritional",

            "anemia nutritional health":
                "anemia-nutritional",

            "vitamin":
                "vitamin-nutritional",

            "vitamin nutritional testing":
                "vitamin-nutritional",

            "kidney":
                "kidney-liver",

            "kidney liver function":
                "kidney-liver",

            "sexual health and sti testing":
                "sexual-health-sti",

            "urinary concerns":
                "urinary-concerns",

            "women's health":
                "womens-health",

            "men's general health":
                "mens-general-health",

            "other or specific lab request":
                "other-specific-lab"

        };


        return labKeyMap[subName] || null;

    }


    /* =====================================================
       UPDATE ADD TO CART URL
       ===================================================== */

    function updateCart(data) {

        if (!data || !data.cart) {
            return;
        }


        document
            .querySelectorAll(".blc-cart-button")
            .forEach(function (button) {

                const filteredCart =
                    data.cart.replace(/ /g, "+");


                button.href =
                    "/product/general-care-consultation/?attribute_consultation-type=General+Consultation+Fee&attribute_category="
                    + filteredCart;

            });

    }


    /* =====================================================
       SHOW STANDARD CONSULTATION CONTENT
       ===================================================== */

    function showStandardCategory(key) {

        const data =
            consultationData[key];


        if (!data) {
            return;
        }


        /* Hide welcome state */

        if (welcomeContent) {
            welcomeContent.style.display = "none";
        }


        /* Show existing consultation content */

        if (selectionContent) {
            selectionContent.style.display = "block";
        }


        if (standardContent) {
            standardContent.style.display = "";
        }


        if (labContent) {
            labContent.style.display = "none";
        }


        if (generalConsultation) {
            generalConsultation.style.display = "";
        }


        if (labConsultation) {
            labConsultation.style.display = "none";
        }


        categoryElement.textContent =
            data.category;


        referenceElement.textContent =
            "Reference information for potential diagnoses and commonly used medications.";


        diagnosisElement.textContent =
            data.diagnosis;


        medicationsElement.innerHTML =
            data.medications
                .map(function (medication) {
                    return "<li>" + medication + "</li>";
                })
                .join("");


        updateCart(data);

    }


    /* =====================================================
       SHOW LAB ORDER REQUEST CONTENT
       ===================================================== */

    function showLabCategory(labKey) {

        const data =
            labData[labKey];


        if (!data) {
            return;
        }


        /* Hide welcome state */

        if (welcomeContent) {
            welcomeContent.style.display = "none";
        }


        /* Show existing content container */

        if (selectionContent) {
            selectionContent.style.display = "block";
        }


        if (standardContent) {
            standardContent.style.display = "none";
        }


        if (labContent) {
            labContent.style.display = "";
        }


        if (generalConsultation) {
            generalConsultation.style.display = "none";
        }


        if (labConsultation) {
            labConsultation.style.display = "";
        }


        categoryElement.textContent =
            data.category;


        referenceElement.textContent =
            "Common laboratory tests a provider may consider based on the concern and clinical assessment.";


        labTestsElement.innerHTML =
            "<li>" + data.tests + "</li>";


        /*
         * The Lab Order Request Add to Cart button
         * stays under the general Lab Order Request
         * information.
         */

        const activeButton =
            document.querySelector(
                ".blc-category.active"
            );


        if (activeButton) {

            const categoryText =
                activeButton.querySelector(
                    ".blc-category-text"
                );


            const subCategory =
                categoryText
                    ? categoryText.textContent.trim()
                    : "";


            const cleanSubCategory =
                subCategory
                    .replace(/Men[’']s/g, "Mens")
                    .replace(/Women[’']s/g, "Womens");


            const cartCategory =
                "Lab Order Request " + cleanSubCategory;


            const filteredCart =
                cartCategory.replace(/ /g, "+");


            document
                .querySelectorAll(
                    "#blc-lab-consultation .blc-cart-button"
                )
                .forEach(function (button) {

                    button.href =
                        "/product/general-care-consultation/?attribute_consultation-type=General+Consultation+Fee&attribute_category="
                        + filteredCart;

                });

        }

    }


    /* =====================================================
       SHOW CATEGORY
       ===================================================== */

    function showCategory(key, button) {

        const labKey =
            getLabKey(button);


        if (labKey) {

            showLabCategory(labKey);

            return;

        }


        /*
         * If this is a normal consultation category,
         * continue using the existing consultation data.
         */

        showStandardCategory(key);

    }


    /* =====================================================
       UPDATE FROM SIDEBAR ACTIVE STATE
       ===================================================== */

    function updateFromActiveSidebar() {

        const activeButton =
            document.querySelector(
                ".blc-category.active"
            );


        if (!activeButton) {
            return;
        }


        const key =
            activeButton.getAttribute(
                "data-category"
            );


        /*
         * Lab Order Request uses the sidebar text
         * because some lab names overlap with other
         * consultation categories such as Cholesterol
         * and Thyroid.
         */

        showCategory(
            key,
            activeButton
        );

    }


    /* =====================================================
       SUBCATEGORY CLICK
       ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(
                    ".blc-category"
                );


            if (!button) {
                return;
            }


            const key =
                button.getAttribute(
                    "data-category"
                );


            showCategory(
                key,
                button
            );

        }
    );


    /* =====================================================
       WATCH SIDEBAR ACTIVE CLASS
       ===================================================== */

    /*
     * The sidebar script changes the active class when
     * a main category is clicked. This observer catches
     * that change so the content also updates when the
     * sidebar automatically selects the first subcategory.
     *
     * Closing a main category does not clear the selected
     * subcategory, so the last selected content remains
     * visible.
     */

    const sidebar =
        document.querySelector(".blc-sidebar-scroll");


    if (sidebar) {

        const observer =
            new MutationObserver(
                function (mutations) {

                    let activeStateChanged =
                        false;


                    mutations.forEach(
                        function (mutation) {

                            if (
                                mutation.type === "attributes" &&
                                mutation.attributeName === "class" &&
                                mutation.target.classList.contains(
                                    "blc-category"
                                )
                            ) {

                                activeStateChanged =
                                    true;

                            }

                        }
                    );


                    if (activeStateChanged) {
                        updateFromActiveSidebar();
                    }

                }
            );


        observer.observe(
            sidebar,
            {
                subtree: true,
                attributes: true,
                attributeFilter: ["class"]
            }
        );

    }


    /* =====================================================
       RESPONSIVE WELCOME POINTER
       ===================================================== */

    function updateWelcomePointer() {

        const arrow =
            document.querySelector(
                ".blc-welcome-pointer-arrow"
            );

        const title =
            document.querySelector(
                ".blc-welcome-pointer-title"
            );

        if (!arrow || !title) {
            return;
        }

        if (window.innerWidth <= 767) {

            arrow.textContent = "↑";

            title.textContent =
                "Select a category from above";

        } else {

            arrow.textContent = "←";

            title.textContent =
                "Select a category from the left";

        }

    }


    updateWelcomePointer();


    window.addEventListener(
        "resize",
        updateWelcomePointer
    );


    /* =====================================================
       INITIAL CONTENT STATE
       ===================================================== */

    /*
     * No consultation is selected when the page first
     * loads.
     *
     * The promotional welcome state is shown until the
     * user selects a consultation category.
     */

    if (welcomeContent) {
        welcomeContent.style.display = "";
    }


    if (selectionContent) {
        selectionContent.style.display = "none";
    }


    /*
     * If the sidebar already has an intentional active
     * selection, synchronize the content with it.
     *
     * Closing a main category does not clear the active
     * subcategory, so the last selected consultation
     * content remains visible.
     */

    updateFromActiveSidebar();


})();