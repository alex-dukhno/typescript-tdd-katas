export class List<T> {
    static empty<T>() {
        return new List();
    }

    constructor(private item: T | undefined = undefined, private next: List<T> | undefined = undefined) {
    }

    append(item: T): List<T> {
        return new List(item, this);
    }

    head(): T {
        if (this.item == undefined) {
            throw Error("head of empty list");
        }
        return this.item;
    }

    tail(): List<T> {
        if (this.next == undefined) {
            return this;
        } else {
            return this.next;
        }
    }

    concat(other: List<T>): List<T> {
        if (this.next == undefined) {
            return other;
        } else {
            return this.tail().concat(other).append(this.head());
        }
    }

    toString() {
        let node: List<T> = this;
        const items: Array<T | undefined> = [];
        while (node.next != undefined) {
            items.push(node.item);
            node = node.next;
        }
        return '[' + items.join(', ') + ']';
    }
}
