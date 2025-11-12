import Estado from "./estado";

export default class Disponible implements Estado{
    public alquilar(): boolean {
        console.log("¡El auto se encuentra disponible! Se puede realizar la reserva.")
        return true
    } 
}