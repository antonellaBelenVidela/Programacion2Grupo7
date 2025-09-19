export default class Cliente {
    private _id: string; // El identificador único del cliente
    private _nombre: string;
    private _apellido: string;
    private _email: string; // Un ejemplo de datos relevantes adicionales

    constructor(id: string, nombre: string, apellido: string, email: string) {
        this._id = id;
        this._nombre = nombre;
        this._apellido = apellido;
        this._email = email;
    }

    // Setters
    public setId(id: string): void{
        this._id = id;
    }

    public setNombre(nombre: string): void{
        this._nombre = nombre;
    }

    public setApellido(apellido: string): void{
        this._apellido = apellido;
    }

    public setEmail(email: string): void{
        this._email = email;
    }

    // Getters
    public getId(): string {
        return this._id;
    }

    public getNombre(): string {
        return this._nombre;
    }

    public getApellido(): string {
        return this._apellido;
    }

    public getEmail(): string {
        return this._email;
    }
}