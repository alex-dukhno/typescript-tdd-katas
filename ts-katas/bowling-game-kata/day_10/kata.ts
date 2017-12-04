class BowlingGame {
    private rolls: Array<number>;

    constructor() {
        this.rolls = [];
    }

    roll(pin: number) {
        this.rolls.push(pin);
    }

    score() {
        let score = 0;
        let frameIndex = 0;

        for (let _ of new Array(10)) {
            if (this.rolls[frameIndex] == 10) {
                score += 10 + this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
                frameIndex += 1;
            } else if (this.rolls[frameIndex] + this.rolls[frameIndex + 1] == 10) {
                score += 10 + this.rolls[frameIndex + 2];
                frameIndex += 2;
            } else {
                score += this.rolls[frameIndex] + this.rolls[frameIndex + 1];
                frameIndex += 2;
            }
        }

        return score;
    }
}

export {BowlingGame};
