function get_url_vars(){
    var vars = [], max = 0, hash = "", array = "";
    var url = window.location.search;

        //?を取り除くため、1から始める。複数のクエリ文字列に対応するため、&で区切る
    hash  = url.slice(1).split('&');
    max = hash.length;
    for (var i = 0; i < max; i++) {
        array = hash[i].split('=');    //keyと値に分割。
        vars.push(array[0]);    //末尾にクエリ文字列のkeyを挿入。
        vars[array[0]] = array[1];    //先ほど確保したkeyに、値を代入。
    }

    return vars;
}

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

function check_ans(ans_arr, ans){
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
    // ＊ check_ans() 関数
    //   ans_arr の中に ans がないか（重複がないか）チェック。
    //   重複がなければ true, あれば false
    if(check_ans(ans_arr, ans)){
      ans_arr.push(ans);
      k++;
    }
    if(k >= question_num){
      break;
    }
  }
  return ans_arr;
}

/* get_questions() 関数
  @params
    * question_num: 出題数
    * priority_mode: ブキ人気度に応じて出題確率を変えるか。
     - true 変える
     - false 変えない
    * q_range: 出題範囲
     - 0 サブスペ両方
     - 1 サブのみ
     - 2 スペシャルのみ
  @return
*/
function get_questions(question_num, priority_mode, q_range){
  let ans_arr = get_ans(question_num, priority_mode); // まず問題にするブキのインデックスが格納されている配列を取得。
  console.log(ans_arr);
}

document.addEventListener("DOMContentLoaded", function(event) {
  let val = get_url_vars();
  // パラメータ ********************************
  const question_num = Number(val["num"]);
  const priority_mode = true;
  const q_range = 0;
  // *****************************************
  console.log(question_num);
  //confirm_data();
  //confirm_ans(question_num, priority_mode);
  get_questions(question_num, priority_mode, q_range);
});
