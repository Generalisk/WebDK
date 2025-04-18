// Called once everything has finished loading
// Premature loading can cause bugs to occur due to the webinfo document not finished loading yet
window.addEventListener("load", function() {
    if (!webinfo.features.includes("cookies")) {
        console.error("\"Themes\" feature requires feature \"Cookies\" to be enabled!");
        return;
    }

    // Load Theme Style Sheets
    webinfo.themes.forEach(x => {
        var y = document.createElement("link");
        y.rel = "stylesheet";
        y.href = "content/stylesheets/themes/" + x + ".css";
        document.head.appendChild(y);
    });

    // Set Default Theme if not set yet
    if (GetCookie("theme") === null || GetCookie("theme") === undefined) {
        SetCookie("theme", webinfo.defaultTheme);
    }

    // Apply theme
    document.documentElement.classList.add("theme-" + GetCookie("theme"));
}, false);
