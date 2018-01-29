import {Observable, Observer} from 'rxjs/Rx';

type Node = [TreeNode, number[]];

class Path {

    static compute(root: TreeNode | undefined, sum: number): Observable<number[]> {
        if (root) {
            return Observable.create(
                (emitter: Observer<Node>) => this.emission(emitter, [root, [root.val]]).complete()
            ).filter((node: Node) => this.asSumPathToNode(node, sum))
                .filter((node: Node) => node[0].isLeaf())
                .map((node: Node) => node[1]);
        }
        return Observable.empty()
    }

    private static emission(emitter: Observer<Node>, node: Node): Observer<Node> {
        emitter.next(node);
        node[0].children()
            .forEach(
                (child) => this.emission(emitter, [child, node[1].slice().concat(child.val)])
            );
        return emitter;
    }

    private static asSumPathToNode(node: Node, sum: number): boolean {
        return node[1].reduce((acc, item) => acc + item, 0) === sum;
    }
}

class TreeNode {
    constructor(readonly val: number, readonly left?: TreeNode, readonly right?: TreeNode) {
    }

    isLeaf(): boolean {
        return !this.left && !this.right;
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
