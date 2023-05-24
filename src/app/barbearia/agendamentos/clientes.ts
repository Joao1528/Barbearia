export class Clientes {
    _id?: string;
    barbearias?: string;
    dia?: string;
    hora?: string;
    clientes?: string;
    servico?: string;
  
    constructor(
      _id: string,
      dia: string,
      hora: string,
      barbearias: string,
      clientes: string,
      servico: string
    ) {
      this._id = _id;
      this.dia = dia;
      this.hora = hora;
      this.barbearias = barbearias;
      this.clientes = clientes;
      this.servico = servico;
    }
  }