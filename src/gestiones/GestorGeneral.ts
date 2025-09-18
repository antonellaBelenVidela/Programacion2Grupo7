import Cliente from "../cliente";
import Vehiculo from "../vehiculos/Vehiculo";

export default interface GestorGeneral{
    Gestionar(matricula: string,
    idCliente: string,
    fechaInicio: Date,
    fechaFin: Date):boolean
}