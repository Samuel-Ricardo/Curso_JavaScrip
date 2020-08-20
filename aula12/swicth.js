var date = new Date()

var agora = date.getDay()

console.log("Hoje é dia "+agora)

switch(agora){

    case 0:

        console.log("hoje é Domingo")
    break;
    
    case 1:
        
        console.log("hoje é segunda")
    break;

        
    case 2:

        console.log("hoje é terça")
    break;

        
    case 3:

        console.log("hoje é quarta")
    break;
            
    case 4:

        console.log("hoje é quinta")
    break;
            
    case 5:

        console.log("hoje é sexta")
    break;

            
    case 6:

    console.log("hoje é sabado")
    break;
}
