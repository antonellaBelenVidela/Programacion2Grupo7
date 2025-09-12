import Flota from "./flota";

function main(){
    const flotaVehiculos: Flota = new Flota();
    flotaVehiculos.agregarVehiculo("Suv","Libre");
    flotaVehiculos.agregarVehiculo("Compacto","Ocupado");
    flotaVehiculos.agregarVehiculo("Sedan","En Mantenimiento");
    flotaVehiculos.agregarVehiculo("Corsa","Ocupado padreee");

    flotaVehiculos.mostrarFlota();
}

main();