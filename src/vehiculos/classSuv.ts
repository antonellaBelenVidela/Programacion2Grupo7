import Vehiculo from "./classVehiculo";

export default class Suv extends Vehiculo{
  private _cargoFijoAdicional: number;

  public setCargoFijoAdicional(cargoFijoAdicional: number): void{
    this._cargoFijoAdicional = cargoFijoAdicional;
  }

  public geCargoFijoAdicional(): number{
    return this._cargoFijoAdicional;
  }
}