import Kilometraje from "../gestiones/gestionKilometraje";
import Reserva from "../reserva";
import Vehiculo from "./Vehiculo";
export default class Sedan extends Vehiculo {

    constructor(){
        super()
        this.TarifaDiaria=50
       
    }
  /**
   * 
   * @param kilometraje recibe la clase kilometraje 
   * @returns devuelve la cantidad que debe en cuestion 
   */
  public calcularPago(kilometraje:Kilometraje,reserva:Reserva): number {
      let kilometros=kilometraje.getKilometrosRecorridosPordias()
     
      let diasRentados= kilometros.length
      let Pagototal=0
      for(let i=0;i<=diasRentados;i++){
            Pagototal += (kilometros[i]*0.25)
            Pagototal+= this.getTarifaDiaria() + reserva.PorcentajePorTemporada(this)
      }
      return Pagototal 
  }

}
