import Gestor from "./gestor";
import { Vehiculo } from "../Vehiculos/vehiculo";

export default class GestionarReserva implements Gestor{
   private _fechaInicio:Date
   private _fechaFin:Date

   constructor() {
     
   }

  public gestionar() {
      
  }

  public ValidarDisponibilidad():void{}

  public CalcularDiasDeUso():void{}

  public AlquilarVehiculo(vehiculo:Vehiculo[]):void{}

  public SetFechaInicio(fecha:Date){
    this._fechaInicio=fecha
  }

 public GetFechaInicio():Date{
    return this._fechaInicio
 }



 public SetFechaFin(fecha:Date){
    this._fechaFin=fecha
  }

 public GetFechaFin():Date{
    return this._fechaFin
 }



}