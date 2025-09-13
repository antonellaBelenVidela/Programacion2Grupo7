export default class Mantenimiento {
    private tipoMantenimiento:string
    private costoMantenimiento:number
    private fechaInicio:Date
    private FechaFin:Date
    private EnMantenimiento:boolean

    constructor(){
      this.tipoMantenimiento=""
      this.costoMantenimiento=0
      this.FechaFin=undefined as unknown as Date
      this.fechaInicio=undefined as unknown as Date
      this.EnMantenimiento=false
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
 
   public setEnMantenimiento(EnMantenimiento:boolean){
    this.EnMantenimiento=EnMantenimiento
  }

  public getEnMantenimiento():boolean{
    return this.EnMantenimiento
  }

}