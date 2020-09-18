$(function() {
  $("#home-button").on({
    mouseenter: function() {
      $(this).attr('src', 'img/square-profile-picture.jpg');
    },
    mouseleave: function() {
      $(this).attr('src', 'img/square-profile-picture2.jpg');
    }
  });

  /* Intro */
  $('.wp1').waypoint(function() {
    $('.wp1').addClass('animated fadeIn');
  }, {
    offset: '75%'
  });

  /* Features */
  $('.wp2').waypoint(function() {
    $('.wp2').addClass('animated fadeIn');
  }, {
    offset: '50%'
  });

  /* Skills */
  $('.wp3').waypoint(function() {
    $('.wp3').addClass('animated fadeIn');
    $('.skills-bar-container').addClass('animated fadeIn');
    $('.wp3-1').addClass('progress1-delay');
    $('.wp3-2').addClass('progress2-delay');
    $('.wp3-3').addClass('progress3-delay');
    $('.wp3-4').addClass('progress4-delay');
    $('.wp3-5').addClass('progress5-delay');
  }, {
    offset: '50%'
  });

  /* CV Button */
  $('.wp4').waypoint(function() {
    $('.wp4').addClass('animated bounceIn');
  }, {
    offset: '75%'
  });

  /* Experiences */
  $('.wp5').waypoint(function() {
    $('.wp5').addClass('animated fadeIn');
  }, {
    offset: '75%'
  });

  /* Paper Plane */
  $('.wp6').waypoint(function() {
    $('.wp6').addClass('animated bounceInDown');
  }, {
    offset: '75%'
  });

  /* Projects */
  $('.wp7').waypoint(function() {
    $('.wp7').addClass('animated zoomIn');
  }, {
    offset: '75%'
  });

  $('.wp7-1').waypoint(function() {
    $('.wp7-1').addClass('animated pulse');
  }, {
    offset: '75%'
  });

  // for preloader
  setTimeout(function() {
    $('body').addClass('loaded');
  }, 2800);

  // jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
      $(".navbar").addClass("navbar-shadow");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
      $(".navbar").removeClass("navbar-shadow");
    }
  });

  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
  });

  $("#to-top").mouseover(function() {
    $("#to-top-copy").animate({
      opacity: "1"
    }, "slow");
  });
  $("#to-top").mouseout(function() {
    $("#to-top-copy").animate({
      opacity: "0"
    }, "slow");
  });
});
