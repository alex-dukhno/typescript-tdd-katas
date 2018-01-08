class List {
    static empty(): List {
        return new List();
    }

    private constructor(
        private readonly item: number | undefined = undefined,
        private readonly next: List | undefined = undefined
    ) {
    }

    append(item: number): List {
        return new List(item, this);
    }

    head(): number | never {
        if (this.item) {
            return this.item;
        }
        throw new Error("Trying to get HEAD of empty list");
    }

    tail(): List | never {
        if (this.next) {
            return this.next;
        }
        throw new Error("Trying to get TAIL of empty list");
    }

    concat(other: List): List {
        if (this.next) {
            return this.tail().concat(other).append(this.head());
        }
        return other;
    }

    toString(): string {
        let node: List = this;
        const items: Array<number> = [];
        while (node.next && node.item) {
            items.push(node.item);
            node = node.next;
        }
        return '[' + items.join(', ') + ']';
    }
}

export {List};
