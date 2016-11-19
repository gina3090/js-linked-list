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
    var currNode = head;
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
    var tail = getTail();
    var newNode = {
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
    var currNode = getHead();
    var count = 0;
    while(count < index){
      if(currNode.next !== null) {
        currNode = currNode.next;
        count++;  
      } else {
        return false;
      }
    }
    return currNode;
  }

  function remove(index) { 
    var currNode = get(index);
    var prevNode = get(index - 1);
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

  function insert(newValue, index) {
    var currNode = get(index);
    var prevNode = get(index - 1);
    var newNode = {
      value: newValue,
      next: currNode
    };
    if(index === 0){
      head = newNode;
    } else if(currNode === false) {
      return false;
    } else {
      prevNode.next = newNode;
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
