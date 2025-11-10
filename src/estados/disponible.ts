import Estado from "./estado";

export default class Disponible implements Estado{
    public alquilar(): boolean {
        console.log("el auto se encuentra disponible se puede realziar la reserva")
        return true
    } 
}