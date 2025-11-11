import Reserva from "../reserva";
import Vehiculo from "../vehiculos/Vehiculo";
import Kilometraje from "./gestionKilometraje";

export default class GestionTarifa  {
   
   /**
    * 
    * @param vehiculo 
    * @param kilometraje 
    * @returns devuelve la tarifa final del todo alquiler
    */
    public gestionarTarifa(vehiculo: Vehiculo, kilometraje: Kilometraje,reserva:Reserva): void {
        let ganacias=vehiculo.calcularPago(kilometraje,reserva)
        vehiculo.SetGanaciasTotales(ganacias)
       
        //return vehiculo.calcularPago(kilometraje,reserva) //ok
    }
}