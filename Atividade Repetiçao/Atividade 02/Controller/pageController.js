function gerarTabuada(){

    var txtNumber = document.querySelector("input#number")
    var btn = document.getElementById("tabuada")

    var numer = Number(txtNumber.value)

    if(txtNumber.value.length != 0){

        var cont = 0

        while(cont < 11){

            var item = document.createElement(`option`)

            item.text = `${number} x ${cont} = ${number*cont}`


        }

    }else{

        window.alert("Insira um numero por favor");

}