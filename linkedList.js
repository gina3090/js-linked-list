/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

function linkedListGenerator() {
  var head = null;

  function getHead() {
    return head;
  }

  function getTail() {
    let currNode = head;
    while(currNode !== null) {
      if(currNode.next !== null) {
        currNode = currNode.next;
      } else {
        return currNode;
      }
    }
    return currNode;
  }

  function add(newValue) {
    let tail = getTail();
    let newNode = {
      value: newValue,
      next: null
    };
    if(tail === null) {
      head = newNode;
    } else {
      tail.next = newNode;
    }
    return newNode;
  }

  function get(index) {
    let currNode = getHead();
    let length = 0;
    while(length < index){
      if(currNode.next !== null) {
        currNode = currNode.next;
        length++;  
      } else {
        return false;
      }
    }
    return currNode;
  }

  function remove(index) { 
    let currNode = get(index);
    let prevNode = get(index - 1);
    if(index === 0){
      head = head.next;
    } else if(currNode.next === null) {
      prevNode.next = null;
    } else if(currNode === false) {
      return false;
    } else {
      prevNode.next = currNode.next;
    } 
  }

  function _getLength() {
    let length = 0;
    let node = head;
    if(head === null){
      return 0;
    } else {
      length = 1;
    }
    while(node.next !== null){
      length++;
      node = node.next;
    }
    return length;
  }

  function insert(value, index) {
     let newNode = {
        value: value,
        next: null
      };
    if(index < 0 || index > _getLength()) {
      return false;
    } else if(index === 0) {
      let nextNode = getHead();
      newNode.next = nextNode;
      head = newNode;
    } else {
      let prevNode = get(index - 1);
      let nextNode = prevNode.next;
      prevNode.next = newNode;
      newNode.next = nextNode;
    }
  }

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert: insert
  };
}