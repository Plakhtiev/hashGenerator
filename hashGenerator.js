class hashGenerator {
    // свойства
    //startSymbolCode (int)
    // finishSymbolCode (int)
    // hashLength (int)
    //hash - (string || false)
    constructor(hashLength) {
        this.startSymbolCode = 48;
        this.finishSymbolCode = 126;
        if (!isNaN(parseInt(hashLength))) {
            this.hashLength = parseInt(hashLength);
            this.generateHash();
        } else {
            this.hash = false;
        }
    }

    randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }
    generateHash() {
        this.hash = '';
        for (let i = 0; i < this.hashLength; i++) {
            this.hash += String.fromCharCode(this.randomInteger(this.startSymbolCode, this.finishSymbolCode))
        }
    }
}