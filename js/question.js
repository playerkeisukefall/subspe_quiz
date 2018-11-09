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
  console.log(questions);
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
