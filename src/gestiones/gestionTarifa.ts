import Reserva from "../reserva";
import Vehiculo from "../vehiculos/vehiculo";
import Kilometraje from "./gestionKilometraje";

export default class GestionTarifa  {
   
   /**
    * 
    * @param vehiculo 
    * @param kilometraje 
    * @returns devuelve la tarifa final del todo alquiler
    */
    public gestionarTarifa(vehiculo: Vehiculo, kilometraje: Kilometraje,reserva:Reserva): number {
        let ganacias=vehiculo.calcularPago(kilometraje,reserva)
        vehiculo.SetGanaciasTotales(ganacias)
        return ganacias
        //return vehiculo.calcularPago(kilometraje,reserva) //ok
    }
}