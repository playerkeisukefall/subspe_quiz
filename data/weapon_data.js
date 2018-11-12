'use strict';

let weapon_data = [
  {
    name: "スプラシューター",
    category: "シューター",
    sub_id: 0,
    special_id: 1,
    path: "../img/main/weapon/a01.png",
    priority: 2
  },
  {
    name: "スプラシューターコラボ",
    category: "シューター",
    sub_id: 1,
    special_id: 0,
    path: "../img/main/weapon/a02.png",
    priority: 3
  },
  {
    name: "ヒーローシューターレプリカ",
    category: "シューター",
    sub_id: 0,
    special_id: 1,
    path: "../img/main/weapon/a03.png",
    priority: 2
  },
  {
    name: "オクタシューターレプリカ",
    category: "シューター",
    sub_id: 1,
    special_id: 0,
    path: "../img/main/weapon/a04.png",
    priority: 3
  },
  {
    name: "スプラシューターベッチュー",
    category: "シューター",
    sub_id: 2,
    special_id: 2,
    path: "../img/main/weapon/a05.png",
    priority: 2
  },
  {
    name: "プライムシューター",
    category: "シューター",
    sub_id: 5,
    special_id: 4,
    path: "../img/main/weapon/a06.png",
    priority: 1
  },
  {
    name: "プライムシューターコラボ",
    category: "シューター",
    sub_id: 2,
    special_id: 7,
    path: "../img/main/weapon/a07.png",
    priority: 3
  },
  {
    name: "プライムシューターベッチュー",
    category: "シューター",
    sub_id: 1,
    special_id: 8,
    path: "../img/main/weapon/a08.png",
    priority: 2
  },
  {
    name: "シャープマーカー",
    category: "シューター",
    sub_id: 6,
    special_id: 0,
    path: "../img/main/weapon/a09.png",
    priority: 1
  },
  {
    name: "シャープマーカーネオ",
    category: "シューター",
    sub_id: 0,
    special_id: 10,
    path: "../img/main/weapon/a10.png",
    priority: 2
  },
  {
    name: "わかばシューター",
    category: "シューター",
    sub_id: 1,
    special_id: 5,
    path: "../img/main/weapon/a11.png",
    priority: 2
  },
  {
    name: "もみじシューター",
    category: "シューター",
    sub_id: 3,
    special_id: 4,
    path: "../img/main/weapon/a12.png",
    priority: 2
  },
  {
    name: "おちばシューター",
    category: "シューター",
    sub_id: 4,
    special_id: 7,
    path: "../img/main/weapon/a13.png",
    priority: 2
  },
  {
    name: "プロモデラーMG",
    category: "シューター",
    sub_id: 2,
    special_id: 11,
    path: "../img/main/weapon/a14.png",
    priority: 1
  },
  {
    name: "プロモデラーRG",
    category: "シューター",
    sub_id: 9,
    special_id: 6,
    path: "../img/main/weapon/a15.png",
    priority: 1
  },
  {
    name: "N-ZAP85",
    category: "シューター",
    sub_id: 2,
    special_id: 5,
    path: "../img/main/weapon/a16.png",
    priority: 3
  },
  {
    name: "N-ZAP89",
    category: "シューター",
    sub_id: 3,
    special_id: 2,
    path: "../img/main/weapon/a17.png",
    priority: 2
  },
  {
    name: ".52ガロン",
    category: "シューター",
    sub_id: 5,
    special_id: 6,
    path: "../img/main/weapon/a18.png",
    priority: 1
  },
  {
    name: ".52ガロンデコ",
    category: "シューター",
    sub_id: 7,
    special_id: 3,
    path: "../img/main/weapon/a19.png",
    priority: 2
  },
  {
    name: "ジェットスイーパー",
    category: "シューター",
    sub_id: 6,
    special_id: 2,
    path: "../img/main/weapon/a20.png",
    priority: 1
  },
  {
    name: "ジェットスイーパーカスタム",
    category: "シューター",
    sub_id: 0,
    special_id: 3,
    path: "../img/main/weapon/a21.png",
    priority: 3
  },
  {
    name: "L3リールガン",
    category: "シューター",
    sub_id: 7,
    special_id: 6,
    path: "../img/main/weapon/a22.png",
    priority: 1
  },
  {
    name: "L3リールガンD",
    category: "シューター",
    sub_id: 0,
    special_id: 0,
    path: "../img/main/weapon/a23.png",
    priority: 1
  },
  {
    name: "L3リールガンベッチュー",
    category: "シューター",
    sub_id: 8,
    special_id: 9,
    path: "../img/main/weapon/a24.png",
    priority: 1
  },
  {
    name: ".96ガロン",
    category: "シューター",
    sub_id: 9,
    special_id: 5,
    path: "../img/main/weapon/a25.png",
    priority: 2
  },
  {
    name: ".96ガロンデコ",
    category: "シューター",
    sub_id: 8,
    special_id: 1,
    path: "../img/main/weapon/a26.png",
    priority: 3
  },
  {
    name: "H3リールガン",
    category: "シューター",
    sub_id: 5,
    special_id: 2,
    path: "../img/main/weapon/a27.png",
    priority: 2
  },
  {
    name: "H3リールガンD",
    category: "シューター",
    sub_id: 2,
    special_id: 5,
    path: "../img/main/weapon/a28.png",
    priority: 3
  },
  {
    name: "ボールドマーカー",
    category: "シューター",
    sub_id: 7,
    special_id: 1,
    path: "../img/main/weapon/a29.png",
    priority: 2
  },
  {
    name: "ボールドマーカーネオ",
    category: "シューター",
    sub_id: 10,
    special_id: 2,
    path: "../img/main/weapon/a30.png",
    priority: 1
  },
  {
    name: "ボトルガイザー",
    category: "シューター",
    sub_id: 8,
    special_id: 3,
    path: "../img/main/weapon/a31.png",
    priority: 1
  },
  {
    name: "ボトルガイザーフォイル",
    category: "シューター",
    sub_id: 1,
    special_id: 7,
    path: "../img/main/weapon/a32.png",
    priority: 2
  },
  {
    name: "ホットブラスター",
    category: "ブラスター",
    sub_id: 6,
    special_id: 1,
    path: "../img/main/weapon/b01.png",
    priority: 2
  },
  {
    name: "ホットブラスターカスタム",
    category: "ブラスター",
    sub_id: 3,
    special_id: 0,
    path: "../img/main/weapon/b02.png",
    priority: 3
  },
  {
    name: "ヒーローブラスターレプリカ",
    category: "ブラスター",
    sub_id: 6,
    special_id: 1,
    path: "../img/main/weapon/b03.png",
    priority: 2
  },
  {
    name: "ラピッドブラスター",
    category: "ブラスター",
    sub_id: 11,
    special_id: 14,
    path: "../img/main/weapon/b04.png",
    priority: 2
  },
  {
    name: "ラピッドブラスターデコ",
    category: "ブラスター",
    sub_id: 2,
    special_id: 0,
    path: "../img/main/weapon/b05.png",
    priority: 2
  },
  {
    name: "ノヴァブラスター",
    category: "ブラスター",
    sub_id: 1,
    special_id: 6,
    path: "../img/main/weapon/b06.png",
    priority: 2
  },
  {
    name: "ノヴァブラスターネオ",
    category: "ブラスター",
    sub_id: 11,
    special_id: 10,
    path: "../img/main/weapon/b07.png",
    priority: 1
  },
  {
    name: "ノヴァブラスターベッチュー",
    category: "ブラスター",
    sub_id: 12,
    special_id: 4,
    path: "../img/main/weapon/b08.png",
    priority: 3
  },
  {
    name: "クラッシュブラスター",
    category: "ブラスター",
    sub_id: 1,
    special_id: 3,
    path: "../img/main/weapon/b09.png",
    priority: 2
  },
  {
    name: "クラッシュブラスターネオ",
    category: "ブラスター",
    sub_id: 7,
    special_id: 2,
    path: "../img/main/weapon/b10.png",
    priority: 2
  },
  {
    name: "ラピッドブラスターエリート",
    category: "ブラスター",
    sub_id: 6,
    special_id: 4,
    path: "../img/main/weapon/b11.png",
    priority: 2
  },
  {
    name: "ラピッドブラスターエリートデコ",
    category: "ブラスター",
    sub_id: 8,
    special_id: 5,
    path: "../img/main/weapon/b12.png",
    priority: 2
  },
  {
    name: "ロングブラスター",
    category: "ブラスター",
    sub_id: 2,
    special_id: 4,
    path: "../img/main/weapon/b13.png",
    priority: 3
  },
  {
    name: "ロングブラスターカスタム",
    category: "ブラスター",
    sub_id: 7,
    special_id: 7,
    path: "../img/main/weapon/b14.png",
    priority: 2
  },
  {
    name: "スプラローラー",
    category: "ローラー",
    sub_id: 7,
    special_id: 1,
    path: "../img/main/weapon/c01.png",
    priority: 3
  },
  {
    name: "スプラローラーコラボ",
    category: "ローラー",
    sub_id: 10,
    special_id: 6,
    path: "../img/main/weapon/c02.png",
    priority: 2
  },
  {
    name: "ヒーローローラーレプリカ",
    category: "ローラー",
    sub_id: 7,
    special_id: 1,
    path: "../img/main/weapon/c03.png",
    priority: 3
  },
  {
    name: "スプラローラーベッチュー",
    category: "ローラー",
    sub_id: 1,
    special_id: 7,
    path: "../img/main/weapon/c04.png",
    priority: 2
  },
  {
    name: "ダイナモローラー",
    category: "ローラー",
    sub_id: 11,
    special_id: 3,
    path: "../img/main/weapon/c05.png",
    priority: 3
  },
  {
    name: "ダイナモローラーテスラ",
    category: "ローラー",
    sub_id: 1,
    special_id: 5,
    path: "../img/main/weapon/c06.png",
    priority: 3
  },
  {
    name: "ダイナモローラーベッチュー",
    category: "ローラー",
    sub_id: 9,
    special_id: 8,
    path: "../img/main/weapon/c07.png",
    priority: 2
  },
  {
    name: "カーボンローラー",
    category: "ローラー",
    sub_id: 3,
    special_id: 4,
    path: "../img/main/weapon/c08.png",
    priority: 2
  },
  {
    name: "カーボンローラーデコ",
    category: "ローラー",
    sub_id: 0,
    special_id: 12,
    path: "../img/main/weapon/c09.png",
    priority: 3
  },
  {
    name: "ヴァリアブルローラー",
    category: "ローラー",
    sub_id: 8,
    special_id: 14,
    path: "../img/main/weapon/c10.png",
    priority: 1
  },
  {
    name: "ヴァリアブルローラーフォイル",
    category: "ローラー",
    sub_id: 2,
    special_id: 2,
    path: "../img/main/weapon/c11.png",
    priority: 2
  },
  {
    name: "ホクサイ",
    category: "フデ",
    sub_id: 3,
    special_id: 0,
    path: "../img/main/weapon/d01.png",
    priority: 2
  },
  {
    name: "ヒーローブラシレプリカ",
    category: "フデ",
    sub_id: 3,
    special_id: 0,
    path: "../img/main/weapon/d02.png",
    priority: 2
  },
  {
    name: "ホクサイヒュー",
    category: "フデ",
    sub_id: 10,
    special_id: 2,
    path: "../img/main/weapon/d03.png",
    priority: 2
  },
  {
    name: "ホクサイベッチュー",
    category: "フデ",
    sub_id: 2,
    special_id: 9,
    path: "../img/main/weapon/d04.png",
    priority: 2
  },
  {
    name: "パブロ",
    category: "フデ",
    sub_id: 1,
    special_id: 1,
    path: "../img/main/weapon/d05.png",
    priority: 3
  },
  {
    name: "パブロヒュー",
    category: "フデ",
    sub_id: 11,
    special_id: 6,
    path: "../img/main/weapon/d06.png",
    priority: 2
  },
  {
    name: "スプラチャージャー",
    category: "チャージャー",
    sub_id: 1,
    special_id: 3,
    path: "../img/main/weapon/e01.png",
    priority: 1
  },
  {
    name: "スプラスコープ",
    category: "チャージャー",
    sub_id: 1,
    special_id: 3,
    path: "../img/main/weapon/e02.png",
    priority: 1
  },
  {
    name: "スプラチャージャーコラボ",
    category: "チャージャー",
    sub_id: 8,
    special_id: 10,
    path: "../img/main/weapon/e03.png",
    priority: 1
  },
  {
    name: "スプラスコープコラボ",
    category: "チャージャー",
    sub_id: 8,
    special_id: 10,
    path: "../img/main/weapon/e04.png",
    priority: 1
  },
  {
    name: "ヒーローチャージャーレプリカ",
    category: "チャージャー",
    sub_id: 1,
    special_id: 3,
    path: "../img/main/weapon/e05.png",
    priority: 1
  },
  {
    name: "スプラチャージャーベッチュー",
    category: "チャージャー",
    sub_id: 9,
    special_id: 6,
    path: "../img/main/weapon/e06.png",
    priority: 1
  },
  {
    name: "スプラスコープベッチュー",
    category: "チャージャー",
    sub_id: 9,
    special_id: 6,
    path: "../img/main/weapon/e07.png",
    priority: 1
  },
  {
    name: " リッター4K",
    category: "チャージャー",
    sub_id: 11,
    special_id: 4,
    path: "../img/main/weapon/e08.png",
    priority: 1
  },
  {
    name: "4Kスコープ",
    category: "チャージャー",
    sub_id: 11,
    special_id: 4,
    path: "../img/main/weapon/e09.png",
    priority: 1
  },
  {
    name: "リッター4Kカスタム",
    category: "チャージャー",
    sub_id: 10,
    special_id: 7,
    path: "../img/main/weapon/e10.png",
    priority: 1
  },
  {
    name: "4Kスコープカスタム",
    category: "チャージャー",
    sub_id: 10,
    special_id: 7,
    path: "../img/main/weapon/e11.png",
    priority: 1
  },
  {
    name: "ソイチューバー",
    category: "チャージャー",
    sub_id: 2,
    special_id: 1,
    path: "../img/main/weapon/e12.png",
    priority: 1
  },
  {
    name: "ソイチューバーカスタム",
    category: "チャージャー",
    sub_id: 7,
    special_id: 0,
    path: "../img/main/weapon/e13.png",
    priority: 1
  },
  {
    name: "スクイックリンα",
    category: "チャージャー",
    sub_id: 5,
    special_id: 5,
    path: "../img/main/weapon/e14.png",
    priority: 1
  },
  {
    name: "スクイックリンβ",
    category: "チャージャー",
    sub_id: 3,
    special_id: 6,
    path: "../img/main/weapon/e15.png",
    priority: 1
  },
  {
    name: "14式竹筒銃・甲",
    category: "チャージャー",
    sub_id: 7,
    special_id: 2,
    path: "../img/main/weapon/e16.png",
    priority: 1
  },
  {
    name: "14式竹筒銃・乙",
    category: "チャージャー",
    sub_id: 6,
    special_id: 13,
    path: "../img/main/weapon/e17.png",
    priority: 1
  },
  {
    name: "バケットスロッシャー",
    category: "スロッシャー",
    sub_id: 2,
    special_id: 2,
    path: "../img/main/weapon/f01.png",
    priority: 2
  },
  {
    name: "ヒーロースロッシャーレプリカ",
    category: "スロッシャー",
    sub_id: 2,
    special_id: 2,
    path: "../img/main/weapon/f02.png",
    priority: 2
  },
  {
    name: "バケットスロッシャーデコ",
    category: "スロッシャー",
    sub_id: 9,
    special_id: 6,
    path: "../img/main/weapon/f03.png",
    priority: 3
  },
  {
    name: "ヒッセン",
    category: "スロッシャー",
    sub_id: 0,
    special_id: 5,
    path: "../img/main/weapon/f04.png",
    priority: 3
  },
  {
    name: "ヒッセンヒュー",
    category: "スロッシャー",
    sub_id: 1,
    special_id: 4,
    path: "../img/main/weapon/f05.png",
    priority: 2
  },
  {
    name: "スクリュースロッシャー",
    category: "スロッシャー",
    sub_id: 3,
    special_id: 3,
    path: "../img/main/weapon/f06.png",
    priority: 3
  },
  {
    name: "スクリュースロッシャーネオ",
    category: "スロッシャー",
    sub_id: 5,
    special_id: 14,
    path: "../img/main/weapon/f07.png",
    priority: 2
  },
  {
    name: "スクリュースロッシャーベッチュー",
    category: "スロッシャー",
    sub_id: 12,
    special_id: 1,
    path: "../img/main/weapon/f08.png",
    priority: 3
  },
  {
    name: "エクスプロッシャー",
    category: "スロッシャー",
    sub_id: 9,
    special_id: 7,
    path: "../img/main/weapon/f09.png",
    priority: 3
  },
  {
    name: "オーバーフロッシャー",
    category: "スロッシャー",
    sub_id: 8,
    special_id: 4,
    path: "../img/main/weapon/f10.png",
    priority: 3
  },
  {
    name: "バレルスピナー",
    category: "スピナー",
    sub_id: 9,
    special_id: 3,
    path: "../img/main/weapon/g01.png",
    priority: 2
  },
  {
    name: "ヒーロースピナーレプリカ",
    category: "スピナー",
    sub_id: 9,
    special_id: 3,
    path: "../img/main/weapon/g02.png",
    priority: 2
  },
  {
    name: "バレルスピナーデコ",
    category: "スピナー",
    sub_id: 8,
    special_id: 7,
    path: "../img/main/weapon/g03.png",
    priority: 2
  },
  {
    name: "スプラスピナー",
    category: "スピナー",
    sub_id: 0,
    special_id: 2,
    path: "../img/main/weapon/g04.png",
    priority: 2
  },
  {
    name: "スプラスピナーコラボ",
    category: "スピナー",
    sub_id: 7,
    special_id: 4,
    path: "../img/main/weapon/g05.png",
    priority: 2
  },
  {
    name: "ハイドラント",
    category: "スピナー",
    sub_id: 3,
    special_id: 1,
    path: "../img/main/weapon/g06.png",
    priority: 2
  },
  {
    name: "ハイドラントカスタム",
    category: "スピナー",
    sub_id: 11,
    special_id: 5,
    path: "../img/main/weapon/g07.png",
    priority: 3
  },
  {
    name: "クーゲルシュライバー",
    category: "スピナー",
    sub_id: 6,
    special_id: 0,
    path: "../img/main/weapon/g08.png",
    priority: 3
  },
  {
    name: "ノーチラス47",
    category: "スピナー",
    sub_id: 5,
    special_id: 6,
    path: "../img/main/weapon/g09.png",
    priority: 3
  },
  {
    name: "スプラマニューバー",
    category: "マニューバー",
    sub_id: 0,
    special_id: 2,
    path: "../img/main/weapon/h01.png",
    priority: 2
  },
  {
    name: "スプラマニューバーコラボ",
    category: "マニューバー",
    sub_id: 7,
    special_id: 0,
    path: "../img/main/weapon/h02.png",
    priority: 3
  },
  {
    name: "ヒーローマニューバーレプリカ",
    category: "マニューバー",
    sub_id: 0,
    special_id: 2,
    path: "../img/main/weapon/h03.png",
    priority: 2
  },
  {
    name: "スプラマニューバーベッチュー",
    category: "マニューバー",
    sub_id: 2,
    special_id: 6,
    path: "../img/main/weapon/h04.png",
    priority: 3
  },
  {
    name: "スパッタリー",
    category: "マニューバー",
    sub_id: 10,
    special_id: 10,
    path: "../img/main/weapon/h05.png",
    priority: 2
  },
  {
    name: "スパッタリーヒュー",
    category: "マニューバー",
    sub_id: 6,
    special_id: 4,
    path: "../img/main/weapon/h06.png",
    priority: 2
  },
  {
    name: "デュアルスイーパー",
    category: "マニューバー",
    sub_id: 5,
    special_id: 2,
    path: "../img/main/weapon/h07.png",
    priority: 2
  },
  {
    name: "デュアルスイーパーカスタム",
    category: "マニューバー",
    sub_id: 1,
    special_id: 4,
    path: "../img/main/weapon/h08.png",
    priority: 3
  },
  {
    name: "ケルビン525",
    category: "マニューバー",
    sub_id: 11,
    special_id: 0,
    path: "../img/main/weapon/h09.png",
    priority: 2
  },
  {
    name: "ケルビン525デコ",
    category: "マニューバー",
    sub_id: 8,
    special_id: 6,
    path: "../img/main/weapon/h10.png",
    priority: 2
  },
  {
    name: "クアッドホッパーブラック",
    category: "マニューバー",
    sub_id: 3,
    special_id: 1,
    path: "../img/main/weapon/h11.png",
    priority: 3
  },
  {
    name: "クアッドホッパーホワイト",
    category: "マニューバー",
    sub_id: 9,
    special_id: 12,
    path: "../img/main/weapon/h12.png",
    priority: 2
  },
  {
    name: "パラシェルター",
    category: "シェルター",
    sub_id: 9,
    special_id: 4,
    path: "../img/main/weapon/i01.png",
    priority: 3
  },
  {
    name: "ヒーローシェルターレプリカ",
    category: "シェルター",
    sub_id: 9,
    special_id: 4,
    path: "../img/main/weapon/i02.png",
    priority: 3
  },
  {
    name: "パラシェルターソレーラ",
    category: "シェルター",
    sub_id: 3,
    special_id: 14,
    path: "../img/main/weapon/i03.png",
    priority: 2
  },
  {
    name: "キャンピングシェルター",
    category: "シェルター",
    sub_id: 10,
    special_id: 7,
    path: "../img/main/weapon/i04.png",
    priority: 3
  },
  {
    name: "キャンピングシェルターソレーラ",
    category: "シェルター",
    sub_id: 8,
    special_id: 11,
    path: "../img/main/weapon/i05.png",
    priority: 2
  },
  {
    name: "スパイガジェット",
    category: "シェルター",
    sub_id: 11,
    special_id: 1,
    path: "../img/main/weapon/i06.png",
    priority: 2
  },
  {
    name: "スパイガジェットソレーラ",
    category: "シェルター",
    sub_id: 1,
    special_id: 6,
    path: "../img/main/weapon/i07.png",
    priority: 2
  },
  {
    name: "スパイガジェットベッチュー",
    category: "シェルター",
    sub_id: 4,
    special_id: 5,
    path: "../img/main/weapon/i08.png",
    priority: 2
  }
];
