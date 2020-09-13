function addNumber(){

    var txtNumber = document.querySelector("input#number");
    var tabNumbers = document.getElementById("tabNumbers");
    
    var number = Number(txtNumber.value)
    var numbers = []

    if(isValid(txtNumber) ){

        numbers.push(`o numero ${number} foi adicionado`)

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

    //var txtNumber = document.querySelector("input#number");

    if(txtNumber.value.length === 0){

        return false
    }else if(txtNumber.value == 0){

        return false
    }else{
        return true
    }
}