
let currentLanguage = "ar";

function toggleLanguage() {

    const elements = document.querySelectorAll("[data-ar]");

    if (currentLanguage === "ar") {

        currentLanguage = "en";

        document.documentElement.lang = "en";
        document.documentElement.dir = "ltr";

        document.getElementById("languageBtn").textContent = "العربية";

    } else {

        currentLanguage = "ar";

        document.documentElement.lang = "ar";
        document.documentElement.dir = "rtl";

        document.getElementById("languageBtn").textContent = "English";
    }

    elements.forEach(function(element) {
        element.textContent = element.getAttribute(
            "data-" + currentLanguage
        );
    });
}
