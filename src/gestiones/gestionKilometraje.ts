import Vehiculo from "../vehiculos/vehiculo";
import GestorGeneral from "./gestorGeneral";

export default class GestionKilometraje implements GestorGeneral {
  private kilometrosRecorridosPorDias: number[];

  constructor() {
    this.kilometrosRecorridosPorDias = [];
  }

  Gestionar(matricula: string, idCliente: string, fechaInicio: Date, fechaFin: Date): boolean {
    throw new Error("Method not implemented.");
  }
  /**
   * 
   * @param kilometros recibe un array con los kilometros reccoridos en cada dia
   */

  public SetKilometrosRecorridosPorDia(kilometros: number[]) {
    let cantDias = kilometros.length

    for (let i = 0; i <= cantDias; i++) {
      this.kilometrosRecorridosPorDias.push(kilometros[i]);
    }
  }

  public getKilometrosRecorridosPordias(): number[] {
    return this.kilometrosRecorridosPorDias;
  }


  public gestionar(vehiculo: Vehiculo): number {
    return vehiculo.calcularPago(this);
  }
}