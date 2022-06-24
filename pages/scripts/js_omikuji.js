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

const target = document.getElementById("omikujiPage");
target.classList.add("vh-100", "d-flex", "justify-content-center", "align-items-center", "flex-column")

target.innerHTML = omikujiTest.getOmikujiHtml();
