import Estado from "./estado";

export default class EnAlquiler implements Estado{
    public alquilar(): boolean {
        console.log("¡No se puede alquilar el auto! Ya está reservado.")
        return false
    }
}