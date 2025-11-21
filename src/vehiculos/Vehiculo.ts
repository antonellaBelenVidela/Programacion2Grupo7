import Reserva from "../reserva";

import Kilometraje from "../gestiones/gestionKilometraje";
import Estado from "../estados/estado";
import Disponible from "../estados/disponible";
import Mantenimiento from "../mantenimiento";
/**
 * esta clase abstracta es la base donde los demas autos heredan sus atributos
 */
export default abstract class Vehiculo {
  private patente: string;
  private estado: Estado;
  private kilometrosRecorridos: number;
  protected resevas: Reserva;
  protected tarifaDiaria:number
  private vecesAlquilado:number
  private kmSinMantenimiento:number
  private mesesSinMantenimiento:number
  private costoMantenimiento:number
  private gananciasTotales:number

  constructor(patente?: string) {
    this.patente = patente ?? "";
    this.estado = new Disponible(this);
    this.kilometrosRecorridos = 0;
    this.resevas = undefined as unknown as Reserva;
    this.tarifaDiaria=0
    this.vecesAlquilado=0
    this.kmSinMantenimiento=0
    this.mesesSinMantenimiento=0
    this.costoMantenimiento=0
    this.gananciasTotales=0
  }

  public getTarifaDiaria():number{
    return this.tarifaDiaria
  }

  // hace falta? si la patente no va a cambiar!
  public setPatente(matricula: string): void {
    this.patente = matricula;
  }

  public getPatente(): string {
    return this.patente;
  }

  public setEstado(estado: Estado): void {
    this.estado = estado;
  }

  public getEstado(): Estado {
    return this.estado;
  }

  public setKilometrosRecorridos(kilometrosRecorridos: number): void {
    this.kilometrosRecorridos = kilometrosRecorridos;
  }

  public getKilometrosRecorridos(): number {
    return this.kilometrosRecorridos;
  }

 /**
  * 
  * @param estado el estado al que el vehiculo va a cambiar
  */
  public cambiarEstado(estado:Estado):void{
    this.estado=estado
  }

  public agregarReserva(reserva: Reserva): void {
    this.resevas=reserva
  }

  public mostrarInfo(): string {
    return `El auto con Patente: ${this.patente}, Estado: ${[this.estado]}, Kilometraje: ${this.kilometrosRecorridos} km`;
  }

  public abstract calcularPago(kilometraje: Kilometraje,reserva:Reserva): number

 

 public setVecesAlquilado(A:number){
   this.vecesAlquilado+=A
 }

 public setKmSinMantenimiento(Km:number){
   this.kmSinMantenimiento+=Km
    if(Km=== 0){
      this.kmSinMantenimiento=Km
    }
 }

 public setMesesSinMantenimiento(meses:number){
   this.mesesSinMantenimiento=meses
 }

  public geTMesesSinMantenimiento():number{
    return  this.mesesSinMantenimiento
 }

 public setCostoMantenimiento(costo:number){
   this.costoMantenimiento=costo
 }

 public getCostoMantenimiento():number{
   return this.costoMantenimiento
 }
 public getKmSinMantenimiento():number{
   return this.mesesSinMantenimiento
 }

 public GetVecesAlquilado(){
  return this.vecesAlquilado
 }

 public SetGanaciasTotales(ganacias:number){
   this.gananciasTotales+=ganacias
 }

 public GetGanaciasTotales():number{
  return this.gananciasTotales - this.costoMantenimiento
 }

 public GetReserva():Reserva{
  return this.resevas
 }

 
 public Alquilar():void{
    this.estado.alquilar()
 }

  public TerminarReserva():void{
    this.estado.TerminarReserva()
  }

  public PonerEnMantenimiento(mantenimiento:Mantenimiento):void{
    this.estado.mantenimiento(mantenimiento)
  }

 public TerminarMantenimiento():void{
   this.estado.TerminarMantenimiento()
 }

}