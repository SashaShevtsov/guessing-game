class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return Math.round((this.min + this.max) / 2);
    }

    lower() {
        this.max = Math.round((this.min + this.max) / 2);
    }

    greater() {
        this.min = Math.round((this.min + this.max) / 2);
    }
}

module.exports = GuessingGame;
