import Cliente from "./cliente";
/**
 * esta clase existe para poder almacenar a los posibles clientes que desean reservar un vehiculo
 */
export default class Consumidor{
    private consumidores: Map<string,Cliente>

    constructor(){
        this.consumidores = new Map();
    }

    /**
     * Agrega un nuevo cliente al Map
     * @param id {string} Recibe el id del cliente
     * @param datos {Cliente} Cliente a agregar
     * @throws Excepcion personalizada o simple
     * @returns void
     */
    public agregarCliente(id: string, datos: Cliente): void{
        this.consumidores.set(id, datos); //
    }

    public buscarCliente(id: string): boolean{
        return this.consumidores.has(id);
    }

    public obtenerCliente(id: string): Cliente | void{
        return this.consumidores.get(id);
    }

    public obtenerMapClientes():Map<string,Cliente>{
        return this.consumidores
    }
}