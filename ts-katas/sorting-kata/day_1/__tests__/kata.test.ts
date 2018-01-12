import {Sorting} from '../kata';

describe('sorting algorithms', () => {
    describe('bubble sorting', () => {
        test('sort empty array', () => {
            expect(Sorting.bubble_sort([])).toEqual([]);
        });

        test('sort single item array', () => {
            expect(Sorting.bubble_sort([1])).toEqual([1]);
        });

        test('sort sorted array with two items', () => {
            expect(Sorting.bubble_sort([1, 2])).toEqual([1, 2]);
        });

        test('sort unsorted array with two items', () => {
            expect(Sorting.bubble_sort([2, 1])).toEqual([1, 2]);
        });

        test('sort sorted array with three items', () => {
            expect(Sorting.bubble_sort([1, 2, 3])).toEqual([1, 2, 3]);
        });

        test('sort unsorted left part of array with three items', () => {
            expect(Sorting.bubble_sort([2, 1, 3])).toEqual([1, 2, 3]);
        });

        test('sort unsorted right part of array with three items', () => {
            expect(Sorting.bubble_sort([1, 3, 2])).toEqual([1, 2, 3]);
        });

        test('sort reversed array', () => {
            expect(Sorting.bubble_sort([3, 2, 1])).toEqual([1, 2, 3]);
        });
    });

    describe('quick sorting', () => {
        test('sort empty list', () => {
            expect(Sorting.quick_sort([])).toEqual([]);
        });

        test('sort single item array', () => {
            expect(Sorting.quick_sort([1])).toEqual([1]);
        });

        test('sort sorted array with two items', () => {
            expect(Sorting.quick_sort([1, 2])).toEqual([1, 2]);
        });

        test('sort unsorted array with two items', () => {
            expect(Sorting.quick_sort([2, 1])).toEqual([1, 2]);
        });

        test('sort sorted array with three items', () => {
            expect(Sorting.quick_sort([1, 2, 3])).toEqual([1, 2, 3]);
        });

        test('sort unsorted left part of array with three items', () => {
            expect(Sorting.quick_sort([2, 1, 3])).toEqual([1, 2, 3]);
        });

        test('sort unsorted right part of array with three items', () => {
            expect(Sorting.quick_sort([1, 3, 2])).toEqual([1, 2, 3]);
        });

        test('sort reversed array', () => {
            expect(Sorting.quick_sort([3, 2, 1])).toEqual([1, 2, 3]);
        });
    });
});
