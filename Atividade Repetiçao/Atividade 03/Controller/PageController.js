function addNumber(){

    var txtNumber = document.querySelector("input#number");
    var tabNumbers = document.getElementById("tabNumbers");
    
    var number = Number(txtNumber.value)
    var numbers = [``]

    if(isValid(txtNumber)){

        numbers.push(`o numero ${number} foi adicionado`)

        var item = document.createElement(`option`)

        tabNumbers.appendChild(item)

        item.Value = ``

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