
var numbers = []




function addNumber(){

     clearDetails()

    var txtNumber = document.querySelector("input#number");
    var tabNumbers = document.getElementById("tabNumbers");
    
    var number = Number(txtNumber.value)


    if(isValid(txtNumber) && isValid(number)){

        numbers.push(number)

        tabNumbers.innerHTML = ``



        for (var cont = 0; cont < numbers.length; cont++) {

            var item = document.createElement(`option`)
            
            item.text = `o numero ${numbers[cont]} foi adicionado`

            tabNumbers.appendChild(item)           
        }    

    }else{

        window.alert(`Numero invalido`)
    }

}




function isValid(txtNumber){

    if(txtNumber.value.length === 0 || txtNumber.value == 0){

        return false
        
    }else{
       return true
   }
}

function isValid(number){

    var valid = false

    if(numbers.length > 0){

        for(var cont = 0; cont < numbers.length; cont++){
        
        if (number == numbers[cont]){
            
            return false
        }else{

            valid = true
        }
    }

    if(number < 1 || number > 100){

        valid = false
    }

    return valid

}else{

    return true
}

}



function showDetails(){

    var totalNumbers = document.getElementById("totalNumbers")

    if(numbers.length > 0){

        var bigger = document.getElementById("bigger")
        var smaller = document.getElementById("smaller")
        var sum = document.getElementById("sum")
        var average = document.getElementById("average")

        totalNumbers.innerText = `O total de números é : ${numbers.length}`

        smaller.innerText = `O menor numero é: ${smallerOf(numbers)}`
        
        bigger.innerText = `O maior numero é: ${biggerOf(numbers)}`

        sum.innerText = `A soma de todos os números é: ${sumOf(numbers)}`

        average.innerText = `A média de todos os números é: ${averageOf(numbers)}`

    }else{
        window.alert = `A lista está vazia`
        
        totalNumbers.innerText = `A lista está vazia`
    }
}


function smallerOf(numbers){

    var smaller = 200;

    for(var cont = 0; cont < numbers.length; cont++){

        if(numbers[cont] < smaller){


            smaller = numbers[cont]

        }
    }

    return smaller
}

function biggerOf(numbers){

    var biggers = 0;

    for(var cont = 0; cont < numbers.length; cont++){

        if(numbers[cont] > biggers){


            biggers = numbers[cont]

        }
    }

    return biggers
}

function sumOf(numbers){

    var sum = 0;

    for(var cont = 0; cont < numbers.length; cont++){

       sum += numbers[cont]
    }

    return sum
}

function averageOf(numbers){

    var sum = 0;
    var average = 0;

    for(var cont = 0; cont < numbers.length; cont++){

       sum += numbers[cont]
    }

    average = sum/numbers.length

    return average
}


function clearAll(){

    clearDetails()
    clearTab()
    clearArray()
}

function clearDetails(){

    var bigger = document.getElementById("bigger")
    var smaller = document.getElementById("smaller")
    var sum = document.getElementById("sum")
    var average = document.getElementById("average")
    var tabNumbers = document.getElementById("tabNumbers");

    totalNumbers.innerText =  ``

    smaller.innerText = ``
    
    bigger.innerText = ``

    sum.innerText = ``

    average.innerText = ``

}

function clearTab(){

    var tabNumbers = document.getElementById("tabNumbers");

    tabNumbers.innerHTML = ``
}

function clearArray(){

    while(numbers.length){

        numbers.pop()
    }
}