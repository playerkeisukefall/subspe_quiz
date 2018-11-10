function initialize_click_event(ans_choice){
  // choice1
  $("#choice1").click(() => {
    if(status == 0){
      status = 1;
      if(ans_choice == 1) create_feedback(true);
      else create_feedback(false);
    }
  });

  // choice2
  $("#choice2").click(() => {
    if(status == 0){
      status = 1;
      if(ans_choice == 2) create_feedback(true);
      else create_feedback(false);
    }
  });

  // choice3
  $("#choice3").click(() => {
    if(status == 0){
      status = 1;
      if(ans_choice == 3) create_feedback(true);
      else create_feedback(false);
    }
  });

  // choice4
  $("#choice4").click(() => {
    if(status == 0){
      status = 1;
      if(ans_choice == 4) create_feedback(true);
      else create_feedback(false);
    }
  });
}
