$( document ).ready(function() {
    new WOW().init();
  });
  
  $(window).on('beforeunload', function() {
    $('body').hide();
    $(window).scrollTop(0);
  });

  $(window).scroll(function() {
    if ($(window).scrollTop() >= 1) {
        $('.navbar').css('background', 'black');
    } else {
        $('.navbar').css('background', 'transparent');
    }
});

$(window).scroll(function() {
    if ($(document).scrollTop() == 0) {
        $('#header_nav').removeClass('tiny');
        $('.nav-link').css('color', 'black');
    } else {
        $('#header_nav').addClass('tiny');
        $('.nav-link').css('color', 'white');
    }
});

window.addEventListener('DOMContentLoaded', function() {
    var data = JSON.parse(localStorage.getItem('cart'));
    var cart = new Cart(data);
    cart.Render();
   });
   
   function saveCart() {
    var data = JSON.stringify(window.cart);
    localStorage.saveItem('cart', data);
   }

   $( '.smallimg' ).click(function(event) {
    var smallimg = (event.target.src);
    var img1 = $('.img1').attr("src");
    $('.img1').attr("src", smallimg);
    
    event.target.src = img1;
    
    
  });



