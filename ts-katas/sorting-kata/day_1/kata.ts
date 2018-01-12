class Sorting {
    static bubble_sort(source: number[]): number[] {
        for (let j = 0; j < source.length; j++) {
            for (let i = j; i > 0; i--) {
                if (source[i - 1] > source[i]) {
                    const temp = source[i];
                    source[i] = source[i - 1];
                    source[i - 1] = temp;
                }
            }
        }
        return source;
    }

    static quick_sort(source: number[]): number[] {
        if (source.length < 2) {
            return source;
        }
        const eq: number[] = [source[0]];
        let less: number[] = [];
        let greater: number[] = [];
        for (let e of source) {
            if (e < eq[0]) {
                less.push(e);
            }
            if (e > eq[0]) {
                greater.push(e);
            }
        }
        return (this.quick_sort(less)).concat(eq).concat(this.quick_sort(greater));
    }
}

export {Sorting};
