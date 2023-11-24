import { PessoJuridica } from "./PessoJuridica";
import { PessoaFisica } from "./PessoaFisica";

export class NotaFiscal{
    private NumeroNotaFiscal: string;
    public pessoaF = new PessoaFisica(``,``);
    public pessoaJ = new PessoJuridica (``,``);

    constructor(_numeroNotaFiscal: string){
        this.NumeroNotaFiscal= _numeroNotaFiscal;
    }

    public setNumeroNotaFiscal(_numeroNotaFiscal:string): void{
        this.NumeroNotaFiscal= this.NumeroNotaFiscal;
    }
    public getNumeroNotaFiscal(): string{
        return this.NumeroNotaFiscal;
   }
}