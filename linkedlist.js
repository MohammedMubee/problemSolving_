class linkedList{
    constructor(){
        this.head = this.tail = null
    }
    append(value){
        if(!this.tail){
            this.head = this.tail = new Node(value)
        }
        else{
            let oldTail = this.tail
            this.tail = new Node(value)
            oldTail.next = this.tail
            this.tail.previous= oldTail
        }
    }

    preInsert(value){
        if(!this.head){
            this.head = this.tail = new Node(value)

        }
        else{
            let oldHead = this.head
            this.head = new Node(value)
            oldHead.prev = this.head
            this.head.next = oldHead
        }

    }
    deleteHead(){
        if(!this.head){
            return null
        }
        else{
            let removeHead = this.head
            if(this.head===this.tail){
                this.head = this.tail = null
            }
            else{
                this.head= this.head.next
                this.head.prev =this.head
            }

            return removeHead
        }

    }
    deleteTail(){
        if(!this.tail){
            return null
        }
        else{
            let removeTail = this.tail
            if(this.head===this.tail){
                this.head = this.tail = null
            }
            else{
                this.head = this.head.prev
                this.head.next= null
            }

            return removeTail
        }

    }

    search(value){
        let currentNode = this.head
        while(currentNode){
            if(currentNode === value){
                return currentNode
            }
            currentNode = currentNode.next
        }
        return null
    }



}

class Node{
    constructor(value,prev,next){
        this.value = value
        this.prev = prev||null
        this.next = next ||null
    }
}

let list =new linkedList()
list.append(2)
list.preInsert(1)
list.append(4)
list.preInsert(5)
list.search(5)
console.log(list)