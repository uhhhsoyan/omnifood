$(document).ready(function() {
    
    /* Sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    })
    
    /* Scroll on button click */
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000)
    });
    
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
    })
    
    
    /* Animations on scroll */
    $('.js--wp-1').waypoint(  
      (direction) => {
      // add the class animated__animated and animate__fadeIn to waypoint 1
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
      },
      {
        offset: '50%',
      }
    );
    
    $('.js--wp-2').waypoint(
      (direction) => {
    // add the class animated__animated and animate__fadeInLeft to waypoint 2
        $('.js--wp-2').addClass('animate__animated animate__fadeInLeft');
      },
      {
        offset: '50%',
      }
    );
    
    $('.js--wp-3').waypoint(
      (direction) => {
    // add the class animated__animated and animate__fadeIn to waypoint 3
        $('.js--wp-3').addClass('animate__animated animate__fadeIn');
      },
      {
        offset: '50%',
      }
    );
    
    $('.js--wp-4').waypoint(
      (direction) => {
    // add the class animated__animated and animate__bounceIn to waypoint 4
        $('.js--wp-4').addClass('animate__animated animate__pulse');
      },
      {
        offset: '25%',
      }
    );

    
});