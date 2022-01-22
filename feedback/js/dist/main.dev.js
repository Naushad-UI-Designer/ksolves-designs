"use strict";

$(document).ready(function () {
  $('ul.ks_tabs li').click(function () {
    var tab_id = $(this).attr('data-tab');
    $('ul.ks_tabs li').removeClass('current');
    $('.tab-content').removeClass('current');
    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  }); // Quick & dirty toggle to demonstrate modal toggle behavior

  $('.modal-toggle').on('click', function (e) {
    e.preventDefault();
    $('.modal').toggleClass('is-visible');
  });
  $(".modal-toggle ").click(function () {
    $(".modal-toggle i").addClass("ks_pop_btn");
  });
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });
});