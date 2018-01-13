import {Sorting} from '../kata';

describe('sorting algorithms', () => {
    describe('bubble sorting', () => {
        test('sort empty array', () => {
            expect(Sorting.bubble_sort([])).toEqual([]);
        });

        test('sort single item array', () => {
            expect(Sorting.bubble_sort([1])).toEqual([1]);
        });

        test('sort sorted two items array', () => {
            expect(Sorting.bubble_sort([1, 2])).toEqual([1, 2]);
        });

        test('sort unsorted two items array', () => {
            expect(Sorting.bubble_sort([2, 1])).toEqual([1, 2]);
        });

        test('sort sorted three items array', () => {
            expect(Sorting.bubble_sort([1, 2, 3])).toEqual([1, 2, 3]);
        });

        test('sort unsorted left part of array with three items', () => {
            expect(Sorting.bubble_sort([2, 1, 3])).toEqual([1, 2, 3]);
        });

        test('sort unsorted right part of array with three items', () => {
            expect(Sorting.bubble_sort([1, 3, 2])).toEqual([1, 2, 3]);
        });

        test('sort reversed array with three items', () => {
            expect(Sorting.bubble_sort([3, 2, 1])).toEqual([1, 2, 3]);
        });
    });

    describe('quick sorting', () => {
        test('sort empty array', () => {
            expect(Sorting.quick_sort([])).toEqual([]);
        });

        test('sort single item array', () => {
            expect(Sorting.quick_sort([1])).toEqual([1]);
        });

        test('sort sorted two items array', () => {
            expect(Sorting.quick_sort([1, 2])).toEqual([1, 2]);
        });

        test('sort unsorted two items array', () => {
            expect(Sorting.quick_sort([2, 1])).toEqual([1, 2]);
        });

        test('sort unsorted left part of array with three items', () => {
            expect(Sorting.quick_sort([2, 1, 3])).toEqual([1, 2, 3]);
        });

        test('sort unsorted right part of array with three items', () => {
            expect(Sorting.quick_sort([1, 3, 2])).toEqual([1, 2, 3]);
        });

        test('sort reversed array with three items', () => {
            expect(Sorting.quick_sort([3, 2, 1])).toEqual([1, 2, 3]);
        });
    });
});
