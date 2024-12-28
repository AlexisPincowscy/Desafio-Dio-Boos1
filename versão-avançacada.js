const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o nome do herói: ', (nomeHeroi) => {
    rl.question('Digite o nível do herói: ', (nivelHeroi) => {
        nivelHeroi = parseInt(nivelHeroi);

        switch (true) {
            case nivelHeroi >= 0 && nivelHeroi < 1000:
                nivelHeroi = "Ferro";
                break;
            case nivelHeroi >= 1000 && nivelHeroi < 2000:
                nivelHeroi = "Bronze";
                break;
            case nivelHeroi >= 2000 && nivelHeroi < 5000:
                nivelHeroi = "Prata";
                break;
            case nivelHeroi >= 5000 && nivelHeroi < 7000:
                nivelHeroi = "Ouro";
                break;
            case nivelHeroi >= 7000 && nivelHeroi < 8000:
                nivelHeroi = "Platina";
                break;
            case nivelHeroi >= 8000 && nivelHeroi < 9000:
                nivelHeroi = "Ascendente";
                break;
            case nivelHeroi >= 9000 && nivelHeroi < 10000:
                nivelHeroi = "Imortal";
                break;
            default:
                nivelHeroi = "Desconhecido";
        }

        console.log("O Herói " + nomeHeroi + " está no nível " + nivelHeroi);
        rl.close();
    });
});