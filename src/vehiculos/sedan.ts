import Vehiculo from "./vehiculo";

export default class Sedan extends Vehiculo{
    constructor(patente: string, estado: string, tarifa: number, disponibilidad: string, kilometrosRecorridos: number, cargo: number){
        super(patente, estado, tarifa, disponibilidad, kilometrosRecorridos, cargo);
    }
}