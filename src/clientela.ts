import Cliente from "./cliente";

export default class Clientela{
    private _clientes: Map<string,Cliente>

    constructor(){
        this._clientes = new Map();
    }

    /**
     * Agrega un nuevo cliente al Map
     * @param id {string} Recibe el id del cliente
     * @param datos {Cliente} Cliente a agregar
     * @throws Excepcion personalizada o simple
     * @returns void
     */
    public agregarCliente(id: string, datos: Cliente): void{
        this._clientes.set(id, datos); //
    }

    public buscarCliente(id: string): boolean{
        return this._clientes.has(id);
    }

    public obtenerCliente(id: string): Cliente | void{
        return this._clientes.get(id);
    }
}