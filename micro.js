let pipoca = 10;
let macarrao = 8;
let carne = 15;
let feijao = 12;
let brigadeiro = 8;


function micro(pratos, tempo) {

    switch(pratos) {
        case "pipoca" :
            if (tempo < 10) 
            console.log(`Tempo insuficiente !`);
            else if (tempo > 10 && tempo <19) 
            console.log(`Está pronto, bom apetite !`);
            else if (tempo >= 21 && tempo <= 29) 
            console.log(`A pipoca queimou !`);
            else (tempo => 30)
            console.log(`Kabummm !`) 
        break;
        case "macarrao" :
            if (tempo < 8) 
            console.log(`Tempo insuficiente !`);
            else if (tempo >= 8 && tempo <= 15) 
            console.log(`Está pronto, bom apetite !`);
            else if (tempo >= 16 && tempo <= 23)
            console.log(`A comida queimou !`);
            else (tempo => 24)
            console.log(`Kabummm !`) 
        break;
        case "carne" :
            if (tempo < 15) 
            console.log(`Tempo insuficiente !`);
            else if (tempo >= 15 && tempo <= 29) 
            console.log(`Está pronto, bom apetite !`);
            else if (tempo >= 30 && tempo <= 44) 
            console.log(`A comida queimou !`);
            else (tempo => 45) 
            console.log(`Kabummm !`) 
        break;
        case "feijao" :
            if (tempo < 12) 
            console.log(`Tempo insuficiente !`);
            else if (tempo >= 12 && tempo <= 23) 
            console.log(`Está pronto, bom apetite !`);
            else if (tempo >= 24 && tempo <= 35) 
            console.log(`A comida queimou !`);
           else (tempo => 36) 
            console.log(`Kabummm !`) 
        break;
        case "brigadeiro" :
            if (tempo < 8) 
            console.log(`Tempo insuficiente !`);
            else if (tempo >= 8 && tempo <= 15) 
            console.log(`Está pronto, bom apetite !`);
            else if (tempo >= 16 && tempo <= 23) 
            console.log(`A comida queimou !`);
            else (tempo => 24) 
            console.log(`Kabummm !`) 
        break;
        default:
            return console.log(`Prato inexistente !`) 
    }
} 

micro("outros", 0); 
micro("macarrao", 20);
micro("carne", 10);
micro("feijao", 15);
micro("brigadeiro", 30);

micro("pipoca", 30);