const valor_telefone=100;
const valor_acessorio=10;
const taxa=0.08;
const limite_de_gastos=200;

var saldo_bancario=500;
var montante=0;

function calculateTax(){
    //calcula o valor do produto adicionando a taxa
    return montante*taxa;
}
function formatAmount(valor){
    var formt = valor;
    return "$"+formt.toFixed(2);
}
while (montante < saldo_bancario) {
    montante = montante + valor_telefone;
if(montante<limite_de_gastos){
    montante=montante+valor_acessorio;
}
}
montante=montante+calculateTax (montante);
    console.log("Sua compra:"+formatAmount(montante));
if (montante>saldo_bancario){
    console.log("você naõ pode pagar a conta. :( ");
}else{
console.log("Você pode pagar a conta :) ");
}