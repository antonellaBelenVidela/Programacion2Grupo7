import Cliente from "./cliente";

export default class Consumidor{
    private clientes: Map<string,Cliente>

    constructor(){
        this.clientes = new Map();
    }

    /**
     * Agrega un nuevo cliente al Map
     * @param id {string} Recibe el id del cliente
     * @param datos {Cliente} Cliente a agregar
     * @throws Excepcion personalizada o simple
     * @returns void
     */
    public agregarCliente(id: string, datos: Cliente): void{
        this.clientes.set(id, datos); //
    }

    public buscarCliente(id: string): boolean{
        return this.clientes.has(id);
    }

    public obtenerCliente(id: string): Cliente | void{
        return this.clientes.get(id);
    }

    public ObtenerClientes():Map<string,Cliente>{
        return this.clientes
    }
}