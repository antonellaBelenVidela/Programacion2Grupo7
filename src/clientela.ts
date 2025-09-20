import Cliente from "./cliente";

export default class Clientela{
    private _clientes: Map<string,Cliente>

    constructor(){
        this._clientes = new Map();
    }

    public agregarCliente(id: string, datos: Cliente): void{
            this._clientes.set(id, datos);
    }

    public buscarCliente(id: string): boolean | undefined{
        return this._clientes.has(id);
    }

    public obtenerCliente(id: string): Cliente | void{
        return this._clientes.get(id);
    }
}