import Vehiculo from "../vehiculos/vehiculo";
import Kilometraje from "./gestionKilometraje";
import IGestorGeneral from "./gestorGeneral";

export default class GestionTarifa implements IGestorGeneral {
    /**
     * 
     * @param matricula 
     * @param idCliente 
     * @param fechaInicio 
     * @param fechaFin 
     * inicializa la estructura de datos del auto
     */
    Gestionar(matricula: string, idCliente: string, fechaInicio: Date, fechaFin: Date): boolean {
        throw new Error("Gestión general de tarifa no implementada aún");
    }
   /**
    * 
    * @param vehiculo 
    * @param kilometraje 
    * @returns devuelve la tarifa final del todo alquiler
    */
    public gestionar(vehiculo: Vehiculo, kilometraje: Kilometraje): number {
        return vehiculo.calcularPago(kilometraje) //ok
    }
}