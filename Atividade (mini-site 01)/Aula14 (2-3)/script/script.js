function load(){

    var imageArea = document.getElementById("imageArea");
    var image = document.getElementById("image")
    var mesageArea = document.getElementById("mesageArea")

    var date = new Date()

    var now = 15

    mesageArea.innerHTML = `Sao ${now} Horas`


    if(now < 12 && now >= 0){

            //mesageArea.innerHTML = "bom dia";

            image.src = "/Atividade (mini-site 01)/Aula14 (2-3)/images/morning.jpg"

        }else if(now < 18){

            //mesageArea.innerHTML = "boa tarde"

            image.src = "/Atividade (mini-site 01)/Aula14 (2-3)/images/afternoon.jpg"

        }else{

           // mesageArea.innerHTML = "boa noite"

           image.src = "/Atividade (mini-site 01)/Aula14 (2-3)/images/nigth.jpg"
      }
}