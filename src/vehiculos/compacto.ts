import Kilometraje from "../gestiones/gestionKilometraje";
import Vehiculo from "./vehiculo";

export default class Compacto extends Vehiculo {

  private tarifaBase: number = 30;
  private cargoExtraPorKm: number = 0.15;
  private limiteKmPorDia: number = 100;

  constructor() {
    super();
  }
  /**
   * 
   * @param kilometraje recibe la clase kilometraje 
   * @returns devuelve la cantidad que debe en cuestion 
   */

  public calcularPago(kilometraje: Kilometraje): number {

    let kilometrosPorDiaArray = kilometraje.getKilometrosRecorridosPordias();

    let diasRentados = kilometrosPorDiaArray.length;

    let pagoTotal = 0;

    for (const kmsDiarios of kilometrosPorDiaArray) {

      let montoExtra = 0;

      // por cada dia verifico si excede los 100km para aplicar cargo adicional
      if (kmsDiarios > this.limiteKmPorDia) {
        montoExtra = (kmsDiarios - this.limiteKmPorDia) * this.cargoExtraPorKm;
      }
      // ADENTRO DEL FOR VOY ACUMULADO EL TOTAL
      pagoTotal += this.tarifaBase + montoExtra;
    }
    return pagoTotal;
  }
}