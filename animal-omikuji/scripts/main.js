const omikujiConfig = {
    "ゾウ": {
        animalImg: '/pages/images/animals/zou.png',
        aboutTemplate: [
            'ゾウテンプレート1',
            'ゾウテンプレート2',
            'ゾウテンプレート3',
            'ゾウテンプレート4',
        ],
        luckyAnimal: ['luckyAnimalぞう1', 'luckyAnimalぞう2', 'luckyAnimalぞう3', 'luckyAnimalぞう4'],
        luckyAction: ['luckyActionぞう1', 'luckyActionぞう2', 'luckyActionぞう3', 'luckyActionぞう4'],
        luckyFood: ['luckyFoodぞう1', 'luckyFoodぞう2', 'luckyFoodぞう3', 'luckyFoodぞう4'],
    },
    "ブタ": {
        animalImg: '/pages/images/animals/buta.png',
        aboutTemplate: [
            'ブタテンプレート1',
            'ブタテンプレート2',
            'ブタテンプレート3',
            'ブタテンプレート4',
        ],
        luckyAnimal: ['luckyAnimalブタ1', 'luckyAnimalブタ2', 'luckyAnimalブタ3', 'luckyAnimalブタ4'],
        luckyAction: ['luckyActionブタ1', 'luckyActionブタ2', 'luckyActionブタ3', 'luckyActionブタ4'],
        luckyFood: ['luckyFoodブタ1', 'luckyFoodブタ2', 'luckyFoodブタ3', 'luckyFoodブタ4'],
    },
    "ネコ": {
        animalImg: '/pages/images/animals/neko.png',
        aboutTemplate: [
            'ネコテンプレート1',
            'ネコテンプレート2',
            'ネコテンプレート3',
            'ネコテンプレート4',
        ],
        luckyAnimal: ['luckyAnimalネコ1', 'luckyAnimalネコ2', 'luckyAnimalネコ3', 'luckyAnimalネコ4'],
        luckyAction: ['luckyActionネコ1', 'luckyActionネコ2', 'luckyActionネコ3', 'luckyActionネコ4'],
        luckyFood: ['luckyFoodネコ1', 'luckyFoodネコ2', 'luckyFoodネコ3', 'luckyFoodネコ4'],
    },
    "ヒツジ": {
        animalImg: '/pages/images/animals/hituji.png',
        aboutTemplate: [
            'ヒツジテンプレート1',
            'ヒツジテンプレート2',
            'ヒツジテンプレート3',
            'ヒツジテンプレート4',
        ],
        luckyAnimal: ['luckyAnimalヒツジ1', 'luckyAnimalヒツジ2', 'luckyAnimalヒツジ3', 'luckyAnimalヒツジ4'],
        luckyAction: ['luckyActionヒツジ1', 'luckyActionヒツジ2', 'luckyActionヒツジ3', 'luckyActionヒツジ4'],
        luckyFood: ['luckyFoodヒツジ1', 'luckyFoodヒツジ2', 'luckyFoodヒツジ3', 'luckyFoodヒツジ4'],
    },
};


class Omikuji {
    constructor() {
        this.omikujiInfo = omikujiConfig;
        this.yourAnimal = this.getAnimal()
    }

    getKeyFromDict(omikujiInfo) {
        // おみくじdictionaryからKeyを抽出し、動物を決めていきます
        // 引数：omikujiInfo
        // return: ブタとかヒツジとか
        let keys = Object.keys(omikujiInfo);
        return keys[keys.length * Math.random() << 0];
    };

    getElementFromList(animalPropertyList) {
        // 例：
        // aboutTemplate: ['ヒツジテンプレート1','ヒツジテンプレート2','ヒツジテンプレート3','ヒツジテンプレート4',]
        // からテンプレートを一つランダムに持ってくる
        return animalPropertyList[animalPropertyList.length * Math.random() << 0]
    }

    getAnimal() {
        // おみくじに使う動物・関連する情報を取得
        // 返り値：動物Keyに該当するValue
        return this.omikujiInfo[this.getKeyFromDict(this.omikujiInfo)];
    }

    getDisplayInfo() {
        // 返り値例：
        // {
        //     animalImg: '/pages/images/animals/zou.png',
        //     aboutTemplate: 'ゾウテンプレート3',
        //     luckyAnimal: 'luckyAnimalぞう3',
        //     luckyAction: 'luckyActionぞう1',
        //     luckyFood: 'luckyFoodぞう3'
        //   }
        let animalDict = new Object();
        for (let [key, value] of Object.entries(this.yourAnimal)) {
            if (Array.isArray(value)) {
                value = this.getElementFromList(value)
            }
            animalDict[key] = value
        }
        return animalDict
    }
}
