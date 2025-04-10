<!DOCTYPE html>
<html lang="en">
    <!--URL Base-->
    <!--This needs to be before everything else otherwise everything could break-->
    <head>
        <base id="urlbase" href="" />
    </head>

    <script type="text/javascript">
        document.getElementById("urlbase").href = window.location.protocol + "//" + window.location.hostname + "/";
        // Yeah I could just use the url constant from shared.js, but how would the page access that script without the base being assigned?
        // Kinda removes the point of the whole thing ngl
    </script>

    <!--Internal Style Sheets-->
    <style>
    </style>

    <!--Icon & External Style Sheets-->
    <head>
        <link id="icon" rel="icon" type="image/x-icon" href="content/icon.ico" />
        <link rel="stylesheet" href="content/stylesheets/stylebase.css" />
    </head>

    <!--External Javascript Code-->
    <script src="content/scripts/shared.js"></script>
    <script src="content/scripts/init.js"></script>

    <!--Internal Javascript Code-->
    <script type="text/javascript">
    </script>
</html>
