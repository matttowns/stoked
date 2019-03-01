(function(){
    let parallax = document.querySelectorAll('.parallax');
    let speed = 0.5;

    window.addEventListener('scroll', function(ev) {

        [].slice.call(parallax).forEach(function(el,i){
            if(el.hasAttribute("data-parallax-speed")){
                speed = parseFloat(el.dataset.parallaxSpeed);
            }
            if(!el.hasAttribute("data-parallax-direction") || el.dataset.parallaxDirection == "up"){
                var windowYOffset = window.pageYOffset - (getPosition(el).y),
                    elBackgrounPos = "50% " + (windowYOffset * speed) + "px";
                }
            else{
                var windowYOffset = window.pageYOffset  - (getPosition(el).y),
                    elBackgrounPos = "50% " + (windowYOffset * speed) + "px";
            }

            el.style.backgroundPosition = elBackgrounPos;
    
          });
    });
  })();