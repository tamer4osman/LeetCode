const createBinaryTree = (descriptions) => {
    const nodes = new Map();
    const children = new Set();

    // Create nodes and set relationships
    for (const [parent, child, isLeft] of descriptions) {
        const parentNode = nodes.get(parent) ?? new TreeNode(parent);
        const childNode = nodes.get(child) ?? new TreeNode(child);

        nodes.set(parent, parentNode);
        nodes.set(child, childNode);

        isLeft ? parentNode.left = childNode : parentNode.right = childNode;
        children.add(child);
    }

    // Find the root (node that's not a child)
    return [...nodes.values()].find(node => !children.has(node.val)) ?? null;
};
