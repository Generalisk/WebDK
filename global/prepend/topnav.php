<!DOCTYPE html>
<html lang="en">
    <!--Internal Style Sheets-->
    <style>
    </style>

    <!--External Style Sheets-->
    <head>
        <link rel="stylesheet" href="content/stylesheets/topnav.css" />
    </head>

    <!--Top Navigation Bar-->
    <header id="topnav">
        <a style="padding:8px" href=""><img src="content/graphics/titlecard.png" height="29.25" /></a>
        <div class="dropdown">
            <a class="dropbtn" href="examplesubdirectory">$(PageTitle_Dropdown)</a>
            <div class="dropdown-content">
                <a href="dropdown/examplepage1">$(PageTitle_DropdownItem1)</a>
                <a href="dropdown/examplepage2">$(PageTitle_DropdownItem2)</a>
                <a href="dropdown/examplepage3">$(PageTitle_DropdownItem3)</a>
            </div>
        </div>
        <a href="examplepage1">$(PageTitle_Page1)</a>
        <a href="examplepage2">$(PageTitle_Page2)</a>
        <a href="examplepage3">$(PageTitle_Page3)</a>
        <a class="icon" style="padding:0" href="javascript:void(0);" onclick="OpenResponsiveTopNav();">
            <div class="menuicon">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
        </a>
    </header>

    <!--External Javascript Code-->
    <script src="content/scripts/topnav.js"></script>

    <!--Internal Javascript Code-->
    <script type="text/javascript">
    </script>
</html>
