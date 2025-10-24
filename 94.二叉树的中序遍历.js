// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

/**
 * 方法一：递归解法（最直观，推荐入门学习）
 * 时间复杂度：O(n)，空间复杂度：O(h)，h为树的高度
 */
var inorderTraversal = function (root) {
  //存储结果
  const result = [];

  // 递归辅助函数
  const inorder = (node) => {
    // 基线条件：如果节点为空，直接返回
    if (!node) return;
    // 递归遍历左子树
    inorder(node.left);
    // 中序遍历顺序：左 → 根 → 右
    // 2. 访问根节点，将值存入结果数组
    result.push(node.val);
    // 3. 最后遍历右子树
    inorder(node.right);
    // 开始递归遍历
    // 返回遍历结果
  };
  inorder(root);
  return result;
};

/* 方法二 用栈*/
const res = [];
const stack = [];
let cur = root;
//左子树不为空的时候一直访问」
while (cur || stack.length) {
  //将左子树不空的节点入堆栈
  while (cur) {
    stack.push(cur);
    cur = cur.left;
  }
  curr = stack.pop();
  res.push(curr.val);
  curr = curr.right;
}
