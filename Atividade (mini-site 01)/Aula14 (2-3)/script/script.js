function load(){

    var imageArea = document.getElementById("imageArea");
    var image = document.getElementById("image")
    var mesageArea = document.getElementById("mesageArea")
    var background = document.getElementById("background")

    var date = new Date()

    var now = date.getHours()

    mesageArea.innerHTML = `Sao ${now} Horas`


    if(now < 12 && now >= 5){

            //mesageArea.innerHTML = "bom dia";

            image.src = "/Atividade (mini-site 01)/Aula14 (2-3)/images/morning.jpg"

            background.style.background = "#d9951e"

        }else if(now < 18 && now > 12){

            //mesageArea.innerHTML = "boa tarde"

            image.src = "/Atividade (mini-site 01)/Aula14 (2-3)/images/afternoon.jpg"

            document.body.style.background = "#de4e0c"

        }else{

           // mesageArea.innerHTML = "boa noite"

           image.src = "/Atividade (mini-site 01)/Aula14 (2-3)/images/nigth.jpg"

           background.style.background = "#1a3d44"
      }
}