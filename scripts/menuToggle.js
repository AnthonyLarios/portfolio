document.addEventListener("DOMContentLoaded", init);

function init() {
    var menuButton = document.getElementById("menuImage");
    var exitButton = document.getElementById("exit");
    
    var menu = document.getElementById("nav");
    var container = document.getElementById("container");
    var themeImage = document.getElementById("themeImage");
    
    menuButton.addEventListener("click", function() {
        menu.classList.add("show");
        container.classList.add("blur");
        
        menuButton.classList.add("hide");
        themeImage.classList.add("hide");
    });
    
    exitButton.addEventListener("click", function () {
        menu.classList.remove("show");
        container.classList.remove("blur");
        
        menuButton.classList.remove("hide");
        themeImage.classList.remove("hide");
    });
}