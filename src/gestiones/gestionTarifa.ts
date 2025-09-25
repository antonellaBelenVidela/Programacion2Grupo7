import GestorGeneral from "./gestorGeneral";

export default class tarifa implements GestorGeneral{
    Gestionar(matricula: string, idCliente: string, fechaInicio: Date, fechaFin: Date): boolean {
        throw new Error("Method not implemented.");
    }

    public gestionar(): void {
        
    }
}