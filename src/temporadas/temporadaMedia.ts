import Vehiculo from "../vehiculos/vehiculo";
import Temporadas from "./temporadas";
/**
 *  esta clase se encarga de setear la temporada que se realiza la reserva
 */
export default class TemporadaMedia implements Temporadas {
   /**
   * 
   * @param vehiculo recibe el vehiculo ligado a la reserva
   * @returns devuelve el agregado extra que tiene que pagar por la temporada
   */
   public porcentajePorTemporada(vehiculo: Vehiculo): number {
      return 0

   }
}