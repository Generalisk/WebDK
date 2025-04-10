// Called once everything has finished loading
// Premature loading can cause bugs to occur (such as the main page title being completely overwritten by the extension)
window.addEventListener("load", function() {
    // Display WebDK Copyright Notices
    const webdkcopyright = "Copyright @2025-" + new Date().getFullYear() + " Generalisk & WebDK Contributors";
    const webdkver = "2025.0.0";

    if (devbuild) {
        console.log("Website Development Kit (WebDK)\n" + webdkcopyright + "\nVersion " + webdkver + "\n{DEVELOPEMENT BUILD}");
        console.log("NOTE: This is A Development Version of WebDK, these versions are for testing and developing new features for the Dev Kit. " +
            "It is advised to avoid using these versions as they are untested and are subject to bugs. " +
            "We recommend using the latest release on the github instead (https://github.com/Generalisk/WebDK/releases).");
    } else {
        console.log("Website Development Kit (WebDK)\n" + webdkcopyright + "\nVersion " + webdkver);
    }

    // Get & Read WebInfo.json
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            webinfo = JSON.parse(this.responseText);
    
            // Display your Copyright Notice
            const copyright = "Copyright @" + webinfo.copyrightYear + "-" + new Date().getFullYear() + " " + webinfo.author;
            console.log(webinfo.title + "\n" + copyright + "\nVersion " + webinfo.version);
    
            // Apend Web Title to the Page Title
            document.title += " - " + webinfo.webtitle;
    
            // Set the page icon
            if (webinfo.iconfile) {
                document.getElementById("icon").href = url + "content/" + webinfo.iconfile + ".ico";
            }
        }
    };
    request.open("GET", url + "content/webinfo.json", true);
    request.send();
}, false);
