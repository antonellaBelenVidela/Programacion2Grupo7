import Vehiculo from "../vehiculos/vehiculo";
/**
 * esta interface es la que implementarar las varias temporadas en la que se realiza la reserva
 */
export default interface Temporadas {
  porcentajePorTemporada(vehiculo: Vehiculo): number
}