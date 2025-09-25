import kilometraje from "./gestionKilometraje";
import GestionReserva from "./gestionReserva";
import tarifa from "./gestionTarifa";
import Vehiculo from "../vehiculos/Vehiculo";
import Cliente from "../cliente";
import Reserva from "../reserva";

export default class Gestor {
  private vehiculo: Vehiculo;
  private cliente: Cliente;
  private reserva: Reserva;
 
  constructor(){
    this.vehiculo= undefined as unknown as Vehiculo;
    this.cliente= undefined as unknown as Cliente;
    this.reserva= undefined as unknown as Reserva;
  }

 public GestionarReserva(Reserva:GestionReserva){
    Reserva.Gestionar(this.vehiculo.getPatente(),this.cliente.getId(),this.reserva.getFechaInicio(),this.reserva.getFechaFin());
 }

 public GestionarKilometraje(kilometraje:kilometraje){
    kilometraje.gestionar()
 }

 public GestionarTarifa(tarifa:tarifa){
    tarifa.gestionar()
 }
}