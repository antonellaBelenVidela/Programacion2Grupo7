import Vehiculo from "./Vehiculo";

export default class Compacto extends Vehiculo{

    constructor(){
        super()
      
    }

  public calcularPago(): number {
      let kilometros=this.getKilometrosRecorridosPordias()
     
      let A= kilometros.length
      let Pagototal=0
      for(let i=0;i<=A;i++){
        if(kilometros[i] > 100)
            Pagototal += (kilometros[i]-100*0.15)
      }
      return Pagototal + 30
  }
  
  
}