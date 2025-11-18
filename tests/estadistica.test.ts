import estadistica from "../src/estadistica";

class MockVehiculo {
    private patente: string;
    private vecesAlquilado: number;
    private ganancias: number;
    private costoMantenimiento: number;
    private estado: any;

    
    constructor(patente: string, veces: number, ganancias: number, costo: number, estado: any) {
        this.patente = patente;
        this.vecesAlquilado = veces;
        this.ganancias = ganancias;
        this.costoMantenimiento = costo;
        this.estado = estado;
    }

    public getPatente(): string { return this.patente; }
    public GetVecesAlquilado(): number { return this.vecesAlquilado; }
   
    public GetGanaciasTotales(): number { return this.ganancias; } 
    public getCostoMantenimiento(): number { return this.costoMantenimiento; }
    public getEstado(): any { return this.estado; }
}

class MockFlota {
    private autos: Map<string, MockVehiculo>;
    constructor(autos: Map<string, MockVehiculo>) { this.autos = autos; }
    public getFlota(): Map<string, MockVehiculo> { return this.autos; }
}

class MockEstado {
    constructor(nombre: string) {}
}
const ENALQUILER_MOCK = new MockEstado('ENALQUILER');



const VEHICULOS_DATA = new Map<string, MockVehiculo>([
    
    ['A111', new MockVehiculo('A111', 10, 5000, 500, ENALQUILER_MOCK)], 
    ['B222', new MockVehiculo('B222', 20, 8000, 1000, new MockEstado('Disponible'))], 
    ['C333', new MockVehiculo('C333', 5, 2000, 300, ENALQUILER_MOCK)],
    ['D444', new MockVehiculo('D444', 5, 100, 20, new MockEstado('En Taller'))], 
]);




describe('Clase estadistica', () => {
    let mockFlota: MockFlota;
    let estadisticaInstance: estadistica;
    
    beforeEach(() => {
       
        mockFlota = new MockFlota(VEHICULOS_DATA as Map<string, any>);
        estadisticaInstance = new estadistica(mockFlota as any);
    });

    test('autoMasAlquilado: Debe devolver la patente del vehículo con la mayor cantidad de alquileres', () => {
        
        expect(estadisticaInstance.autoMasAlquilado()).toBe('B222'); 
    });
    
   
    test('autoMenosAlquilado: Debe devolver la patente del vehículo con la menor cantidad de alquileres', () => {
       
        expect(estadisticaInstance.autoMenosAlquilado()).toBe('D444'); 
    });

    
    test('AutoMasRentable: Debe devolver la patente del vehículo con la mayor ganancia neta (7000)', () => {
        
        expect(estadisticaInstance.AutoMasRentable()).toBe('B222');
    });

    
    test('AutoMenosRentable: Debe devolver la patente del vehículo con la menor ganancia neta (80)', () => {
       
        expect(estadisticaInstance.AutoMenosRentable()).toBe('D444');
    });

    
    test('OcupacionFlota: Debe calcular el porcentaje de autos en estado "ENALQUILER"', () => {
        
        expect(estadisticaInstance.OcupacionFlota()).toBe(0.5);
    });
});