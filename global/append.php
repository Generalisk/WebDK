<?php
// Get the websites internal directory
$root = realpath($_SERVER["DOCUMENT_ROOT"]);

// Read the WebInfo.json file
$infofile = fopen("$root/content/webinfo.json", "r") or die("An Error has Occurred! Unable to read the WebInfo file.");
$webinfo = json_decode(fread($infofile, filesize("$root/content/webinfo.json")));
fclose($infofile);

$features = $webinfo->features;

// Add Global Files to Append Here
// Example: require "$root/global/append/example.php"

// If footer feature enabled, add to web page
if (in_array("footer", $features)) {
    require "$root/global/append/footer.php";
}
?>
