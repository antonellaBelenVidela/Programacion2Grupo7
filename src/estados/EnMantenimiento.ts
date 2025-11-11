import Estado from "./estado";

export default class EnMantenimiento implements Estado{
   public alquilar(): boolean {
         console.log("no se puede alquilar el auto porque esta en mantenimiento")
        return false
    }
}