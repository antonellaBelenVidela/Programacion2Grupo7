import Cliente from "./cliente";
import temporadas from "./temporadas/temporadas";
import Vehiculo from "./vehiculos/Vehiculo";

export default class Reserva{
    private _fechaInicio:Date;
    private _fechaFin : Date;
    private _cliente :Cliente;
    private Vehiculo:Vehiculo
    private Temporada:temporadas;

    constructor(fechaInicio: Date, fechaFin: Date, cliente: Cliente) {
        this._fechaInicio = fechaInicio;
        this._fechaFin = fechaFin;
        this._cliente = cliente;
        this.Vehiculo= undefined as unknown as Vehiculo
        this.Temporada= undefined as unknown as temporadas
    }

    public getFechaInicio(): Date {
        return this._fechaInicio;
    }

    public getFechaFin(): Date {
        return this._fechaFin;
    }

    public getCliente(): Cliente{
        return this._cliente;
    }

    public setVehiculo(vehiculo:Vehiculo){
        this.Vehiculo=vehiculo
    }

    public GetVehiculo():Vehiculo{
        return this.Vehiculo
    }

   public setTemporada(Temporada:temporadas){
    this.Temporada=Temporada
   }

    public PorcentajePorTemporada(vehiculo:Vehiculo):number{
      return  this.Temporada.PorcentajePorTemporada(vehiculo)
    }
}