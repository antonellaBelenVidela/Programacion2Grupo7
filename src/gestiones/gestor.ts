import Kilometraje from "./gestionKilometraje";
import GestionReserva from "./gestionReserva";
import Tarifa from "./gestionTarifa";
import Vehiculo from "../vehiculos/vehiculo";
import Cliente from "../cliente";
import Reserva from "../reserva";
import Flota from "../flota";
import Clientela from "../clientela";
import Sedan from "../vehiculos/sedan";

export default class Gestor {
  private vehiculo: Vehiculo;
  private cliente: Cliente;
  private reserva: Reserva;
  private GestionarReserva:GestionReserva
  private GestionarKilometraje:Kilometraje
  private GestionarTarifa:Tarifa


  constructor(flota:Flota,clientes:Clientela){
    this.vehiculo= undefined as unknown as Vehiculo;
    this.cliente= undefined as unknown as Cliente;
    this.reserva= undefined as unknown as Reserva;
    this.GestionarKilometraje= new Kilometraje()
    this.GestionarReserva= new GestionReserva(flota,clientes)
    this.GestionarTarifa= new Tarifa()
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

 public Tarifa(vehiculo: Vehiculo){
   this.GestionarTarifa.gestionar(vehiculo, this.GestionarKilometraje);
 }
}