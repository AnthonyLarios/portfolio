// wait for content to load
document.addEventListener("DOMContentLoaded", init);

function init() {
    var links = document.getElementsByClassName("link");
    
    // add click listenter to links for asynchronous loading
    for(link of links) {
        link.addEventListener("click", function(e) {
            // use data-url attribute in links as if it were href
            var url = this.getAttribute("data-url");
            var href = this.getAttribute("href");
            
            // set href in links as "#id" of the first div of other page
            href = href.replace(/#/, "");
            
            // hide other content divs
            hideContent();
            
            var isFetched = document.getElementById(href);
            if(isFetched) {
                // remove hide class if already in container
                isFetched.classList.remove("hide");
            } else {
                // use ajax to get content if not already in container
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
    
    // use ajax to get the content elements in response text
    xhr.open("GET", url);
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var content = xhr.responseText;
            var parse = new DOMParser();
            
            // parse string to an element object
            content = parse.parseFromString(content, "text/html");
            content = content.getElementById(id);
            
            container.appendChild(content);
        }
    }
    
    xhr.send();
}