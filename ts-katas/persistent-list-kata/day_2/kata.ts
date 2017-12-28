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

    concat(other: List<T>): List<T> {
        return other;
    }

    toString(): string {
        return '[]';
    }
}

class Empty<T> extends List<T> {
}

class Node<T> extends List<T> {
    constructor(private item: T, private next: List<T>) {
        super();
    }

    head(): T {
        return this.item;
    }

    tail(): List<T> {
        return this.next;
    }

    concat(other: List<T>): List<T> {
        return this.tail().concat(other).append(this.head());
    }

    toString(): string {
        let node: List<T> = this;
        let result = [];
        while (node instanceof Node) {
            result.push(node.item);
            node = node.next;
        }
        return '[' + result.join(', ') + ']';
    }
}

export {List};
