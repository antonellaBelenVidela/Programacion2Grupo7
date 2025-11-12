import Estado from "./estado";

export default class EnMantenimiento implements Estado{
   public alquilar(): boolean {
         console.log("¡No se puede alquilar el auto! Está en mantenimiento.")
        return false
    }
}