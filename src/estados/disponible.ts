import Mantenimiento from "../mantenimiento";
import Vehiculo from "../vehiculos/vehiculo";
import EnAlquiler from "./enAlquiler";
import EnMantenimiento from "./EnMantenimiento";
import Estado from "./estado";
/**
 * esta clase es el estado que el vehiculo implementa cuando esta disponible
 */
export default class Disponible implements Estado{
    private vehiculo:Vehiculo

    constructor(vehiculo:Vehiculo){
        this.vehiculo=vehiculo 
    }
    /**
     * esta funcion lo que se encarga es de pasar del estado disponible al estado alquiler una vez el vehiculo se asigno en una reserva
     */
    public alquilar(): void  {
        console.log("¡El auto se encuentra disponible! Se puede realizar la reserva.")
        this.vehiculo.cambiarEstado(new EnAlquiler(this.vehiculo))
        
    } 
    /**
     * esta funcion devuelve un error ya que el vehiculo no se encuentra en una reserva
     */
    public TerminarReserva(): void {
        throw new Error("el auto no se encuentra en reserva aun.")
    }
  /**
   * esta funcion devuelve un error ya que el aunto no se encuentra en el estado de enMantenimiento y por ende no puede salir de ese estado
   */
   public TerminarMantenimiento(): void {
       throw new Error("el auto aun no se encuntra en mantenimiento.")
   }
 /**
  * 
  * @param mantenimiento recibe la clase mantenimiento para poder poner al auto en la clase de mantenimiento
  * lo que hace esta funcion es verificar si el vehiculo cumple las condiciones para tener que hacerle mantenimiento
  * luego de que verifique las condiciones pasa ese vehiculo a la clase mantenimineto y se le cambia el estado a enMantenimiento.
  */
    public mantenimiento(mantenimiento:Mantenimiento): void {
        if(this.vehiculo.getKmSinMantenimiento()>=12000 || this.vehiculo.geTMesesSinMantenimiento() >= 12 || this.vehiculo.GetVecesAlquilado() >= 5){
            this.vehiculo.cambiarEstado(new EnMantenimiento(this.vehiculo))
            mantenimiento.SetVehiculo(this.vehiculo)
        }

    }
}