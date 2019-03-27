let scrollButton = document.getElementById('scroll-button');
let aboutSection = document.getElementById('about-section');
let menuLinks = document.querySelectorAll('#navbarNav a');

scrollButton.addEventListener('click',(ev)=>{
    ev.preventDefault();
    scrollToElement(aboutSection);
});

if (window.navigator.userAgent.indexOf("Edge") > -1){
    for(let i=0; i<menuLinks.length;i++){
        menuLinks[i].addEventListener('click',(ev)=>{
            ev.preventDefault();
            scrollToElement(menuSections[i]);
        })
    }
}

function scrollToElement(element){
    let elementPosition = (element.offsetTop - element.scrollTop + element.clientTop);
    var currentPosition = window.scrollY||window.screenTop;
    if(currentPosition<elementPosition){
        let increment = (elementPosition - currentPosition) / 20;
        let timer = increment;
        for(let i = currentPosition; i <= elementPosition; i+=increment){
            timer+=increment;
            setTimeout(function(){
            window.scrollTo(0, i);
            }, timer/2);
            if(i + increment >=elementPosition){
                timer+=increment;
                setTimeout(function(){
                    window.scrollTo(0, elementPosition);
                    }, timer/2);
            }
        }
    }
    else if(currentPosition>elementPosition){
        let decrement = (currentPosition - elementPosition) / 20;
        let timer = decrement;
        for(let i = currentPosition; i >= elementPosition; i-=decrement){
            timer+=decrement;
            setTimeout(function(){
            window.scrollTo(0, i);
            }, timer/2);
            if(i - decrement <=elementPosition){
                timer+=decrement;
                setTimeout(function(){
                    window.scrollTo(0, elementPosition);
                    }, timer/2);
            }
        }
    }
}