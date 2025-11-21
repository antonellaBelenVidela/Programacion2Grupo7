import Mantenimiento from "../mantenimiento";
import Vehiculo from "../vehiculos/Vehiculo";
import Disponible from "./disponible";
import Estado from "./estado";
/**
 * esta clase es el estado que el vehiculo implementara cuando esta en alquiler y que actue 
 */
export default class EnAlquiler implements Estado{
    private vehiculo:Vehiculo

    constructor(vehiculo:Vehiculo){
        this.vehiculo=vehiculo 
    }
    /**
     * como el vehiculo ya se encuentra en alquiler no puede ser alquilado hasta que termine su reserva
     * por ende la funcion tira un error indicando lo previo dicho
     */
    public alquilar(): void {
       throw new Error("no se puede alquilar el auto porque esta en alquiler")
    }
   /**
    * 
    * @param mantenimiento 
    * como el auto se encuentra en alquiler no se puede pasar a mantenimiento
    * por ende tira un error indicando que no se puede poner en mantenimiento
    */
    public mantenimiento(mantenimiento:Mantenimiento): void {
        throw new Error("no se puede pasar a mantenimiento, aun esta en uso")
    }
   /**
    * como el vehiculo no se encuentra en mantenimiento no se puede termiar su mantenimiento
    * informando por un error que el auto no se encuentra en un mantenimiento.
    */
    public TerminarMantenimiento(): void {
        throw new Error("el auto no se encuentra en mantenimiento.")
    }
     /**
      * esta funcion se encarga de cambiarle es estado al vehiculo a disponible una vez que se haya completado la reserva
      */
    public TerminarReserva(): void {
        this.vehiculo.cambiarEstado(new Disponible(this.vehiculo))
    }
}