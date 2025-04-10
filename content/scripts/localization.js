// Get the language code to load up
function GetLanguage() {
    // Read the lang parameter specified in the url's query
    const urllang = GetParameter("lang");

    if (urllang) {
        var request = new XMLHttpRequest();
        request.open("GET", url + "content/langs/" + urllang + ".json", false);
        request.send();

        if (request.readyState == 4 && request.status == 200) {
            return urllang;
        }

        // If the language is A "sub-language" & is unavailable, see if the main language is available
        if (urllang.includes("-")) {
            request = new XMLHttpRequest();
            request.open("GET", url + "content/langs/" + urllang.split("-")[0] + ".json", false);
            request.send();
        
            if (request.readyState == 4 && request.status == 200) {
                return urllang.split("-")[0];
            }
        }
    }

    // Read the language specified by the system
    const syslang = navigator.language;

    var request = new XMLHttpRequest();
    request.open("GET", url + "content/langs/" + syslang + ".json", false);
    request.send();

    if (request.readyState == 4 && request.status == 200) {
        return syslang;
    }

    // If the language is A "sub-language" & is unavailable, see if the main language is available
    if (syslang.includes("-")) {
        request = new XMLHttpRequest();
        request.open("GET", url + "content/langs/" + syslang.split("-")[0] + ".json", false);
        request.send();
    
        if (request.readyState == 4 && request.status == 200) {
            return syslang.split("-")[0];
        }
    }

    // Read the default language specified by the page
    const pagelang = document.documentElement.lang;

    var request = new XMLHttpRequest();
    request.open("GET", url + "content/langs/" + pagelang + ".json", false);
    request.send();

    if (request.readyState == 4 && request.status == 200) {
        return pagelang;
    }

    // If the language is A "sub-language" & is unavailable, see if the main language is available
    if (pagelang.includes("-")) {
        request = new XMLHttpRequest();
        request.open("GET", url + "content/langs/" + pagelang.split("-")[0] + ".json", false);
        request.send();
    
        if (request.readyState == 4 && request.status == 200) {
            return pagelang.split("-")[0];
        }
    }

    // Get the default language specified by the webinfo.json
    if (webinfo.defaultLanguage) {
        return webinfo.defaultLanguage;
    }

    // If all else fails, just go with English.
    return "en";
}

// Localize A specific element
// x = The element you want to localize
// NOTE: This will also localize all of the elements children
function Localize(x) {
    const lang = GetLanguage();
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(this.responseText);
            var keys = Object.keys(json);
            var values = Object.values(json);
            
            for (var y in keys) {
                x.innerHTML = x.innerHTML.replaceAll("$(" + keys[y] + ")", values[y]);
            }
        }
    };
    request.open("GET", url + "content/langs/" + lang + ".json", true);
    request.send();
}

// Localize the entire document
function LocalizeAll() {
    Localize(document.documentElement);
}

// TODO: Copy language from previous page to the current one

// Refresh the pages localization when the page is initially loaded and every time the hash changes
window.addEventListener("load", LocalizeAll, false);
window.addEventListener("hashchange", LocalizeAll, false);
