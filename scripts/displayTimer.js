document.addEventListener("DOMContentLoaded", init);

function init() {
    var list = document.getElementById("skills");
    var skills = list.getElementsByTagName("li");
    
    for (var i = 0; i < skills.length; i++) {
        setTimeout(function(index) {
            skills[index].classList.add("show");
        }, (i + 1) * 1000, i);
    }
}