import Vehiculo from "../vehiculos/vehiculo";
import Estado from "./estado";

export default class EnAlquiler implements Estado{
    private vehiculo:Vehiculo

    constructor(vehiculo:Vehiculo){
        this.vehiculo=vehiculo
    }
    
    public alquilar(): boolean {
        console.log("¡No se puede alquilar el auto! Ya está reservado.")
        return false
    }

    mantenimiento(): void {
        throw new Error("no se puede pasar a mantenimiento, aun esta en uso")
    }
}