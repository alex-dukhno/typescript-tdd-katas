import {Path, TreeNode} from '../kata';

describe('path sum', () => {
    test('empty path when empty tree', () => {
        const rxPromise = Path.compute(undefined, 10).toArray().toPromise();

        return rxPromise
            .then(
                paths => expect(paths).toEqual([]),
                err => {
                    throw new Error(`expected result but got error: ${err.message}`)
                }
            );
    });

    test('only root and sum eq root val', () => {
        const rxPromise = Path.compute(new TreeNode(10), 10).toArray().toPromise();

        return rxPromise
            .then(
                paths => expect(paths).toEqual([[10]]),
                err => {
                    throw new Error(`expected result but got error: ${err.message}`)
                }
            );
    });

    test('only root and sum not eq root val', () => {
        const rxPromise = Path.compute(new TreeNode(20), 10).toArray().toPromise();

        return rxPromise
            .then(
                paths => expect(paths).toEqual([]),
                err => {
                    throw new Error(`expected result but got error: ${err.message}`)
                }
            );
    });

    test('two levels tree and left node in path', () => {
        const rxPromise = Path.compute(new TreeNode(3, new TreeNode(4), new TreeNode(5)), 7).toArray().toPromise();

        return rxPromise
            .then(
                paths => expect(paths).toEqual([[3, 4]]),
                err => {
                    throw new Error(`expected result but got error: ${err.message}`)
                }
            );
    });

    test('two levels tree and both nodes in path', () => {
        const rxPromise = Path.compute(new TreeNode(1, new TreeNode(-1), new TreeNode(-1)), 0).toArray().toPromise();

        return rxPromise
            .then(
                paths => expect(paths).toEqual([[1, -1], [1, -1]]),
                err => {
                    throw new Error(`expect result but got error: ${err.message}`)
                }
            )
    });

    test('stop computation on leaves', () => {
        const rxPromise = Path.compute(new TreeNode(0, new TreeNode(1, new TreeNode(-1))), 0).toArray().toPromise();

        return rxPromise
            .then(
                paths => expect(paths).toEqual([[0, 1, -1]]),
                err => {
                    throw new Error(`expect result but got error: ${err.message}`)
                }
            )
    })
});
