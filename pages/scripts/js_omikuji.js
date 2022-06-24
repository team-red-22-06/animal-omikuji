class Omikuji {
    constructor(fortune, img, description, luckyLanguage, luckyDatabase, luckyEditor) {
        this.fortune = fortune;
        this.img = img;
        this.description = description;
        this.luckyLanguage = luckyLanguage;
        this.luckyDatabase = luckyDatabase;
        this.luckyEditor = luckyEditor;
    }

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
                    <a href="index.html" class="btn btn-danger rounded-pill my-3">もう一度おみくじを引く</a>
                </div>
            </div>
        </div>
        `;
    }
}


let omikujiTest = new Omikuji("大吉", "./images/tyukiti.png", "関わっているプロジェクトから何だか香ばしい匂いがします。炎上する前になんとか逃げるのが吉。", "Ruby", "SQL Server", "nano");
// console.log(omikujiTest.getOmikujiHtml());

// const target = document.getElementById("omikujiPage");
// target.classList.add("vh-100", "d-flex", "justify-content-center", "align-items-center", "flex-column")

// target.innerHTML = omikujiTest.getOmikujiHtml();

// おみくじデータの定義
let daikichi = new Omikuji("大吉", "./images/tyukiti.png", "リリースしたソフトウェアにバグが見つかりますが、再現性が低いためユーザーも上司も誰ひとり気づかないでしょう。見なかったことにするのが吉", "Python", "Oracle Database", "Vscode");;
let chukichi = new Omikuji("中吉", "./images/chukichi.png", "gitでコンフリクトが発生します!!!が、今回はうまく解消できるでしょう。今回は・・・", "C++", "MySQL", "Emacs");
let kichi = new Omikuji("吉", "./images/kichi.png", "リリースしたソフトウェアにバグがみつかりますが、幸いユーザー企業のお偉い型は極度のITオンチです。仕様で押し通すのが吉。", "Javascript", "SQL Server", "Vim");
let suekichi = new Omikuji("末吉", "./images/suekichi.png", "関わっているプロジェクトから何だか香ばしい匂いがします。炎上する前になんとか逃げるのが吉。", "Ruby", "MongoDB", "nano");
let shoukichi = new Omikuji("小吉", "./images/shoukichi.png", "開発の要件定義が綿飴のようにふわっふわっです。手遅れにならないうちに手を打っておくのが吉", "Java", "PostgreSQL", "Eclipse");
let kyou = new Omikuji("凶", "./images/kyou.png", "リリースしたソフトウェアに致命的な欠陥がみつかり、それが原因で顧客の機密情報が流出します。仕様で押し通すのはいささか無理があるますので、潔く腹をくくりましょう。", "C", "DB2", "Atom");

// おみくじの中身 大吉と吉はでやすく
let omikujiList = [daikichi, chukichi, kichi, suekichi, shoukichi, kyou, daikichi, kichi];

// ランダムにおみくじ結果を表示させる。 → 期待挙動通り
// 本来は TOPページからの onclick で走らせる内容
const target = document.getElementById("omikujiPage");
target.classList.add("vh-100", "d-flex", "justify-content-center", "align-items-center", "flex-column")

let i = Math.floor(Math.random() * omikujiList.length);
target.innerHTML = omikujiList[i].getOmikujiHtml();