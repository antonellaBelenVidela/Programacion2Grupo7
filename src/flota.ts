import Vehiculo from "./vehiculos/Vehiculo";

export default class Flota{
    private flota: Map<string,Vehiculo>;

    constructor(){
        this.flota = new Map<string,Vehiculo>();
    }

    public agregarVehiculo(patente: string, datos: Vehiculo): void{
        this.flota.set(patente, datos);
    }

    public obtenerVehiculo(patente: string): Vehiculo | undefined{
        return this.flota.get(patente);
    }

    public obtenerDisponibilidad(patente: string, coche: Vehiculo){
        return console.log(`Disponibilidad: ${coche.getDisponibilidad()}`);
    }

    public mostrarFlota(): void{
        for(const patente of this.flota.keys()){
            const auto = this.flota.get(patente)
            auto?.mostrarAtributos();   // El '?' significa que primero verifica si es null o undefinded, en caso que lo sea devuelve eso, sino continua con el metodo
        }
    }
}