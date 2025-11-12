import Reserva from "../reserva";
import Vehiculo from "../vehiculos/vehiculo";


export default class GestionKilometraje  {
  private kilometrosRecorridosPorDias: number[];

  constructor() {
    this.kilometrosRecorridosPorDias = [];
  }


  /**
   * 
   * @param kilometros recibe un array con los kilometros reccoridos en cada dia
   * 
   */

  public setKilometrosRecorridosPorDia(kilometros: number[],vehiculo:Vehiculo) {
    let cantDias = kilometros.length

    for (let i = 0; i < cantDias; i++) {
      this.kilometrosRecorridosPorDias.push(kilometros[i]);
      vehiculo.setKmSinMantenimiento(kilometros[i])
    }
  }

  public getKilometrosRecorridosPordia(): number[] {
    return this.kilometrosRecorridosPorDias;
  }

 /**
  * 
  * @param vehiculo 
  * @returns devuelve el extra que tiene que pagar cada vehiculo por los kilometros que recorrio durante el alquiler
  */
  public gestionarKilometrajeExtra(vehiculo: Vehiculo,reserva:Reserva): number {
    return vehiculo.calcularPago(this,reserva);
  }
}