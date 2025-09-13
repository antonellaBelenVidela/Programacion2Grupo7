export default class Flota{
    private flota: Map<string,string>;

    constructor(){
        this.flota = new Map<string,string>();
    }

<<<<<<< HEAD
    
=======
    //'patente como key'
>>>>>>> 52b90d9ecb5ab2ca641034e0168b21db8769bafa

    public agregarVehiculo(categoria: string, disponibilidad: string): void{
        this.flota.set(categoria, disponibilidad);
    }

    public obtenerVehiculo(categoria: string): string | undefined{
        return this.flota.get(categoria);
    }

    public cambiarDisponibilidad(categoria: string, disponibilidad: string){
        this.flota.set(categoria, disponibilidad); 'disponibilidad = Vehiculo.getDisponibilidad()'
    }

    public mostrarFlota(): void{
        this.flota.forEach((disponibilidad, categoria) => {
            console.log(`Categoria: ${categoria}, Disponibilidad: ${disponibilidad}`);
        });
    }
}