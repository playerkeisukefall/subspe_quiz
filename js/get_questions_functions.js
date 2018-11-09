function confirm_data(){
  let weapon_num = weapon_data.length;
  let sub_id;
  let special_id;
  for(let i=0; i<weapon_num; i++){
    console.log("* " + weapon_data[i].name);
    sub_id = weapon_data[i].sub_id;
    special_id = weapon_data[i].special_id;
    console.log("  - サブ: " + sub_data[sub_id].name);
    console.log("  - スペシャル: " + special_data[special_id].name);
    console.log("  - 人気度: " + weapon_data[i].priority);
  }
}

function confirm_ans(question_num, priority_mode){
  let test_num = 3; // 本来はこの変数の値は question_num で良いが、まだ weapon_data が未完成なので少ない数を用意する。
  let weapon_num = weapon_data.length;
  let selected_count = new Array();
  for(let i=0; i<weapon_num; i++)
    selected_count.push(0);

  let ans_arr;
  let count_sum = 0;
  for(i=0; i<100000; i++){
    ans_arr = get_ans(test_num, priority_mode);
    for(let j=0; j<test_num; j++){
      selected_count[ans_arr[j]]++;
    }
    count_sum += test_num;
  }

  for(i=0; i<weapon_num; i++){
    console.log("＊ " + weapon_data[i].name);
    console.log("  - 選択される確率: " + String(selected_count[i] / count_sum));
  }
}

function check_overlap(ans_arr, ans){
  let n = ans_arr.length;
  for(let i=0; i<n; i++){
    if(ans_arr[i] == ans)
      return false;
  }
  return true;
}

function get_ans(question_num, priority_mode){
  let weapon_num = weapon_data.length;
  // ＊ priority_mode: true の場合
  //   priority_arr: priority の数だけこの配列に weapon_data のインデックスを格納する。
  //   例えば スプラシューターは priority が 2、スプラシューターコラボは 3 なので、
  //   priority_arr = [0, 0, 1, 1, 1, ...] となる。
  //   この配列からランダムにブキを決定するので、priority が高いほど選べれやすくなる。
  // ＊ priority_mode: false の場合
  //   priority_arr = [0, 1, 2, ...] となる。
  let priority_arr = new Array();

  if(priority_mode){
    let priority;
    for(let i=0; i<weapon_num; i++){
      priority = Number(weapon_data[i].priority);
      for(let j=0; j<priority; j++){
        priority_arr.push(i);
      }
    }
  }
  else{
    for(let i=0; i<weapon_num; i++){
      priority_arr.push(i);
    }
  }
  //console.log(priority_arr);

  // ans に出題するブキのインデックスを格納する。
  let priority_sum = priority_arr.length;
  let ans_arr = new Array();
  let k = 0;
  let random, ans;
  while(1){
    random = Math.floor(Math.random()*priority_sum);
    ans = priority_arr[random];
    // ＊ check_overlap() 関数
    //   ans_arr の中に ans がないか（重複がないか）チェック。
    //   重複がなければ true, あれば false
    if(check_overlap(ans_arr, ans)){
      ans_arr.push(ans);
      k++;
    }
    if(k >= question_num){
      break;
    }
  }
  return ans_arr;
}

function shuffle_arr(arr){
  for (var i = arr.length - 1; i >= 0; i--){
    // 0~iのランダムな数値を取得
    var rand = Math.floor( Math.random() * ( i + 1 ) );
    // 配列の数値を入れ替える
    [arr[i], arr[rand]] = [arr[rand], arr[i]]
  }
  return arr;
}

function create_sub_choice(ans, sub_num, q_range){
  let sub_choice = new Array();
  let k = 0;
  let random;
  if(q_range != 2){
    sub_choice.push(weapon_data[ans].sub_id);
    k++;
    while(1){
      random = Math.floor(Math.random()*sub_num);
      if(check_overlap(sub_choice, random)){
        sub_choice.push(random);
        k++;
      }
      if(k >= 4)
        break;
    }
  }
  sub_choice = shuffle_arr(sub_choice);
  return sub_choice;
}

function create_special_choice(ans, special_num, q_range){
  let special_choice = new Array();
  let k = 0;
  let random;
  if(q_range != 1){

    // ボムピッチャー系の選択確率を 1 / 5 に下げるために priority_arr を用意する。
    let priority_arr = new Array();
    let priority;
    for(let i=0; i<special_num; i++){
      if(10 <= i) priority = 1;
      else priority = 5;
      for(let j=0; j<priority; j++){
        priority_arr.push(i);
      }
    }

    special_choice.push(weapon_data[ans].special_id);
    k++;
    let priority_sum = priority_arr.length;
    while(1){
      random = Math.floor(Math.random()*priority_sum);
      if(check_overlap(special_choice, priority_arr[random])){
        special_choice.push(priority_arr[random]);
        k++;
      }
      if(k >= 4)
        break;
    }
  }
  special_choice = shuffle_arr(special_choice);
  return special_choice;
}

function create_questions(ans_arr, q_range){
  let question_num = ans_arr.length;
  let sub_num = sub_data.length;
  let special_num = special_data.length;

  let questions = new Array();

  for(let i=0; i<question_num; i++){
    let ans = ans_arr[i];
    // sub_choice の決定
    let sub_choice = create_sub_choice(ans, sub_num, q_range);
    // special_choice の決定
    let special_choice = create_special_choice(ans, special_num, q_range);

    let question_obj = {
      ans: ans,
      sub_choice: sub_choice,
      special_choice: special_choice
    };
    questions.push(question_obj);
  }
  return questions;
}
