class Node {
    constructor(value) {
        this.value = value;  // value stored in node
        this.next = null;  // pointer to next node in LinkedList
    }
}

class LinkedList {
    constructor(head) {
        if (head == undefined || head == null)
            this.head = null; // head of the list, set to null by
        else
            this.head = head;
    }

    getHead() {
        return this.head;
    }

    addNode(value) {
        const node = new Node(value);
        // If the list is empty, add node as header
        if (!this.head) {
            this.head = node;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        // Attach new created node to the last node found on the linkedList
        current.next = node;
    }

    removeNodes(x) {
        // we start by testing head and keep moving until value <=x
        while (this.head && this.head.value > x) {
            const next = this.head.next;
            // free memory
            delete (this.head)
            this.head = next;
        }

        // for each node weh make a check free memory and skip if  > x
        let current = this.head;

        while (current && current.next) {
            if (current.next.value > x) {
                const next = current.next.next;
                // free memory
                delete (current.next)
                current.next = next;
            } else {
                current = current.next;
            }
        }
    }

    print() {
        let current = this.head;
        // print all node until next is null
        while (current) {
            process.stdout.write(current.value + '  ');
            current = current.next;
        }
    }
}

// a function that take a head node and a number x 
// and return all nodes from list whose value > x
const getNodeGreaterThanX = (head, x) => {
    const linkedList = new LinkedList(head);
    console.log('Initial Linked List : \n')
    linkedList.print();
    console.log('\n')
    linkedList.removeNodes(x)
    console.log('Updated Linked List, removing all node > ' + x + '\n')
    linkedList.print();
    console.log('\n')
    // return the head of new linked list
    return linkedList.getHead();

}

// Test case : 

const linkedList = new LinkedList();
// initialize linked List
linkedList.addNode(10);
linkedList.addNode(5);
linkedList.addNode(12);
linkedList.addNode(7);
linkedList.addNode(3);
linkedList.addNode(9);
linkedList.addNode(10);
// apply changes and remove all nodes where value > x
getNodeGreaterThanX(linkedList.getHead(), 0);

getNodeGreaterThanX(linkedList.getHead(), 3);

getNodeGreaterThanX(linkedList.getHead(), 7);

getNodeGreaterThanX(linkedList.getHead(), 10);

getNodeGreaterThanX(linkedList.getHead(), 13);