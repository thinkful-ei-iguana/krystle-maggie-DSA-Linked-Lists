const LinkedList = require('./linkedListClass');

function main() {
  let SLL = new LinkedList();

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

  console.log(SLL.find('Starbuck'));
}

main();
