import {Path, TreeNode} from '../kata';

describe('path sum', () => {
    test('empty path when empty tree', () => {
        return Path.compute(undefined, 10).toArray().toPromise()
            .then(
                paths => expect(paths).toEqual([]),
                error => {
                    throw error
                }
            );
    });

    test('only root and sum eq root val', () => {
        return Path.compute(new TreeNode(10), 10).toArray().toPromise()
            .then(
                paths => expect(paths).toEqual([[10]]),
                error => {
                    throw error
                }
            );
    });

    test('only root and sum not eq root val', () => {
        return Path.compute(new TreeNode(20), 10).toArray().toPromise()
            .then(
                paths => expect(paths).toEqual([]),
                error => {
                    throw error
                }
            );
    });

    test('two levels tree and left node in path', () => {
        return Path.compute(new TreeNode(3, new TreeNode(4), new TreeNode(5)), 7).toArray().toPromise()
            .then(
                paths => expect(paths).toEqual([[3, 4]]),
                error => {
                    throw error
                }
            );
    });

    test('two levels tree and both nodes in path', () => {
        return Path.compute(new TreeNode(1, new TreeNode(-1), new TreeNode(-1)), 0).toArray().toPromise()
            .then(
                paths => expect(paths).toEqual([[1, -1], [1, -1]]),
                error => {
                    throw error
                }
            );
    });

    test('only leaves stop path computation', () => {
        return Path.compute(new TreeNode(0, new TreeNode(-1, new TreeNode(1))), 0).toArray().toPromise()
            .then(
                paths => expect(paths).toEqual([[0, -1, 1]]),
                error => {
                    throw error
                }
            );
    });
});
