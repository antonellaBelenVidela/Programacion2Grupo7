import Disponible from "./estados/disponible"
import Vehiculo from "./vehiculos/Vehiculo"

export default class Mantenimiento {
    private tipoMantenimiento:string
    private costoMantenimiento:number
    private fechaInicioMant:Date
    private FechaFinMant:Date
    private Vehiculo:Vehiculo
    private PasoMasDe24Horas:boolean
    
    constructor(){
      this.tipoMantenimiento=""
      this.costoMantenimiento=0
      this.FechaFinMant=undefined as unknown as Date
      this.fechaInicioMant=undefined as unknown as Date
      this.Vehiculo= undefined as unknown as Vehiculo
      this.PasoMasDe24Horas=false
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

 public setPasaron24Horas(boolean:boolean){
   this.PasoMasDe24Horas=boolean
 }
 
 public GetPasaron24Horas():boolean{
  return this.PasoMasDe24Horas
 }
 /**
 * 
 * @param vehiculo 
 * @param fechaInicio 
 * @param fechaFin 
 * se encarga de pasar el auto en mantenimiento y cuando va a inicar ese mantenimiento
 */
  public PasarAMantenimiento(vehiculo:Vehiculo,fechaInicio:Date,fechaFin:Date){
       let estado= vehiculo.getEstado()
       estado.mantenimiento(this)
        this.setFechaInico(fechaInicio)
        this.setFechFin(fechaFin)
      } 
  
 /**
 * 
 * @param fecha 
 * saca el auto del estado de mantenimiento y lo devuelve a un estado disponible si es que ya llego la fecha fin de su mantenimiento
 */
  public FinalizarMantimiento(fecha:Date):void{
    //Excepicion
    if(fecha >= this.FechaFinMant  || this.PasoMasDe24Horas === true ){
        let estado= this.Vehiculo.getEstado()
        estado.TerminarMantenimiento()
        this.Vehiculo.setCostoMantenimiento(this.costoMantenimiento)
     }
  }

  
}