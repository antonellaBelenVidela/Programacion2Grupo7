import { Estado } from "./estado";
import Flota from "./flota";
import Sedan from "./vehiculos/sedan";
import moment from "moment"; // IMPORLO LIBERIA DE MOMENT.JS

function main(){

    const flotaVehiculos: Flota = new Flota();

    const sedanAnto = new Sedan("AA222", Estado.ENALQUILER, 1000);
    flotaVehiculos.agregarVehiculo(sedanAnto.getPatente(), sedanAnto);

    // aca poner patente, fecha de inicio, fecha de fin ---> PUSE LIBRERIA moment.js QAUE EL PROFE RECOMENTDO EN UNA CLASE
    const disponible = flotaVehiculos.obtenerDisponibilidad(sedanAnto.getPatente(), moment("2025-09-21", "YYYY-MM-DD").toDate(),moment("2025-09-22", "YYYY-MM-DD").toDate());

    // miuestro datos para ver si funca
    console.log(`El vehículo con patente: ${sedanAnto.getPatente()} está disponible? ${(disponible)}`);

    console.log(sedanAnto.mostrarInfo());
    console.log(`---> dando un total de $ ${sedanAnto.calcularTarifa(10,2)} por el alquiler del Sedan`)
}

main();