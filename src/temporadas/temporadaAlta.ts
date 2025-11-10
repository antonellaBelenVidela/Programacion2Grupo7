import Vehiculo from "../vehiculos/Vehiculo";
import temporadas from "./temporadas";

export default class TemporadaAlta implements temporadas{
   public PorcentajePorTemporada(vehiculo:Vehiculo): number {
     let precio= vehiculo.getTarifaDiaria() * 0.10

      return precio
    }
}