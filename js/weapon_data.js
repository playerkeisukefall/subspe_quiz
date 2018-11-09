'use strict';

let weapon_data = [
  {
    name: "スプラシューター",
    category: "シューター",
    sub_id: 0,
    special_id: 1,
    path: "./img/question/weapon/a01.png",
    priority: 2
  },
  {
    name: "スプラシューターコラボ",
    category: "シューター",
    sub_id: 1,
    special_id: 0,
    path: "./img/question/weapon/a02.png",
    priority: 3
  },
  {
    name: "ヒーローシューターレプリカ",
    category: "シューター",
    sub_id: 0,
    special_id: 1,
    path: "./img/question/weapon/a03.png",
    priority: 2
  },
  {
    name: "オクタシューターレプリカ",
    category: "シューター",
    sub_id: 1,
    special_id: 0,
    path: "./img/question/weapon/a04.png",
    priority: 3
  },
  {
    name: "スプラシューターベッチュー",
    category: "シューター",
    sub_id: 2,
    special_id: 2,
    path: "./img/question/weapon/a05.png",
    priority: 2
  },
  {
    name: "プライムシューター",
    category: "シューター",
    sub_id: 5,
    special_id: 4,
    path: "./img/question/weapon/a06.png",
    priority: 1
  },
  {
    name: "プライムシューターコラボ",
    category: "シューター",
    sub_id: 2,
    special_id: 7,
    path: "./img/question/weapon/a07.png",
    priority: 3
  },
  {
    name: "プライムシューターベッチュー",
    category: "シューター",
    sub_id: 1,
    special_id: 8,
    path: "./img/question/weapon/a08.png",
    priority: 2
  },
  {
    name: "シャープマーカー",
    category: "シューター",
    sub_id: 6,
    special_id: 0,
    path: "./img/question/weapon/a09.png",
    priority: 1
  },
  {
    name: "シャープマーカーネオ",
    category: "シューター",
    sub_id: 0,
    special_id: 10,
    path: "./img/question/weapon/a10.png",
    priority: 2
  },
  {
    name: "わかばシューター",
    category: "シューター",
    sub_id: 1,
    special_id: 5,
    path: "./img/question/weapon/a11.png",
    priority: 2
  },
  {
    name: "もみじシューター",
    category: "シューター",
    sub_id: 3,
    special_id: 4,
    path: "./img/question/weapon/a12.png",
    priority: 2
  },
  {
    name: "おちばシューター",
    category: "シューター",
    sub_id: 4,
    special_id: 7,
    path: "./img/question/weapon/a13.png",
    priority: 2
  },
  {
    name: "プロモデラーMG",
    category: "シューター",
    sub_id: 2,
    special_id: 11,
    path: "./img/question/weapon/a14.png",
    priority: 1
  },
  {
    name: "プロモデラーRG",
    category: "シューター",
    sub_id: 9,
    special_id: 6,
    path: "./img/question/weapon/a15.png",
    priority: 1
  },
  {
    name: "N-ZAP85",
    category: "シューター",
    sub_id: 2,
    special_id: 5,
    path: "./img/question/weapon/a16.png",
    priority: 3
  },
  {
    name: "N-ZAP89",
    category: "シューター",
    sub_id: 3,
    special_id: 2,
    path: "./img/question/weapon/a17.png",
    priority: 2
  },
  {
    name: ".52ガロン",
    category: "シューター",
    sub_id: 5,
    special_id: 6,
    path: "./img/question/weapon/a18.png",
    priority: 1
  },
  {
    name: ".52ガロンデコ",
    category: "シューター",
    sub_id: 7,
    special_id: 3,
    path: "./img/question/weapon/a19.png",
    priority: 2
  },
  {
    name: "ジェットスイーパー",
    category: "シューター",
    sub_id: 6,
    special_id: 2,
    path: "./img/question/weapon/a20.png",
    priority: 1
  },
  {
    name: "ジェットスイーパーカスタム",
    category: "シューター",
    sub_id: 0,
    special_id: 3,
    path: "./img/question/weapon/a21.png",
    priority: 3
  },
  {
    name: "L3リールガン",
    category: "シューター",
    sub_id: 7,
    special_id: 6,
    path: "./img/question/weapon/a22.png",
    priority: 1
  },
  {
    name: "L3リールガンD",
    category: "シューター",
    sub_id: 0,
    special_id: 0,
    path: "./img/question/weapon/a23.png",
    priority: 1
  },
  {
    name: "L3リールガンベッチュー",
    category: "シューター",
    sub_id: 8,
    special_id: 9,
    path: "./img/question/weapon/a24.png",
    priority: 1
  },
  {
    name: ".96ガロン",
    category: "シューター",
    sub_id: 9,
    special_id: 5,
    path: "./img/question/weapon/a25.png",
    priority: 2
  },
  {
    name: ".96ガロンデコ",
    category: "シューター",
    sub_id: 8,
    special_id: 1,
    path: "./img/question/weapon/a26.png",
    priority: 3
  },
  {
    name: "H3リールガン",
    category: "シューター",
    sub_id: 5,
    special_id: 2,
    path: "./img/question/weapon/a27.png",
    priority: 2
  },
  {
    name: "H3リールガンD",
    category: "シューター",
    sub_id: 2,
    special_id: 5,
    path: "./img/question/weapon/a28.png",
    priority: 3
  },
  {
    name: "ボールドマーカー",
    category: "シューター",
    sub_id: 7,
    special_id: 1,
    path: "./img/question/weapon/a29.png",
    priority: 2
  },
  {
    name: "ボールドマーカーネオ",
    category: "シューター",
    sub_id: 10,
    special_id: 2,
    path: "./img/question/weapon/a30.png",
    priority: 1
  },
  {
    name: "ボトルガイザー",
    category: "シューター",
    sub_id: 8,
    special_id: 3,
    path: "./img/question/weapon/a31.png",
    priority: 1
  },
  {
    name: "ボトルガイザーフォイル",
    category: "シューター",
    sub_id: 1,
    special_id: 7,
    path: "./img/question/weapon/a32.png",
    priority: 2
  },
];
