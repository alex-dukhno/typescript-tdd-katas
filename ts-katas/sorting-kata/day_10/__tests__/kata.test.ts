import {Sorting} from '../kata';

describe('sorting algorithms', () => {
    describe('bubble sort', () => {
        test('sort empty array', () => {
            expect(Sorting.bubbleSort([])).toEqual([]);
        });

        test('sort single item array', () => {
            expect(Sorting.bubbleSort([1])).toEqual([1]);
        });

        test('sort sorted array with two items', () => {
            expect(Sorting.bubbleSort([1, 2])).toEqual([1, 2]);
        });

        test('sort unsorted array with two items', () => {
            expect(Sorting.bubbleSort([2, 1])).toEqual([1, 2]);
        });

        test('sort sorted array with three items', () => {
            expect(Sorting.bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
        });

        test('sort unsorted left part of array with three items', () => {
            expect(Sorting.bubbleSort([2, 1, 3])).toEqual([1, 2, 3]);
        });

        test('sort unsorted right part of array with three items', () => {
            expect(Sorting.bubbleSort([1, 3, 2])).toEqual([1, 2, 3]);
        });

        test('sort reversed array with three items', () => {
            expect(Sorting.bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
        });
    });

    describe('quick sort', () => {
        test('sort empty array', () => {
            expect(Sorting.quickSort([])).toEqual([]);
        });

        test('sort single item array', () => {
            expect(Sorting.quickSort([1])).toEqual([1]);
        });

        test('sort sorted array with two items', () => {
            expect(Sorting.quickSort([1, 2])).toEqual([1, 2]);
        });

        test('sort unsorted array with two items', () => {
            expect(Sorting.quickSort([2, 1])).toEqual([1, 2]);
        });

        test('sort sorted array with three items', () => {
            expect(Sorting.quickSort([1, 2, 3])).toEqual([1, 2, 3]);
        });

        test('sort unsorted left part array with three items', () => {
            expect(Sorting.quickSort([2, 1, 3])).toEqual([1, 2, 3]);
        });

        test('sort unsorted right part array with three items', () => {
            expect(Sorting.quickSort([1, 3, 2])).toEqual([1, 2, 3]);
        });

        test('sort reversed array with three items', () => {
            expect(Sorting.quickSort([3, 2, 1])).toEqual([1, 2, 3]);
        });
    });
});
