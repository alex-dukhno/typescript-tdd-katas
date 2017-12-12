class LinkedDeque {
    private head: Node;
    private tail: Node;

    pushFront(item: number) {
        const node = new Node(item, this.head, undefined);
        if (this.head == undefined) {
            this.tail = node;
        } else {
            this.head.prev = node;
        }
        this.head = node;
    }

    pushBack(item: number) {
        const node = new Node(item, undefined, this.tail);
        if (this.tail == undefined) {
            this.head = node;
        } else {
            this.tail.next = node;
        }
        this.tail = node;
    }

    popFront(): number {
        if (this.head == undefined) {
            return undefined;
        } else {
            const item = this.head.item;
            this.head = this.head.next;
            return item;
        }
    }

    popBack(): number {
        if (this.tail == undefined) {
            return undefined;
        } else {
            const item = this.tail.item;
            this.tail = this.tail.prev;
            return item;
        }
    }
}

class Node {
    item: number;
    next: Node;
    prev: Node;

    constructor(item: number, next: Node, prev: Node) {
        this.item = item;
        this.next = next;
        this.prev = prev;
    }
}

export {LinkedDeque};
