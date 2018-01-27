import {Observable, Observer} from 'rxjs/Rx';

class Path {
    static compute(root: TreeNode | undefined, sum: number): Observable<number[]> {
        if (root) {
            return Observable.create(
                (emitter: Observer<[TreeNode, number[]]>) => {
                    this.emission(emitter, [root, [root.val]]);
                    emitter.complete();
                }
            ).filter((tuple: [TreeNode, number[]]) => this.computeSumToNode(tuple) === sum)
                .filter((tuple: [TreeNode, number[]]) => tuple[0].isLeaf())
                .map((tuple: [TreeNode, number[]]) => tuple[1])
        }
        return Observable.empty()
    }

    private static computeSumToNode(tuple: [TreeNode, number[]]) {
        return tuple[1].reduce((acc, item) => acc + item, 0);
    }

    private static emission(emitter: Observer<[TreeNode, number[]]>, tuple: [TreeNode, number[]]): void {
        emitter.next(tuple);
        tuple[0].children()
            .forEach((child) => this.emission(emitter, [child, tuple[1].slice().concat(child.val)]));
    }
}

class TreeNode {
    constructor(
        readonly val: number,
        readonly left: TreeNode | undefined = undefined,
        readonly right: TreeNode | undefined = undefined
    ) {
    }

    isLeaf() {
        return this.left === undefined && this.right === undefined;
    }

    children(): TreeNode[] {
        const children: TreeNode[] = [];
        if (this.left) {
            children.push(this.left);
        }
        if (this.right) {
            children.push(this.right);
        }
        return children;
    }
}

export {Path, TreeNode};
