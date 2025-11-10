import Disponible from "./estados/disponible"
import EnMantenimiento from "./estados/EnMantenimiento"
import Vehiculo from "./vehiculos/Vehiculo"

export default class Mantenimiento {
    private tipoMantenimiento:string
    private costoMantenimiento:number
    private fechaInicio:Date
    private FechaFin:Date
    private Vehiculo:Vehiculo
    
    constructor(){
      this.tipoMantenimiento=""
      this.costoMantenimiento=0
      this.FechaFin=undefined as unknown as Date
      this.fechaInicio=undefined as unknown as Date
      this.Vehiculo= undefined as unknown as Vehiculo
    }


  public setTipoMantenimiento(Mantenimiento:string){
    this.tipoMantenimiento=Mantenimiento
  }

  public getTipoMantenimiento():string{
    return this.tipoMantenimiento
  }

   public setCostoMantenimiento(costo:number){
    this.costoMantenimiento=costo
  }

  public getCosto():number{
    return this.costoMantenimiento
  }


  public setFechaInico(fecha:Date){
    this.fechaInicio=fecha
  }

  public getFechaInicio():Date{
    return this.fechaInicio
  }

   public setFechFin(fecha:Date){
    this.FechaFin=fecha
  }

  public getFechaFin():Date{
    return this.FechaFin
  }
 
  public SetVehiculo (vehiculo:Vehiculo){
    this.Vehiculo=vehiculo
  }
  
  public GetVehiculo ():Vehiculo{
    return this.Vehiculo
  }

  public PasarMantenimiento(vehiculo:Vehiculo):boolean{
     return vehiculo.getKmSinMantenimiento()>12000 || vehiculo.GeTMesesSinMantenimiento() > 12 || vehiculo.GetVecesAlquilado() > 5
     
  }

  public Mantenimiento(vehiculo:Vehiculo){
      if(this.PasarMantenimiento(vehiculo) === true){
         let Estado= new EnMantenimiento
        vehiculo.cambiarEstado(Estado)
         this.SetVehiculo(vehiculo)
      } 
  }

  public TerminarMantimiento(fecha:Date):void{
     if(fecha >= this.FechaFin){
       let estado = new Disponible()
        this.Vehiculo.cambiarEstado(estado)
        this.Vehiculo.SetCostoMantenimiento(this.costoMantenimiento)
     }
  }
}