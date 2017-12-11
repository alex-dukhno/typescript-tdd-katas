class LinkedDeque {
    private head: Node;
    private tail: Node;

    popFront(): number {
        if (this.head == undefined) {
            return undefined;
        } else {
            let item = this.head.item;
            this.head = this.head.next;
            if (this.head == undefined) {
                this.tail = undefined;
            }
            return item;
        }
    }

    popBack(): number {
        if (this.tail == undefined) {
            return undefined;
        } else {
            let item = this.tail.item;
            this.tail = this.tail.prev;
            if (this.tail == undefined) {
                this.head = undefined;
            }
            return item;
        }
    }

    pushFront(item: number) {
        if (this.head == undefined) {
            let node = new Node(item);
            this.head = node;
            this.tail = node;
        } else {
            let node = new Node(item, this.head);
            this.head.prev = node;
            this.head = node;
        }
    }

    pushBack(item: number) {
        if (this.head == undefined) {
            let node = new Node(item);
            this.head = node;
            this.tail = node;
        } else {
            let node = new Node(item, undefined, this.tail);
            this.tail.next = node;
            this.tail = node;
        }
    }
}


class Node {
    item: number;
    next: Node;
    prev: Node;

    constructor(item: number, next: Node = undefined, prev: Node = undefined) {
        this.item = item;
        this.next = next;
        this.prev = prev;
    }
}

export {LinkedDeque};
