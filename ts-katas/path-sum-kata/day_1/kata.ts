import {Observable, Observer} from 'rxjs/Rx';

class Path {
    static compute(root: TreeNode | undefined, sum: number): Observable<number[]> {
        if (root) {
            return Observable.create(
                (emitter: Observer<Node>) =>
                    this.recursiveEmission(emitter, new Node(root, [])).complete()
            )
                .filter((node: Node) => node.sumToCurrentNode() === sum)
                .filter((node: Node) => node.isLeaf())
                .map((node: Node) => node.path);
        }
        return Observable.of();
    }

    private static recursiveEmission(emitter: Observer<Node>, node: Node): Observer<Node> {
        emitter.next(node);
        node.children().forEach((child) => this.recursiveEmission(emitter, child));
        return emitter;
    }
}

class Node {
    constructor(readonly treeNode: TreeNode, readonly path: number[]) {
        path.push(treeNode.val);
    }

    sumToCurrentNode(): number {
        return this.path.reduce((acc: number, item: number) => acc + item, 0)
    }

    isLeaf(): boolean {
        return this.treeNode.left === undefined && this.treeNode.right === undefined;
    }

    children(): Node[] {
        const children = [];
        if (this.treeNode.left) {
            children.push(this.treeNode.left);
        }
        if (this.treeNode.right) {
            children.push(this.treeNode.right);
        }
        return children.map((node: TreeNode) => new Node(node, this.path.slice()))
    }
}

class TreeNode {
    constructor(
        readonly val: number,
        readonly left: TreeNode | undefined = undefined,
        readonly right: TreeNode | undefined = undefined
    ) {
    }
}

export {Path, TreeNode};
