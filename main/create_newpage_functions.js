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
  html_str += '<p class="word2">' + choice_name_arr[3] + '</p>';
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
