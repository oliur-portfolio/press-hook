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

    // Sticky Price effect Items
    const stickyPriceCards = document.querySelector(".sticky-price-area");
    const priceCards = document.querySelector(".price-tab__cards--show");
    const priceCardsContainer = document.querySelector(".price-tab__container");
    const priceCardsContainerTop = priceCardsContainer.offsetTop;
    const priceCardsHeight = priceCards.offsetHeight;
    const priceCardEnd = priceCardsContainerTop + priceCardsHeight;

    // Set PriceCard Container Height
    priceCardsContainer.style.height = `${priceCardsHeight}px`;

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

                    priceTabCards.forEach((item) => {
                        if (item.classList.contains("price-tab__cards--show")) {
                            priceCardsContainer.style.height = `${item.offsetHeight}px`;
                        }
                    });
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
                    }
                }
            });
        });
    };

    // priceTabBtns.forEach((btn) => {
    //     const btnText = btn.textContent;
    //     const btnTextArr = btnText.trim().split(" ");
    //     const priceBtnMobileIcon = btnTextArr[0];
    //     const priceBtnMobile =
    //         btnTextArr[btnTextArr.length - 1].charAt(0).toUpperCase() +
    //         btnTextArr[btnTextArr.length - 1].slice(1);

    //     btn.textContent = `${priceBtnMobileIcon} ${priceBtnMobile}`;
    // });

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
