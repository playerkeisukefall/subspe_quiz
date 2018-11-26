function record_result(question_i, subspe_flag){
  if(subspe_flag == 0){
    record[question_i].sub = 1;
  }
  else{
    record[question_i].special = 1;
  }
}

function set_click_event(ans_choice, np, subspe_flag, question_i){ // np: next parameters
  // choice1
  $("#choice1").click(() => {
    if(status == 0){
      status = 1;
      if(ans_choice == 1){
        create_feedback(true, ans_choice, np);
        record_result(question_i, subspe_flag);
      }
      else create_feedback(false, ans_choice, np);
    }
  });

  // choice2
  $("#choice2").click(() => {
    if(status == 0){
      status = 1;
      if(ans_choice == 2){
        create_feedback(true, ans_choice, np);
        record_result(question_i, subspe_flag);
      }
      else create_feedback(false, ans_choice, np);
    }
  });

  // choice3
  $("#choice3").click(() => {
    if(status == 0){
      status = 1;
      if(ans_choice == 3){
        create_feedback(true, ans_choice, np);
        record_result(question_i, subspe_flag);
      }
      else create_feedback(false, ans_choice, np);
    }
  });

  // choice4
  $("#choice4").click(() => {
    if(status == 0){
      status = 1;
      if(ans_choice == 4){
        create_feedback(true, ans_choice, np);
        record_result(question_i, subspe_flag);
      }
      else create_feedback(false, ans_choice, np);
    }
  });
}

function set_tap_to_next_event(np){
  // tap to next
  $("#tap_to_next").click(() => {
    if(status == 2){
      status = 0;
      console.log("next !!");
      if(np.terminal != true) // 最後だけそのまま残す
        $("body").empty();
      create_newpage(np.questions, np.question_i, np.question_num, np.subspe_flag, np.q_range, np.terminal);
    }
  });
}
