import { Vehiculo } from "./Vehiculos/vehiculo"

export default class Cliente {

    private _nombre:string
    private _mail:string
    private _vehiculo:Vehiculo

    constructor() {
        this._nombre=""
        this._mail=""
        this._vehiculo= undefined as unknown as Vehiculo
    }

 public setNombre(nombre:string){
    this._nombre=nombre
 }

 public GetNombre():string{
    return this._nombre
 }

 public SetMail(mail:string){
    this._mail= mail
 }

 public GetMail():string{
    return this._mail
 }

 


}