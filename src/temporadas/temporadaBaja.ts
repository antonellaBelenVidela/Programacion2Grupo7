import Vehiculo from "../vehiculos/vehiculo";
import Temporadas from "./temporadas";
/**
 *  esta clase se encarga de setear la temporada que se realiza la reserva
 */
export default class TemporadaBaja implements Temporadas {
  /**
   * 
   * @param vehiculo recibe el vehiculo de la reserva
   * @returns devuelve el precio agregado por la temporada de la reserva
   */
  public porcentajePorTemporada(vehiculo: Vehiculo): number {
    let precio = vehiculo.getTarifaDiaria() * 0.10

    return precio * -1
  }

}