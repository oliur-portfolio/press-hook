document.addEventListener("DOMContentLoaded", () => {
    const priceTabBtns = document.querySelectorAll(".price-tab__nav-button");
    const priceTabCards = document.querySelectorAll(".price-tab__cards");
    const stickyPriceTabBtns = document.querySelectorAll(
        ".sticky-price-tab__nav-button"
    );
    const stickyPriceTabCards = document.querySelectorAll(
        ".sticky-price__cards"
    );
    const offerTabBtns = document.querySelectorAll(".price-offer__nav-button");
    const offerTabs = document.querySelectorAll(".price-offer__tab");
    const offerTabsMobile = document.querySelectorAll(
        ".price-offer__tab-mobile"
    );
    const planTabsMobile = document.querySelectorAll(
        ".price-offer__tab-mobile-plan"
    );
    const offerTabsName = document.querySelector(
        ".price-offer__nav-heading-name"
    );
    const priceTabCard = document.querySelectorAll(".price-tab__card");
    const stickyPriceTabCard = document.querySelectorAll(".sticky-price__card");

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
    const priceTabContainer = document.querySelector(".price-tab__container");

    const pricePremiumSection = document.querySelector(".price-premium-area");

    const priceCardsContainer = document.querySelector(".price-tab__container");
    const offerContainer = document.querySelector(".price-offer__content");
    const offerContainerMobile = document.querySelector(
        ".price-offer__content-mobile"
    );
    const plansContainerMobile = document.querySelector(
        ".price-offer__tab-mobile-plans"
    );

    // Sticky Price effect Items
    const stickyPriceCards = document.querySelector(".sticky-price-area");
    const priceCardsActive = document.querySelector(".price-tab__cards--show");

    const priceCardsContainerTop = priceCardsContainer.offsetTop;
    const priceCardsHeight = priceCardsActive.offsetHeight;
    const priceCardEnd = priceCardsContainerTop + priceCardsHeight;

    // Set PriceCard Container Height
    const priceHeightChange = (cards, cardsClass, elem) => {
        cards.forEach((item) => {
            if (item.classList.contains(cardsClass)) {
                elem.style.height = `${item.offsetHeight}px`;
            }

            if (item.classList.contains("price-offer__tab-mobile--show")) {
                const offerPlans = item.querySelectorAll(
                    ".price-offer__tab-mobile-plan"
                );

                offerPlans.forEach((plans) => {
                    if (
                        plans.classList.contains(
                            "price-offer__tab-mobile-plan--show"
                        )
                    ) {
                        offerContainerMobile.style.height = `${
                            plans.offsetHeight + 100
                        }px`;

                        console.log(plans.offsetHeight);
                    }
                });
            }
        });
    };

    // PriceTab Height Set
    priceHeightChange(
        priceTabCards,
        "price-tab__cards--show",
        priceCardsContainer
    );

    // OfferTab Height Set
    priceHeightChange(offerTabs, "price-offer__tab--show", offerContainer);

    // OfferTab mobile Height Set
    priceHeightChange(
        offerTabsMobile,
        "price-offer__tab-mobile--show",
        offerContainerMobile
    );

    // Mobile Offer Slide

    let brandPlanMobileIndex = 0;
    let expertPlanMobileIndex = 0;
    let agencyPlanMobileIndex = 0;

    function mobileBrandPlans(index) {
        offerTabsMobile.forEach((tabs) => {
            if (tabs.classList.contains("price-offer__tab-mobile--show")) {
                const offerPlans = tabs.querySelectorAll(
                    ".price-offer__tab-mobile-plan"
                );

                const mobileOfferName = tabs.querySelector(
                    ".price-offer__tab-mobile-heading-text"
                );

                offerPlans.forEach((planTab) => {
                    planTab.classList.remove(
                        "price-offer__tab-mobile-plan--show"
                    );
                });

                offerPlans[index].classList.add(
                    "price-offer__tab-mobile-plan--show"
                );

                if (index === 1) {
                    mobileOfferName.textContent = "Pro";
                } else if (index === 2) {
                    mobileOfferName.textContent = "Premium";
                } else {
                    mobileOfferName.textContent = "Basic";
                }

                priceHeightChange(
                    offerTabsMobile,
                    "price-offer__tab-mobile--show",
                    offerContainerMobile
                );
            }
        });
    }

    function mobileExpertPlans(index) {
        offerTabsMobile.forEach((tabs) => {
            if (tabs.classList.contains("price-offer__tab-mobile--show")) {
                const offerPlans = tabs.querySelectorAll(
                    ".price-offer__tab-mobile-plan"
                );

                const mobileOfferName = tabs.querySelector(
                    ".price-offer__tab-mobile-heading-text"
                );

                offerPlans.forEach((planTab) => {
                    planTab.classList.remove(
                        "price-offer__tab-mobile-plan--show"
                    );
                });

                offerPlans[index].classList.add(
                    "price-offer__tab-mobile-plan--show"
                );

                if (index === 1) {
                    mobileOfferName.textContent = "Pro";
                } else if (index === 2) {
                    mobileOfferName.textContent = "Premium";
                } else {
                    mobileOfferName.textContent = "Basic";
                }

                priceHeightChange(
                    offerTabsMobile,
                    "price-offer__tab-mobile--show",
                    offerContainerMobile
                );
            }
        });
    }

    function mobileAgencyPlans(index) {
        offerTabsMobile.forEach((tabs) => {
            if (tabs.classList.contains("price-offer__tab-mobile--show")) {
                const offerPlans = tabs.querySelectorAll(
                    ".price-offer__tab-mobile-plan"
                );

                const mobileOfferName = tabs.querySelector(
                    ".price-offer__tab-mobile-heading-text"
                );

                offerPlans.forEach((planTab) => {
                    planTab.classList.remove(
                        "price-offer__tab-mobile-plan--show"
                    );
                });

                offerPlans[index].classList.add(
                    "price-offer__tab-mobile-plan--show"
                );

                if (index === 1) {
                    mobileOfferName.textContent = "Pro";
                } else if (index === 2) {
                    mobileOfferName.textContent = "Premium";
                } else {
                    mobileOfferName.textContent = "Basic";
                }

                priceHeightChange(
                    offerTabsMobile,
                    "price-offer__tab-mobile--show",
                    offerContainerMobile
                );
            }
        });
    }

    const brandPlanLeftArrow = document.querySelector(
        ".price-offer__tab-mobile--brand .price-offer__tab-mobile-heading-arrow--left"
    );

    const brandPlanRightArrow = document.querySelector(
        ".price-offer__tab-mobile--brand .price-offer__tab-mobile-heading-arrow--right"
    );

    const expertPlanLeftArrow = document.querySelector(
        ".price-offer__tab-mobile--expert .price-offer__tab-mobile-heading-arrow--left"
    );

    const expertPlanRightArrow = document.querySelector(
        ".price-offer__tab-mobile--expert .price-offer__tab-mobile-heading-arrow--right"
    );

    const agencyPlanLeftArrow = document.querySelector(
        ".price-offer__tab-mobile--agency .price-offer__tab-mobile-heading-arrow--left"
    );

    const agencyPlanRightArrow = document.querySelector(
        ".price-offer__tab-mobile--agency .price-offer__tab-mobile-heading-arrow--right"
    );

    const defaultSetMobilePlan = (currentIndex, arrowItem, targetItem) => {
        if (currentIndex === 0) {
            arrowItem.classList.add(
                "price-offer__tab-mobile-heading-arrow--disable"
            );
            arrowItem.disabled = true;
        }
    };

    defaultSetMobilePlan(brandPlanMobileIndex, brandPlanLeftArrow);
    defaultSetMobilePlan(expertPlanMobileIndex, expertPlanLeftArrow);
    defaultSetMobilePlan(agencyPlanMobileIndex, agencyPlanLeftArrow);

    brandPlanRightArrow.addEventListener("click", () => {
        brandPlanLeftArrow.classList.remove(
            "price-offer__tab-mobile-heading-arrow--disable"
        );
        brandPlanLeftArrow.disabled = false;

        brandPlanMobileIndex++;

        offerTabsMobile.forEach((tabs) => {
            if (tabs.classList.contains("price-offer__tab-mobile--show")) {
                const offerPlans = tabs.querySelectorAll(
                    ".price-offer__tab-mobile-plan"
                );

                if (brandPlanMobileIndex > offerPlans.length - 2) {
                    brandPlanRightArrow.classList.add(
                        "price-offer__tab-mobile-heading-arrow--disable"
                    );
                    brandPlanRightArrow.disabled = true;
                }

                mobileBrandPlans(brandPlanMobileIndex);
            }
        });
    });

    brandPlanLeftArrow.addEventListener("click", () => {
        brandPlanRightArrow.classList.remove(
            "price-offer__tab-mobile-heading-arrow--disable"
        );
        brandPlanRightArrow.disabled = false;

        brandPlanMobileIndex--;

        offerTabsMobile.forEach((tabs) => {
            if (tabs.classList.contains("price-offer__tab-mobile--show")) {
                if (brandPlanMobileIndex === 0) {
                    brandPlanLeftArrow.classList.add(
                        "price-offer__tab-mobile-heading-arrow--disable"
                    );
                    brandPlanLeftArrow.disabled = true;
                }

                mobileBrandPlans(brandPlanMobileIndex);
            }
        });
    });

    expertPlanRightArrow.addEventListener("click", () => {
        expertPlanLeftArrow.classList.remove(
            "price-offer__tab-mobile-heading-arrow--disable"
        );
        expertPlanLeftArrow.disabled = false;

        expertPlanMobileIndex++;

        offerTabsMobile.forEach((tabs) => {
            if (tabs.classList.contains("price-offer__tab-mobile--show")) {
                const offerPlans = tabs.querySelectorAll(
                    ".price-offer__tab-mobile-plan"
                );

                if (expertPlanMobileIndex > offerPlans.length - 2) {
                    expertPlanRightArrow.classList.add(
                        "price-offer__tab-mobile-heading-arrow--disable"
                    );
                    expertPlanRightArrow.disabled = true;
                }

                mobileExpertPlans(expertPlanMobileIndex);
            }
        });
    });

    expertPlanLeftArrow.addEventListener("click", () => {
        expertPlanRightArrow.classList.remove(
            "price-offer__tab-mobile-heading-arrow--disable"
        );
        expertPlanRightArrow.disabled = false;

        expertPlanMobileIndex--;

        offerTabsMobile.forEach((tabs) => {
            if (tabs.classList.contains("price-offer__tab-mobile--show")) {
                if (expertPlanMobileIndex === 0) {
                    expertPlanLeftArrow.classList.add(
                        "price-offer__tab-mobile-heading-arrow--disable"
                    );
                    expertPlanLeftArrow.disabled = true;
                }

                mobileExpertPlans(expertPlanMobileIndex);
            }
        });
    });

    agencyPlanRightArrow.addEventListener("click", () => {
        agencyPlanLeftArrow.classList.remove(
            "price-offer__tab-mobile-heading-arrow--disable"
        );
        agencyPlanLeftArrow.disabled = false;

        agencyPlanMobileIndex++;

        offerTabsMobile.forEach((tabs) => {
            if (tabs.classList.contains("price-offer__tab-mobile--show")) {
                const offerPlans = tabs.querySelectorAll(
                    ".price-offer__tab-mobile-plan"
                );

                if (agencyPlanMobileIndex > offerPlans.length - 2) {
                    agencyPlanRightArrow.classList.add(
                        "price-offer__tab-mobile-heading-arrow--disable"
                    );
                    agencyPlanRightArrow.disabled = true;
                }

                mobileAgencyPlans(agencyPlanMobileIndex);
            }
        });
    });

    agencyPlanLeftArrow.addEventListener("click", () => {
        agencyPlanRightArrow.classList.remove(
            "price-offer__tab-mobile-heading-arrow--disable"
        );
        agencyPlanRightArrow.disabled = false;

        agencyPlanMobileIndex--;

        offerTabsMobile.forEach((tabs) => {
            if (tabs.classList.contains("price-offer__tab-mobile--show")) {
                if (agencyPlanMobileIndex === 0) {
                    agencyPlanLeftArrow.classList.add(
                        "price-offer__tab-mobile-heading-arrow--disable"
                    );
                    agencyPlanLeftArrow.disabled = true;
                }

                mobileAgencyPlans(agencyPlanMobileIndex);
            }
        });
    });

    // Sticky Price Scroll
    window.addEventListener("scroll", () => {
        const pageScrollOffset = window.pageYOffset;

        if (pageScrollOffset > priceCardEnd) {
            stickyPriceCards.classList.add("sticky-price-area--show");
        } else {
            stickyPriceCards.classList.remove("sticky-price-area--show");
        }
    });

    // Price Tabs Function
    const priceTabChange = (priceBtns) => {
        priceBtns.forEach((tabBtn, index) => {
            tabBtn.addEventListener("click", () => {
                const priceTabBtnClass = tabBtn.classList.contains(
                    "price-tab__nav-button"
                );
                const stickyPriceTabBtnClass = tabBtn.classList.contains(
                    "sticky-price-tab__nav-button"
                );

                // Remove active class from all tab buttons and contents
                priceTabBtns.forEach((btn) =>
                    btn.classList.remove("price-tab__nav-button--active")
                );
                stickyPriceTabBtns.forEach((btn) =>
                    btn.classList.remove("sticky-price-tab__nav-button--active")
                );
                offerTabBtns.forEach((btn) =>
                    btn.classList.remove("price-offer__nav-button--active")
                );

                priceTabCards.forEach((content) =>
                    content.classList.remove("price-tab__cards--show")
                );
                stickyPriceTabCards.forEach((content) =>
                    content.classList.remove("sticky-price__cards--show")
                );
                offerTabs.forEach((content) =>
                    content.classList.remove("price-offer__tab--show")
                );
                offerTabsMobile.forEach((content) =>
                    content.classList.remove("price-offer__tab-mobile--show")
                );

                // Add active class in selected tab buttons and contents
                if (priceTabBtnClass) {
                    if (index === 1) {
                        offerTabBtns[0].textContent = "Brand";
                        offerTabBtns[1].textContent = "Agency";
                        offerTabsName.textContent = "expert";
                        pricePremiumSection.style.display = "none";
                        priceTabContainer.classList.remove(
                            "price-tab__container--no-brand"
                        );
                    } else if (index === 2) {
                        offerTabBtns[0].textContent = "Brand";
                        offerTabBtns[1].textContent = "Expert";
                        offerTabsName.textContent = "agency";
                        pricePremiumSection.style.display = "none";
                        priceTabContainer.classList.remove(
                            "price-tab__container--no-brand"
                        );
                    } else {
                        offerTabBtns[0].textContent = "Expert";
                        offerTabBtns[1].textContent = "Agency";
                        offerTabsName.textContent = "brand";
                        pricePremiumSection.style.display = "block";
                        priceTabContainer.classList.add(
                            "price-tab__container--no-brand"
                        );
                    }

                    tabBtn.classList.add("price-tab__nav-button--active");
                    stickyPriceTabBtns[index].classList.add(
                        "sticky-price-tab__nav-button--active"
                    );

                    priceTabCards[index].classList.add(
                        "price-tab__cards--show"
                    );
                    stickyPriceTabCards[index].classList.add(
                        "sticky-price__cards--show"
                    );
                    offerTabs[index].classList.add("price-offer__tab--show");
                    offerTabsMobile[index].classList.add(
                        "price-offer__tab-mobile--show"
                    );
                } else if (stickyPriceTabBtnClass) {
                    if (index === 1) {
                        offerTabBtns[0].textContent = "Brand";
                        offerTabBtns[1].textContent = "Agency";
                        offerTabsName.textContent = "expert";
                        pricePremiumSection.style.display = "none";
                        priceTabContainer.classList.remove(
                            "price-tab__container--no-brand"
                        );
                    } else if (index === 2) {
                        offerTabBtns[0].textContent = "Brand";
                        offerTabBtns[1].textContent = "Expert";
                        offerTabsName.textContent = "agency";
                        pricePremiumSection.style.display = "none";
                        priceTabContainer.classList.remove(
                            "price-tab__container--no-brand"
                        );
                    } else {
                        offerTabBtns[0].textContent = "Expert";
                        offerTabBtns[1].textContent = "Agency";
                        offerTabsName.textContent = "brand";
                        pricePremiumSection.style.display = "block";
                        priceTabContainer.classList.add(
                            "price-tab__container--no-brand"
                        );
                    }

                    tabBtn.classList.add(
                        "sticky-price-tab__nav-button--active"
                    );
                    priceTabBtns[index].classList.add(
                        "price-tab__nav-button--active"
                    );

                    priceTabCards[index].classList.add(
                        "price-tab__cards--show"
                    );
                    stickyPriceTabCards[index].classList.add(
                        "sticky-price__cards--show"
                    );
                    offerTabs[index].classList.add("price-offer__tab--show");
                    offerTabsMobile[index].classList.add(
                        "price-offer__tab-mobile--show"
                    );
                } else {
                    const offerActiveTabName = tabBtn.textContent.toLowerCase();

                    if (offerActiveTabName === "expert") {
                        priceTabBtns[1].classList.add(
                            "price-tab__nav-button--active"
                        );
                        stickyPriceTabBtns[1].classList.add(
                            "sticky-price-tab__nav-button--active"
                        );
                        offerTabBtns[0].textContent = "Brand";
                        offerTabBtns[1].textContent = "Agency";
                        offerTabsName.textContent = "expert";
                        pricePremiumSection.style.display = "none";
                        priceTabContainer.classList.remove(
                            "price-tab__container--no-brand"
                        );

                        priceTabCards[1].classList.add(
                            "price-tab__cards--show"
                        );
                        stickyPriceTabCards[1].classList.add(
                            "sticky-price__cards--show"
                        );
                        offerTabs[1].classList.add("price-offer__tab--show");
                        offerTabsMobile[1].classList.add(
                            "price-offer__tab-mobile--show"
                        );
                    } else if (offerActiveTabName === "agency") {
                        priceTabBtns[2].classList.add(
                            "price-tab__nav-button--active"
                        );
                        stickyPriceTabBtns[2].classList.add(
                            "sticky-price-tab__nav-button--active"
                        );
                        offerTabBtns[0].textContent = "Brand";
                        offerTabBtns[1].textContent = "Expert";
                        offerTabsName.textContent = "agency";
                        pricePremiumSection.style.display = "none";
                        priceTabContainer.classList.remove(
                            "price-tab__container--no-brand"
                        );

                        priceTabCards[2].classList.add(
                            "price-tab__cards--show"
                        );
                        stickyPriceTabCards[2].classList.add(
                            "sticky-price__cards--show"
                        );
                        offerTabs[2].classList.add("price-offer__tab--show");
                        offerTabsMobile[2].classList.add(
                            "price-offer__tab-mobile--show"
                        );
                    } else {
                        priceTabBtns[0].classList.add(
                            "price-tab__nav-button--active"
                        );
                        stickyPriceTabBtns[0].classList.add(
                            "sticky-price-tab__nav-button--active"
                        );
                        offerTabBtns[0].textContent = "Expert";
                        offerTabBtns[1].textContent = "Agency";
                        offerTabsName.textContent = "brand";
                        pricePremiumSection.style.display = "block";
                        priceTabContainer.classList.add(
                            "price-tab__container--no-brand"
                        );

                        priceTabCards[0].classList.add(
                            "price-tab__cards--show"
                        );
                        stickyPriceTabCards[0].classList.add(
                            "sticky-price__cards--show"
                        );
                        offerTabs[0].classList.add("price-offer__tab--show");
                        offerTabsMobile[0].classList.add(
                            "price-offer__tab-mobile--show"
                        );
                    }
                }

                // PriceTab Height Set
                priceHeightChange(
                    priceTabCards,
                    "price-tab__cards--show",
                    priceCardsContainer
                );

                // OfferTab Height Set
                priceHeightChange(
                    offerTabs,
                    "price-offer__tab--show",
                    offerContainer
                );

                priceHeightChange(
                    planTabsMobile,
                    "price-offer__tab-mobile-plan--show",
                    plansContainerMobile
                );

                // OfferTab mobile Height Set
                priceHeightChange(
                    offerTabsMobile,
                    "price-offer__tab-mobile--show",
                    offerContainerMobile
                );
            });
        });
    };

    // Price Card Tabs
    priceTabChange(priceTabBtns);

    // Sticky Price Card Tabs
    priceTabChange(stickyPriceTabBtns);

    // Offer Tabs
    priceTabChange(offerTabBtns);

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
});
