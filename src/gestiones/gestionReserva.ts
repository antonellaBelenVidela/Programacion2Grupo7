import Clientela from "../clientela";
import Flota from "../flota";
import GestionGeneral from "./GestorGeneral"
import Reserva from "../reserva";

export default  class GestionReserva implements GestionGeneral{
    private _flota: Flota = new Flota();
    private _clientela: Clientela = new Clientela()

    constructor(flota: Flota, clientes: Clientela) {
        this._flota = flota;
        this._clientela = clientes;
    }

    public Gestionar(patente: string, idCliente: string, fechaInicio: Date, fechaFin: Date): boolean {
        const vehiculoEncontrado = this._flota.buscarVehiculo(patente);
        const clienteEncontrado = this._clientela.buscarCliente(idCliente);

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
        if (!this._flota.obtenerVehiculo(patente)!.estaDisponible(fechaInicio,fechaFin)) {
            console.log('\nError: El vehículo no está disponible en las fechas solicitadas.');
            return false;
        }

        // 4. Crear la reserva
        if(clienteEncontrado){
            const clienteQueReserva = this._clientela.obtenerCliente(idCliente)!; // La exclamación se usa solo si se sabe al 100% que existe el ID
            const nuevaReserva = new Reserva(fechaInicio, fechaFin, clienteQueReserva);

            // 5. Agregar la reserva al vehículo
            this._flota.obtenerVehiculo(patente)!.agregarReserva(nuevaReserva);
            console.log('\nReserva creada con éxito.');
            return true;
        } 

        return false;
    }

}