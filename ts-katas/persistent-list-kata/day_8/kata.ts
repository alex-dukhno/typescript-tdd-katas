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
        if (this.item) {
            return this.item;
        }
        throw new Error("Trying to get HEAD of empty list");
    }

    tail(): List<T> | never {
        if (this.next) {
            return this.next;
        }
        throw new Error("Trying to get TAIL of empty list");
    }

    concat(other: List<T>): List<T> {
        if (this.next) {
            return this.tail().concat(other).append(this.head());
        }
        return other;
    }

    toString(): string {
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
