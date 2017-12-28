import {List} from '../kata';

describe('persistent list', () => {
    const empty: List = List.empty();

    test('empty list', () => {
        expect(empty.toString()).toBe('[]');
    });

    test('append an item', () => {
        const list = empty.append(1);

        expect(list.toString()).toBe('[1]');
    });

    test('append many items', () => {
        const list = empty.append(1).append(2).append(3);

        expect(list.toString()).toBe('[3, 2, 1]');
    });

    test('head of empty list', () => {
        expect(empty.head()).toBe(undefined);
    });

    test('nonempty list head', () => {
        const nonempty = empty.append(1).append(2).append(3);

        expect(nonempty.head()).toBe(3);
    });

    test('empty list tail', () => {
        expect(empty.tail()).toBe(empty);
    });

    test('nonempty list tail', () => {
        const nonempty = empty.append(1).append(2).append(3);

        expect(nonempty.tail().toString()).toBe('[2, 1]');
    });

    test('concatenation of two empty lists', () => {
        expect(empty.concat(empty).toString()).toBe('[]');
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
