var hora = new Date()

var agora = hora.getHours()

console.log(`Sao exatamente ${agora} horas`)

if(agora > 12  ){

    console.log("bom dia");

}else if(agora < 18){

    console.log("boa tarde")
}else{

    console.log("boa noite")
}