import { NotaFiscal } from "./model/NotaFiscal";

const notaF1 = new NotaFiscal (`213578-958`);
notaF1.pessoaF.setNome(`Jose Mateus`);
notaF1.pessoaF.setCpf(`37589412554-98`);
console.log(`Nome: ${notaF1.pessoaF.getNome()}`);
console.log(`CPF: ${notaF1.pessoaF.getCpf()}`);
console.log(`Nota Fiscal n.º: ${notaF1.getNumeroNotaFiscal()}`);

const notaF2v= new NotaFiscal (`547frfr5-22`);
notaF2v.pessoaF.setNome(`Mateus Jose`);
notaF2v.pessoaF.setCpf(`658142684-98`);
console.log (`Nome: ${notaF2v.pessoaF.getNome()}`);
console.log(`CPF: ${notaF2v.pessoaF.getCpf()}`);
console.log(`Nota Fiscal nº: ${notaF2v.getNumeroNotaFiscal()}`);