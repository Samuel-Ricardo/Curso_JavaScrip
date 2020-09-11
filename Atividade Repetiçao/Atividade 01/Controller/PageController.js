function startCount(){

    var startInput = document.querySelector("input#startNumber");
    var intervalInput = document.querySelector("input#interval");
    var finalInput = document.querySelector("input#finalNumber");

    var result = document.getElementById("result");

        var start = Number(startInput.value)
        var interval = Number(intervalInput.value)
        var final = Number(finalInput.value)
    
    if(check() === true){

        

        var count = "contando"

        result.innerText = `contando:`

        for(start; start != final; start++){

            count = count + `👍 ${start} `
        }

        result.innerHTML  = count
    }
}

function check(){

    var startInput = document.querySelector("input#startNumber");
    var intervalInput = document.querySelector("input#interval")
    var finalInput = document.querySelector("input#finalNumber")

     if(startInput.value.length == 0){

        window.alert(`[Erro] voce nao preencheu o valor inicial`)

        return false;
     }

     else if(finalInput.value.length == 0){

        window.alert(`[ERRO] Voce nao digitou o valor final ;-;`);
        return false;
     }
     
     else if(intervalInput.value.length == 0){

        window.alert(`voce nao preencheu o intervalo, será ultilizado o "1" por padrao`)

        interval = 1;
        return true
     }
     else{
         return true
     }

     
}
