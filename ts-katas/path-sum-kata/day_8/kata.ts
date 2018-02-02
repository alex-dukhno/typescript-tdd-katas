import {Observable, Observer} from 'rxjs/Rx';

type Node = [TreeNode, number[]]

class Path {
    static compute(root: TreeNode | undefined, sum: number): Observable<number[]> {
        if (root) {
            return Observable.create(
                (emitter: Observer<Node>) => {
                    this.emission(emitter, [root, [root.val]]);
                    emitter.complete();
                }
            ).filter((node: Node) => this.sumFromRoot(node) === sum)
                .filter((node: Node) => node[0].isLeaf())
                .map((node: Node) => node[1]);
        }
        return Observable.empty();
    }

    private static emission(emitter: Observer<Node>, node: Node) {
        emitter.next(node);
        const left = node[0].left;
        if (left) {
            this.emission(emitter, [left, node[1].slice().concat(left.val)]);
        }
        const right = node[0].right;
        if (right) {
            this.emission(emitter, [right, node[1].slice().concat(right.val)]);
        }
    }

    private static sumFromRoot(node: Node): number {
        return node[1].reduce((acc, item) => acc + item, 0);
    }
}

class TreeNode {
    constructor(readonly val: number, readonly left?: TreeNode, readonly right?: TreeNode) {
    }

    isLeaf() {
        return !this.left && !this.right;
    }
}

export {Path, TreeNode};
