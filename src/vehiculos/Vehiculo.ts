export default abstract class Vehiculo{
  private _patente: string;
  private _estado: string;
  private _tarifa: number;
  private _disponibilidad: string;
  private _kilometrosRecorridos: number;
  private _cargo: number;

  constructor(patente: string, estado: string, tarifa: number, disponibilidad: string, kilometrosRecorridos: number, cargo: number){
    this._patente = patente;
    this._estado = estado;
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

  public geEstado(): string{
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
}