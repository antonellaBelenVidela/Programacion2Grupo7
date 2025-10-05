import Vehiculo from "./Vehiculo";
export default class Sedan extends Vehiculo {

    constructor(){
        super()
       
    }

  public calcularPago(): number {
      let kilometros=this.getKilometrosRecorridosPordias()
     
      let A= kilometros.length
      let Pagototal=0
      for(let i=0;i<=A;i++){
            Pagototal += (kilometros[i]*0.25)
      }
      return Pagototal + 50
  }

}
