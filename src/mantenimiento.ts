import Disponible from "./estados/disponible"
import EnMantenimiento from "./estados/EnMantenimiento"
import Vehiculo from "./vehiculos/Vehiculo"

export default class Mantenimiento {
    private tipoMantenimiento:string
    private costoMantenimiento:number
    private fechaInicioMant:Date
    private FechaFinMant:Date
    private Vehiculo:Vehiculo
    
    constructor(){
      this.tipoMantenimiento=""
      this.costoMantenimiento=0
      this.FechaFinMant=undefined as unknown as Date
      this.fechaInicioMant=undefined as unknown as Date
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
    this.fechaInicioMant=fecha
  }

  public getFechaInicio():Date{
    return this.fechaInicioMant
  }

   public setFechFin(fecha:Date){
    this.FechaFinMant=fecha
  }

  public getFechaFin():Date{
    return this.FechaFinMant
  }
 
  public SetVehiculo (vehiculo:Vehiculo){
    this.Vehiculo=vehiculo
  }
  
  public GetVehiculo ():Vehiculo{
    return this.Vehiculo
  }
 /**
  * 
  * @param vehiculo 
  * @returns verifica si el auto debe pasar a mantenimiento
  */
  public PasarMantenimiento(vehiculo:Vehiculo):boolean{
     return vehiculo.getKmSinMantenimiento()>12000 || vehiculo.GeTMesesSinMantenimiento() > 12 || vehiculo.GetVecesAlquilado() > 5
     
  }
/**
 * 
 * @param vehiculo 
 * @param fechaInicio 
 * @param fechaFin 
 * se encarga de pasar el auto en mantenimiento y cuando va a inicar ese mantenimiento
 */
  public Mantenimiento(vehiculo:Vehiculo,fechaInicio:Date,fechaFin:Date){
      if(this.PasarMantenimiento(vehiculo) === true){
         let Estado= new EnMantenimiento
        vehiculo.cambiarEstado(Estado)
         this.SetVehiculo(vehiculo)
         this.setFechaInico(fechaInicio)
         this.setFechFin(fechaFin)
      } 
  }
/**
 * 
 * @param fecha 
 * saca el auto del estado de mantenimiento y lo devuelve a un estado disponible si es que ya llego la fecha fin de su mantenimiento
 */
  public TerminarMantimiento(fecha:Date):void{
    //Excepicion
    if(fecha >= this.FechaFinMant){
       let estado = new Disponible()
        this.Vehiculo.cambiarEstado(estado)
        this.Vehiculo.SetCostoMantenimiento(this.costoMantenimiento)
        this.Vehiculo.SetKmSinMantenimiento(0)
        this.Vehiculo.SetMesesSinMantenimiento(0)
     }
  }
}