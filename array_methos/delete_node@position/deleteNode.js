const deleteNode=(position,head)=>{
    if(!head){
        return null
    }
    let nodetodelete = head
    if(position===0){
        head = nodetodelete.next
        return head
    }
    let count = 0
    let prev = null
    while(nodetodelete){
        if(count===position){
            prev.next=nodetodelete.next
            return head
        }
        prev = nodetodelete
        nodetodelete=nodetodelete.next
        count++;
    }
    return null
}

