// Open/Closes the Top Nav in Mobile View
function OpenResponsiveTopNav() {
    var x = document.getElementById("topnav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }

    x = document.getElementById("content");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}
