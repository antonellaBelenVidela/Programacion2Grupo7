import Mantenimiento from "../mantenimiento";
import Vehiculo from "../vehiculos/vehiculo";
import Disponible from "./disponible";
import Estado from "./estado";

export default class EnAlquiler implements Estado{
    private vehiculo:Vehiculo

    constructor(vehiculo:Vehiculo){
        this.vehiculo=vehiculo 
    }
    
    public alquilar(): void {
       throw new Error("no se puede alquilar el auto porque esta en alquiler")
    }

    public mantenimiento(mantenimiento:Mantenimiento): void {
        throw new Error("no se puede pasar a mantenimiento, aun esta en uso")
    }

    public TerminarMantenimiento(): void {
        throw new Error("el auto no se encuentra en mantenimiento.")
    }

    public TerminarReserva(): void {
        this.vehiculo.cambiarEstado(new Disponible(this.vehiculo))
    }
}