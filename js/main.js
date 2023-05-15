document.addEventListener("DOMContentLoaded", () => {
    // Sticky Price effect Items
    const stickyPriceArea = document.querySelector(".sticky-price-area");
    const priceCardsActiveTab = document.querySelector(
        ".price-tab__cards--show"
    );
    const priceTabsContainer = document.querySelector(".price-tab__container");
    const priceOfferContainer = document.querySelector(".price-offer__content");

    // Toggle Price
    const stickyPriceTabCard = document.querySelectorAll(".sticky-price__card");
    const priceTabCard = document.querySelectorAll(".price-tab__card");
    const priceCheckInput = document.querySelector(
        ".price-billed-checkbox__input"
    );
    const stickyPriceCheckInput = document.querySelector(
        ".sticky-price-billed-checkbox__input"
    );
    const billedTexts = document.querySelectorAll(".price-tab__billed-text");
    const stickyBilledTexts = document.querySelectorAll(
        ".sticky-price-tab__nav-billed-text"
    );

    // Price Tab Effect
    const priceTabsContainerTop = priceTabsContainer.offsetTop;
    const priceTabsHeight = priceCardsActiveTab.offsetHeight;
    const priceTabsEnd = priceTabsContainerTop + priceTabsHeight;

    const priceTabButtons = document.querySelectorAll(".price-tab__nav-button");
    const priceTabs = document.querySelectorAll(".price-tab__cards");
    const stickyPriceTabButtons = document.querySelectorAll(
        ".sticky-price-tab__nav-button"
    );
    const stickyPriceTabs = document.querySelectorAll(".sticky-price__cards");

    const offerTabButtons = document.querySelectorAll(
        ".price-offer__nav-button"
    );
    const offerPriceTabs = document.querySelectorAll(".price-offer__tab");

    const offerTabNames = document.querySelectorAll(
        ".price-offer__nav-heading-name"
    );

    const offerTabButtonsContainer = document.querySelector(
        ".price-offer__nav-buttons"
    );

    const pricePremiumArea = document.querySelector(".price-premium-area");

    // Sticky Price Scroll
    window.addEventListener("scroll", () => {
        const pageScrollOffset = window.pageYOffset;

        if (pageScrollOffset > priceTabsEnd) {
            stickyPriceArea.classList.add("sticky-price-area--show");
        } else {
            stickyPriceArea.classList.remove("sticky-price-area--show");
        }
    });

    // Set Card/Offer Container Height Function
    const priceHeightChange = (cards, cardsClass, elem) => {
        cards.forEach((item) => {
            if (item.classList.contains(cardsClass)) {
                elem.style.height = `${item.offsetHeight}px`;
            }
        });
    };

    // Billed text Toggle Function
    const toggleBilledTexts = () => {
        billedTexts.forEach((billedText) => {
            billedText.classList.remove("price-tab__billed-text--active");
        });

        if (priceCheckInput.checked) {
            billedTexts[1].classList.add("price-tab__billed-text--active");
        } else {
            billedTexts[0].classList.add("price-tab__billed-text--active");
        }
    };

    // Sticky Billed text Toggle Function
    const stickyToggleBilledTexts = () => {
        stickyBilledTexts.forEach((billedText) => {
            billedText.classList.remove(
                "sticky-price-tab__nav-billed-text--active"
            );
        });

        if (stickyPriceCheckInput.checked) {
            stickyBilledTexts[1].classList.add(
                "sticky-price-tab__nav-billed-text--active"
            );
        } else {
            stickyBilledTexts[0].classList.add(
                "sticky-price-tab__nav-billed-text--active"
            );
        }
    };

    // Price Switched Function
    const togglePriceChecked = (element, elementClass) => {
        if (priceCheckInput.checked) {
            element.classList.add(elementClass);
            stickyPriceCheckInput.checked = true;
        } else {
            element.classList.remove(elementClass);
            stickyPriceCheckInput.checked = false;
        }
    };

    // Sticky Price Switched Function
    const stickyTogglePriceChecked = (element, elementClass) => {
        if (stickyPriceCheckInput.checked) {
            element.classList.add(elementClass);
            priceCheckInput.checked = true;
        } else {
            element.classList.remove(elementClass);
            priceCheckInput.checked = false;
        }
    };

    // Price Value Change Function
    const priceChange = (priceCard, priceCardMonth, priceCardAnnual) => {
        priceCard.forEach((card) => {
            const eachCardPrice = card.querySelector(priceCardMonth);
            eachCardPrice.classList.remove(priceCardAnnual);

            priceCheckInput.addEventListener("change", () => {
                togglePriceChecked(eachCardPrice, priceCardAnnual);
                toggleBilledTexts();
                stickyToggleBilledTexts();
            });

            stickyPriceCheckInput.addEventListener("change", () => {
                stickyTogglePriceChecked(eachCardPrice, priceCardAnnual);
                toggleBilledTexts();
                stickyToggleBilledTexts();
            });

            togglePriceChecked(eachCardPrice, priceCardAnnual);
            stickyTogglePriceChecked(eachCardPrice, priceCardAnnual);
            toggleBilledTexts();
            stickyToggleBilledTexts();
        });
    };

    // Price Change toggle
    priceChange(
        priceTabCard,
        ".price-tab__card-price",
        "price-tab__card-price--annually"
    );

    // Sticky Price Change toggle
    priceChange(
        stickyPriceTabCard,
        ".sticky-price__card-price",
        "sticky-price__card-price--annually"
    );

    // Offer Plan Mobile Slide Index
    let currentOfferBrandPlanIndex = 0;
    let currentOfferExpertPlanIndex = 0;
    let currentOfferAgencyPlanIndex = 0;

    // Offer Plans Function
    const handleOfferPlans = (index) => {
        offerPriceTabs.forEach((offerTab) => {
            if (offerTab.classList.contains("price-offer__tab--show")) {
                const offerPlanNames = offerTab.querySelectorAll(
                    ".price-offer__tab-mobile-heading-name"
                );

                const offerPlans = offerTab.querySelectorAll(
                    ".price-offer__tab-right .price-offer__plan"
                );

                offerPlanNames.forEach((offerTitle) =>
                    offerTitle.classList.remove(
                        "price-offer__tab-mobile-heading-name--show"
                    )
                );
                offerPlans.forEach((offerPlan) =>
                    offerPlan.classList.remove("price-offer__plan--show")
                );

                offerPlanNames[index].classList.add(
                    "price-offer__tab-mobile-heading-name--show"
                );
                offerPlans[index].classList.add("price-offer__plan--show");
            }
        });
    };

    // Mobile Offer Plans arrow button Function
    const handleOfferArrow = (currentIndex) => {
        offerPriceTabs.forEach((offerTab) => {
            if (offerTab.classList.contains("price-offer__tab--show")) {
                const offerPlanLeftArrow = offerTab.querySelector(
                    ".price-offer__tab-mobile-heading-arrow--left"
                );
                const offerPlanRightArrow = offerTab.querySelector(
                    ".price-offer__tab-mobile-heading-arrow--right"
                );

                offerPlanRightArrow.classList.remove(
                    "price-offer__tab-mobile-heading-arrow--disable"
                );

                // Handle Offer Right arrow
                offerPlanRightArrow.addEventListener("click", () => {
                    offerPlanLeftArrow.classList.remove(
                        "price-offer__tab-mobile-heading-arrow--disable"
                    );

                    offerPriceTabs.forEach((item) => {
                        if (item.classList.contains("price-offer__tab--show")) {
                            const offerPlans = item.querySelectorAll(
                                ".price-offer__tab-right .price-offer__plan"
                            );

                            if (currentIndex < offerPlans.length - 1) {
                                currentIndex++;
                                handleOfferPlans(currentIndex);

                                if (currentIndex === offerPlans.length - 1) {
                                    offerPlanRightArrow.classList.add(
                                        "price-offer__tab-mobile-heading-arrow--disable"
                                    );
                                }
                            }
                        }
                    });

                    // Set Price Tab Container Height
                    priceHeightChange(
                        priceTabs,
                        "price-tab__cards--show",
                        priceTabsContainer
                    );

                    // Set Offer Tab Container Height
                    priceHeightChange(
                        offerPriceTabs,
                        "price-offer__tab--show",
                        priceOfferContainer
                    );
                });

                // Handle Offer Left arrow
                offerPlanLeftArrow.addEventListener("click", () => {
                    offerPlanRightArrow.classList.remove(
                        "price-offer__tab-mobile-heading-arrow--disable"
                    );

                    if (currentIndex > 0) {
                        currentIndex--;
                        handleOfferPlans(currentIndex);

                        if (currentIndex === 0) {
                            offerPlanLeftArrow.classList.add(
                                "price-offer__tab-mobile-heading-arrow--disable"
                            );
                        }
                    }

                    // Set Price Tab Container Height
                    priceHeightChange(
                        priceTabs,
                        "price-tab__cards--show",
                        priceTabsContainer
                    );

                    // Set Offer Tab Container Height
                    priceHeightChange(
                        offerPriceTabs,
                        "price-offer__tab--show",
                        priceOfferContainer
                    );
                });
            }
        });
    };

    // Mobile Offer Plans arrow button Disable Function
    const setDefaultDisableArrow = () => {
        offerPriceTabs.forEach((offerTab) => {
            if (offerTab.classList.contains("price-offer__tab--show")) {
                const offerPlanLeftArrow = offerTab.querySelector(
                    ".price-offer__tab-mobile-heading-arrow--left"
                );

                offerPlanLeftArrow.classList.add(
                    "price-offer__tab-mobile-heading-arrow--disable"
                );
            }
        });
    };

    handleOfferPlans(currentOfferBrandPlanIndex);
    handleOfferArrow(currentOfferBrandPlanIndex);
    setDefaultDisableArrow();

    // Tab Buttons Specific Item
    const tabBtnEachItem = (currIndex) => {
        if (currIndex === 1) {
            handleOfferPlans(currentOfferExpertPlanIndex);
            handleOfferArrow(currentOfferExpertPlanIndex);
            pricePremiumArea.classList.add("price-premium-area--hide");
            priceTabsContainer.classList.remove(
                "price-tab__container--no-brand"
            );
        } else if (currIndex === 2) {
            handleOfferPlans(currentOfferAgencyPlanIndex);
            handleOfferArrow(currentOfferAgencyPlanIndex);
            pricePremiumArea.classList.add("price-premium-area--hide");
            priceTabsContainer.classList.remove(
                "price-tab__container--no-brand"
            );
        } else {
            handleOfferPlans(currentOfferBrandPlanIndex);
            handleOfferArrow(currentOfferBrandPlanIndex);
            pricePremiumArea.classList.remove("price-premium-area--hide");
            priceTabsContainer.classList.add("price-tab__container--no-brand");
        }
    };

    // Tab Change Function
    const tabChange = (tabBtns) => {
        tabBtns.forEach((tabBtn, index) => {
            tabBtn.addEventListener("click", () => {
                const priceTabBtnClass = tabBtn.classList.contains(
                    "price-tab__nav-button"
                );
                const stickyPriceTabBtnClass = tabBtn.classList.contains(
                    "sticky-price-tab__nav-button"
                );

                // Remove tab Buttons Class
                priceTabButtons.forEach((btn) =>
                    btn.classList.remove("price-tab__nav-button--active")
                );
                stickyPriceTabButtons.forEach((btn) =>
                    btn.classList.remove("sticky-price-tab__nav-button--active")
                );
                offerTabButtons.forEach((btn) =>
                    btn.classList.remove("price-offer__nav-button--active")
                );

                offerTabButtonsContainer.classList.remove(
                    "price-offer__nav-buttons--remove-last-or"
                );

                // Remove tab Class
                priceTabs.forEach((tab) =>
                    tab.classList.remove("price-tab__cards--show")
                );
                stickyPriceTabs.forEach((tab) =>
                    tab.classList.remove("sticky-price__cards--show")
                );
                offerPriceTabs.forEach((tab) =>
                    tab.classList.remove("price-offer__tab--show")
                );

                offerTabNames.forEach((offer) =>
                    offer.classList.remove(
                        "price-offer__nav-heading-name--show"
                    )
                );

                if (priceTabBtnClass) {
                    tabBtn.classList.add("price-tab__nav-button--active");
                    stickyPriceTabButtons[index].classList.add(
                        "sticky-price-tab__nav-button--active"
                    );
                    offerTabButtons[index].classList.add(
                        "price-offer__nav-button--active"
                    );

                    priceTabs[index].classList.add("price-tab__cards--show");
                    stickyPriceTabs[index].classList.add(
                        "sticky-price__cards--show"
                    );
                    offerPriceTabs[index].classList.add(
                        "price-offer__tab--show"
                    );

                    offerTabNames[index].classList.add(
                        "price-offer__nav-heading-name--show"
                    );

                    if (index === priceTabButtons.length - 1) {
                        offerTabButtonsContainer.classList.add(
                            "price-offer__nav-buttons--remove-last-or"
                        );
                    }

                    tabBtnEachItem(index);
                    setDefaultDisableArrow();
                } else if (stickyPriceTabBtnClass) {
                    tabBtn.classList.add(
                        "sticky-price-tab__nav-button--active"
                    );
                    priceTabButtons[index].classList.add(
                        "price-tab__nav-button--active"
                    );
                    offerTabButtons[index].classList.add(
                        "price-offer__nav-button--active"
                    );

                    priceTabs[index].classList.add("price-tab__cards--show");
                    stickyPriceTabs[index].classList.add(
                        "sticky-price__cards--show"
                    );
                    offerPriceTabs[index].classList.add(
                        "price-offer__tab--show"
                    );

                    offerTabNames[index].classList.add(
                        "price-offer__nav-heading-name--show"
                    );

                    if (index === stickyPriceTabButtons.length - 1) {
                        offerTabButtonsContainer.classList.add(
                            "price-offer__nav-buttons--remove-last-or"
                        );
                    }

                    tabBtnEachItem(index);
                    setDefaultDisableArrow();
                } else {
                    tabBtn.classList.add("price-offer__nav-button--active");
                    priceTabButtons[index].classList.add(
                        "price-tab__nav-button--active"
                    );
                    stickyPriceTabButtons[index].classList.add(
                        "sticky-price-tab__nav-button--active"
                    );

                    priceTabs[index].classList.add("price-tab__cards--show");
                    stickyPriceTabs[index].classList.add(
                        "sticky-price__cards--show"
                    );
                    offerPriceTabs[index].classList.add(
                        "price-offer__tab--show"
                    );

                    offerTabNames[index].classList.add(
                        "price-offer__nav-heading-name--show"
                    );

                    if (index === offerTabButtons.length - 1) {
                        offerTabButtonsContainer.classList.add(
                            "price-offer__nav-buttons--remove-last-or"
                        );
                    }

                    tabBtnEachItem(index);
                    setDefaultDisableArrow();
                }

                // Set Price Tab Container Height
                priceHeightChange(
                    priceTabs,
                    "price-tab__cards--show",
                    priceTabsContainer
                );

                // Set Offer Tab Container Height
                priceHeightChange(
                    offerPriceTabs,
                    "price-offer__tab--show",
                    priceOfferContainer
                );
            });
        });
    };

    // Price Tab Effect
    tabChange(priceTabButtons);

    // Price Tab Effect
    tabChange(stickyPriceTabButtons);

    // Price Tab Effect
    tabChange(offerTabButtons);

    // Set Price Tab Container Height
    priceHeightChange(priceTabs, "price-tab__cards--show", priceTabsContainer);

    // Set Offer Tab Container Height
    priceHeightChange(
        offerPriceTabs,
        "price-offer__tab--show",
        priceOfferContainer
    );

    // Update Set Tab heights on window resize
    window.addEventListener("resize", () => {
        // Set Price Tab Container Height
        priceHeightChange(
            priceTabs,
            "price-tab__cards--show",
            priceTabsContainer
        );

        // Set Offer Tab Container Height
        priceHeightChange(
            offerPriceTabs,
            "price-offer__tab--show",
            priceOfferContainer
        );
    });
});
