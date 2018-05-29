document.addEventListener("DOMContentLoaded", init);

function init() {
    var toggle = document.getElementById("toggleTheme");
    var darkenElements = document.getElementsByClassName("light");
    var lightenElements = document.getElementsByClassName("dark");
    var image = toggle.getAttribute("src");
    
    image = checkThemeCookie(darkenElements, lightenElements, image);
    toggle.setAttribute("src", image);
    
    toggle.addEventListener("click", function() {
        darkenElements = document.getElementsByClassName("light");
        lightenElements = document.getElementsByClassName("dark");
        image = toggle.getAttribute("src");
        
        if (darkenElements.length > 0) {
            darkTheme(darkenElements);
            setCookie("theme=dark");
            toggle.setAttribute("src", changeImage(image, "day"));
        } else if (lightenElements. length > 0) {
            lightTheme(lightenElements);
            setCookie("theme=light");
            toggle.setAttribute("src", changeImage(image, "night"));
        }
    });
}

function darkTheme(elements) {
    var breakCounter = 0;
    
    while (elements.length > 0) {
        elements[0].classList.add("dark");
        elements[0].classList.remove("light");
        
        breakCounter++;
        if (breakCounter > 1000) {
            return;
        }
    }
}

function lightTheme(elements) {
    var breakCounter = 0;
    
    while (elements.length > 0) {
        elements[0].classList.add("light");
        elements[0].classList.remove("dark");
        
        breakCounter++;
        if (breakCounter > 1000) {
            return;
        }
    }
}

function setCookie(value) {
    var date = new Date();
    date.setTime(date.getTime() + (10*24*60*60*1000));
    var expiration = "expires=" + date.toUTCString();
    
    document.cookie = value + ";" + expiration + ";path=/";
}

function checkThemeCookie(light, dark, source) {
    var themeCookie = document.cookie;
    var isdark = themeCookie.indexOf("theme=dark");
    var islight = themeCookie.indexOf("theme=light");
    
    if (light.length > dark.length && isdark > -1) {
        darkTheme(light);
        return changeImage(source, "day");
    } else if (dark.length > light.length && islight > -1) {
        lightTheme(dark);
        return changeImage(source, "night");
    } else {
        return source;
    }
}

function changeImage(source, theme) {
    if (theme === "day") {
        source = source.replace("night", theme);
    } else if (theme === "night") {
        source = source.replace("day", theme);
    }
        
    return source;
}