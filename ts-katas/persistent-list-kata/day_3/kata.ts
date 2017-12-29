abstract class List<T> {
    append(item: T): List<T> {
        return new Cons(item, this)
    }

    abstract head(): T;

    abstract tail(): List<T>;

    abstract concat(other: List<T>): List<T>;

    toString() {
        let node: List<T> = this;
        const items = [];
        while (node instanceof Cons) {
            items.push(node.head());
            node = node.tail();
        }
        return '[' + items.join(', ') + ']';
    }
}

class Empty<T> extends List<T> {
    head(): T {
        return undefined;
    }

    tail(): List<T> {
        return this;
    }

    concat(other: List<T>): List<T> {
        return other;
    }
}

class Cons<T> extends List<T> {
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
}

abstract class Lists {
    static empty<T>(): List<T> {
        return new Empty();
    }
}

export {Lists, List};
