class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
    toString() {
        return `[${this.data}]`;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
    toString() {
        let curr = this.head;
        let returnStr = "";
        while (curr != null){
            returnStr += curr.toString();
            
            curr = curr.next;
            if (curr!= null) returnStr += " -> ";
        }
        return returnStr;
    }
}

// Node.prototype.toString = function(){
//     return "$[this.data]";
// }

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

let list = new LinkedList(node1);

console.log(""+node1);
console.log(""+list);
