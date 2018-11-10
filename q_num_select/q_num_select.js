'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    $("#btn10").click(function(){
      setTimeout(() => {
        location.href = "../main/main.html?num=10";
      }, 1000);
      $(".btn2").css({'animation': 'feedout 3s'});
      $(".btn3").css({'animation': 'feedout 3s'});
    })
    $("#btn20").click(function(){
      setTimeout(() => {
        location.href = "../main/main.html?num=20";
      }, 1000);
      $(".btn1").css({'animation': 'feedout 3s'});
      $(".btn3").css({'animation': 'feedout 3s'});
    })
    $("#btn30").click(function(){
      setTimeout(() => {
        location.href = "../main/main.html?num=30";
      }, 1000);
      $(".btn1").css({'animation': 'feedout 3s'});
      $(".btn2").css({'animation': 'feedout 3s'});
    })
  });
