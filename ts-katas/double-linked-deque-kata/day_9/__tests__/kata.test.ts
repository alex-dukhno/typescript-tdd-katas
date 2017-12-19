import {LinkedDeque} from '../kata';

describe('linked queue', () => {
    let deque: LinkedDeque;

    beforeEach(() => {
        deque = new LinkedDeque();
    });

    test('push many front pop all front', () => {
        deque.pushFront(1);
        deque.pushFront(2);
        deque.pushFront(3);

        expect(deque.popFront()).toBe(3);
        expect(deque.popFront()).toBe(2);
        expect(deque.popFront()).toBe(1);
        expect(deque.popFront()).toBe(undefined);
    });

    test('push many back pop all front', () => {
        deque.pushBack(1);
        deque.pushBack(2);
        deque.pushBack(3);

        expect(deque.popFront()).toBe(1);
        expect(deque.popFront()).toBe(2);
        expect(deque.popFront()).toBe(3);
        expect(deque.popFront()).toBe(undefined);
        expect(deque.popBack()).toBe(undefined);
    });

    test('push many back pop all back', () => {
        deque.pushBack(1);
        deque.pushBack(2);
        deque.pushBack(3);

        expect(deque.popBack()).toBe(3);
        expect(deque.popBack()).toBe(2);
        expect(deque.popBack()).toBe(1);
        expect(deque.popBack()).toBe(undefined);
    });

    test('push many front pop all back', () => {
        deque.pushFront(1);
        deque.pushFront(2);
        deque.pushFront(3);

        expect(deque.popBack()).toBe(1);
        expect(deque.popBack()).toBe(2);
        expect(deque.popBack()).toBe(3);
        expect(deque.popBack()).toBe(undefined);
        expect(deque.popFront()).toBe(undefined);
    });
});
