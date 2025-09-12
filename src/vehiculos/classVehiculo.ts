export default abstract class Vehiculo{
  private _matricula: string;
  private _estado: string;
  private _tarifa: number;
  private _disponibilidad: boolean;
  private _kilometrosRecorridos: number;
  private _cargo: number;

 constructor(){
  this._kilometrosRecorridos=0
  this._cargo=0
  this._matricula=""
  this._estado=""
  this._tarifa=0
  this._disponibilidad=true

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

  public setDisponibilidad(disponibilidad: boolean): void{
    this._disponibilidad = disponibilidad;
  }

  public getDisponibilidad(): boolean{
    return this._disponibilidad;
  }

  public setKilcargocorridos(kilometrosRecorridos: number): void{
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