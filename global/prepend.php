<?php
// Get the websites internal directory
$root = realpath($_SERVER["DOCUMENT_ROOT"]);

// Read the WebInfo.json file
$infofile = fopen("$root/content/webinfo.json", "r") or die("An Error has Occurred! Unable to read the WebInfo file.");
$webinfo = json_decode(fread($infofile, filesize("$root/content/webinfo.json")));
fclose($infofile);

$features = $webinfo->features;

// Add Global Files to Prepend Here
// Example: require "$root/global/prepend/example.php"

require "$root/global/prepend/base.php";

// If top nav feature enabled, add to web page
if (in_array("topnav", $features)) {
    require "$root/global/prepend/topnav.php";
}

// If cookies feature enabled, add to web page
if (in_array("cookies", $features)) {
    require "$root/global/prepend/cookies.php";
}

// If theme feature enabled, add to web page
if (in_array("themes", $features)) {
    require "$root/global/prepend/themes.php";
}
?>
