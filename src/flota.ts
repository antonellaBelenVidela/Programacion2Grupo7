import { Estado } from "./estado";
import Vehiculo from "./vehiculos/vehiculo";
// import {Estado} from "../estado";

export default class Flota {

    private _flota: Map<string, Vehiculo>;

    constructor() {
        this._flota = new Map<string, Vehiculo>();
    }

    /**
     * 
     * @param patente 
     * @param vehiculo
     * se encarga de agregar un vehiculo a la flota 
     */
    public agregarVehiculo(patente: string, vehiculo: Vehiculo): void {
        const patenteNormalizada = patente.trim().toUpperCase();
        this._flota.set(patenteNormalizada, vehiculo);
    }

    public buscarVehiculo(patente: string): boolean {
        const patenteNormalizada = patente.trim().toUpperCase();
        return this._flota.has(patenteNormalizada);
    }

    public obtenerVehiculo(patente: string): Vehiculo | undefined {
        return this._flota.get(patente);
    }
  /**
   * 
   * @param patente 
   * @param fechaInicio 
   * @param fechaFin 
   * @returns devuelve si el vehiculo esta disponible para una reserva o no
   */
    public obtenerDisponibilidad(patente: string, fechaInicio?: Date, fechaFin?: Date): boolean {
        const vehiculo = this.obtenerVehiculo(patente);
        if (!vehiculo) {
            console.log(`Vehículo con patente ${patente} no encontrado`);
            return false;
        }
        if (fechaInicio && fechaFin) {
            return vehiculo.estaDisponible(fechaInicio, fechaFin);
        } else {
            // Si no pasamos fechas, consideramos solo el estado
            return vehiculo.getEstado() === Estado.DISPONIBLE;
        }
    }

    public obtenerEstado(patente: string): Estado | undefined  {
        const vehiculo = this.obtenerVehiculo(patente);
        return vehiculo?.getEstado();
    }

    public mostrarFlota(): void {
        for (const patente of this._flota.keys()) {
            const auto = this._flota.get(patente)
            auto?.mostrarAtributos();   // El '?' significa que primero verifica si es null o undefinded, en caso que lo sea devuelve eso, sino continua con el metodo
        }
    }
}