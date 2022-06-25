// エラー Uncaught SyntaxError: Identifier 'top' has already been declared (at js_omikuji.js:1:1)
// htmlを返す関数を定義するでよさそうか別で定義するか

// (チェック)ここの定義の仕方がまずいかもしれないので修正してから検討
// function return topPageHtml(){}の中で実行してみてどうか

// let top = document.getElementById("top-page");
// console.log(top);

// (チェック)ここの定義の仕方がまずいかもしれないので修正してから検討
// const topHTML = `
//         <div>
//             <div class="text-center">
//                 <h1 class="text-danger font-syuji">ソフトウェア開発</h1>
//                 <h1 class="text-danger font-syuji">みくじ</h1>
//                 <img class="light m-4 omikuji-img" src="https://3.bp.blogspot.com/-cPqdLavQBXA/UZNyKhdm8RI/AAAAAAAASiM/NQy6g-muUK0/s800/syougatsu2_omijikuji2.png" />
//             </div>
//             <div class="d-flex justify-content-around align-items-center pt-3 pb-5">
//                   <button type="button" class="btn btn-danger rounded-pill font-syuji" onclick="onClickTopOmikujiChange">
//                       おみくじを引く
//                   </button>
//             </div>
//         </div>
//         <div class="d-flex flex-column">
//             <div class="d-flex justify-content-center align-items-center">
//                 <a href="about.html">
//                     <p class="text-danger font-syuji middle-font">このおみくじについて</p>
//                 </a>
//                 <p class="text-danger middle-font">｜</p>
//                 <a href="developers.html">
//                     <p class="text-danger font-syuji text-decoration-none middle-font">開発者一覧</p>
//                 </a>
//             </div>
//             <div class="text-center">
//               <p class="footer-font font-syuji text-danger">
//                 ©ソフトウェア開発みくじ
//               </p>
//             </div>
//         </div>
// `;

// top.innerHTML = topHTML;
// top.classList.add(
//   "vh-100",
//   "d-flex",
//   "justify-content-center",
//   "align-items-center",
//   "flex-column"
// );

const onClickTopOmikujiChange = () => {
  // onclick clickすると top へ d-none を付与　omikujiへ d-noneを除去して、d-blockを付与
  // let i = Math.floor(Math.random() * omikujiList.length);
  // omikuji.innerHTML = omikujiList[i].getOmikujiHtml();
}


class Omikuji {
  constructor(fortune, img, description, luckyLanguage, luckyDatabase, luckyEditor) {
    this.fortune = fortune;
    this.img = img;
    this.description = description;
    this.luckyLanguage = luckyLanguage;
    this.luckyDatabase = luckyDatabase;
    this.luckyEditor = luckyEditor;
  };

  // TOPページのHTMLはおみくじクラスと直接関連するわけではないことに気づいたので、クラス外へ移管
  // getTopHtml() {
  //   boxElement = document.getElementById('top-page');
  //   boxElement.classList.add('vh-100 d-flex justify-content-center align-items-center flex-column');
  //   boxElement.append(this.getSectionHTML(), this.getFooterHTML())
  //   return boxElement;
  // };

  // getSectionHTML() {
  //   let sectionElem = document.createElement("section");
  //   sectionElem.innerHTML =
  //     `
  //       <div>
  //           <div class="text-center">
  //               <h1 class="text-danger font-syuji">ソフトウェア開発</h1>
  //               <h1 class="text-danger font-syuji">みくじ</h1>
  //               <img class="light m-4 omikuji-img" src="https://3.bp.blogspot.com/-cPqdLavQBXA/UZNyKhdm8RI/AAAAAAAASiM/NQy6g-muUK0/s800/syougatsu2_omijikuji2.png" />
  //           </div>
  //           <div class="d-flex justify-content-around align-items-center pt-3 pb-5">
  //                 <button id="draw-omikuji" type="button" class="btn btn-danger rounded-pill font-syuji" onclick="">
  //                     おみくじを引く
  //                 </button>
  //           </div>
  //       </div>
  //       `
  //   return sectionElem
  // };

  // getFooterHtml() {
  //   let footerElem = document.createElement("footer");
  //   footerElem.innerHTML =
  //     `
  //       <div class="d-flex flex-column">
  //           <div class="d-flex justify-content-center align-items-center">
  //               <a href="about.html">
  //                   <p class="text-danger font-syuji middle-font">このおみくじについて</p>
  //               </a>
  //               <p class="text-danger middle-font">｜</p>
  //               <a href="developers.html">
  //                   <p class="text-danger font-syuji text-decoration-none middle-font">開発者一覧</p>
  //               </a>
  //           </div>
  //           <div class="text-center">
  //               <p class="footer-font font-syuji text-danger">
  //           ©ソフトウェア開発みくじ
  //       </p>
  //           </div>
  //       </div>
  //       `
  //   return footerElem
  // };


  getOmikujiHtml() {
    return `
        <div class="scrollview p-2">
            <div class="container red-double-border-box my-3 py-3">
                <div class="d-flex ustify-content-center align-items-center flex-column">
                    <p class="h5 text-danger">ソフトウェア開発みくじ</p>
                    <hr class="border-red my-3">
                    <img src="${this.img}" width="270px">
                    <h1 class="text-danger text-big">${this.fortune}</h1>
                    <hr class="border-red my-3">
                    <p class="text-danger m-2">${this.description}</p>
                    <hr class="border-red my-3">
                    <p class="text-danger text-sakura m-2">ラッキー言語</p>
                    <h5 class="text-danger">${this.luckyLanguage}</h5>
                    <hr class="border-red my-3">
                    <p class="text-danger text-sakura m-2">ラッキーデータベース</p>
                    <h5 class="text-danger">${this.luckyDatabase}</h5>
                    <hr class="border-red my-3">
                    <p class="text-danger text-sakura m-2">ラッキーエディタ</p>
                    <h5 class="text-danger">${this.luckyEditor}</h5>
                    <hr class="border-red my-3">
                    <button class="btn btn-danger rounded-pill my-3" onclick="onClickTopOmikujiChange">もう一度おみくじを引く</button>
                </div>
            </div>
        </div>
        `;
  }
}

// おみくじデータの定義
let daikichi = new Omikuji(
  "大吉",
  "./images/tyukiti.png",
  "リリースしたソフトウェアにバグが見つかりますが、再現性が低いためユーザーも上司も誰ひとり気づかないでしょう。見なかったことにするのが吉",
  "Python",
  "Oracle Database",
  "Vscode"
);
let chukichi = new Omikuji(
  "中吉",
  "./images/chukichi.png",
  "gitでコンフリクトが発生します!!!が、今回はうまく解消できるでしょう。今回は・・・",
  "C++",
  "MySQL",
  "Emacs"
);
let kichi = new Omikuji(
  "吉",
  "./images/kichi.png",
  "リリースしたソフトウェアにバグがみつかりますが、幸いユーザー企業のお偉い型は極度のITオンチです。仕様で押し通すのが吉。",
  "Javascript",
  "SQL Server",
  "Vim"
);
let suekichi = new Omikuji(
  "末吉",
  "./images/suekichi.png",
  "関わっているプロジェクトから何だか香ばしい匂いがします。炎上する前になんとか逃げるのが吉。",
  "Ruby",
  "MongoDB",
  "nano"
);
let shoukichi = new Omikuji(
  "小吉",
  "./images/shoukichi.png",
  "開発の要件定義が綿飴のようにふわっふわっです。手遅れにならないうちに手を打っておくのが吉",
  "Java",
  "PostgreSQL",
  "Eclipse"
);
let kyou = new Omikuji(
  "凶",
  "./images/kyou.png",
  "リリースしたソフトウェアに致命的な欠陥がみつかり、それが原因で顧客の機密情報が流出します。仕様で押し通すのはいささか無理があるますので、潔く腹をくくりましょう。",
  "C",
  "DB2",
  "Atom"
);

// おみくじの中身 大吉と吉はでやすく
let omikujiList = [
  daikichi,
  chukichi,
  kichi,
  suekichi,
  shoukichi,
  kyou,
  daikichi,
  kichi,
];

// ランダムにおみくじ結果を表示させる。 → 期待挙動通り
// 本来は TOPページからの onclick で走らせる内容
// このあたりはonclickイベント
let omikuji = document.getElementById("omikuji-page");
console.log(omikuji)
omikuji.classList.add(
  "vh-100",
  "d-flex",
  "justify-content-center",
  "align-items-center",
  "flex-column",
  "d-none"
);
