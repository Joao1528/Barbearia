export class Agenda{


    _id?: any
    barbearia?: string
    dia?:string
    hora?:string
    cliente?: string
    servico: string
    

    constructor(_id:any,dia:string,hora:string,barbearia:string,cliente:string,servico:string){


        this._id = _id,
        this.dia = dia
        this.hora = hora
        this.barbearia = barbearia
        this.cliente = cliente
        this.servico = servico

    }


}