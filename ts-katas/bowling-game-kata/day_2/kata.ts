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
            if (this.isStrike(frameIndex)) {
                score += 10 + this.strikeBonus(frameIndex);
                frameIndex += 1;
            } else if (this.isSpare(frameIndex)) {
                score += 10 + this.spareBonus(frameIndex);
                frameIndex += 2;
            } else {
                score += this.rolls[frameIndex] + this.rolls[frameIndex + 1];
                frameIndex += 2;
            }
        }

        return score;
    }

    private isStrike(frameIndex: number) {
        return this.rolls[frameIndex] == 10;
    }

    private strikeBonus(frameIndex: number) {
        return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
    }

    private isSpare(frameIndex: number) {
        return this.rolls[frameIndex] + this.rolls[frameIndex + 1] == 10;
    }

    private spareBonus(frameIndex: number) {
        return this.rolls[frameIndex + 2];
    }
}

export {BowlingGame}
