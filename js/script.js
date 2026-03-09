function calcular(){
    let salario = parseFloat(document.getElementById("salario").value);
    
    if(isNaN(salario) || salario <= 0){
        document.getElementById("resultado").innerHTML = "Digite um sálario válido.";
        return;
    }

    let descontoSimplificado = 568.40;

    let calculobase = salario - descontoSimplificado;
    if(calculobase < 0){
        calculobase = 0;
    }

    let aliquota = 0;
    let deducao = 0;

    if(calculobase <= 2259.20){
    aliquota = 0;
    deducao = 0;
}

    else if(calculobase <= 2826.65){
    aliquota = 0.075;
    deducao = 169.44;
}

    else if(calculobase <= 3751.05){
    aliquota = 0.15;
    deducao = 381.44;
}

    else if(calculobase <= 4664.68){
    aliquota = 0.225;
    deducao = 662.77;
}

    else{
    aliquota = 0.275;
    deducao = 896.00;
}

let imposto = (calculobase * aliquota) - deducao;

if(imposto < 0){
    imposto = 0;
}

let aliquotaefetiva = (imposto / salario) * 100;

document.getElementById("resultado").innerHTML = "Base de cálculo: R$ " + calculobase.toFixed(2) +
"<br>" + "Imposto: R$ " + imposto.toFixed(2) + "<br>" + "Alíquota efetiva: " + aliquotaefetiva.toFixed(2) + "%";

}
function limpar(){
        document.getElementById("resultado").innerHTML = "";
    }