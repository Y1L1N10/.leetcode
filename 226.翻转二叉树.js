/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 */

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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  //处理异常：树空
  if (root === null) return null;

  //change left and right tree
  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  //soluted child
  invertTree(root.left);
  invertTree(root.right);

  //return root
  return root;
};
// @lc code=end
