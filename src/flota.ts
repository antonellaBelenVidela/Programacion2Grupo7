import estadistica from "./estadistica";
import Vehiculo from "./vehiculos/Vehiculo";
// import {Estado} from "../estado";

export default class Flota {

    private autos: Map<string, Vehiculo>;
    private estadistica:estadistica

    constructor(Autos:Map<string,Vehiculo>) {
        this.autos = Autos;
        this.estadistica= new estadistica(this)
    }

    /**
     * 
     * @param patente 
     * @param vehiculo
     * se encarga de agregar un vehiculo a la flota 
     */
    public agregarVehiculo(patente: string, vehiculo: Vehiculo): void {
        const patenteNormalizada = patente.trim().toUpperCase();
        this.autos.set(patenteNormalizada, vehiculo);
    }

    public buscarVehiculo(patente: string): boolean {
        const patenteNormalizada = patente.trim().toUpperCase();
        return this.autos.has(patenteNormalizada);
    }

    public obtenerVehiculo(patente: string): Vehiculo | undefined {
        return this.autos.get(patente);
    }
  /*
    public mostrarFlota(): void {
        for (const patente of this._flota.keys()) {
            const auto = this._flota.get(patente)
            auto?.mostrarAtributos();   // El '?' significa que primero verifica si es null o undefinded, en caso que lo sea devuelve eso, sino continua con el metodo
        }
    } */
  
 public getFlota():Map<string,Vehiculo>{
    return this.autos
 }
 /**
  * Se encarga de hacer la estadisticas de la flota
  */
 public RealizarEstadisticas():void{
    console.log("El auto mas rentado fue:",this.estadistica.autoMasAlquilado())
    console.log("El auto menos rentado fue:",this.estadistica.autoMenosAlquilado())
    console.log("El auto que mas rentable fue:",this.estadistica.AutoMasRentable())
    console.log("El auto que fue menos rentable fue:",this.estadistica.AutoMenosRentable())
    console.log("la taza de autos en alquiler es:",this.estadistica.OcupacionFlota())
 }
}