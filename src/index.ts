import Cliente from "./cliente";
import Consumidor from "./consumidor";
import Disponible from "./estados/disponible";
import Flota from "./flota";
import GestionKilometraje from "./gestiones/gestionKilometraje";
import Gestor from "./gestiones/gestor";
import Mantenimiento from "./mantenimiento";
import Reserva from "./reserva";
import TemporadaAlta from "./temporadas/temporadaAlta";
import TemporadaBaja from "./temporadas/temporadaBaja";
import temporadas from "./temporadas/temporadas";
import Compacto from "./vehiculos/compacto";
import Sedan from "./vehiculos/sedan";
import Suv from "./vehiculos/suv";
import Vehiculo from "./vehiculos/Vehiculo";


function main(){
 const FlotaDeAutos= new Map<string,Vehiculo>;
 const Mecanico:Mantenimiento= new Mantenimiento()
 const Autos:Flota= new Flota(FlotaDeAutos)
 const Sedan1:Sedan= new Sedan()
 Sedan1.setPatente("4FBC")
 Sedan1.setVecesAlquilado(3)
 Sedan1.setKmSinMantenimiento(6000)
 Sedan1.setMesesSinMantenimiento(10)

 const Compacto1:Compacto= new Compacto()
 Compacto1.setPatente("5ECB")
 Compacto1.setVecesAlquilado(0)
 Compacto1.setKmSinMantenimiento(0)
 Compacto1.setMesesSinMantenimiento(0)

 const Suv1:Suv= new Suv()
 Suv1.setPatente("AC4E")
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

 const Pedro:Cliente= new Cliente()
 Pedro.setId("4253")
 Pedro.setNombre("Pedro")
 Pedro.SetFechaInicio(new Date(2025,9,20))
 Pedro.SetFechaFin(new Date(2025,9,22))

 const Clientes:Consumidor= new Consumidor()
 Clientes.agregarCliente(Gustavo.getId(),Gustavo)
 Clientes.agregarCliente(Pedro.getId(),Pedro)
 const GestorGeneral:Gestor= new Gestor(Autos,Clientes)

 const Temporada:TemporadaBaja= new TemporadaBaja()

 GestorGeneral.Reserva(Gustavo,Compacto1,Temporada)

 console.log(Compacto1.getEstado())

 const KilometrosRecorridos=[40,60]
 let ReservaCompacto=Compacto1.GetReserva( )

 GestorGeneral.Tarifa(Compacto1,ReservaCompacto,KilometrosRecorridos)
 
 GestorGeneral.TerminarReserva(new Date(2025,8,22),ReservaCompacto)

 console.log(Compacto1.GetGanaciasTotales())
 console.log(Compacto1.getEstado())

 const TempordaA:TemporadaAlta= new TemporadaAlta

 GestorGeneral.Reserva(Pedro,Suv1,TempordaA)

 console.log(Suv1.getEstado())

 const KilometrosRecorridosSuv=[200,300]
 let ReservaSuv= Suv1.GetReserva() 
 GestorGeneral.Tarifa(Suv1,ReservaSuv,KilometrosRecorridosSuv)
 
 GestorGeneral.TerminarReserva(new Date(2025,9,22),ReservaSuv)

 Mecanico.PasarAMantenimiento(Suv1,new Date(2025,9,23),new Date(2025,9,24))
 console.log(Suv1.getEstado())
 Mecanico.setPasaron24Horas(false)
 Mecanico.setCostoMantenimiento(20)
 Mecanico.FinalizarMantimiento(new Date(2025,9,24))

 console.log(Suv1.GetGanaciasTotales())
 console.log(Suv1.getEstado())


}

main();