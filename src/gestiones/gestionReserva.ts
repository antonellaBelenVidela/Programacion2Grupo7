import Cliente from "../cliente";
import Consumidor from "../consumidor";
import Disponible from "../estados/disponible";
import EnAlquiler from "../estados/enAlquiler";
import Flota from "../flota";
import Reserva from "../reserva";
import Temporadas from "../temporadas/temporadas";
import Vehiculo from "../vehiculos/vehiculo";

export default class GestionReserva {
    private flota: Flota;
    private consumidor: Consumidor;

    constructor(flota: Flota, consumidor: Consumidor) {
        this.flota = flota;
        this.consumidor = consumidor;
    }
<<<<<<< HEAD
  
   /**
    * 
    * @param idCliente 
    * @param vehiculo 
    * @param Temporada 
    * Recibe el cliente, el vehiculo y la temporada de la reserva para poder crear una reserva
    */
    public RealizarReserva(idCliente:Cliente,vehiculo:Vehiculo,Temporada:temporadas):void{
       //aca iria una excepcion
        let cliente=this._clientela.ObtenerClientes()
        let flota= this._flota.getFlota()
        cliente.has(idCliente.getNombre(),)
        flota.has(vehiculo.getPatente())
        let fechaInicio= idCliente.getFechaInico()
        let fechaFin = idCliente.getFechaFinal()
         
        if( vehiculo.VerificarEstado() === true){
             const NuevaReserva= new Reserva(fechaInicio,fechaFin,idCliente)
             NuevaReserva.setTemporada(Temporada)
              idCliente.setReserva(NuevaReserva)
             let Estado= new ENALQUILER()
             vehiculo.cambiarEstado(Estado)
             vehiculo.agregarReserva(NuevaReserva)
             vehiculo.setVecesAlquilado(1)
             idCliente.setReserva(NuevaReserva)
             NuevaReserva.setVehiculo(vehiculo)
=======


    public realizarReserva(cliente: Cliente, vehiculo: Vehiculo, temporada: Temporadas): void {
        //aca iria una excepcion
        let clienteObtenido = this.consumidor.obtenerMapClientes()
        let flota = this.flota.getFlota()
        clienteObtenido.has(cliente.getNombre(),)
        flota.has(vehiculo.getPatente())
        let fechaInicio = cliente.getFechaInico()
        let fechaFin = cliente.getFechaFinal()

        if (vehiculo.verificarEstado() === true) {
            const nuevaReserva = new Reserva(fechaInicio, fechaFin, cliente)
            nuevaReserva.setTemporada(temporada)
            cliente.setReserva(nuevaReserva)
            let estado = new EnAlquiler()
            vehiculo.cambiarEstado(estado)
            vehiculo.agregarReserva(nuevaReserva)
            vehiculo.setVecesAlquilado(1)
            cliente.setReserva(nuevaReserva)
            nuevaReserva.setVehiculo(vehiculo)
>>>>>>> bf6a33ca5667294fd30ee978d772ef8f83a1fcd3
        }
        // catch que no haya flota o que no haya clientes

    }

<<<<<<< HEAD
  /**
   * 
   * @param fecha 
   * @param Reserva
   * Recibe la fecha actual y la Reserva para verificar si ya llego la fecha fin de la reserva 
   */
    public TerminarReserva(fecha:Date,Reserva:Reserva):void{
        if(fecha >= Reserva.getFechaFin()){
            let Vehiculo_A= Reserva.GetVehiculo()
            let alquiler=new Disponible()
=======

    public terminarReserva(fecha: Date, reserva: Reserva): void {
        if (fecha >= reserva.getFechaFin()) {
            let vehiculo_a = reserva.getVehiculo()
            let alquiler = new Disponible()
>>>>>>> bf6a33ca5667294fd30ee978d772ef8f83a1fcd3

            vehiculo_a.cambiarEstado(alquiler)
        }
    }

    /*
    public Gestionar(patente: string, idCliente: string, fechaInicio: Date, fechaFin: Date): boolean {
        const vehiculoEncontrado: boolean = this._flota.buscarVehiculo(patente); // Acá está fallando
        const clienteEncontrado: boolean = this._clientela.buscarCliente(idCliente); // Acá seguro que también

        // 2. Validar que ambos existan
        if (!vehiculoEncontrado) {
            console.log('\nError: Vehículo no encontrado.');
            return false;
        }

        if (!clienteEncontrado) {
            console.log('\nError: Cliente no encontrado.');
            return false;
        }

        // 3. Validar la disponibilidad del vehículo en fecha determinada
        if (!this._flota.obtenerVehiculo(patente)!.estaDisponible(fechaInicio, fechaFin)) {
            console.log('\nError: El vehículo no está disponible en las fechas solicitadas.');
            return false;
        }

        // 4. Crear la reserva
        if (clienteEncontrado) {
            const clienteQueReserva = this._clientela.obtenerCliente(idCliente)!; // La exclamación se usa solo si se sabe al 100% que existe el ID
            const nuevaReserva = new Reserva(fechaInicio, fechaFin, clienteQueReserva);

            // 5. Agregar la reserva al vehículo
            this._flota.obtenerVehiculo(patente)!.agregarReserva(nuevaReserva);
            console.log('\nReserva creada con éxito.');
            return true;
        }

        return false;
    }
    */
}