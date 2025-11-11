import Kilometraje from "../gestiones/gestionKilometraje";
import Reserva from "../reserva";
import Vehiculo from "./Vehiculo";

/**
 * Clase que representa un vehículo del tipo Compacto.
 * 
 * la clase Compacto Extiende la clase {@link Vehiculo} e implementa una lógica de cálculo de pago basada en una tarifa base diaria de $30 y un cargo extra ($0.15) por kilómetro excedido (una vez pasas los 100km del dia).
 * 
 * @class Compacto
 * @extends Vehiculo
 */

export default class Compacto extends Vehiculo {


  /** 
   * Cargo Extra por cada km excedido del límite diario.
   * @type {number}
   */
  private cargoExtraPorKm: number = 0.15;

  /**
   * Limite de kms permitidos por día (sin un cargo adicional).
   * @type {number}
   */
    private limiteKmPorDia: number = 100;

  /**
   * Crea una instancia de la clase Compacto.
   */
  constructor() {
    super();
    this.TarifaDiaria=30
  }

  /**

   * @returns devuelve la cantidad que debe en cuestion 
   */

  /**
   * El metodo calcularPago calcula el pago total que debe realizar el cliente según los kilómetros recorridos por día.
   * 
   * -> Tiene en cuenta una tarifa base diaria.
   * -> Si se exceden los 100km por día, cobra un cargo adicional por cada km extra.
   * 
   * @param {Kilometraje} kilometraje -> Recibe e Instancia la clase Kilometraje que contiene los kilómetros recorridos por día.
   * @returns {number} -> Retorna el monto total a pagar por el alquiler del vehículo.
   * 
   * @example
   * const km = new Kilometraje([144, 76, 112]);
   * const auto = new Compacto();
   * const total = auto.calcularPago(km);
   * console.log(total); // Devuelve el pago total con cargos extra incluidos
   */

  public calcularPago(kilometraje: Kilometraje,reserva:Reserva): number {

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
      pagoTotal+= this.TarifaDiaria + reserva.PorcentajePorTemporada(this) + montoExtra
    
    }
    return pagoTotal;
  }
}