import Vehiculo from "./vehiculos/Vehiculo";

export default class Flota{
    private _flota: Map<string,Vehiculo>;

    constructor(){
        this._flota = new Map<string,Vehiculo>();
    }

    public agregarVehiculo(patente: string, datos: Vehiculo): void{
        this._flota.set(patente, datos);
    }

    public buscarVehiculo(patente: string): boolean | undefined{
        return this._flota.has(patente);
    }

    public obtenerVehiculo(patente: string): Vehiculo | undefined{
        return this._flota.get(patente);
    }

    public obtenerDisponibilidad(patente: string, coche: Vehiculo){
        return console.log(`Disponibilidad: ${coche.getDisponibilidad()}`);
    }

    public mostrarFlota(): void{
        for(const patente of this._flota.keys()){
            const auto = this._flota.get(patente)
            auto?.mostrarAtributos();   // El '?' significa que primero verifica si es null o undefinded, en caso que lo sea devuelve eso, sino continua con el metodo
        }
    }
}