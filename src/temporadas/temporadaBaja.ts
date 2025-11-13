import Vehiculo from "../vehiculos/vehiculo";
import Temporadas from "./temporadas";

export default class TemporadaBaja implements Temporadas {
  public porcentajePorTemporada(vehiculo: Vehiculo): number {
    return (vehiculo.getTarifaDiaria() * 0.10) * -1
  }

}