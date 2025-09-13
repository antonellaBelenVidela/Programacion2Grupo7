import Reserva from "../reserva";

export default  class Vehiculo{
  private _matricula: string;
  private _estado: string;
  private _tarifa: number;
  private _reservas : Reserva[]
  private _kilometrosRecorridos: number;
  private _cargo: number;

  constructor(matricula: string, estado: string, tarifa: number) {
        this._matricula = matricula;
        this._estado = estado;
        this._tarifa = tarifa;
        this._reservas = []; // Una nueva instancia de vehículo siempre tiene 0 reservas.
        this._kilometrosRecorridos = 0; // Un nuevo vehículo siempre empieza con 0 km recorridos.
        this._cargo = 0; // Un nuevo vehículo siempre empieza sin cargo.
    }

  public setMatriculta(matricula: string): void{
    this._matricula = matricula;
  }

  public getMatricula(): string{
    return this._matricula;
  }

  public setEstado(estado: string): void{
    this._estado = estado;
  }

  public geEstado(): string{
    return this._estado;
  }

  public setTarifa(tarifa: number): void{
    this._tarifa = tarifa;
  }

  public getTarifa(): number{
    return this._tarifa;
  }

  /*public setDisponibilidad(disponibilidad: string): void{
    this._disponibilidad = disponibilidad;
  }*/

  /*public getDisponibilidad(): string{
    return this._disponibilidad;
  }*/
 public estaDisponible(fechaInicio:Date,fechaFin : Date):boolean{
  if(this._estado !== "disponible"){
    return false;
  }
  for(const _reservas of this._reservas){
     if ((fechaInicio >= _reservas.fechaInicio && fechaInicio < _reservas.fechaFin) ||
                (fechaFin > _reservas.fechaInicio && fechaFin <= _reservas.fechaFin) ||
                (fechaInicio <= _reservas.fechaInicio && fechaFin >= _reservas.fechaFin)) {
                return false;
            }
  }
  return true;
 }

  public agregarReserva(reserva: Reserva): void {
        this._reservas.push(reserva);
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
}