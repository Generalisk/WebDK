// The website base url e.g. https://example.com/
const url = window.location.protocol + "//" + window.location.hostname + "/";

// The websites config info
var webinfo = null;

// Dev Build Mode
const devbuild = true;

// Gets the value for the parameter specified in the url's query string
function GetParameter(x, url = null) {
    // Converts the query string into A list
    var queries = window.location.search.substring(1).split("&");

    // If custom url is referenced, replace the list with one from the stated url
    if (url) {
        queries = url.split("?")[1].split("&");
    }

    // Goes through the query parameters and returns the value if the parameter matches
    for (var y in queries) {
        if (queries[y].startsWith(x + "=")) {
            return queries[y].replace(x + "=", "");
        }
    }
    
    // Parameter is not defined, return null
    return null;
}

// Sets the value for the parameter specified in the url's query string
function SetParameter(x, y) {
    if (GetParameter(x)) {
        var set = false;

        // Converts the query string into A list
        var queries = window.location.search.substring(1).split("&");

        // Goes through the query parameters and returns the value if the parameter matches
        for (var z in queries) {
            if (queries[z].startsWith(x + "=")) {
                queries[z] = x + "=" + y;
                set = true;
                break;
            }
        }

        // If none set, create new one
        if (!set) {
            queries.push(x + "=" + y);
            set = true;
        }

        // Now that the values have been modified, refresh the URL queries.
        var output = "";

        for (var z in queries) {
            output += "&" + queries[z];
        }

        window.location.search = "?" + output.substring(1);
    }
}
