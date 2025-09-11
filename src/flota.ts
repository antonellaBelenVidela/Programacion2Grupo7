export default class Flota{
    private flota: Map<string,string>;

    constructor(){
        this.flota = new Map<string,string>();
    }

    'patente como key'

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