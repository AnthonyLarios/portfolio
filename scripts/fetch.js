document.addEventListener("DOMContentLoaded", init);

function init() {
    var links = document.getElementsByClassName("link");
    
    for(link of links) {
        link.addEventListener("click", function(e) {
            var url = this.getAttribute("data-url");
            var href = this.getAttribute("href");
            
            href = href.replace(/#/, "");
            var isFetched = document.getElementById(href);
            
            hideContent();
            
            if(isFetched) {
                isFetched.classList.remove("hide");
            } else {
                fetchPage(url, href);
            }
        });
    }
}

function hideContent() {
    var content = document.querySelectorAll("#container > div");
    
    for(child of content) {
        child.classList.add("hide");
    }
}

function fetchPage(url, id) {
    var container = document.getElementById("container");
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", url);
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var content = xhr.responseText;
            var parse = new DOMParser();
            
            content = parse.parseFromString(content, "text/html");
            content = content.getElementById(id);
            
            container.appendChild(content);
        }
    }
    
    xhr.send();
}