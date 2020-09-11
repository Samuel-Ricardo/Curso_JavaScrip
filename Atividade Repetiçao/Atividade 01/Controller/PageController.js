function startCount(){

    var startInput = document.querySelector("input#startNumber");
    var intervalInput = document.querySelector("input#interval");
    var finalInput = document.querySelector("input#finalNumber");

    var result = document.getElementById("result");

        var start = Number(startInput.value)
        var interval = Number(intervalInput.value)
        var final = Number(finalInput.value)
    
    if(check() === true){

        var count = "";

        result.innerText = `contando:`

        if(start < final){

            for(start; start != final; start++){

                //    count = count + `👍 ${start} \u{1f449} `
        
                     count = count + ` ${start} \u{1f449} `
                }

        }else{

            for(start; start != final; start--){

                //    count = count + `👍 ${start} \u{1f449} `
        
                     count = count + ` ${start} \u{1f449} `
                }
        
            }

        count = count + `\u{1f3c1} ${final} `

        result.innerHTML  = count
    }
}

function increasing(start, final){

    var count = ""

    for(start; start != final; start++){

        //    count = count + `👍 ${start} \u{1f449} `

             count = count + ` ${start} \u{1f449} `
        }

        return count;
}

function decreasing(start, final){

    var count = ""

    for(start; start != final; start--){

        //    count = count + `👍 ${start} \u{1f449} `

             count = count + ` ${start} \u{1f449} `
        }

        return count;
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