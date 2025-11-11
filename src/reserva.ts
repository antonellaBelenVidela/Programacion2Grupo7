import Cliente from "./cliente";
import temporadas from "./temporadas/temporadas";
import Vehiculo from "./vehiculos/Vehiculo";

export default class Reserva{
    private fechaInicio:Date;
    private fechaFin : Date;
    private cliente :Cliente;
    private Vehiculo:Vehiculo
    private Temporada:temporadas;

    constructor(fechaInicio: Date, fechaFin: Date, cliente: Cliente) {
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.cliente = cliente;
        this.Vehiculo= undefined as unknown as Vehiculo
        this.Temporada= undefined as unknown as temporadas
    }

    public getFechaInicio(): Date {
        return this.fechaInicio;
    }

    public getFechaFin(): Date {
        return this.fechaFin;
    }

    public getCliente(): Cliente{
        return this.cliente;
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