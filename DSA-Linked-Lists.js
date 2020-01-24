const LinkedList = require('./linkedListClass');
let SLL = new LinkedList();

function main() {

  SLL.insertFirst('Starbuck');
  SLL.insertFirst('Husker');
  SLL.insertFirst('Helo');
  SLL.insertFirst('Boomer');
  SLL.insertFirst('Apollo');

  SLL.insertLast('Tauhida');

  SLL.remove('squirrel');

  SLL.insertBefore('Athena', 'Boomer');

  SLL.insertAfter('Hotdog', 'Helo');

  SLL.insertAt('Kat', 3);

  SLL.remove('Tauhida');

  console.log(SLL);
  return SLL;
}

main();

/////////////


function display(linkedList) {
  let tempNode = linkedList.head;
  // to prevent infinite loop for 
  while (tempNode !== null) {
    console.log(tempNode);
    tempNode = tempNode.next;
  }
}
// display(SLL);
///////////////////////////
function getSize(linkedList) {
  let tempNode = linkedList.head;
  let i = 0;
  while (tempNode !== null) {
    i += 1;
    tempNode = tempNode.next;
  }

  console.log('The length of your linkedList is: ', i);
}
getSize(SLL);
///////////////////////////
function isEmpty(linkedList) {
  if (linkedList.head === null) {
    console.log('Empty');
  } else {
    console.log('Not Empty');
  }
}
isEmpty(SLL);
///////////////////////////
function findPrevious(item, linkedList) {
  let tempNode = linkedList.head;
  if (tempNode.value === item) {
    console.log('prevNode: Null');
  }
  while (tempNode.next !== null) {
    if (tempNode.next.value === item) {
      console.log('prevNode: ', tempNode);
    }
    tempNode = tempNode.next;
  }
}
///////////////////////////
function findLast(linkedList) {
  let tempNode = linkedList.head;
  if (tempNode === null) {
    console.log('Unpopulated list');
    // this tempNode is above, so always first item
  }
  while (tempNode.next !== null) {
    tempNode = tempNode.next;
  }
  console.log('Last Item: ', tempNode.value);
}
findLast(SLL);
///////////////////////////
