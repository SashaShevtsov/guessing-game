class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return Math.floor((this.min + this.max) / 2);
    }

    lower() {
        this.max = (this.min + this.max) / 2;
    }

    greater() {
        this.min = (this.min + this.max) / 2;
    }
}

module.exports = GuessingGame;
