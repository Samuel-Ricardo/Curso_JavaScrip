
var numbers = []

function addNumber(){

    var txtNumber = document.querySelector("input#number");
    var tabNumbers = document.getElementById("tabNumbers");
    
    var number = Number(txtNumber.value)


    if(isValid(txtNumber) ){

        numbers.push(`o numero ${number} foi adicionado`)

        txtNumber.innerHTML = ``

        for (var cont = 0; cont < numbers.length; cont++) {

            var item = document.createElement(`option`)
            
            item.text = numbers[cont]

            tabNumbers.appendChild(item)           
        }

     //   numbers.forEach(num => {

           

           // item.value = `item ${num}`

     //   });

        

    }else{

        window.alert(`Numero invalido`)
    }

}

function isValid(txtNumber){

    var number = Number(txtNumber.value)

  //  number === numbers.

    if(txtNumber.value.length === 0 || txtNumber.value == 0){

        return false
    }else if(number < 1 || number > 100){

        return false
    }else if(isValid(number)){
        return true
    }
}

function isValid(number){

    numbers.forEach(num => {
        
        if (number === num){
            
            return false
        }else{

            return true
        }

    });

}