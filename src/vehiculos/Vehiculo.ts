import Reserva from "../reserva";

import Kilometraje from "../gestiones/gestionKilometraje";
import Estado from "../estados/estado";


export default abstract class Vehiculo {
  private _patente: string;
  private _estado: Estado;
  private _kilometrosRecorridos: number;
  protected _resevas: Reserva;
  protected TarifaDiaria:number
  private vecesAlquilado:number
  private KmSinMantenimiento:number
  private MesesSinMantenimiento:number
  private costoMantenimiento:number

  constructor(patente?: string, estado?: Estado,) {
    this._patente = patente ?? "";
    this._estado = undefined as unknown as Estado;
    this._kilometrosRecorridos = 0;
    this._resevas = undefined as unknown as Reserva;
    this.TarifaDiaria=0
    this.vecesAlquilado=0
    this.KmSinMantenimiento=0
    this.MesesSinMantenimiento=0
    this.costoMantenimiento=0
  }

  public getTarifaDiaria():number{
    return this.TarifaDiaria
  }

  // hace falta? si la patente no va a cambiar!
  public setPatente(matricula: string): void {
    this._patente = matricula;
  }

  public getPatente(): string {
    return this._patente;
  }

  public setEstado(estado: Estado): void {
    this._estado = estado;
  }

  public getEstado(): Estado {
    return this._estado;
  }

  public setKilometrosRecorridos(kilometrosRecorridos: number): void {
    this._kilometrosRecorridos = kilometrosRecorridos;
  }

  public getKilometrosRecorridos(): number {
    return this._kilometrosRecorridos;
  }


  public cambiarEstado(estado:Estado){
    this._estado=estado
  }

  public agregarReserva(reserva: Reserva): void {
    this._resevas=reserva
  }

  public mostrarInfo(): string {
    return `El auto con Patente: ${this._patente}, Estado: ${[this._estado]}, Kilometraje: ${this._kilometrosRecorridos} km`;
  }

  public abstract calcularPago(kilometraje: Kilometraje,reserva:Reserva): number

  public VerificarEstado():boolean{
     return this._estado.alquilar()
  }

 public setVecesAlquilado(A:number){
   this.vecesAlquilado+=A
 }

 public SetKmSinMantenimiento(Km:number){
   this.KmSinMantenimiento+=Km
 }

 public SetMesesSinMantenimiento(dias:number){
   this.MesesSinMantenimiento+=dias
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
}