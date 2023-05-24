export class Agenda{


    _id?: any
    barbearias: string
    dia?:string
    hora?:string
    cliente?: string
    servicos?: string
   
    

    constructor(_id:any,dia:string,hora:string,barbearias:string,cliente:string,servico:string){


        this._id = _id,
        this.dia = dia
        this.hora = hora
        this.barbearias = barbearias
        this.cliente = cliente
        this.servicos = servico
     

    }


}