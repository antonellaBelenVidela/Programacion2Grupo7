import Mantenimiento from "../mantenimiento";
import Vehiculo from "../vehiculos/Vehiculo";
import Disponible from "./disponible";
import Estado from "./estado";
/**
 * este es el estado que el vehiculo emplea cuando esta en mantenimiento
 */
export default class EnMantenimiento implements Estado{
   private vehiculo:Vehiculo
   

   constructor(vehiculo:Vehiculo){
     this.vehiculo=vehiculo 
     
   }
  /**
   * el vehiculo al estar en Mantenimiento no puede ser alquilado por ende se le informa con un error que no se puede alquilar
   */
    public alquilar(): void{
         throw new Error("no se puede alquilar, ya que se encuntra en mantenimiento");
        
    }
    //throw error
  /**
   * 
   * @param mantenimiento 
   * se encarga de realizar el mantenimiento del vehiculo
   */
    public mantenimiento(mantenimiento:Mantenimiento):void {
       console.log("se esta realizando el mantenimiento")
        //verificar que pasen 24 horas para pasar a disponible
    }
   /**
    * esta funcion se encarga de cambiar el estado del vehiculo de EnMantenimiento a disponible
    * tambien resetea los valores de mesesSinMantenimiento y los kmSinMantenimiento 
    */
    public TerminarMantenimiento(): void {
       this.vehiculo.cambiarEstado(new Disponible(this.vehiculo))
        this.vehiculo.setMesesSinMantenimiento(0)
        this.vehiculo.setKmSinMantenimiento(0)
    }
    /**
     * como el vehiculo se encuentra en el estado EnMantenimiento no pudo haberse echo una reserva en el primer lugar
     */
    public TerminarReserva(): void {
       throw new Error("el auto no se encuentra en reserva porque esta en mantenimiento")
    }
}

 