import Vehiculo from "../vehiculos/Vehiculo";

export default interface Temporadas {
  porcentajePorTemporada(vehiculo: Vehiculo): number
}