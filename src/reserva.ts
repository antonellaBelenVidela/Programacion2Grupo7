import Cliente from "./cliente";

export default class Reserva{
    private _fechaInicio:Date;
    private _fechaFin : Date;
    private _cliente :Cliente;

    constructor(fechaInicio: Date, fechaFin: Date, cliente: Cliente) {
        this._fechaInicio = fechaInicio;
        this._fechaFin = fechaFin;
        this._cliente = cliente;
    }

     public get fechaInicio(): Date {
        return this._fechaInicio;
    }

    public get fechaFin(): Date {
        return this._fechaFin;
    }


}