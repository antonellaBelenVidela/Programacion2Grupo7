import Gestor from "./gestor"
import Vehiculo from "./vehiculos/Vehiculo"

export default class Cliente {
 private nombre:string
 private apellido:string
 private AutoAlquilado:Vehiculo
 private inicioAlquiler:Date
 private finAlquiler:Date
 private tarifaFinal:number

 constructor(){
  this.nombre=""
  this.apellido=""
  this.AutoAlquilado=undefined as unknown as Vehiculo
  this.inicioAlquiler=undefined as unknown as Date
  this.finAlquiler=undefined as unknown as Date
  this.tarifaFinal=0
 }


 public setNombre(nombre:string){
  this.nombre=nombre
 }

 public GetNombre():string{
  return this.nombre
 }


 
 public setApellido(apellido:string){
  this.apellido=apellido
 }

 public GetApellido():string{
  return this.apellido
 }

 
 public setAuto(Auto:Vehiculo){
  this.AutoAlquilado=Auto
 }

 public GetAuto():Vehiculo{
  return this.AutoAlquilado
 }
 
 public setInicioAlquiler(fecha:Date){
  this.inicioAlquiler=fecha
 }

 public GetInicioAlquiler():Date{
  return this.inicioAlquiler
 }
 
 public setFinAlquiler(Fecha:Date){
  this.finAlquiler=Fecha
 }

 public GetFinAlquiler():Date{
  return this.finAlquiler
 }

 
  public setTarifaFinal(tarifa:number){
  this.tarifaFinal=tarifa
 }

 public GetTarifaFinal():number{
  return this.tarifaFinal
 }


 public RealizarReserva(gestor:Gestor){
    gestor.GestionarReserva
 }

 public CalcularTarifaFinal(gestor:Gestor){
    gestor.GestionarTarifa
 }

}