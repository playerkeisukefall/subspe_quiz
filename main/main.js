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


/* get_questions() 関数
  @discription
    問題を question_num 個生成する。1 つの問題の情報は question_obj に格納される。
  @params
    * question_num: 出題数
    * priority_mode: ブキ人気度に応じて出題確率を変えるか。
     - true 変える
     - false 変えない
    * q_range: 出題範囲
     - 0 サブスペ両方
     - 1 サブのみ
     - 2 スペシャルのみ
  @return question オブジェクト x question_num の配列
    * question オブジェクト
      {
        ans: インデックス
        sub_choice: [o, o, o, o] ← sub_id が 4つ。必ず weapon_data[ans].sub_id と一致するものが含まれる。
        special_choice: [o, o, o, o] ← special_id が 4つ。必ず weapon_data[ans].special_id と一致するものが含まれる。
      }
    ※ q_range が 0 ではない場合は sub_choice / special_choice のどちらかが空の配列になる。
*/
function get_questions(question_num, priority_mode, q_range){
  let ans_arr = get_ans(question_num, priority_mode); // まず問題にするブキのインデックスが格納されている配列を取得。
  let questions = create_questions(ans_arr, q_range); // question_obj が格納されている配列を取得。
  return questions;
}

/* create_newpage() 関数
  @discription
    問題のページを生成し、表示する。
  @params
    * questions: question_obj の配列。question_num 個の要素をもつ。
    * question_i: 何番目の問題かを表す変数。
    * question_num: 問題数。
    * subspe_flag:
      - 0: サブの問題を生成/表示。
      - 1: スペシャルの問題を生成/表示。
    * q_range: 出題範囲
      - 0: サブスペ両方
      - 1: サブのみ
      - 2: スペシャルのみ
    * terminal: 終端かどうかを表す
      - true: 終端
      - false: 終端ではない
*/
function create_newpage(questions, question_i, question_num, subspe_flag, q_range, terminal){
  if(terminal)
    finish();
  else{
    let html_str = create_html_str(questions[question_i], question_i, subspe_flag); // 表示する html の DOM を文字列として受け取る。
    let body = document.getElementsByTagName("body")[0];
    body.insertAdjacentHTML('beforeend', html_str);
    let ans_choice = get_ans_choice(questions[question_i], subspe_flag);
    console.log(ans_choice);
    let next_parameters = compute_next_parameters(questions, question_i, question_num, subspe_flag, q_range);
    set_click_event(ans_choice, next_parameters);
  }
}

/* グローバルパラメータ
  * status: Webページの状態を表す。
    - 0: 出題中
    - 1: フィードバック表示中
    - 2: 「tap to next」表示中
*/
let status = 0;
let next_parameters;

document.addEventListener("DOMContentLoaded", function(event) {
  let val = get_url_vars();
  // パラメータ ********************************
  const question_num = Number(val["num"]);
  const priority_mode = true;
  const q_range = 2;
  // *****************************************
  console.log(question_num);
  //confirm_data();
  //confirm_ans(question_num, priority_mode);
  let questions = get_questions(question_num, priority_mode, q_range);

  if(q_range != 2)
    create_newpage(questions, 0, question_num, 0, q_range, false);
  else
    create_newpage(questions, 0, question_num, 1, q_range, false);

});
