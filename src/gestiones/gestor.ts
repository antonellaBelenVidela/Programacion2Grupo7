import kilometraje from "./gestionKilometraje";
import GestionReserva from "./gestionReserva";
import tarifa from "./gestionTarifa";
import Vehiculo from "../vehiculos/Vehiculo";
import Cliente from "../cliente";
import Reserva from "../reserva";
import Flota from "../flota";
import Clientela from "../clientela";

export default class Gestor {
  private vehiculo: Vehiculo;
  private cliente: Cliente;
  private reserva: Reserva;
  private GestionarReserva:GestionReserva
  private GestionarKilometraje:kilometraje
  private GestionarTarifa:tarifa


  constructor(flota:Flota,clientes:Clientela){
    this.vehiculo= undefined as unknown as Vehiculo;
    this.cliente= undefined as unknown as Cliente;
    this.reserva= undefined as unknown as Reserva;
    this.GestionarKilometraje= new kilometraje()
    this.GestionarReserva= new GestionReserva(flota,clientes)
    this.GestionarTarifa= new tarifa()
  }

 public Reserva(cliente:Cliente,vehiculo:Vehiculo){
  let fechainicio=cliente.getFechaInico()
  let fechaFin=cliente.getFechaFinal()
  let patente=vehiculo.getPatente()
  let alquilador=cliente.getId()
  this.GestionarReserva.Gestionar(patente,alquilador,fechainicio,fechaFin)
 }

 public Kilometraje(vehiculo:Vehiculo){
    this.GestionarKilometraje.gestionar(vehiculo)
 }

 public Tarifa(){
   this.GestionarTarifa.gestionar()
 }
}