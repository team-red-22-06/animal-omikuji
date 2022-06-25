class Omikuji {
  constructor(fortune, img, description, luckyLanguage, luckyDatabase, luckyEditor) {
    this.fortune = fortune;
    this.img = img;
    this.description = description;
    this.luckyLanguage = luckyLanguage;
    this.luckyDatabase = luckyDatabase;
    this.luckyEditor = luckyEditor;
  };

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
                    <button class="btn btn-danger rounded-pill my-3" onclick="showTop()">もう一度おみくじを引く</button>
                </div>
            </div>
        </div>
        `;
  }
}

// おみくじデータの定義
let daikichi = new Omikuji(
  "大吉",
  "./images/daikichi.png",
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

// TOPページを表示する時の関数
function showTop() {
  let top = document.getElementById("top-page");
  // console.log(top);
  const topHTML = `
          <div>
              <div class="text-center">
                  <h1 class="text-danger font-syuji">ソフトウェア開発</h1>
                  <h1 class="text-danger font-syuji">みくじ</h1>
                  <img class="light m-4 omikuji-img" src="https://3.bp.blogspot.com/-cPqdLavQBXA/UZNyKhdm8RI/AAAAAAAASiM/NQy6g-muUK0/s800/syougatsu2_omijikuji2.png" />
              </div>
              <div class="d-flex justify-content-around align-items-center pt-3 pb-5">
                    <button type="button" class="btn btn-danger rounded-pill font-syuji" onclick="showOmikuji()">
                        おみくじを引く
                    </button>
              </div>
          </div>
          <div class="d-flex flex-column">
              <div class="d-flex justify-content-center align-items-center">
                  <a href="about.html">
                      <p class="text-danger font-syuji middle-font">このおみくじについて</p>
                  </a>
                  <p class="text-danger middle-font">｜</p>
                  <a href="developers.html">
                      <p class="text-danger font-syuji text-decoration-none middle-font">開発者一覧</p>
                  </a>
              </div>
              <div class="text-center">
                <p class="footer-font font-syuji text-danger">
                  ©ソフトウェア開発みくじ
                </p>
              </div>
          </div>
  `;

  top.innerHTML = topHTML;
  top.classList.add(
    "vh-100",
    "d-flex",
    "justify-content-center",
    "align-items-center",
    "flex-column"
  );

  let omikuji = document.getElementById("omikuji-page");
  omikuji.classList.remove(
    "vh-100",
    "d-flex",
    "justify-content-center",
    "align-items-center",
    "flex-column"
  );
  omikuji.classList.add("d-none");
  omikuji.innerHTML = "";

  return top;
}

// おみくじを表示する時の関数
function showOmikuji() {
  let omikuji = document.getElementById("omikuji-page");

  omikuji.classList.add(
    "vh-100",
    "d-flex",
    "justify-content-center",
    "align-items-center",
    "flex-column",
    "d-block"
  );

  let i = Math.floor(Math.random() * omikujiList.length);
  omikuji.innerHTML = omikujiList[i].getOmikujiHtml();

  // TOPページはおみくじページの表示の際には不要
  let top = document.getElementById("top-page");
  top.classList.remove(
    "vh-100",
    "d-flex",
    "justify-content-center",
    "align-items-center",
    "flex-column"
  )
  top.innerHTML = "";

  return omikuji;
}

// 初期はTOPページを表示
showTop();
