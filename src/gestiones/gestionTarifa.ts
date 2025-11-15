import Reserva from "../reserva";
import Vehiculo from "../vehiculos/vehiculo";
import Kilometraje from "./gestionKilometraje";
/**
 * esta clase se encarga de calcular lo que el cliente tiene que pagar por el alquiler del auto
 */
export default class GestionTarifa  {
   
   /**
    * 
    * @param vehiculo recibe el vehiculo que se le quiere calcular la tarifa
    * @param kilometraje recibe la clase kilometraje que contiene los kilometros que recorrio el vehiculo durante su reserva
    * @returns devuelve la tarifa final del todo alquiler
    */
    public gestionarTarifa(vehiculo: Vehiculo, kilometraje: Kilometraje,reserva:Reserva): void {
        let ganacias=vehiculo.calcularPago(kilometraje,reserva)
        vehiculo.SetGanaciasTotales(ganacias)
       
        //return vehiculo.calcularPago(kilometraje,reserva) //ok
    }
}