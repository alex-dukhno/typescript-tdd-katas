class List<T> {
    static empty<T>(): List<T> {
        return new List();
    }

    private constructor(
        private readonly item: T | undefined = undefined,
        private readonly next: List<T> | undefined = undefined
    ) {
    }

    append(item: T): List<T> {
        return new List(item, this);
    }

    head(): T | never {
        if (!this.item) {
            throw Error("Trying to get HEAD of empty list");
        } else {
            return this.item;
        }
    }

    tail(): List<T> | never {
        if (!this.next) {
            throw Error("Trying to get TAIL of empty list");
        } else {
            return this.next;
        }
    }

    concat(other: List<T>): List<T> {
        if (this.next) {
            return this.tail().concat(other).append(this.head());
        } else {
            return other;
        }
    }

    toString() {
        let node: List<T> = this;
        const items: Array<T> = [];
        while (node.next && node.item) {
            items.push(node.item);
            node = node.next;
        }
        return '[' + items.join(', ') + ']';
    }
}

export {List};