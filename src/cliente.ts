import Reserva from "./reserva";
/**
 *  clase que representa al cliente que realizara la reserva de un vehiculo
 */
export default class Cliente {
    private id: string; // El identificador único del cliente
    private nombre: string;
    private apellido: string;
    private email: string; // Un ejemplo de datos relevantes adicionales
    private Reserva:Reserva
    private fechaInicio:Date
    private fechaFin:Date

    constructor(id?: string, nombre?: string, apellido?: string, email?: string,fechaInicio?:Date,fechaFin?:Date) {
        this.id = id ?? "";
        this.nombre = nombre ?? "";
        this.apellido = apellido ?? "";
        this.email = email ?? "";
        this.Reserva=undefined as unknown as Reserva
        this.fechaFin= undefined as unknown as Date
        this.fechaInicio= undefined as unknown as Date
    }

    // Setters
    public setId(id: string): void{
        this.id = id;
    }

    public setNombre(nombre: string): void{
        this.nombre = nombre;
    }

    public setApellido(apellido: string): void{
        this.apellido = apellido;
    }

    public setEmail(email: string): void{
        this.email = email;
    }

    // Getters
    public getId(): string {
        return this.id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public getEmail(): string {
        return this.email;
    }

   public SetFechaInicio(fecha:Date){
    this.fechaInicio=fecha
   }

   public getFechaInico():Date{
    return this.fechaInicio
   }

   public SetFechaFin(fecha:Date){
    this.fechaFin=fecha
   }

   public getFechaFinal():Date{
    return this.fechaFin
   }

   public setReserva(Reserva:Reserva){
    this.Reserva=Reserva
   }

   public GetReserva():Reserva{
     return this.Reserva
   }
}