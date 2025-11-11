import Reserva from "../reserva";

import Kilometraje from "../gestiones/gestionKilometraje";
import Estado from "../estados/estado";


export default abstract class Vehiculo {
  private patente: string;
  private estado: Estado;
  private kilometrosRecorridos: number;
  protected resevas: Reserva;
  protected TarifaDiaria:number
  private vecesAlquilado:number
  private KmSinMantenimiento:number
  private MesesSinMantenimiento:number
  private costoMantenimiento:number
  private GananciasTotales:number

  constructor(patente?: string, estado?: Estado,) {
    this.patente = patente ?? "";
    this.estado = undefined as unknown as Estado;
    this.kilometrosRecorridos = 0;
    this.resevas = undefined as unknown as Reserva;
    this.TarifaDiaria=0
    this.vecesAlquilado=0
    this.KmSinMantenimiento=0
    this.MesesSinMantenimiento=0
    this.costoMantenimiento=0
    this.GananciasTotales=0
  }

  public getTarifaDiaria():number{
    return this.TarifaDiaria
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


  public cambiarEstado(estado:Estado){
    this.estado=estado
  }

  public agregarReserva(reserva: Reserva): void {
    this.resevas=reserva
  }

  public mostrarInfo(): string {
    return `El auto con Patente: ${this.patente}, Estado: ${[this.estado]}, Kilometraje: ${this.kilometrosRecorridos} km`;
  }

  public abstract calcularPago(kilometraje: Kilometraje,reserva:Reserva): number

  public VerificarEstado():boolean{
     return this.estado.alquilar()
  }

 public setVecesAlquilado(A:number){
   this.vecesAlquilado+=A
 }

 public SetKmSinMantenimiento(Km:number){
   this.KmSinMantenimiento+=Km
    if(this.KmSinMantenimiento >= 12000 && Km=== 0){
      this.KmSinMantenimiento=Km
    }
 }

 public SetMesesSinMantenimiento(meses:number){
   this.MesesSinMantenimiento=meses
 }

  public GeTMesesSinMantenimiento():number{
    return  this.MesesSinMantenimiento
 }

 public SetCostoMantenimiento(costo:number){
   this.costoMantenimiento=costo
 }

 public getCostoMantenimiento():number{
   return this.costoMantenimiento
 }
 public getKmSinMantenimiento():number{
   return this.MesesSinMantenimiento
 }

 public GetVecesAlquilado(){
  return this.vecesAlquilado
 }

 public SetGanaciasTotales(ganacias:number){
   this.GananciasTotales+=ganacias
 }

 public GetGanaciasTotales():number{
  return this.GananciasTotales
 }
}