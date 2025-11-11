import Cliente from "./cliente";
import Temporadas from "./temporadas/temporadas";
import Vehiculo from "./vehiculos/Vehiculo";

export default class Reserva {
    private fechaInicio: Date;
    private fechaFin: Date;
    private cliente: Cliente;
    private vehiculo: Vehiculo
    private temporada: Temporadas;

    constructor(fechaInicio: Date, fechaFin: Date, cliente: Cliente) {
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.cliente = cliente;
        this.vehiculo = undefined as unknown as Vehiculo
        this.temporada = undefined as unknown as Temporadas
    }

    public getFechaInicio(): Date {
        return this.fechaInicio;
    }

    public getFechaFin(): Date {
        return this.fechaFin;
    }

    public getCliente(): Cliente {
        return this.cliente;
    }

    public setVehiculo(vehiculo: Vehiculo) {
        this.vehiculo = vehiculo
    }

    public getVehiculo(): Vehiculo {
        return this.vehiculo
    }

    public setTemporada(temporada: Temporadas) {
        this.temporada = temporada
    }

    public porcentajePorTemporada(vehiculo: Vehiculo): number {
        return this.temporada.porcentajePorTemporada(vehiculo)
    }
}