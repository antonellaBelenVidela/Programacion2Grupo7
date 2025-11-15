import Kilometraje from "../gestiones/gestionKilometraje";
import Reserva from "../reserva";
import Vehiculo from "./vehiculo";
export default class Sedan extends Vehiculo {

    constructor() {
        super()
        this.tarifaDiaria = 50
    }
    /**
     * 
     * @param kilometraje recibe la clase kilometraje  y la clase reserva
     * @returns devuelve la cantidad que debe abonar por el alquiler del sedan 
     */
    public calcularPago(kilometraje: Kilometraje, reserva: Reserva): number {
        let kilometros = kilometraje.getKilometrosRecorridosPordia()

        if (kilometros.length === 0) return 0;
        let diasRentado = kilometros.length
        let pagototal = 0
        for (let i = 0; i < diasRentado; i++) {
            pagototal += (kilometros[i] * 0.25)
            pagototal += this.getTarifaDiaria() + reserva.porcentajePorTemporada(this)
        }
        return pagototal
    }

}
