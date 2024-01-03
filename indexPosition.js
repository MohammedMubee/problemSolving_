class LinkedList {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const insertList = (head, data, position) => {
    let count = 0;
    let prev = null;
    let current = head;
    let newNode = new LinkedList(data);

    if (position === 0) {
        newNode.next = head;
        return newNode;
    }

    while (count < position && current) {
        prev = current;
        current = current.next;
        count++;
    }

    if (prev) {
        prev.next = newNode;
        newNode.next = current;
    }

    return head;
};

// Example usage:
let head = new LinkedList(1);
head = insertList(head, 2, 1);
head = insertList(head, 3, 2);
console.log(head)
// Resulting linked list: 1 -> 2 -> 3
