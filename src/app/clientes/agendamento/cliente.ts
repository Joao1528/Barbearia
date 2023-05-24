export class cliente{


    _id?: string
    nome?:string
    email?: string
    telefone?: string
    senha?: string
    

    constructor(_id:string,nome:string, email: string,telefone: string, senha: string){


        this._id = _id,
        this.nome = nome,
        this.senha = senha,
        this.email = email,
        this.telefone = telefone


    }
   
   
}