import Kilometraje from "../gestiones/gestionKilometraje";
import Reserva from "../reserva";
import Vehiculo from "./Vehiculo";
/**
 * esta clase representa a un vehiculo de tipo sedan siendo uno de los tipos de autos que posee el local
 * 
 * la clase sedan extiende de la clase {@link Vehiculo} implementando la logica de pago segun su tarifa diaria
 * 
 */
export default class Sedan extends Vehiculo {

    constructor() {
        super()
        this.tarifaDiaria = 50

    }
    /**
     * 
     * @param kilometraje recibe la clase kilometraje 
     * @returns devuelve la cantidad que debe en cuestion 
     */
    public calcularPago(kilometraje: Kilometraje, reserva: Reserva): number {
        let kilometros = kilometraje.getKilometrosRecorridosPordia()

        let diasRentado = kilometros.length
        let pagototal = 0
        for (let i = 0; i < diasRentado; i++) {
            pagototal += (kilometros[i] * 0.25)
            pagototal += this.getTarifaDiaria() + reserva.porcentajePorTemporada(this)
        }
        return pagototal
    }

}
