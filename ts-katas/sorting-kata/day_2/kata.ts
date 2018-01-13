class Sorting {
    static bubble_sort(source: number[]): number[] {
        for (let j = 0; j < source.length; j++) {
            for (let i = j; i > 0; i--) {
                if (source[i - 1] > source[i]) {
                    const temp = source[i - 1];
                    source[i - 1] = source[i];
                    source[i] = temp;
                }
            }
        }
        return source;
    }

    static quick_sort(source: number[]): number[] {
        if (source.length > 0) {
            const eq = source[0];
            const less = [];
            const great = [];
            for (let item of source) {
                if (item < eq) {
                    less.push(item)
                }
                if (item > eq) {
                    great.push(item);
                }
            }
            return this.quick_sort(less).concat(eq).concat(this.quick_sort(great));
        }
        return source;
    }
}

export {Sorting};
