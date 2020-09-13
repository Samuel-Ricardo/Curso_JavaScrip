function addNumber(){

    var txtNumber = document.querySelector("input#number");
    var tabNumbers = document.getElementById("tabNumbers");
    
    var number = Number(txtNumber.value)
    var numbers = [``]

    if(isValid(txtNumber)){

        numbers.push(`o numero ${number} foi adicionado`)

        tabNumbers.innerHTML = ``

        numbers.forEach(num => {

            var item = document.createElement(`option`)
            
            item.text = numbers

            tabNumbers.appendChild(item)

           // item.value = `item ${num}`

        });

        

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