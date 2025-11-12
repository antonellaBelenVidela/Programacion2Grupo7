import Vehiculo from "../vehiculos/vehiculo";
import Temporadas from "./temporadas";

export default class TemporadaAlta implements Temporadas {
  public porcentajePorTemporada(vehiculo: Vehiculo): number {
    let precio = vehiculo.getTarifaDiaria() * 0.10

    return precio
  }
}