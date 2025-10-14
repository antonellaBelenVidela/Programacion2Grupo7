import { Estado } from "./estado";
import Flota from "./flota";
import Kilometraje from "./gestiones/gestionKilometraje";
import Sedan from "./vehiculos/sedan";
import moment from "moment"; // IMPORTO LIBERIA DE MOMENT.JS

function main(){

    const flotaVehiculos: Flota = new Flota();

    const sedanAnto = new Sedan();
    flotaVehiculos.agregarVehiculo(sedanAnto.getPatente(), sedanAnto);

    // aca poner patente, fecha de inicio, fecha de fin ---> PUSE LIBRERIA moment.js QAUE EL PROFE RECOMENTDO EN UNA CLASE
    const disponible = flotaVehiculos.obtenerDisponibilidad(sedanAnto.getPatente(), moment("2025-09-21", "YYYY-MM-DD").toDate(),moment("2025-09-22", "YYYY-MM-DD").toDate());

    // miuestro datos para ver si funca
    console.log(`El vehículo con patente: ${sedanAnto.getPatente()} está disponible? ${(disponible)}`);

    const kilometraje = new Kilometraje;
    console.log(sedanAnto.mostrarInfo());
    console.log(`---> dando un total de $ ${sedanAnto.calcularPago(kilometraje)} por el alquiler del Sedan`)
}

main();