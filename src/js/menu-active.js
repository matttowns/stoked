let menuSections = document.getElementsByClassName('menu-section');
let menuItems = document.querySelectorAll('#header-nav > li');
let mobileItems = document.querySelectorAll('#mobile-nav > li');
let header = document.getElementById('header');
let mobileMenu = document.getElementById('navbarMobile');
let activeMenu = -1;
let sectionPositions = [];
let toggleButtons = document.querySelectorAll('.navbar-toggler');
let overlay = document.getElementById('menu-overlay');

setSectionPositions();
setActive();
updateMenu();


function currentPosition(){
   return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
}

function setMobileMenuPosition(){
    let position = currentPosition();
    let headerPosition = getPosition(header).y;
    if(position <= headerPosition -70){
        mobileMenu.style.bottom = -position+"px";
    }
    else{
        mobileMenu.style.bottom = -headerPosition + 70 +"px";

    }
}

function setActive(){
    let active = -1;
    for(let i = 0; i<sectionPositions.length; i++){
        if(Math.ceil(sectionPositions[i].y)<= Math.ceil(currentPosition())){
            active = i;
        }
    }
    activeMenu = active;
}

function setSectionPositions(){
    sectionPositions = [];
    for(let i = 0; i<menuSections.length; i++){
        sectionPositions.push(getPosition(menuSections[i]));
    }
}

function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;
    
    while(element) {
        xPosition += (element.offsetLeft);
        yPosition += (element.offsetTop);
        element = element.offsetParent;
    }
    return { x: xPosition, y: yPosition };
}

function updateMenu(){
    menuItems.forEach((element, index)=>{
        if(index == activeMenu){
            element.classList.add('active');
            mobileItems[index].classList.add('active');
        }
        else{
            element.classList.remove('active');
            mobileItems[index].classList.remove('active');
        }
    });
}

function menuCheck(){
    if(document.documentElement.clientWidth	>= 1200){
        mobileMenu.classList.remove('show');
        overlay.classList.remove('show');  
    }
}

window.addEventListener('click', function(ev) {
    if(mobileMenu.classList.contains('show')){
        if(ev.target != mobileMenu && !ev.target.classList.contains('navbar-toggler-icon')){
            mobileMenu.classList.remove('show');
            overlay.classList.remove('show');
        }
    }
 
});

window.addEventListener('scroll', function(ev) {
    setActive();
    updateMenu();
});

window.addEventListener('resize', function(ev) {
    setSectionPositions();
    setActive();
    updateMenu();
    menuCheck();
});

toggleButtons.forEach((button)=>{
    button.addEventListener('click', function(ev){
        let navbarId = button.dataset.target.slice(1,button.dataset.target.length);
        let nav = document.getElementById(navbarId);
        nav.classList.toggle('show');
        overlay.classList.toggle('show');
    });
});

mobileItems.forEach((item)=>{
    item.addEventListener('click',(ev)=>{
        mobileMenu.classList.toggle('show');
        overlay.classList.toggle('show');
    });
});