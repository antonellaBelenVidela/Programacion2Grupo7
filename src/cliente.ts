import GestionarReserva from "./gestionarReserva"
import { Vehiculo } from "./vehiculo"

export default class Cliente {
//usar mail para crear un mapa como clave valor 
    private nombre:string
    private Mail:string
    private vehiculo:Vehiculo

    constructor() {
        this.nombre=""
        this.Mail=""
        this.vehiculo= undefined as unknown as Vehiculo
    }

 public setNombre(nombre:string){
    this.nombre=nombre
 }

 public GetNombre():string{
    return this.nombre
 }

 public SetMail(Mail:string){
    this.Mail=Mail
 }

 public GetMail():string{
    return this.Mail
 }

 public RealizarReserva(GestionarReserva:GestionarReserva){
 
 }
 


}