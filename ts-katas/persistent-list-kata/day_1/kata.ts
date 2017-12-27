abstract class List<T> {
    static empty<T>(): List<T> {
        return new Empty();
    }

    append(item: T): List<T> {
        return new Node(item, this)
    }

    head(): T {
        return undefined;
    }

    tail(): List<T> {
        return this;
    }

    concat(other: List<T>) {
        return other;
    }

    toString(): string {
        return '[]';
    }
}

class Empty<T> extends List<T> {
}

class Node<T> extends List<T> {
    private item: T;
    private next: List<T>;

    constructor(item: T, next: List<T>) {
        super();
        this.item = item;
        this.next = next;
    }

    head(): T {
        return this.item;
    }

    tail(): List<T> {
        return this.next;
    }

    concat(other: List<T>): List<T> {
        return this.tail().concat(other).append(this.item);
    }

    toString(): string {
        let result = this.item.toString();
        let node = this.next;
        while (node instanceof Node) {
            result += ', ' + node.item;
            node = node.next;
        }
        return '[' + result + ']';
    }
}

export {List};