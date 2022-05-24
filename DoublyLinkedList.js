class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }
    push(value){
        const newNode  = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }{
            // let temp = this.tail
            // this.tail.next = newNode
            // this.tail = newNode
            // this.tail.prev = temp
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length ++
        return this
    }
    pop(){
        if(this.length === 0) return undefined;
        // let pre = this.tail.prev 
        // this.tail = pre 
        // this.tail.next = null
        let temp = this.tail
        
        
        if(this.length === 1){
            this.head =  null
            this.tail = null
        }else{
            this.tail = this.tail.prev
            this.tail.next = null
            temp.prev = null
        }
        this.length--
        return temp
    }
    unshift(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        let temp = this.head
        this.head = newNode
        this.head.next = temp
        temp.prev = newNode

        this.length++
        return this
    }
    
}