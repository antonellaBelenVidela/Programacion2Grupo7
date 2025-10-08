import Kilometraje from "../gestiones/gestionKilometraje";
import Vehiculo from "./Vehiculo";

export default class Suv extends Vehiculo{
    private cargoFijo:number

    constructor(){
        super()
        this.cargoFijo=15
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
      let TotalRecorrido=0
      for(let i=0;i<diasRentados;i++){
         TotalRecorrido+=kilometros[i]
      }
      if(TotalRecorrido > 500){
        Pagototal=TotalRecorrido *0.25
      }
      return Pagototal + this.cargoFijo + (80*diasRentados)
    }
}