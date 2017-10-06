/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function  calc(){
    var resultado =0, n1=0, n2=0, operacao=0;
    var strstring= "<a href="+"subtrair.html"+">Subtrair</a>";
    n1=  parseFloat(document.querySelector("#n1").value);
    n2=  parseFloat(document.querySelector("#n2").value);
    result = parseFloat(document.querySelector("#result").value);
    operacao = n1 +n2;
    if(operacao === result){
        alert("voce acertou!");
        document.querySelector("#proximo").innerHTML= strstring;
    }
    else{
        alert("Tente de novo!");
    }
    
   
    
}
