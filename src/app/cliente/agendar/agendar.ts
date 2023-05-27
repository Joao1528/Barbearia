export class Agenda{


    _id?: any
    barbearias: string
    dia?:string
    hora?:string
    nome?: string
    servicos?: string
    email?: string
   
    

    constructor(_id:any,dia:string,hora:string,barbearias:string,cliente:string,servico:string){


        this._id = _id,
        this.dia = dia
        this.hora = hora
        this.barbearias = barbearias
       
        this.servicos = servico
     

    }


}