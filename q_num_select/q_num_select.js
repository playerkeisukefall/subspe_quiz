'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    $("#btn10").click(function(){
      location.href = "../main/main.html?num=10";
    })
    $("#btn20").click(function(){
      location.href = "../main/main.html?num=20";
    })
    $("#btn30").click(function(){
      location.href = "../main/main.html?num=30";
    })
  });
