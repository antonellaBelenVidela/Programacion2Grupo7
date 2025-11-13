import Mantenimiento from "../mantenimiento"

export default interface Estado{
    alquilar():void
    mantenimiento(mantenimiento:Mantenimiento):void
    TerminarReserva():void
    TerminarMantenimiento():void
}