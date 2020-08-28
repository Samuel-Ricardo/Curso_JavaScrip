function startCount(){

    var startInput = document.querySelector("input#startNumber");
    var intervalInput = document.querySelector("input#interval");
    var finalInput = document.querySelector("input#finalNumber");

    var result = document.getElementById("result");

    var start = Number(startInput.value)
    var interval = Number(intervalInput.value)
    var final = Number(finalInput.value)

    result.innerText = `contando:`

    for(var cont; cont != final; cont++){

        result.innerText = ` ${cont}`

    }

    
}