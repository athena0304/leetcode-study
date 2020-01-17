/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
  this.head = {
      val: undefined,
      next: null
  }
};

/**
* Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
* @param {number} index
* @return {number}
*/
MyLinkedList.prototype.get = function(index) {
  let currentNode = this.head
  let value
  console.log(JSON.stringify(this))
  for(let i=0; i<=index; i++) {
      if(currentNode && currentNode.val!== undefined) {
          value = currentNode.val
          currentNode = currentNode.next
      } else {
          value = -1
      }
      
  }
  return value
};

/**
* Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function(val) {
  console.log('addAtHead',JSON.stringify(this))
  if(this.head.val === undefined) {
      this.head.val = val
      this.head.next = null
  } else {
      let node = {
          val: this.head.val,
          next: this.head.next
      }
      this.head.val = val
      this.head.next = node
  }
  
};

/**
* Append a node of value val to the last element of the linked list. 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function(val) {
  let currentNode = this.head
  while(currentNode.next) {
      currentNode = currentNode.next
  }
  currentNode.next = {
      val: val,
      next: null
  }
};

/**
* Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
* @param {number} index 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if(index <= 0) {
      this.addAtHead(val)
      return
  }
  let currentIndex = 0
  let currentNode = this.head
  while(currentIndex < index - 1 && currentNode.next) {
      currentNode = currentNode.next
      currentIndex ++
  }
  console.log('addAtIndex currentNode', currentNode, currentIndex)
  if(currentNode.next) {
      let node = {
          val: val,
          next: currentNode.next
      }
      currentNode.next = node
  } else if(currentIndex === index - 1) {
      currentNode.next = {
          val: val,
          next: null
      }
  }
  
  
};

/**
* Delete the index-th node in the linked list, if the index is valid. 
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if(index === 0) {
      this.head = this.head.next
  }
  console.log('deleteAtIndex',JSON.stringify(this))
  let currentIndex = 0
  let currentNode = this.head
  while(currentIndex < index - 1) {
      currentNode = currentNode.next
      currentIndex ++
  }
  if(currentNode && currentNode.next && currentNode.next.next) {
      currentNode.next = currentNode.next.next
  }
  
};

 function reverseList (head) {
  if (head === null || head.next === null) {    // 链表为空或只有一个节点时，不用反转
    return head;
  }
  var p = head.next;
  head.next = null;    // 让原本的head变为尾节点
  var temp;    // 临时指针
  while (p !== null) {
    temp = p.next;
    p.next = head;
    head = p;
    p = temp;
  }
  return head;
}

/** 
* Your MyLinkedList object will be instantiated and called as such:
* var obj = new MyLinkedList()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/


let linkedList = new MyLinkedList();
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1,2);   //链表变为1-> 2-> 3
// linkedList.get(1);            //返回2
// linkedList.deleteAtIndex(1);  //现在链表是1-> 3
// linkedList.get(1);            //返回3

console.log(reverseList(linkedList.head))