/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

function linkedListGenerator(){
  var head = null;

  function getHead(){
    return head;
  }

  function getTail(){
    var curNode = head;
    while(curNode !== null){
      if(curNode.next !== null){
        curNode = curNode.next;
      } else {
        return curNode;
      }
    }
    return curNode;
  }

  function add(newValue){
    var tail = getTail();
    var newNode = {
      value: newValue,
      next: null
    };
    if(tail === null){
        head = newNode;
    } else {
      tail.next = newNode;
    }
    return newNode;
  }

  function remove(){
    
  }

  function get(){

  }

  function insert(){

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
