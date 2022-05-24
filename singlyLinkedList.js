class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }
    push(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length ++
        return this
    }
    pop(value){
        const newNode = new Node(value);
        if(!this.head) return undefined;
        let temp = this.head;
        let pre = this.head;
        while(temp.next){
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null
        this.length --
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return temp
    }
    unshift(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
            // let next = this.head  
            // this.head = newNode
            // this.head.next = next
            
        }
            this.length ++
        return this
    }
    shift(value){
        const newNode = new Node(value);
        if(!this.head) return undefined
        if(this.length === 1){
            this.head = null
            this.tail = null
        } else {
            let temp  = this.head
            this.head = this.head.next
            return temp
            temp = null
        } this.length --
        //return this
        
    }
    get(index){
        if(index < 0 || index >= this.length){
            return undefined
        }
        let temp = this.head
        for(let i=0; i< index; i++){
            temp = temp.next
        }
        return temp
    }
    // set(index, value){
       
    //     let temp = this.get(index)
    // }
}
