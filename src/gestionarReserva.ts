import Gestor from "./gestor";
import { Vehiculo } from "./vehiculo";

export default class GestionarReserva implements Gestor{
   private fechaInicio:Date
   private fechaFin:Date

   constructor() {
     
   }

  public gestionar() {
      
  }

  public ValidarDisponibilidad():void{}

  public CalcularDiasDeUso():void{}

  public AlquilarVehiculo(vehiculo:Vehiculo[]):void{}

  public SetFechaInicio(fecha:Date){
    this.fechaInicio=fecha
  }

 public GetFechaInicio():Date{
    return this.fechaInicio
 }



 public SetFechaFin(fecha:Date){
    this.fechaFin=fecha
  }

 public GetFechaFin():Date{
    return this.fechaFin
 }



}