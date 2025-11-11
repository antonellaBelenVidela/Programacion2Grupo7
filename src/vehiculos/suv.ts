import { version } from "moment";
import Kilometraje from "../gestiones/gestionKilometraje";
import Vehiculo from "./Vehiculo";
import Reserva from "../reserva";

export default class Suv extends Vehiculo{
    private cargoFijo:number

    constructor(){
        super()
        this.cargoFijo=15
        this.TarifaDiaria=80
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
      let TotalRecorrido=0

      for(let i=0;i<diasRentados;i++){
         TotalRecorrido+=kilometros[i]
        Pagototal+= this.getTarifaDiaria() + reserva.PorcentajePorTemporada(this)
      }
      if(TotalRecorrido > 500){
        Pagototal=TotalRecorrido *0.25
      }
      return Pagototal + this.cargoFijo 
    }
}