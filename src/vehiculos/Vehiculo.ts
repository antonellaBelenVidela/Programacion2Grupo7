import Reserva from "../reserva";
import { Estado } from "../estado";

export default abstract class Vehiculo {
  private _patente: string;
  private _estado: Estado;
  private _kilometrosRecorridos: number;
  private kilometrosRecorridosPorDias:number[]
  private _resevas: Reserva[];
  protected LimiteKilometros:number


  constructor(patente?: string, estado?: Estado, kilometrosRecorridos: number = 0) {
    this._patente = patente ?? "";
    this._estado = estado ?? Estado.DISPONIBLE;
    this._kilometrosRecorridos = kilometrosRecorridos;
    this._resevas = [];
    this.kilometrosRecorridosPorDias=[]
    this.LimiteKilometros=0
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

  public mostrarAtributos() {
    console.log(`\nPatente: ${this._patente}`);
    console.log(`Estado: ${this._estado}`);
    //console.log(`Tarifa: ${this._tarifa}`);
    console.log(`Kilometros Recorridos: ${this._kilometrosRecorridos}`);
    //console.log(`Cargo: ${this._cargo}`);
  }

  public estaDisponible(fechaInicio: Date, fechaFin: Date): boolean {
    if (this._estado !== Estado.DISPONIBLE) {
      return false;
    }
    for (const _reservas of this._resevas) {
      if ((fechaInicio >= _reservas.getFechaInicio() && fechaInicio < _reservas.getFechaFin()) ||
        (fechaFin >= _reservas.getFechaInicio() && fechaFin <= _reservas.getFechaFin()) ||
        (fechaInicio <= _reservas.getFechaInicio() && fechaFin >= _reservas.getFechaFin())) {
        return false;
      }
    }
    return true;
  }

  public agregarReserva(reserva: Reserva): void {
    this._resevas.push(reserva);
  }

  public mostrarInfo(): string {
    return `El auto con Patente: ${this._patente}, Estado: ${Estado[this._estado]}, Kilometraje: ${this._kilometrosRecorridos} km`;
  }

  public SetKilometrosRecorridosPorDia(kilometros:number[]){
     let A= kilometros.length

     for(let i=0;i<A;i++){
       this.kilometrosRecorridosPorDias.push(kilometros[i])
     }
  }
  
  public getKilometrosRecorridosPordias():number[]{
    return this.kilometrosRecorridosPorDias
  }

  public GetLimitekilometros():number{
    return this.LimiteKilometros
  }
}