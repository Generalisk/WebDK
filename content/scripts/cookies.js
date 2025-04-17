// Gets the value of the requested cookie
function GetCookie(x) {
    const cookies = document.cookie.replace("; ", ";").replace(" = ", "");
    var a = cookies.split(x + "=")[1];
    var b = a.split(";")[0];
    return b;
}

// Sets the value of the requested cookie
function SetCookie(x, y) {
    document.cookie = x + "=" + y;
}
