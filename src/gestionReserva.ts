import Cliente from "./cliente"
import GestionGeneral from "./GestionGeneral"
import Vehiculo from "./vehiculos/Vehiculo"
import Reserva from "./reserva";
export default  class GestionReserva implements GestionGeneral{
    private flota : Vehiculo[];
    private clientes : Cliente[];
     constructor(flota: Vehiculo[], clientes: Cliente[]) {
        this.flota = flota;
        this.clientes = clientes;
    }
    public Gestionar(matricula:string,idCliente:string,fechaInicio:Date,fechaFin:Date): boolean {
         const vehiculoEncontrado = this.flota.find(v => v.getMatricula() === matricula);
        const clienteEncontrado = this.clientes.find(clientes => clientes.getId() === idCliente);
        

        // 2. Validar que ambos existan
        if (!vehiculoEncontrado) {
            console.log('Error: Vehículo no encontrado.');
            return false;
        }

        if (!clienteEncontrado) {
            console.log('Error: Cliente no encontrado.');
            return false;
        }

        // 3. Validar la disponibilidad del vehículo
        if (!vehiculoEncontrado.estaDisponible(fechaInicio,fechaFin)) {
            console.log('Error: El vehículo no está disponible en las fechas solicitadas.');
            return false;
        }

        // 4. Crear la reserva
        const nuevaReserva = new Reserva(fechaInicio, fechaFin, clienteEncontrado);

        // 5. Agregar la reserva al vehículo
        vehiculoEncontrado.agregarReserva(nuevaReserva);

        console.log('Reserva creada con éxito.');
        return true;
    }

}