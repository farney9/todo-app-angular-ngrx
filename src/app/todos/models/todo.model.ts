

export class Todo {
    id: number;
    name: string ;
    isCompleted: boolean;

    
    constructor(texto: string) {
        this.name = texto;
        
        // simular un id que venga de una BD
        this.id = Math.random();
        this.isCompleted = false;
        
    }

}