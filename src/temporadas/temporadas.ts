import Vehiculo from "../vehiculos/vehiculo";

export default interface Temporadas {
  porcentajePorTemporada(vehiculo: Vehiculo): number
}