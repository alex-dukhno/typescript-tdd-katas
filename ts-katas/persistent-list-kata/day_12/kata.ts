class List {
    static empty(): List {
        return new List();
    }

    private constructor(
        private readonly item: number | undefined = undefined,
        private readonly next: List | undefined = undefined
    ) {
    }

    append(item): List {
        return new List(item, this);
    }

    head(): number | never {
        if (this.item) {
            return this.item;
        }
        throw new Error("Trying to get HEAD from empty list");
    }

    tail(): List | never {
        if (this.next) {
            return this.next;
        }
        throw new Error("Trying to get TAIL from empty list");
    }

    concat(other: List): List {
        const isNotEmpty = (): boolean => this.next !== undefined;

        if (isNotEmpty()) {
            return this.tail().concat(other).append(this.head());
        }
        return other;
    }

    filter(predicate: Function): List {
        const head = this.item;
        if (head !== undefined) {
            const filtered = this.tail().filter(predicate);
            if (predicate(head)) {
                return filtered.append(head);
            } else {
                return filtered;
            }
        } else {
            return List.empty();
        }
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
