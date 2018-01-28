import {Observable, Observer} from 'rxjs/Rx';

class Path {
    static compute(root: TreeNode | undefined, sum: number): Observable<number[]> {
        if (root) {
            return Observable.create(
                (emitter: Observer<[TreeNode, number[]]>) => {
                    this.emission(emitter, [root, [root.val]]);
                    emitter.complete();
                }
            )
                .filter(this.isLeaf)
                .filter((tuple: [TreeNode, number[]]) => this.asSumToCurrentTuple(tuple)(sum))
                .map((tuple: [TreeNode, number[]]) => tuple[1]);
        }
        return Observable.empty();
    }

    private static isLeaf(tuple: [TreeNode, number[]]): boolean {
        return !tuple[0].left && !tuple[0].right;
    }

    private static asSumToCurrentTuple(tuple: [TreeNode, number[]]): Function {
        return (sum: number) => tuple[1].reduce((acc, item) => acc + item, 0) === sum;
    }

    private static emission(emitter: Observer<[TreeNode, number[]]>, tuple: [TreeNode, number[]]): void {
        emitter.next(tuple);
        const left = tuple[0].left;
        if (left) {
            this.emission(emitter, [left, tuple[1].slice().concat(left.val)])
        }
        const right = tuple[0].right;
        if (right) {
            this.emission(emitter, [right, tuple[1].slice().concat(right.val)])
        }
    }
}

class TreeNode {
    constructor(
        readonly val: number,
        readonly left?: TreeNode,
        readonly right?: TreeNode
    ) {
    }
}

export {Path, TreeNode};
