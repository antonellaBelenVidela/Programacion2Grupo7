import { version } from "moment";
import Kilometraje from "../gestiones/gestionKilometraje";
import Vehiculo from "./vehiculo";
import Reserva from "../reserva";

export default class Suv extends Vehiculo {
  private cargoFijo: number

  constructor() {
    super()
    this.cargoFijo = 15
    this.tarifaDiaria = 80
  }
  /**
   * 
   * @param kilometraje recibe la clase kilometraje 
   * @returns devuelve la cantidad que debe en cuestion 
   */
  public calcularPago(kilometraje: Kilometraje, reserva: Reserva): number {
    let kilometros = kilometraje.getKilometrosRecorridosPordia()

    let diasRentado = kilometros.length
    let pagototal = 0
    let totalRecorrido = 0

    for (let i = 0; i < diasRentado; i++) {
      totalRecorrido += kilometros[i]
      pagototal += this.getTarifaDiaria() + reserva.porcentajePorTemporada(this)
    }
    if (totalRecorrido > 500) {
      pagototal = totalRecorrido * 0.25
    }
    return pagototal + this.cargoFijo
  }
}