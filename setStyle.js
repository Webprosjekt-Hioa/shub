function initCss()
{
    document.getElementById("style-contrast").disabled = true;
}

function adaptPage()
{
    var normal = document.getElementById("style-default");
    var highcontrast = document.getElementById("style-contrast");

    if (normal == null && highcontrast == null)
    {
        alert("issue with highcontrast of normal");
    }

    if (normal.disabled == false)
    {
        normal.disabled = true;
        highcontrast.disabled = false;
    }
    else if (highcontrast.disabled == false)
    {
        normal.disabled = false;
        highcontrast.disabled = true;
    }

}

function toggleMenu()
{
    var menu = document.getElementById("nav-items");
    if (menu != null)
    {
        if (menu.style.display != "block")
        {
            menu.style.display = "block";
        }
        else
        {
            menu.style.display = "none";
        }
    }
}