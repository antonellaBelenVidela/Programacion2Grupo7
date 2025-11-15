import kilometraje from "./gestionKilometraje";
import GestionReserva from "./gestionReserva";
import tarifa from "./gestionTarifa";
import Vehiculo from "../vehiculos/vehiculo";
import Cliente from "../cliente";
import Reserva from "../reserva";
import Flota from "../flota";
import temporadas from "../temporadas/temporadas";
import Consumidor from "../consumidor";

export default class Gestor {
  private GestionarReserva:GestionReserva
  private GestionarKilometraje:kilometraje
  private GestionarTarifa:tarifa


  constructor(flota:Flota,clientes:Consumidor){
  
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
 public Reserva(cliente:Cliente,vehiculo:Vehiculo,temporada:temporadas){
    this.GestionarReserva.RealizarReserva(cliente,vehiculo,temporada)
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
   this.GestionarTarifa.gestionarTarifa(vehiculo,this.GestionarKilometraje,reserva)
 }

 public GetKilometraje():kilometraje{
  return this.GestionarKilometraje
 }
 
 public GetTarifa():tarifa{
   return this.GestionarTarifa
 }

 public GetReserva():GestionReserva{
  return this.GestionarReserva
 }
}