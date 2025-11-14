import Mantenimiento from "../mantenimiento"
/**
 * esta es la interface que los implementaran los distintos estados que el vehiculo puede tomar
 */
export default interface Estado{
    alquilar():void
    mantenimiento(mantenimiento:Mantenimiento):void
    TerminarReserva():void
    TerminarMantenimiento():void
}