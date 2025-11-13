import Cliente from "./cliente";
import Consumidor from "./consumidor";
import Disponible from "./estados/disponible";
import Flota from "./flota";
import GestionKilometraje from "./gestiones/gestionKilometraje";
import Gestor from "./gestiones/gestor";
import TemporadaBaja from "./temporadas/temporadaBaja";
import temporadas from "./temporadas/temporadas";
import Compacto from "./vehiculos/compacto";
import Sedan from "./vehiculos/sedan";
import Suv from "./vehiculos/suv";
import Vehiculo from "./vehiculos/Vehiculo";


function main(){
 const FlotaDeAutos= new Map<string,Vehiculo>;
 
 const Autos:Flota= new Flota(FlotaDeAutos)
 const Sedan1:Sedan= new Sedan()
 Sedan1.setPatente("4FBC")
 Sedan1.setEstado(new Disponible(Sedan1))
 Sedan1.setVecesAlquilado(3)
 Sedan1.setKmSinMantenimiento(6000)
 Sedan1.setMesesSinMantenimiento(10)

 const Compacto1:Compacto= new Compacto()
 Compacto1.setPatente("5ECB")
 Compacto1.setEstado(new Disponible(Compacto1))
 Compacto1.setVecesAlquilado(0)
 Compacto1.setKmSinMantenimiento(0)
 Compacto1.setMesesSinMantenimiento(0)

 const Suv1:Suv= new Suv()
 Suv1.setPatente("AC4E")
 Suv1.setEstado(new Disponible(Suv1))
 Suv1.setVecesAlquilado(1)
 Suv1.setKmSinMantenimiento(5000)
 Suv1.setMesesSinMantenimiento(12)
  
 Autos.agregarVehiculo(Suv1.getPatente(),Suv1)
 Autos.agregarVehiculo(Sedan1.getPatente(),Sedan1)
 Autos.agregarVehiculo(Compacto1.getPatente(),Compacto1)

 const Gustavo:Cliente= new Cliente()
 Gustavo.setId("1234")
 Gustavo.setNombre("Gustavo")
 Gustavo.SetFechaInicio(new Date(2025,8,20))
 Gustavo.SetFechaFin(new Date(2025,8,22))

 const Clientes:Consumidor= new Consumidor()
 Clientes.agregarCliente(Gustavo.getId(),Gustavo)

 const GestorGeneral:Gestor= new Gestor(Autos,Clientes)

 const Temporada:TemporadaBaja= new TemporadaBaja()

 GestorGeneral.Reserva(Gustavo,Compacto1,Temporada)

 console.log(Compacto1.getEstado())

 const KilometrosRecorridos=[40,60]

 GestorGeneral.Tarifa(Compacto1,Compacto1.GetReserva(),KilometrosRecorridos)

 GestorGeneral.TerminarReserva(new Date(2025,8,22),Compacto1.GetReserva())

 console.log(Compacto1.GetGanaciasTotales())
 console.log(Compacto1.getEstado())
}

main();