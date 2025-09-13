import Flota from "./flota";
import kilometraje from "./gestionarKilometraje";
import Reserva from "./gestionarReserva";
import tarifa from "./gestionTarifa";

export default class Gestor {
  private flota:Flota
 


  constructor(){
    this.flota=undefined as unknown as Flota
  }

 public GestionarReserva(Reserva:Reserva){
    Reserva.gestionar()
 }

 public GestionarKilometraje(kilometraje:kilometraje){
    kilometraje.gestionar()
 }

 public GestionarTarifa(tarifa:tarifa){
    tarifa.gestionar()
 }
}