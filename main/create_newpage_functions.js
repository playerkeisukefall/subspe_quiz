/* html 雛形
1. <div id="headline" class="word1">1. キャンピングシェルターソレーラ</div>
2. <img src="../img/main/weapon/a01.png" class="weapon">
3. <div id="question" class="word1">サブ はどれ？</div>
4. <div id="choice1" class="choice">
5.   <img src="../img/main/sub/01.png" class="icon">
6.   <p class="word2">クイックボム</p>
7.   <img src="../img/main/btn_blue.png" class="btn">
8. </div>
9. <div id="choice2" class="choice">
10.   <img src="../img/main/sub/09.png" class="icon">
11.   <p class="word2">スプラッシュシールド</p>
12.   <img src="../img/main/btn_green.png" class="btn">
13. </div>
14. <div id="choice3" class="choice">
15.   <img src="../img/main/sub/02.png" class="icon">
16.   <p class="word2">スプラッシュボム</p>
17.   <img src="../img/main/btn_orange.png" class="btn">
18. </div>
19. <div id="choice4" class="choice">
20.   <img src="../img/main/sub/05.png" class="icon">
21.   <p class="word2">トーピード</p>
22.   <img src="../img/main/btn_red.png" class="btn">
23. </div>
*/
function create_html_str(question_obj, question_i, subspe_flag){
  let q_num = question_i + 1;
  let weapon_name = weapon_data[question_obj.ans].name;
  let weapon_path = weapon_data[question_obj.ans].path;
  let question_type;
  if(subspe_flag == 0) question_type = "サブ";
  else question_type = "スペシャル";
  let choice_path_arr = new Array();
  let choice_name_arr = new Array();
  for(let i=0; i<4; i++){
    if(subspe_flag == 0){ // サブの場合
      choice_path_arr.push(sub_data[question_obj.sub_choice[i]].path);
      choice_name_arr.push(sub_data[question_obj.sub_choice[i]].name);
    }
    else{ // スペシャルの場合
      choice_path_arr.push(special_data[question_obj.special_choice[i]].path);
      choice_name_arr.push(special_data[question_obj.special_choice[i]].name);
    }
  }

  let html_str = '';
  // 1.
  html_str += '<div id="headline" class="word1">';
  html_str += String(q_num) + '. ' + weapon_name + '</div>';
  // 2.
  html_str += '<img src="' + weapon_path + '" class="weapon">';
  // 3.
  html_str += '<div id="question" class="word1">' + question_type + ' はどれ？</div>';
  // 4.
  html_str += '<div id="choice1" class="choice">';
  // 5.
  html_str += '<img src="' + choice_path_arr[0] + '" class="icon">';
  // 6.
  html_str += '<p class="word2">' + choice_name_arr[0] + '</p>';
  // 7.
  html_str += '<img src="../img/main/btn_blue.png" class="btn">';
  // 8.
  html_str += '</div>';
  // 9.
  html_str += '<div id="choice2" class="choice">';
  // 10.
  html_str += '<img src="' + choice_path_arr[1] + '" class="icon">';
  // 11.
  html_str += '<p class="word2">' + choice_name_arr[1] + '</p>';
  // 12.
  html_str += '<img src="../img/main/btn_green.png" class="btn">';
  // 13.
  html_str += '</div>';
  // 14.
  html_str += '<div id="choice3" class="choice">';
  // 15.
  html_str += '<img src="' + choice_path_arr[2] + '" class="icon">';
  // 16.
  html_str += '<p class="word2">' + choice_name_arr[2] + '</p>';
  // 17.
  html_str += '<img src="../img/main/btn_orange.png" class="btn">';
  // 18.
  html_str += '</div>';
  // 19.
  html_str += '<div id="choice4" class="choice">';
  // 20.
  html_str += '<img src="' + choice_path_arr[3] + '" class="icon">';
  // 21.
  html_str += '<p class="word2">' + choice_name_arr[3] + '</p>';
  // 22.
  html_str += '<img src="../img/main/btn_red.png" class="btn">';
  // 23.
  html_str += '</div>';

  return html_str;
}

function get_ans_choice(question_obj, subspe_flag){
  let ans = question_obj.ans;
  let ans_id, i;
  if(subspe_flag == 0){ // サブの場合
    ans_id = weapon_data[ans].sub_id;
    for(i=0; i<4; i++){
      if(question_obj.sub_choice[i] == ans_id)
        return i+1;
    }
  }
  else {
    ans_id = weapon_data[ans].special_id;
    for(i=0; i<4; i++){
      if(question_obj.special_choice[i] == ans_id)
        return i+1;
    }
  }
  console.log("!!! エラー: 答えが選択肢にありません。");
}

/* html 雛形
1. <div class="feedback">
2.   <img src="../img/main/correct.png" class="feedback_effect">
3. </div>
*/
function create_feedback(correct, ans_choice){
  let c = "";
  if(correct){
    console.log("ナイス!");
    c = "correct";
  }
  else{
    console.log("やられた!");
    c = "incorrect";
  }

  let html_str = "";
  // 1.
  html_str += '<div class="feedback">';
  // 2.
  html_str += '<img src="../img/main/' + c + '.png" class="feedback_effect">';
  // 3.
  html_str += '</div>';

  // body に差し込む。
  let body = document.getElementsByTagName("body")[0];
  body.insertAdjacentHTML('beforeend', html_str);

  // 1 秒後、フィードバックエフェクトを削除
  setTimeout(function(){
    $(".feedback").remove();
    status = 2;
    switch2tap_to_next(correct, ans_choice);
  }, 1000);
}

/* html 雛形
- $("#question") の直後
  <div id="ans_word" class="word_incorrect">不正解... 答えは</div>
- $("body") 内部の末尾
  <div id="tap_to_next" class="word1">Tap to Next</div>
*/
function switch2tap_to_next(correct, ans_choice){
  // 正解以外の選択肢を削除
  let id_name;
  for(let i=1; i<=4; i++){
    if(i != ans_choice){
      id_name = "#choice" + String(i);
      $(id_name).remove();
    }
  }

  // ans_word の DOM str を生成
  let ans_word_html = "";
  ans_word_html += '<div id="ans_word" class="';
  if(correct){
    ans_word_html += 'word_correct">正解!!</div>';
  }
  else{
    ans_word_html += 'word_incorrect">不正解... 答えは</div>'
  }

  // #question の直後に ans_word を挿入
  let question = document.getElementById("question");
  question.insertAdjacentHTML('afterend', ans_word_html);

  // body の末尾に tap_to_next を挿入
  let tap_to_next_html = '<div id="tap_to_next" class="word1">Tap to Next</div>';
  let body = document.getElementsByTagName("body")[0];
  body.insertAdjacentHTML('beforeend', tap_to_next_html);

}
