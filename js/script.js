



// JavaScript code
// wow 


wow = new WOW(
  {
    boxClass: 'wow',      // default
    animateClass: 'animated', // default
    offset: 0,          // default
    mobile: true,       // default
    live: true        // default
  }
)
wow.init();
// Aos
AOS.init({
  delay: 1, // values from 0 to 3000, with step 50ms
  duration: 500, // values from 0 to 3000, with step 50ms
  easing: 'linear'
});

// jQurey Code
$(document).ready(function () {
  // Preloader
  $.fakeLoader({
    timeToHide:1000,
    spinner: 'spinner6',
    bgColor:" #60D7A9"
  });
//  Mix it up
  var mixer = mixitup('#hello', {
  
    animation: {
      duration: 500
    }
  });
  Parallax
  jQuery('.parallax-layer').parallax({
    mouseport: jQuery("#port")
  });
  // Int Tel 
  // jQuery 
});

