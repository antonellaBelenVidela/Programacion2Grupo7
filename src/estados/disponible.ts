import Vehiculo from "../vehiculos/vehiculo";
import EnAlquiler from "./enAlquiler";
import EnMantenimiento from "./enMantenimiento";
import Estado from "./estado";

export default class Disponible implements Estado{
    private vehiculo:Vehiculo

    constructor(vehiculo:Vehiculo){
        this.vehiculo=vehiculo
    }
    
    public alquilar(): void  {
        console.log("¡El auto se encuentra disponible! Se puede realizar la reserva.")
        this.vehiculo.cambiarEstado(new EnAlquiler(this.vehiculo))
        
    } 
    
    public TerminarReserva(): void {
        throw new Error("el auto no se encuentra en reserva aun.")
    }

   public TerminarMantenimiento(): void {
       throw new Error("el auto aun no se encuntra en mantenimiento.")
   }

    public mantenimiento(): void {
        if(this.vehiculo.getKmSinMantenimiento()>12000 || this.vehiculo.geTMesesSinMantenimiento() > 12 || this.vehiculo.GetVecesAlquilado() > 5){
            this.vehiculo.cambiarEstado(new EnMantenimiento(this.vehiculo))
        }

    }
}