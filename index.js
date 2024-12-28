let nivelHeroi = 9500;
let nomeHeroi = "Garen";
if (nivelHeroi <= 1000) {
    nivelHeroi = "Ferro";   
    console.log("O Herói " + nomeHeroi + " está no nível " + nivelHeroi);
} else if (nivelHeroi >= 1001 && nivelHeroi < 2000) {
    nivelHeroi = "Bronze";  
    console.log("O Herói " + nomeHeroi + " está no nível " + nivelHeroi);
} else if (nivelHeroi >= 2001 && nivelHeroi < 5000) {
    nivelHeroi = "Prata";
    console.log("O Herói " + nomeHeroi + " está no nível " + nivelHeroi);
} else if (nivelHeroi >= 5001 && nivelHeroi < 7000) {
    nivelHeroi = "Ouro";
    console.log("O Herói " + nomeHeroi + " está no nível " + nivelHeroi);
} else if (nivelHeroi >= 7001 && nivelHeroi < 8000) {
    nivelHeroi = "Platina";
    console.log("O Herói " + nomeHeroi + " está no nível " + nivelHeroi);
} else if (nivelHeroi >= 8001 && nivelHeroi < 9000) {
    nivelHeroi = "Ascendente";
    console.log("O Herói " + nomeHeroi + " está no nível " + nivelHeroi);
} else if (nivelHeroi >= 9001 && nivelHeroi < 10000) {
    nivelHeroi = "Imortal";
    console.log("O Herói " + nomeHeroi + " está no nível " + nivelHeroi);
} else if (nivelHeroi >= 10001) {
    nivelHeroi = "Radiante";
    console.log("O Herói " + nomeHeroi + " está no nível " + nivelHeroi);
} else {
        console.log("Nível não encontrado");
}

