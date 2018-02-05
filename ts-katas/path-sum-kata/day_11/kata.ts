import {Observable, Observer} from 'rxjs/Rx';

type Node = [TreeNode, number[]];

class Path {
    static compute(root: TreeNode | undefined, sum: number): Observable<number[]> {
        return Observable.create(
            (emitter: Observer<Node>) => {
                this.emission(emitter, this.from(root, []));
                emitter.complete();
            }
        )
            .filter((node: Node) => this.pathSumTo(node) === sum)
            .filter((node: Node) => node[0].isLeaf())
            .map((node: Node) => node[1]);
    }

    private static from(treeNode: TreeNode | undefined, path: number[]): Node | undefined {
        if (treeNode) {
            return [treeNode, path.concat(treeNode.val)];
        }
    }

    private static emission(emitter: Observer<Node>, node: Node | undefined): void {
        if (node) {
            emitter.next(node);
            this.emission(emitter, this.from(node[0].left, node[1].slice()));
            this.emission(emitter, this.from(node[0].right, node[1].slice()));
        }
    }

    private static pathSumTo(node: Node) {
        return node[1].reduce((acc, item) => acc + item, 0);
    }
}

class TreeNode {
    constructor(readonly val: number, readonly left?: TreeNode, readonly right?: TreeNode) {
    }

    isLeaf() {
        return !this.left && !this.right
    }
}

export {Path, TreeNode};
