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


    public realizarReserva(cliente: Cliente, vehiculo: Vehiculo, temporada: Temporadas): void {
        //aca iria una excepcion
       try{
        let clienteObtenido = this.consumidor.obtenerMapClientes()
        let flota = this.flota.getFlota()
        clienteObtenido.has(cliente.getNombre(),)
        flota.has(vehiculo.getPatente())
        let fechaInicio = cliente.getFechaInico()
        let fechaFin = cliente.getFechaFinal()
         let estado=vehiculo.getEstado()
         estado.alquilar()
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


    public terminarReserva(fecha: Date, reserva: Reserva): void {
        if (fecha >= reserva.getFechaFin()) {
            let vehiculo_a = reserva.getVehiculo()
            let estado= vehiculo_a.getEstado()
           
            estado.TerminarReserva() 
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