import GestorGeneral from "./gestorGeneral";

export default class Kilometraje implements GestorGeneral{
    Gestionar(matricula: string, idCliente: string, fechaInicio: Date, fechaFin: Date): boolean {
        throw new Error("Method not implemented.");
    }
    public gestionar(): void {
        
    }
}