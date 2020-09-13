function gerarTabuada(){

    var txtNumber = document.querySelector("input#number")
    var tabuada = document.getElementById("tabuada")

    var number = Number(txtNumber.value)

    if(txtNumber.value.length != 0){

        var cont = 0

        tabuada.innerHTML = ``

        while(cont < 11){

            var item = document.createElement(`option`)

            item.text = `${number} x ${cont} = ${number*cont}`

            tabuada.appendChild(item)

            item.value = `tab ${cont}`

            cont++
        }

    }else{

        window.alert("Insira um numero por favor");

    }
}