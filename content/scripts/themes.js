// Called once everything has finished loading
// Premature loading can cause bugs to occur due to the webinfo document not finished loading yet
window.addEventListener("load", function() {
    var theme = null;

    // Check if Cookies feature is enabled
    const cookiesEnabled = webinfo.features.includes("cookies");
    
    if (!cookiesEnabled) {
        console.warn("Some aspects of the \"Themes\" feature requires the \"Cookies\" feature to be enabled!");
    }

    // Load Theme Style Sheets
    webinfo.themes.forEach(x => {
        var y = document.createElement("link");
        y.rel = "stylesheet";
        y.href = "content/stylesheets/themes/" + x + ".css";
        document.head.appendChild(y);
    });

    if (GetParameter("theme") === null || GetParameter("theme") === undefined) {
        // Terminate script here if cookies feature isn't enabled
        if (!cookiesEnabled) {
            return;
        }
    
        // Set Default Theme if not set yet
        if (GetCookie("theme") === null || GetCookie("theme") === undefined) {
            SetCookie("theme", webinfo.defaultTheme);
        }

        // Set active theme
        theme = GetCookie("theme");
    } else {
        // Update theme to paramater
        theme = GetParameter("theme");

        // Set cookie to the ovewritten parameter
        if (cookiesEnabled) {
            SetCookie("theme", theme);
        }
    }

    // Apply theme
    document.documentElement.classList.add("theme-" + theme);
}, false);
