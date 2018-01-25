class Sorting {
    static bubbleSort<E>(source: E[]): E[] {
        for (let i = 0; i < source.length; i++) {
            for (let j = i; j > 0; j--) {
                if (source[j - 1] > source[j]) {
                    const temp = source[j - 1];
                    source[j - 1] = source[j];
                    source[j] = temp;
                }
            }
        }
        return source;
    }

    static quickSort<E>(source: E[]): E[] {
        if (source.length > 1) {
            const eq = source[0];
            const less = [];
            const great = [];
            for (let item of source) {
                if (item < eq) {
                    less.push(item);
                }
                if (item > eq) {
                    great.push(item);
                }
            }
            return this.quickSort(less).concat(eq).concat(this.quickSort(great));
        }
        return source;
    }
}

export {Sorting};
