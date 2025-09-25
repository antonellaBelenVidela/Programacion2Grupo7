import Vehiculo from "./Vehiculo";
import { Estado } from '../estado';
export default class Sedan extends Vehiculo {

    private _tarifaBase: number = 50; // tarifa base por día 50$
    private _cargoPorKm: number = 0.20; // A ESO LO VOY A MULT POR LA CANT DE KM Q ME PASEN POR MARAMETRO

    constructor(_patente: string,
        _estado: Estado = Estado.DISPONIBLE,
        _kilometrosRecorridos: number = 0) {
        super(_patente, _estado, _kilometrosRecorridos);
    }

    public calcularTarifa(_kilometrosRecorridos: number, dias: number): number {
        return (this._tarifaBase * dias) + (this._cargoPorKm * _kilometrosRecorridos);
    }

    //sobreescribo el mostrar info de vehiculo y agrego lo específico de Sedan
    public mostrarInfo(): string {
        return super.mostrarInfo() + `, Tarifa base: $${this._tarifaBase}/día, Cargo por km: $${this._cargoPorKm}`;
    }

    // por que sale 2 por pantalla en el estado? averifuar
}
