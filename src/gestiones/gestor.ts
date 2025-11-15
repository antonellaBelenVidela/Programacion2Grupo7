import kilometraje from "./gestionKilometraje";
import GestionReserva from "./gestionReserva";
import tarifa from "./gestionTarifa";
import Vehiculo from "../vehiculos/vehiculo";
import Cliente from "../cliente";
import Reserva from "../reserva";
import Flota from "../flota";
import temporadas from "../temporadas/temporadas";
import Consumidor from "../consumidor";
/**
 * esta clase sirve para llamar a los otros gestores para que realicen sus tareas
 */
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
  * @param cliente el cliente que quiere reservar un vehiculo
  * @param vehiculo el vehiculo que quiere reservar el cliente
  * @param temporada la temporada en la que se realiza la reserva
  * recibe el cliente y el vehiculo que quiere alquilar para crear una reserva 
  */
 public Reserva(cliente:Cliente,vehiculo:Vehiculo,temporada:temporadas){
    this.GestionarReserva.realizarReserva(cliente,vehiculo,temporada)
 }
/**
 * 
 * @param vehiculo el vehiculo que se le quiere calcular los kilometros que hizo
 * @param reserva la reserva en la que se encuentra el vehiculo
 * recibe el vehiculo alquilado para luego calcular si hubo exceso de kilometros 
 */
 public Kilometraje(vehiculo:Vehiculo,reserva:Reserva){
    this.GestionarKilometraje.gestionarKilometrajeExtra(vehiculo,reserva)
 }
/**
 * 
 * @param vehiculo recibe el vehiculo que se le quiere calcular la tarifa
 * @param reserva recibe la reserva en la que se encuentra el vehiculo
 * @param kilometros los kilometros que hizo el vehiculo durante su reserva
 * recibe el vehiculo alquilado y calcula su tarifa total
 */
 public Tarifa(vehiculo:Vehiculo,reserva:Reserva,kilometros:number[]){
   this.GestionarKilometraje.setKilometrosRecorridosPorDia(kilometros,vehiculo)
   this.GestionarTarifa.gestionarTarifa(vehiculo,this.GestionarKilometraje,reserva)
 }
 /**
  * 
  * @param fecha la fecha que quiere comparar
  * @param Reserva la reserva que se quiere verificar si llego a su fecha final
  * esta funcion se encarga de verificar si la fecha llego a su fecha final
  */
 public TerminarReserva(fecha:Date,Reserva:Reserva):void{
   this.GestionarReserva.terminarReserva(fecha,Reserva)
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