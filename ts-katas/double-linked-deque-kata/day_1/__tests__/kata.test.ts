import {LinkedDeque} from '../kata';

describe('linked queue', () => {
    let deque;

    beforeEach(() => {
        deque = new LinkedDeque();
    });

    test('push many in front pop all from the front of deque', () => {
        deque.pushFront(1);
        deque.pushFront(2);
        deque.pushFront(3);

        expect(deque.popFront()).toBe(3);
        expect(deque.popFront()).toBe(2);
        expect(deque.popFront()).toBe(1);
        expect(deque.popFront()).toBe(undefined);
    });

    test('push many back pop all from the front of deque', () => {
        deque.pushBack(1);
        deque.pushBack(2);
        deque.pushBack(3);

        expect(deque.popFront()).toBe(1);
        expect(deque.popFront()).toBe(2);
        expect(deque.popFront()).toBe(3);
        expect(deque.popFront()).toBe(undefined);
    });

    test('push many back pop all from the back of the deque', () => {
        deque.pushBack(1);
        deque.pushBack(2);
        deque.pushBack(3);

        expect(deque.popBack()).toBe(3);
        expect(deque.popBack()).toBe(2);
        expect(deque.popBack()).toBe(1);
        expect(deque.popBack()).toBe(undefined);
    });

    test('push many front pop all from the back of deque', () => {
        deque.pushFront(1);
        deque.pushFront(2);
        deque.pushFront(3);

        expect(deque.popBack()).toBe(1);
        expect(deque.popBack()).toBe(2);
        expect(deque.popBack()).toBe(3);
        expect(deque.popBack()).toBe(undefined);
    });
});
