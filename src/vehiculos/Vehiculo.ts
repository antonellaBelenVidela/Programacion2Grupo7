import Reserva from "../reserva";

export default abstract class Vehiculo{
  private _patente: string;
  private _estado: string;
  private _resevas: Reserva[];
  private _tarifa: number;
  private _disponibilidad: string;
  private _kilometrosRecorridos: number;
  private _cargo: number;

  constructor(patente: string, estado: string, tarifa: number, disponibilidad: string, kilometrosRecorridos: number, cargo: number){
    this._patente = patente;
    this._estado = estado;
    this._resevas = [];
    this._tarifa = tarifa;
    this._disponibilidad = disponibilidad;
    this._kilometrosRecorridos = kilometrosRecorridos;
    this._cargo = cargo;
  }

  public setPatente(matricula: string): void{
    this._patente = matricula;
  }

  public getPatente(): string{
    return this._patente;
  }

  public setEstado(estado: string): void{
    this._estado = estado;
  }

  public getEstado(): string{
    return this._estado;
  }

  public setTarifa(tarifa: number): void{
    this._tarifa = tarifa;
  }

  public getTarifa(): number{
    return this._tarifa;
  }

  public setDisponibilidad(disponibilidad: string): void{
    this._disponibilidad = disponibilidad;
  }

  public getDisponibilidad(): string{
    return this._disponibilidad;
  }

  public setKilometrosRecorridos(kilometrosRecorridos: number): void{
    this._kilometrosRecorridos = kilometrosRecorridos;
  }

  public getKilometrosRecorridos(): number{
    return this._kilometrosRecorridos;
  }

  public setCargo(cargo: number): void{
    this._cargo = cargo;
  }

  public getCargo(): number{
    return this._cargo;
  }

  public mostrarAtributos(){
    console.log(`\nPatente: ${this._patente}`);
    console.log(`Estado: ${this._estado}`);
    console.log(`Tarifa: ${this._tarifa}`);
    console.log(`Disponibilidad: ${this._disponibilidad}`);
    console.log(`Kilometros Recorridos: ${this._kilometrosRecorridos}`);
    console.log(`Cargo: ${this._cargo}`);
  }

  public estaDisponible(fechaInicio:Date,fechaFin : Date):boolean{
    if(this._estado !== "disponible"){
      return false;
    }
    for(const _reservas of this._resevas){
      if ((fechaInicio >= _reservas.getFechaInicio() && fechaInicio < _reservas.getFechaFin()) ||
        (fechaFin > _reservas.getFechaInicio() && fechaFin <= _reservas.getFechaFin()) ||
        (fechaInicio <= _reservas.getFechaInicio() && fechaFin >= _reservas.getFechaFin())) {
        return false;
      }
    }
    return true;
  }

  public agregarReserva(reserva: Reserva): void {
        this._resevas.push(reserva);
    }

}