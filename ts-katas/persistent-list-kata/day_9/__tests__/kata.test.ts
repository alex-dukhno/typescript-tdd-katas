import {List} from '../kata';

describe('persistent list', () => {
    const empty: List<number> = List.empty();

    test('create list', () => {
        expect(empty.toString()).toBe('[]');
    });

    test('append items to list', () => {
        const list = empty.append(1).append(2).append(3);

        expect(list.toString()).toBe('[3, 2, 1]');
    });

    test('head of empty list', () => {
        expect(empty.head).toThrow(Error);
    });

    test('head of nonempty list', () => {
        const nonempty = empty.append(1).append(2).append(3);

        expect(nonempty.head()).toBe(3);
    });

    test('tail of empty list', () => {
        expect(empty.tail).toThrow(Error);
    });

    test('tail of nonempty list', () => {
        const nonempty = empty.append(1).append(2).append(3);

        expect(nonempty.tail()).toEqual(empty.append(1).append(2));
    });

    test('concatenation of two empty lists', () => {
        expect(empty.concat(empty)).toEqual(empty);
    });

    test('concatenation of empty and nonempty lists', () => {
        const nonempty = empty.append(1).append(2).append(3);

        expect(empty.concat(nonempty)).toEqual(nonempty);
        expect(nonempty.concat(empty)).toEqual(nonempty);
    });

    test('concatenation of two nonempty lists', () => {
        const nonempty = empty.append(1).append(2).append(3);
        const theOther = empty.append(4).append(5).append(6);

        expect(theOther.concat(nonempty)).toEqual(empty.append(1).append(2).append(3).append(4).append(5).append(6));
    });
});
