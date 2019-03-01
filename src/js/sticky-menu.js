var headerContainer = document.getElementById("header");  
var heroContainer = document.getElementById("hero");  
var navbar = headerContainer.firstElementChild;

window.addEventListener('scroll', function(ev) {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if(scrollTop >=(heroContainer.clientHeight-headerContainer.firstElementChild.clientHeight)){
        headerContainer.classList.add('fixed');
        navbar.classList.remove('bg-light');
        navbar.classList.add('bg-dark');
    }
    else{
        headerContainer.classList.remove('fixed');
        navbar.classList.add('bg-light');
        navbar.classList.remove('bg-dark');
    }
 });

 