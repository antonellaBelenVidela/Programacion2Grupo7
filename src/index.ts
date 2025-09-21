import Flota from "./flota";
import Sedan from "./vehiculos/Sedan";

function main(){
    const flotaVehiculos: Flota = new Flota();
    const cochecito: Sedan = new Sedan("12345", "0km", 2500, "Alquilado", 1000, 1000);
    flotaVehiculos.agregarVehiculo(cochecito.getPatente(), cochecito)
    const cochecito2: Sedan = new Sedan("123456", "0km", 250066, "Disponible", 100066, 100660);
    flotaVehiculos.agregarVehiculo(cochecito2.getPatente(),cochecito2);
    
    flotaVehiculos.obtenerDisponibilidad(cochecito.getPatente(), cochecito);
    flotaVehiculos.obtenerDisponibilidad(cochecito.getPatente(), cochecito2);
}

main();