// Toggle Menu Functionaliy Start
$(document).ready(function () {
  $(".hamburger-menu").click(function () {
    $("body").addClass("menuToggle");
  });
  $(".close-menu").click(function () {
    $("body").removeClass("menuToggle");
  });
});  
// Toggle Menu Functionaliy End

// Header Scroll JS Start
$(document).ready(function () {
  $(window).scroll(function () {
    var header = $("header");
    header.toggleClass("fixed-header", $(window).scrollTop() > 0);
  });
});
// Header Scroll JS End

// Slick Slider JS End
$('.testi_cards_wrap').slick({
  dots: true,
  infinite: true,
  speed: 800,         
  cssEase: 'ease-in-out', 
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500, 
  slide: 'div',
  cssEase: 'linear', 
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
// Slick Slider JS End


// Read More Functionality JS Start
$('.subpage-readmore-btn').click(function (e) {
  e.preventDefault();
  const $this = $(this); 
  const content = $this.parent().prev(); 
  content.stop(true, true).slideToggle(500); 
  $this.html(function (_, currentHtml) {
    return currentHtml.includes('Read More') 
      ? 'Read Less <i class="fa-solid fa-angle-up"></i>' 
      : 'Read More <i class="fa-solid fa-angle-down"></i>';
  });
});
// Read More Functionality JS end

AOS.init({
  duration:1200,
});



