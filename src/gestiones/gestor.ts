import kilometraje from "./gestionKilometraje";
import GestionReserva from "./gestionReserva";
import tarifa from "./gestionTarifa";
import Vehiculo from "../vehiculos/Vehiculo";
import Cliente from "../cliente";
import Reserva from "../reserva";
import Flota from "../flota";
import Clientela from "../consumidor";

export default class Gestor {
  private GestionarReserva:GestionReserva
  private GestionarKilometraje:kilometraje
  private GestionarTarifa:tarifa


  constructor(flota:Flota,clientes:Clientela){
  
    this.GestionarKilometraje= new kilometraje()
    this.GestionarReserva= new GestionReserva(flota,clientes)
    this.GestionarTarifa= new tarifa()
  }
 /**
  * 
  * @param cliente 
  * @param vehiculo
  * recibe el cliente y el vehiculo que quiere alquilar para crear una reserva 
  */
 public Reserva(cliente:Cliente,vehiculo:Vehiculo){
    this.GestionarReserva.RealizarReserva(cliente,vehiculo)
 }
/**
 * 
 * @param vehiculo
 * recibe el vehiculo alquilado para luego calcular si hubo exceso de kilometros 
 */
 public Kilometraje(vehiculo:Vehiculo,reserva:Reserva){
    this.GestionarKilometraje.gestionarKilometrajeExtra(vehiculo,reserva)
 }
/**
 * 
 * @param vehiculo 
 * recibe el vehiculo alquilado y calcula su tarifa total
 */
 public Tarifa(vehiculo:Vehiculo,reserva:Reserva){
   this.GestionarTarifa.gestionar(vehiculo,this.GestionarKilometraje,reserva)
 }
}