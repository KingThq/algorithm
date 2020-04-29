const utils = require('./utils');

// 声明链表结构
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * 区间反转：
 * 反转从位置 m 到 n 的链表
 * 1 ≤ m ≤ n ≤ 链表长度
 * 输入: 1->2->3->4->5->NULL, m = 2, n = 4
 * 输出: 1->4->3->2->5->NULL
 */
class List {
  /**
   * 以数组的形式传入：[1,2,3,4,5]
   * 转换为列表形式放入root属性中
   * 链表反转后转为数组形式放入listArr属性中
   * @param {any[]} valArr 
   * @param {number} m 起始位置
   * @param {number} n 结束位置
   */
  constructor(valArr, m, n) {
    this.root = utils.createList(valArr, valArr.length, 0);
    this.listArr = utils.listToArray(this.reverse(m, n));
    // this.listArr = utils.listToArray(this.recursiveReverse(null, this.root));
  }

  reverse(m, n) {
    const head = this.root;
    if (!head) return null;

    
  }

}