import Kilometraje from "../gestiones/gestionKilometraje";
import Vehiculo from "./vehiculo";
export default class Sedan extends Vehiculo {

    constructor(){
        super()
       
    }
  /**
   * 
   * @param kilometraje recibe la clase kilometraje 
   * @returns devuelve la cantidad que debe en cuestion 
   */
  public calcularPago(kilometraje:Kilometraje): number {
      let kilometros=kilometraje.getKilometrosRecorridosPordias()
     
      let diasRentados= kilometros.length
      let Pagototal=0
      for(let i=0;i<=diasRentados;i++){
            Pagototal += (kilometros[i]*0.25)
      }
      return Pagototal + (50*diasRentados)
  }

}
