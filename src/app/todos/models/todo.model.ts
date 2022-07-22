

export class Todo {
    id: number | null = null;
    name: string  | null = null;
    isCompleted: boolean | null = null;

    
    constructor(texto: string) {
        this.name = texto;
        
        // simular un id que venga de una BD
        this.id = new Date().getTime();
        this.isCompleted = false;
        
    }

}