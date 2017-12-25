class LinkedDeque {
    private head: Node;
    private tail: Node;

    popFront() {
        if (this.head == undefined) {
            return undefined;
        } else {
            const item = this.head.item;
            this.head = this.head.next;
            if (this.head == undefined) {
                this.tail = undefined;
            }
            return item;
        }
    }

    popBack() {
        if (this.tail == undefined) {
            return undefined;
        } else {
            const item = this.tail.item;
            this.tail = this.tail.prev;
            if (this.tail == undefined) {
                this.head = undefined;
            }
            return item;
        }
    }

    pushFront(item: number) {
        const node = new Node(item, this.head);
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
}

class Node {
    item: number;
    next: Node;
    prev: Node;

    constructor(item: number, next: Node, prev: Node=undefined) {
        this.item = item;
        this.next = next;
        this.prev = prev;
    }
}

export {LinkedDeque};
