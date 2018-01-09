import {List} from '../kata';

describe('persistent list', () => {
    let empty: List;

    beforeEach(() => {
        empty = List.empty();
    });

    test('create empty list', () => {
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

    test('filter empty list', () => {
        expect(empty.filter(e => e !== 0)).toEqual(empty);
    });

    test('filter nonempty list', () => {
       const nonempty = empty.append(0).append(1).append(2).append(3);

       expect(nonempty.filter(e => e !== 0)).toEqual(empty.append(1).append(2).append(3));
       expect(nonempty.filter(e => e !== 2)).toEqual(empty.append(0).append(1).append(3));
    });
});
