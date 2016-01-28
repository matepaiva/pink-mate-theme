/*jslint browser:true */
var headerBlog = document.getElementById("header-blog");
var headroom = new Headroom(headerBlog);
var navContents = document.getElementById("nav-contents");
var blackOut = document.getElementById("blackout");
var blogAside = document.getElementById("blog-aside");

headroom.init();

function toggleNavContent(el) {
    var isActive = document.getElementsByClassName("active-link");
    while (isActive[0]){
        isActive[0].classList.remove("active-link");
    }
    if (!el.dataset.name) {
        navContents.classList.remove("show-nav-content");
        blogAside.classList.remove("appear");
        navContents.style.transform = "translate(-50%, -100%)";
        headerBlog.style.transform = "";
        blackOut.style.display = "none";
    } else {
        el.classList.add("active-link");
        var showed = document.getElementsByClassName("show");
        while (showed[0]){
            showed[0].classList.remove("show");  
        }
        navContents.classList.add("show-nav-content");
        headerBlog.style.transform = "translateY(0%)";
        blackOut.style.display = "block";
        var showTheseGuys = document.getElementsByClassName(el.dataset.name);
        for (var i=0; i<showTheseGuys.length; i++){
            showTheseGuys[i].classList.add("show");
        }
    }
}

function toogleMenu() {
    if (blogAside.classList[0] == "appear") {
        blogAside.classList.remove("appear");
        navContents.classList.remove("show-nav-content");
        blackOut.style.display = "none";
    } else {
        blogAside.classList.add("appear");
        blackOut.style.display = "block";
    }
}