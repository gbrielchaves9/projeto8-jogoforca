// a desestruturaçao cria uma variavel para cada item ou objeto !!!!

// desestruturando pelo Objeto ==> voce pega o nome!!!! aqui usamos {}

const pessoa = {nome: "João", idade : 30  }
//const nome = pessoa.nome
//const idade = pessoa.idade
const {nome,idade}=pessoa
console.log(idade)

// desestruturando usando Array==>  usando o indice precisa respeitar a ordem !!! aqui usamos []
const lista =["bata", "macarao"]
//const i1 = lista[0]
//const i2 = lista[1]

const [i1 ,i2] = lista

console.log(i1)
console.log(i2)


// desestruturando usando os 2 casos ?
const pessoas = [{nomes: "João2", idades : 300  },{nomes: "edinaldo ", idades : 120  } ]

const [{nomes : novoJoao , idades : novajoao},{nomes : novamaria,   idades : novaedi}]= pessoas
console.log(novaedi)

let lis =[1,2,3]
let outra =[...lis]

lis.push(4,5)
console.log(lis , outra )



