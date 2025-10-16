import Vehiculo from "../vehiculos/vehiculo";
import Kilometraje from "./gestionKilometraje";
import IGestorGeneral from "./gestorGeneral";

export default class GestionTarifa implements IGestorGeneral {

    Gestionar(matricula: string, idCliente: string, fechaInicio: Date, fechaFin: Date): boolean {
        throw new Error("Gestión general de tarifa no implementada aún");
    }

    public gestionar(vehiculo: Vehiculo, kilometraje: Kilometraje): number {
        return vehiculo.calcularPago(kilometraje) //ok
    }
}