function addNumber(){

    var txtNumber = document.querySelector("input#number");
    var tabNumbers = document.getElementById("tabNumbers");
    
    var number = Number(txtNumber.value)
    var numbers =  numbers[0]

    if(isValid(number)){

        numbers.addNumber(number)
    }else{

        window.alert(`Numero invalido`)
    }

}