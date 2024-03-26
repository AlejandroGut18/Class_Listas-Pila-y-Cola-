//Node
class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.size = 0;
        this.head = null;
    }

    getSize(){
        return this.size;
    }    

    isEmpty(){
        return this.size === 0;
    }

    insertFirst(data){
        const node = new Node(data);
        if (this.isEmpty()){
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    insertLast(data){
        const node = new Node(data);
        if (this.isEmpty()){
            this.head = node;
        } else {
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    insert(data, index){
        if (index < 0 || index > this.size){
            console.log("Índice inválido");
            return;
        }
        if (index === 0){
            this.insertFirst(data);
        } else {
            const node = new Node(data);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++){
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    removeIndex(index){
        if (index < 0 || index >= this.size) {
            console.log("Índice inválido.");
            return null;
        }
        if (index === 0){
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for(let i = 0; i < index - 1; i++){
                 prev = prev.next;
            }
            prev.next = prev.next.next;
        }
        this.size--;
    }

    searchIndex(index){
        if (index < 0 || index > this.size) {
            console.log("Índice inválido.");
            return null;
        }
        let current = this.head;
        for (let i = 0; i < index; i++){
            current = current.next;
        }
        return current.data;
    }

    printAll(){
        if (this.isEmpty()){
            console.log("La lista está vacía");
           
        } else {
            let current = this.head;
            let result = "";
            while(current){
                result += current.data + ' -> ';
                current = current.next;
            }
            console.log(result + ' null')
        }   
    } 
    //Remover por Valor
    removeValue(value) {
        let current = this.head;
        let prev ;
        while (current) {
            if (current.data === value) {
                prev.next = current.next;
                this.size--;
                return;
            }
            prev = current;
            current = current.next;
        }
        console.log(`${value} no se encontró en la lista.`);
    }
    //Buscar por valor
    searchValue(value){
        let current = this.head;
        while(current){
            if(current.data === value){
                console.log(`${value} se encontró en la lista.`);
            } 
            current = current.next;
        }
        
    }
    
}

let lista = new LinkedList();
console.log(lista.isEmpty());
lista.printAll();
lista.insertFirst("José");
lista.printAll();
lista.insertLast("Pepito"); 
lista.printAll();
lista.insertFirst("Manolo");
lista.printAll()
lista.insertLast("Barack Obama");
lista.printAll();
lista.insert("IWEJHGDWSIKJUGH", 3);
lista.printAll();
lista.removeIndex(3);
lista.printAll();
//Remover por valor
lista.removeValue("José");
lista.printAll()
//Buscar por valor
lista.searchValue("PPP");

//LIFO
class Pila {
    constructor() {
        this.cima = null;  
    }

    push(data){
        const nuevoNode = new Node(data);
        nuevoNode.next = this.cima;
        this.cima = nuevoNode;
    }

    pop(){
        if (!this.cima){
            console.log("La pila esta vacía");
            return null;
        } 
        const sacar = this.cima.data;
        this.cima = this.cima.next;
        return sacar;
    }

    peek() {
        return this.cima ? this.cima.dato : null;
    }
}
console.log("Valores de la Pila")
const Pile = new Pila();
Pile.push(10);
Pile.push(20);
Pile.push(30);
console.log(Pile.pop()); 
console.log(Pile.pop()); 
console.log(Pile.pop());
console.log(Pile.peek()); 
console.log(Pile.pop());

// FIFO 
class Cola{
    constructor(){
        this.frente = null;
        this.trasero = null;
        this.size = 0; 
    }

    datoEnCola(data) {
        const nuevoNode = new Node(data);
        if (this.frente){
            this.trasero.next = nuevoNode;
            this.trasero = nuevoNode;
        } else {
            this.frente = nuevoNode;
            this.trasero = nuevoNode;
        }
        this.size++;
    }
    eliminar(){
        if (!this.frente){
            console.log("La cola está vacía");
            return null;
        }
        const datoEliminado = this.frente.data;
        this.frente = this.frente.next;
        this.size--;
        return datoEliminado;
    }
    verFrente (){
        return this.frente ? this.frente.data : null;
    }
}
console.log("Valores de la Cola")
const NCola = new Cola();
NCola.datoEnCola("Carlos");
NCola.datoEnCola("Pedro");
NCola.datoEnCola("María");
console.log(NCola.eliminar());
console.log(NCola.eliminar());
console.log(NCola.eliminar());
console.log(NCola.verFrente());
console.log(NCola.eliminar());


