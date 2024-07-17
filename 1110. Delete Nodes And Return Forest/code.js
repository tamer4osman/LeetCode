const delNodes = (root, to_delete) => {
    const toDeleteSet = new Set(to_delete);
    const forest = [];

    const dfs = (node, isRoot) => {
        if (!node) return null;

        const shouldDelete = toDeleteSet.has(node.val);
        
        isRoot && !shouldDelete && forest.push(node);

        node.left = dfs(node.left, shouldDelete);
        node.right = dfs(node.right, shouldDelete);

        return shouldDelete ? null : node;
    };

    dfs(root, true);
    return forest;
};
