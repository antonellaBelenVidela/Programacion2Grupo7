import Vehiculo from "../vehiculos/vehiculo";
import Temporadas from "./temporadas";

export default class TemporadaAlta implements Temporadas {
  public porcentajePorTemporada(vehiculo: Vehiculo): number {
    return (vehiculo.getTarifaDiaria() * 0.10)
  }
}