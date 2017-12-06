import {BowlingGame} from '../kata';

describe('bowling game', () => {
    let game;

    beforeEach(() => {
        game = new BowlingGame();
    });

    const rollMany = (times, pin) => {
        for (let _ of new Array(times)) {
            game.roll(pin);
        }
    };

    const rollSpare = () => {
        game.roll(4);
        game.roll(6);
    };

    const rollStrike = () =>
        game.roll(10);

    test('gutter game', () => {
        rollMany(20, 0);

        expect(game.score()).toBe(0);
    });

    test('all ones', () => {
        rollMany(20, 1);

        expect(game.score()).toBe(20);
    });

    test('one spare', () => {
        rollSpare();
        game.roll(3);
        rollMany(17, 0);

        expect(game.score()).toBe(16);
    });

    test('one strike', () => {
        rollStrike();
        game.roll(4);
        game.roll(3);
        rollMany(16, 0);

        expect(game.score()).toBe(24);
    });

    test('perfect game', () => {
        rollMany(13, 10);

        expect(game.score()).toBe(300);
    });
});
