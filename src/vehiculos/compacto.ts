import Kilometraje from "../gestiones/gestionKilometraje";
import Vehiculo from "./Vehiculo";

export default class Compacto extends Vehiculo {

  constructor() {
    super()

  }
  /**
   * 
   * @param kilometraje recibe la clase kilometraje 
   * @returns devuelve la cantidad que debe en cuestion 
   */
  public calcularPago(kilometraje: Kilometraje): number {
    let kilometros = kilometraje.getKilometrosRecorridosPordias()

    let diasRentados = kilometros.length
    let Pagototal = 0
    for (let i = 0; i <= diasRentados; i++) {
      if (kilometros[i] > 100)
        Pagototal += (kilometros[i] - 100 * 0.15)
    }
    return Pagototal + (30 * diasRentados)
  }


}