// 声明链表结构
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class List {
  /**
   * 以数组的形式传入：[1,2,3,4,5]
   * 转换为列表形式放入root属性中
   * 链表反转后转为数组形式放入listArr属性中
   * @param {any[]} valArr 
   */
  constructor(valArr) {
    this.root = this.createList(valArr, valArr.length, 0);
    // this.listArr = this.listToArray(this.reverse());
    this.listArr = this.listToArray(this.recursiveReverse(null, this.root));
  }

  /**
   * 将链表数组形式转换为链表形式
   * @param {any[]} arr 
   * @param {number} len 
   * @param {number} i 
   */
  createList(arr, len, i) {
    if (i < len) {
      const node = {};

      node.val = arr[i];
      node.next = this.createList(arr, len, i + 1);

      return node;
    }

    return null;
  }

  /**
   * 反转链表
   * 法一：循环
   */
  reverse() {
    const head = this.root;
    if (!head) return null;

    let pre = null;
    let cur = head;

    while(cur) {
      // 保存下一个节点的值
      const next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
    }

    return pre;
  }

  /**
   * 反转链表
   * 法二：递归
   * @param {ListNode} list 
   */
  recursiveReverse(pre, cur) {
    if (cur) {
      // 保存next节点
      const next = cur.next;
      cur.next = pre;

      return this.recursiveReverse(cur, next);
    }

    return pre;
  }

  /**
   * 将链表转换为数组形式
   * @param {ListNode} list 
   */
  listToArray(list) {
    if (!list) return null;

    const initArr = [list.val];

    if (list.next) {
      const arr = this.listToArray(list.next)

      return initArr.concat(arr);
    }

    return initArr;
  }
}

// 初始化链表
const listArray = [1, 2, 3, 4, 5];
const list = new List(listArray);

console.log(list.listArr)
