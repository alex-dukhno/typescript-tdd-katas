import {List} from '../kata';

describe('persistent list', () => {
    let empty: List;

    beforeEach(() => {
        empty = List.empty();
    });

    test('empty list', () => {
        expect(empty.toString()).toBe('[]');
    });

    test('append many items', () => {
        const list = empty.append(1).append(2).append(3);

        expect(list.toString()).toBe('[3, 2, 1]');
    });

    test('head of empty list', () => {
        expect(empty.head()).toBe(undefined);
    });

    test('head of nonempty list', () => {
        const nonempty = empty.append(1).append(2);

        expect(nonempty.head()).toBe(2);
    });

    test('tail of empty list', () => {
        expect(empty.tail()).toBe(empty);
    });

    test('tail of nonempty list', () => {
        const nonempty = empty.append(1).append(2).append(3);

        expect(nonempty.tail().toString()).toBe('[2, 1]');
    });

    test('concatenation of two empty lists', () => {
        expect(empty.concat(empty)).toBe(empty);
    });

    test('concatenation of empty and nonempty lists', () => {
        const nonempty = empty.append(1).append(2).append(3);

        expect(empty.concat(nonempty).toString()).toBe('[3, 2, 1]');
        expect(nonempty.concat(empty).toString()).toBe('[3, 2, 1]');
    });

    test('concatenation of two nonempty lists', () => {
        const nonempty = empty.append(1).append(2).append(3);
        const theOther = empty.append(4).append(5).append(6);

        expect(theOther.concat(nonempty).toString()).toBe('[6, 5, 4, 3, 2, 1]');
    });
});
