
var numbers = []




function addNumber(){

    var txtNumber = document.querySelector("input#number");
    var tabNumbers = document.getElementById("tabNumbers");
    
    var number = Number(txtNumber.value)


    if(isValid(txtNumber) && isValid(number)){

        numbers.push(number)

        tabNumbers.innerHTML = ``

        clearDetails()

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
    }else if(number < 1 || number > 100){

        return false
    }else{
       return true
   }
}

function isValid(number){

    if(numbers.length > 0){

        for(var cont = 0; cont < numbers.length; cont++){
        
        if (number == numbers[cont]){
            
            return false
        }else{

            return true
        }
    }

}else{

    return true
}

}



showDetails(){

    var totalNumbers = document.getElementById("totalNumbers")

    if(numbers.length > 0){}

    
    var bigger = document.getElementById("bigger")
    var smaller = document.getElementById("smaller")
    var sum = document.getElementById("sum")
    var average = document.getElementById("average")

    totalNumbers.innerText = `O total de números é : ${numbers.length}`

}else{
    window.alert = `A lista está vazia`
    
    totalNumbers.innerText = `A lista está vazia`
}
}
