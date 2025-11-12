import Kilometraje from "../gestiones/gestionKilometraje";
import Reserva from "../reserva";
import Vehiculo from "./vehiculo";
export default class Sedan extends Vehiculo {

    constructor() {
        super()
        this.tarifaDiaria = 50

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
        for (let i = 0; i <= diasRentado; i++) {
            pagototal += (kilometros[i] * 0.25)
            pagototal += this.getTarifaDiaria() + reserva.porcentajePorTemporada(this)
        }
        return pagototal
    }
<<<<<<< HEAD
  /**
   * 
   * @param kilometraje recibe la clase kilometraje 
   * @returns devuelve la cantidad que debe en cuestion 
   */
  public calcularPago(kilometraje:Kilometraje,reserva:Reserva): number {
      let kilometros=kilometraje.getKilometrosRecorridosPordias()
     
      let diasRentados= kilometros.length
      let Pagototal=0
      for(let i=0;i<diasRentados;i++){
            Pagototal += (kilometros[i]*0.25)
            Pagototal+= this.getTarifaDiaria() + reserva.PorcentajePorTemporada(this)
       }
      return Pagototal 
  }
=======
>>>>>>> bf6a33ca5667294fd30ee978d772ef8f83a1fcd3

}
