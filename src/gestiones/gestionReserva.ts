import Cliente from "../cliente";
import Consumidor from "../consumidor";
import Disponible from "../estados/disponible";
import EnAlquiler from "../estados/enAlquiler";
import Flota from "../flota";
import Reserva from "../reserva";
import Temporadas from "../temporadas/temporadas";
import Vehiculo from "../vehiculos/Vehiculo";
/**
 * esta clase es la que se encarga de realizar la reserva del auto
 */
export default class GestionReserva {
    private flota: Flota;
    private consumidor: Consumidor;

    constructor(flota: Flota, consumidor: Consumidor) {
        this.flota = flota;
        this.consumidor = consumidor;
    }

 /**
  * 
  * @param cliente es el cliente que quiere realizar la reserva
  * @param vehiculo  es el vehiculo que el cliente quiere reservar
  * @param temporada es la temporada en la que se realiza la reserva
  * se encarga de realizar una reserva 
  */
    public realizarReserva(cliente: Cliente, vehiculo: Vehiculo, temporada: Temporadas): void {
        //aca iria una excepcion
       try{
        let clienteObtenido = this.consumidor.obtenerMapClientes()
        let flota = this.flota.getFlota()
        clienteObtenido.has(cliente.getNombre(),)
        flota.has(vehiculo.getPatente())
        let fechaInicio = cliente.getFechaInico()
        let fechaFin = cliente.getFechaFinal()
         vehiculo.Alquilar()
            const nuevaReserva = new Reserva(fechaInicio, fechaFin, cliente)
            nuevaReserva.setTemporada(temporada)
            cliente.setReserva(nuevaReserva)
            vehiculo.agregarReserva(nuevaReserva)
            vehiculo.setVecesAlquilado(1)
            cliente.setReserva(nuevaReserva)
            nuevaReserva.setVehiculo(vehiculo)

       }catch(error){
         throw new Error("error al hacer una reserva")
       }
        
        // catch que no haya flota o que no haya clientes

    }

   /**
    * 
    * @param fecha recibe una fecha a comparar
    * @param reserva recibe una reserva
    * esta funcion se encarga de verificar si la reserva llego a su fecha tope en base a la fecha que recibe
    */
    public terminarReserva(fecha: Date, reserva: Reserva): void {
        if (fecha >= reserva.getFechaFin()) {
            let vehiculo_a = reserva.getVehiculo()
            vehiculo_a.TerminarReserva()
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