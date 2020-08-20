function load(){

    var imageArea = document.getElementById("imageArea");
    var image = document.getElementById("image")
    var mesageArea = document.getElementById("mesageArea")

    var date = new Date()

    mesageArea.innerHTML = `Sao ${date.getHours()} Horas`
}