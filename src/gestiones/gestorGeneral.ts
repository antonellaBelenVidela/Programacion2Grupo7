import Cliente from "../cliente";
import Vehiculo from "../vehiculos/vehiculo";

export default interface IGestorGeneral{
    Gestionar(matricula: string,
    idCliente: string,
    fechaInicio: Date,
    fechaFin: Date):boolean
}