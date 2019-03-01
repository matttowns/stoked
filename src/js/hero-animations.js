let hero = document.getElementById('hero');
let heroImage = hero.getElementsByClassName('background-image')[0];
let heroMid = hero.clientWidth / 2;
let heroPatterns = hero.querySelectorAll('.hero-pattern-container');

function distanceScrolled(){
    let currentPosition = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    return currentPosition / hero.clientHeight;
}

function applyFilter(){
    let percentageScrolled = distanceScrolled();
    if(percentageScrolled == 0){
        heroImage.style.removeProperty('filter');
    }
    else if(percentageScrolled <= .2){
        heroImage.style.filter="blur(1px)";
    }
    else if(percentageScrolled <= .4){
        heroImage.style.filter="blur(2px)";
    }
    else if(percentageScrolled <= .6){
        heroImage.style.filter="blur(4px)";
    }
    else if(percentageScrolled <= .8){
        heroImage.style.filter="blur(8px)";
    }
    else if(percentageScrolled <= 1){
        heroImage.style.filter="blur(16px)";
    }
}

window.addEventListener('scroll', function(ev) {
    applyFilter();
});

hero.addEventListener('mousemove', function(ev){
    let difference = (heroMid - ev.clientX)/10;
    heroPatterns.forEach((element)=>{
        if(!element.hasAttribute("data-slide-speed") || element.dataset.slideSpeed == "fast" ){
            element.style.transform="translate3d("+difference+"px,0,0)";
        }
        else if( element.dataset.slideSpeed == "slow" ){
            element.style.transform="translate3d("+difference/10+"px,0,0)";
        }
    });
});

hero.addEventListener('mouseleave', function(ev){
    heroPatterns.forEach((element)=>{
        element.style.removeProperty('transform');
    });

});