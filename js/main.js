'use strict';

function getScreenSize(){
  console.log(" 画面サイズの横幅 ");
  console.log(window.parent.screen.width);

  console.log(" 画面サイズの高さ ");
  console.log(window.parent.screen.height);

  $("#width").append(window.parent.screen.width);
  $("#height").append(window.parent.screen.height);
}

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    getScreenSize();
    $("#start_btn").click(() => {
      location.href = "./q_num_select.html"
    })
  });
