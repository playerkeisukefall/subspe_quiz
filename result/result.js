let hireo_comment_obj = {
  X: [
    "すごすぎて逆にコワイ",
    "握手してください",
    "これからも努力を続けるんやで"
  ],
  S: [
    "あとちょっとやで、まあ頑張ってくれや",
    "正答率 95 % 以上が X やで"
  ],
  A: [
    "どうも、ひれおです"
  ],
  B: [
    "実際大事なのはエイムやで"
  ],
  C: [
    "実際大事なのはエイムやで"
  ]
}

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

// c: 分子
// m: 分母
function get_udemae(c, m){
  let n = c / m;
  if(n >= 0.95)
    return "X";
  else if(n >= 0.90)
    return "S";
  else if(n >= 0.70)
    return "A";
  else if(n >= 0.40)
    return "B";
  else
    return "C";
}

/* sample
1. <div class="sub_score">
2.   <img src="../img/result/sub_bar.png" class="bar">
3.   <p class="word1">/ 10</p>
4.   <p class="word2_sub">10</p>
5. </div>
*/
function create_sub_result(q_num, sub_score){
  return new Promise(resolve => {
    let udemae = get_udemae(sub_score, q_num);
    let html_str = "";
    html_str += '<div class="sub_score">'; // 1
    html_str += '<img src="../img/result/sub_bar.png" class="bar">'; // 2
    html_str += '<p class="word1">/ ' + String(q_num) + '</p>'; // 3
    html_str += '<p class="word2_sub">' + String(sub_score) + '</p>'; // 4
    html_str += '</div>'; // 5
    setTimeout(() => {
      let body = document.getElementsByTagName("body")[0];
      body.insertAdjacentHTML('beforeend', html_str);
      // もし ウデマエ が X ならスコアのフォントの色を変える
      if(udemae == 'X') $(".word2_sub").css({"color": "yellow"});
      resolve("* sub_result fin.");
    }, 1000);
  });
}

/* sample
6. <div class="special_score">
7.   <img src="../img/result/special_bar.png" class="bar">
8.   <p class="word1">/ 10</p>
9.   <p class="word2_special">8</p>
10. </div>
*/
function create_special_result(q_num, special_score){
  return new Promise(resolve => {
    let udemae = get_udemae(special_score, q_num);
    let html_str = "";
    html_str += '<div class="sub_score">'; // 6
    html_str += '<img src="../img/result/special_bar.png" class="bar">'; // 7
    html_str += '<p class="word1">/ ' + String(q_num) + '</p>'; // 8
    html_str += '<p class="word2_special">' + String(special_score) + '</p>'; // 9
    html_str += '</div>'; // 10
    setTimeout(() => {
      let body = document.getElementsByTagName("body")[0];
      body.insertAdjacentHTML('beforeend', html_str);
      // もし ウデマエ が X ならスコアのフォントの色を変える
      if(udemae == 'X') $(".word2_special").css({"color": "yellow"});
      resolve("* special_result fin.");
    }, 1000);
  });
}

function create_word3(){
  return new Promise(resolve => {
    let html_str = "";
    html_str += '<img src="../img/result/word3.png" class="word3">'; // 11
    setTimeout(() => {
      let body = document.getElementsByTagName("body")[0];
      body.insertAdjacentHTML('beforeend', html_str);
      resolve("*  create_word3 fin.");
    }, 1000);
  });
}

function create_udemae(q_num, q_range, sub_score, special_score){
  return new Promise(resolve => {
    let m; // 分母
    if(q_range == 0) m = q_num * 2;
    else m = q_num;
    let udemae = get_udemae(Number(sub_score) + Number(special_score), m);
    let html_str = '<img src="../img/result/' + udemae + '.png" class="udemae">'; // 12
    setTimeout(() => {
      let body = document.getElementsByTagName("body")[0];
      body.insertAdjacentHTML('beforeend', html_str);
      resolve(udemae);
    }, 1000);
  });
}

function create_word4(){
  return new Promise(resolve => {
    let html_str = "";
    html_str += '<img src="../img/result/word4.png" class="word4">'; // 13
    setTimeout(() => {
      let body = document.getElementsByTagName("body")[0];
      body.insertAdjacentHTML('beforeend', html_str);
      resolve("*  create_word4 fin.");
    }, 1000);
  });
}

function get_hireo_comment(udemae){
  let comment_num = hireo_comment_obj[udemae].length;
  console.log(comment_num);
  let random = Math.floor(Math.random()*comment_num);
  return hireo_comment_obj[udemae][random];
}

/* sample
14. <div class="hireo_hitokoto">
15.   <img src="../img/result/hireo.png" class="hireo">
16.   <img src="../img/result/fukidasi.png" class="fukidasi">
17.   <div class="word5_flame">
18.     <p class="word5">結局大事なのはエイムやで。</p>
19.   </div>
20. </div>
21. <img src="../img/result/return_to_title.png" class="return_to_title">
*/
function create_hireo(udemae){
  return new Promise(resolve => {
    let hireo_comment = get_hireo_comment(udemae);
    console.log(hireo_comment);
    let html_str = "";
    html_str += '<div class="hireo_hitokoto">'; // 14
    html_str += '<img src="../img/result/hireo.png" class="hireo">'; // 15
    html_str += '<img src="../img/result/fukidasi.png" class="fukidasi">'; // 16
    html_str += '<div class="word5_flame">'; // 17
    html_str += '<p class="word5">' + hireo_comment + '</p>'; // 18
    html_str += '</div>'; // 19
    html_str += '</div>'; // 20
    html_str += '<img src="../img/result/return_to_title.png" class="return_to_title">'; // 21

    setTimeout(() => {
      let body = document.getElementsByTagName("body")[0];
      body.insertAdjacentHTML('beforeend', html_str);
      resolve("* hireo fin.");
    }, 1000);
  });
}

/*
function (){
  return new Promise(resolve => {
    let html_str = "";
    html_str += '';
    setTimeout(() => {
      let body = document.getElementsByTagName("body")[0];
      body.insertAdjacentHTML('beforeend', html_str);
      resolve("*  fin.");
    }, 1000);
  });
}
*/

/* html 雛形
1. <div class="sub_score">
2.   <img src="../img/result/sub_bar.png" class="bar">
3.   <p class="word1">/ 10</p>
4.   <p class="word2">10</p>
5. </div>
6. <div class="special_score">
7.   <img src="../img/result/special_bar.png" class="bar">
8.   <p class="word1">/ 10</p>
9.   <p class="word2">8</p>
10. </div>
11. <img src="../img/result/word3.png" class="word3">
12. <img src="../img/result/X.png" class="udemae">
13. <img src="../img/result/word4.png" class="word4">
14. <div class="hireo_hitokoto">
15.   <img src="../img/result/hireo.png" class="hireo">
16.   <img src="../img/result/fukidasi.png" class="fukidasi">
17.   <div class="word5_flame">
18.     <p class="word5">結局大事なのはエイムやで。</p>
19.   </div>
20. </div>
21. <img src="../img/result/return_to_title.png" class="return_to_title">
*/
async function create_resultpage(question_num, q_range, sub_score, special_score){
  console.log(question_num);
  console.log(q_range);
  console.log(sub_score);
  console.log(special_score);
  // サブ リザルト
  if(q_range != 2){
    let r1 = await create_sub_result(question_num, sub_score);
    console.log(r1);
  }
  // スペシャル リザルト
  if(q_range != 1){
    let r2 = await create_special_result(question_num, special_score);
    console.log(r2);
  }
  // あなたのウデマエ...
  let r3 = await create_word3();
  console.log(r3);
  // ウデマエ
  let udemae = await create_udemae(question_num, q_range, sub_score, special_score);
  console.log("* create_udemae fin.");
  console.log("udemae: " + udemae);
  // ひれお のひとこと
  let r5 = await create_word4();
  console.log(r5);
  // ひれお & 吹き出し
  let r6 = await create_hireo(udemae);
  console.log(r6)
  // クリックイベントを追加
  $(".return_to_title").click(() => {
    location.href = "../title/title.html";
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
  let val = get_url_vars();
  console.log(val);
  create_resultpage(val.num, val.q_range, val.sub, val.special);
});
