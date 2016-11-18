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
    if(tail === null) { //checking for an empty list
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
      if(currNode.next !== null){
        currNode = currNode.next;
        count++;  
      } else {
        return false;
      }
    }
    return currNode;
  }

  function remove(index) {
    
  }

  function insert(value, index) {
    
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

var ll = linkedListGenerator();
ll.add("kitten");
ll.add("puppy");
ll.add("chick");
var theHead = ll.getHead();
var theTail = ll.getTail();
console.log(theHead);
console.log(theTail);
