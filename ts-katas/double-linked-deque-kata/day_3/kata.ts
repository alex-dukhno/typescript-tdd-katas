class LinkedDeque implements Iterable {
    private head: Node;
    private tail: Node;

    popFront(): number {
        if (this.head == undefined) {
            return undefined;
        } else {
            let item = this.head.item;
            this.head = this.head.next;
            return item;
        }
    }

    popBack(): number {
        if (this.tail == undefined) {
            return undefined;
        } else {
            let item = this.tail.item;
            this.tail = this.tail.prev;
            return item;
        }
    }

    pushFront(item: number) {
        let node = new Node(item, this.head);
        if (this.tail == undefined) {
            this.tail = node;
        } else {
            this.head.prev = node;
        }
        this.head = node;
    }

    pushBack(item: number) {
        let node = new Node(item, undefined, this.tail);
        if (this.head == undefined) {
            this.head = node;
        } else {
            this.tail.next = node;
        }
        this.tail = node;
    }
}

class Node {
    item: number;
    next: Node;
    prev: Node;

    constructor(item: number, next: Node=undefined, prev: Node=undefined) {
        this.item = item;
        this.next = next;
        this.prev = prev;
    }
}

export {LinkedDeque};
