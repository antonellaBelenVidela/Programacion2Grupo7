import Cliente from "../cliente";
import Clientela from "../consumidor";
import Disponible from "../estados/disponible";
import ENALQUILER from "../estados/enAlquiler";
import Flota from "../flota";
import Reserva from "../reserva";
import Vehiculo from "../vehiculos/Vehiculo";

export default class GestionReserva {
    private _flota: Flota = new Flota();
    private _clientela: Clientela = new Clientela();

    constructor(flota: Flota, clientes: Clientela) {
        this._flota = flota;
        this._clientela = clientes;
    }
  
 
    public RealizarReserva(idCliente:Cliente,vehiculo:Vehiculo):void{
       //aca iria una excepcion
        let cliente=this._clientela.ObtenerClientes()
        let flota= this._flota.getFlota()
        cliente.has(idCliente.getNombre(),)
        flota.has(vehiculo.getPatente())
        let fechaInicio= idCliente.getFechaInico()
        let fechaFin = idCliente.getFechaFinal()
         
        if( vehiculo.VerificarEstado() === true){
             const NuevaReserva= new Reserva(fechaInicio,fechaFin,idCliente)
              idCliente.setReserva(NuevaReserva)
             let Estado= new ENALQUILER()
             vehiculo.cambiarEstado(Estado)
             vehiculo.agregarReserva(NuevaReserva)
             vehiculo.setVecesAlquilado(1)
             idCliente.setReserva(NuevaReserva)
        }
      
    }


    public TerminarReserva(fecha:Date,Reserva:Reserva):void{
        if(fecha >= Reserva.getFechaFin()){
            let Vehiculo_A= Reserva.GetVehiculo()
            let alquiler=new Disponible()

            Vehiculo_A.cambiarEstado(alquiler)
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