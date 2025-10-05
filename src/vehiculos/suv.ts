import Vehiculo from "./Vehiculo";

export default class Suv extends Vehiculo{
    private carjoFijo:number

    constructor(){
        super()
        this.carjoFijo=15
    }
 
    public calcularPago(): number {
        let kilometros=this.getKilometrosRecorridosPordias()
     
      let A= kilometros.length
      let Pagototal=0
      let TotalRecorrido=0
      for(let i=0;i<=A;i++){
         TotalRecorrido+=kilometros[i]
      }
      if(TotalRecorrido > 500){
        Pagototal=TotalRecorrido *0.25
      }
      return Pagototal + 15 + 80
    }
}