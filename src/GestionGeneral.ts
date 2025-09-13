import Cliente from "./cliente";
import Vehiculo from "./vehiculos/Vehiculo";

export default interface GestionGeneral{
     Gestionar(matricula: string,
    idCliente: string,
    fechaInicio: Date,
    fechaFin: Date):boolean
}