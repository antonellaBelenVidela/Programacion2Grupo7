import Mantenimiento from "../mantenimiento";
import Vehiculo from "../vehiculos/vehiculo";
import Disponible from "./disponible";
import Estado from "./estado";

export default class EnMantenimiento implements Estado{
   private vehiculo:Vehiculo
   

   constructor(vehiculo:Vehiculo){
     this.vehiculo=vehiculo 
     
   }
  
    public alquilar(): void{
         throw new Error("no se puede alquilar, ya que se encuntra en mantenimiento");
        
    }
    //throw error

    public mantenimiento(mantenimiento:Mantenimiento) {
       console.log("se esta realizando el mantenimiento")
        //verificar que pasen 24 horas para pasar a disponible
    }

    public TerminarMantenimiento(): void {
       this.vehiculo.cambiarEstado(new Disponible(this.vehiculo))
        this.vehiculo.setMesesSinMantenimiento(0)
        this.vehiculo.setKmSinMantenimiento(0)
    }

    public TerminarReserva(): void {
       throw new Error("el auto no se encuentra en reserva porque esta en mantenimiento")
    }
}

 