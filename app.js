const joao = { nome: "João", idade: 25, profissao: "Engenheiro" };
const maria = { nome: "Maria", idade: 30, profissao: "Médica", salario: 80000 };
const carlos = { nome: "Carlos", idade: 18, profissao: "Estudante",  cnh: true };
const ana = { nome: "Ana", idade: 40, profissao: "Professora" };
const pedro = { nome: "Pedro", idade: 22, profissao: "Designer" };

if(joao.idade >= 18){
    console.log("Joao é maior de idade")
} else{
    console.log("Joao é de Menor")};
if(maria.profissao === "Médica"){
    console.log("Maria é uma Profissional da Saúde")
} else{
    console.log("Maria trabalha de programadora")
}
if(carlos.idade >= 18 && carlos.cnh == true && maria.salario >= 60000){
    console.log("Carlos pode dirigir")
} else{
    console.log("Carlos não pode dirigir")
}
if(pedro.idade>= 60){
    console.log("Pedro recebe benefício")
} else{
    console.log("Pedro não recebe o benefício")
}
