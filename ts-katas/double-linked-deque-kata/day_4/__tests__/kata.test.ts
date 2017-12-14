import {LinkedDeque} from '../kata';

describe('linked queue', () => {
    let deque;

    beforeEach(() => {
        deque = new LinkedDeque();
    });

    test('push front many pop front all', () => {
        deque.pushFront(1);
        deque.pushFront(2);
        deque.pushFront(3);

        expect(deque.popFront()).toBe(3);
        expect(deque.popFront()).toBe(2);
        expect(deque.popFront()).toBe(1);
        expect(deque.popFront()).toBe(undefined);
    });

    test('push front many pop back all', () => {
        deque.pushFront(1);
        deque.pushFront(2);
        deque.pushFront(3);

        expect(deque.popBack()).toBe(1);
        expect(deque.popBack()).toBe(2);
        expect(deque.popBack()).toBe(3);
        expect(deque.popBack()).toBe(undefined);
    });

    test('push back many pop back all', () => {
        deque.pushBack(1);
        deque.pushBack(2);
        deque.pushBack(3);

        expect(deque.popBack()).toBe(3);
        expect(deque.popBack()).toBe(2);
        expect(deque.popBack()).toBe(1);
        expect(deque.popBack()).toBe(undefined);
    });

    test('push back many pop front all', () => {
        deque.pushBack(1);
        deque.pushBack(2);
        deque.pushBack(3);

        expect(deque.popFront()).toBe(1);
        expect(deque.popFront()).toBe(2);
        expect(deque.popFront()).toBe(3);
        expect(deque.popFront()).toBe(undefined);
    });
});
