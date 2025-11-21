import Reserva from "../reserva";
import Vehiculo from "../vehiculos/Vehiculo";

/**
 * esta clase se encarga de obtener los kilometros que recorrio el auto para luego calcular el exceso de kilometros
 */
export default class GestionKilometraje  {
  private kilometrosRecorridosPorDias: number[];

  constructor() {
    this.kilometrosRecorridosPorDias = [];
  }


  /**
   * 
   * @param kilometros recibe un array con los kilometros reccoridos en cada dia
   * se encarga de cargar los kilometros que hizo un vehiculo durante su reserva
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