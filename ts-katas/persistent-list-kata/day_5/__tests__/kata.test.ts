import {List} from '../kata';

describe('persistent list', () => {
    const empty: List<number> = List.empty();

    test('create empty list', () => {
        expect(empty.toString()).toBe('[]');
    });

    test('append many items to list', () => {
        const list = empty.append(1).append(2).append(3);

        expect(list.toString()).toBe('[3, 2, 1]');
    });

    test('head of empty list', () => {
        expect(empty.head).toThrow(Error);
    });

    test('head of nonempty list', () => {
        const list = empty.append(1).append(2).append(3);

        expect(list.head()).toBe(3);
    });

    test('tail of empty list', () => {
        expect(empty.tail).toThrow(Error);
    });

    test('tail of nonempty list', () => {
        const list = empty.append(1).append(2).append(3);

        expect(list.tail()).toEqual(empty.append(1).append(2));
    });

    test('concatenation of two empty lists', () => {
        expect(empty.concat(empty)).toBe(empty);
    });

    test('concatenation of empty and nonempty lists', () => {
        const list = empty.append(1).append(2).append(3);

        expect(empty.concat(list)).toEqual(list);
        expect(list.concat(empty)).toEqual(list);
    });

    test('concatenation of nonempty lists', () => {
        const list = empty.append(1).append(2).append(3);
        const nonempty = empty.append(4).append(5).append(6);

        expect(nonempty.concat(list)).toEqual(empty.append(1).append(2).append(3).append(4).append(5).append(6));
    });
});
