function add_correct_count(subspe_flag){
  if(subspe_flag == 0)
    sub_correct_count++;
  else
    special_correct_count++;
}

function set_click_event(ans_choice, np, subspe_flag){ // np: next parameters
  // choice1
  $("#choice1").click(() => {
    if(status == 0){
      status = 1;
      if(ans_choice == 1){
        create_feedback(true, ans_choice);
        add_correct_count(subspe_flag);
      }
      else create_feedback(false, ans_choice);
    }
  });

  // choice2
  $("#choice2").click(() => {
    if(status == 0){
      status = 1;
      if(ans_choice == 2){
        create_feedback(true, ans_choice);
        add_correct_count(subspe_flag);
      }
      else create_feedback(false, ans_choice);
    }
  });

  // choice3
  $("#choice3").click(() => {
    if(status == 0){
      status = 1;
      if(ans_choice == 3){
        create_feedback(true, ans_choice);
        add_correct_count(subspe_flag);
      }
      else create_feedback(false, ans_choice);
    }
  });

  // choice4
  $("#choice4").click(() => {
    if(status == 0){
      status = 1;
      if(ans_choice == 4){
        create_feedback(true, ans_choice);
        add_correct_count(subspe_flag);
      }
      else create_feedback(false, ans_choice);
    }
  });

  // tap to next
  $("body").click(() => {
    if(status == 2){
      status = 0;
      console.log("next !!");
      $("body").off("click");
      if(np.terminal != true) // 最後だけそのまま残す
        $("body").empty();
      create_newpage(np.questions, np.question_i, np.question_num, np.subspe_flag, np.q_range, np.terminal);
    }
  });
}
