
nome()

let thanks = obrigado("Muito obrigado pelos ensinamentos", " ")

console.log(thanks + " obrigado por tudo, galera da Dio!")

function obrigado(V, splitchar){
    let v1 = V.split(splitchar)[0]
    return v1

}
function nome(){
    if(1 < 3){
        
        P("Jonas é " +"Ferro", "Jonas é " + "Bronze",  "Jonas é " + "Prata", "Jonas é " + "Ouro", "Jonas é " + "Diamante", "Jonas é " + "Lendário", "Jonas é " + "Imortal,") 
    }
}

function P(F, B, P, O, D, L, I) {

    let vitorias = 0
    for(let i = 0; i < 1; i++) {
        console.log("Parabéns ")
    
    if(vitorias === 10){        
    console.log( F + " menor do que nível 10")


    }

      if (vitorias > 11 && vitorias < 20){
            console.log(B + " avançou mais um nível") 

    }
       if (vitorias >= 21 && vitorias <= 50){
            console.log(P + " Parabéns, a sua jornada acabou de começar")

    }
        if (vitorias >= 51 && vitorias <= 80){
            console.log(O + " já pode falar para seus familiares de suas grandes conquistas")

    }
        if (vitorias >= 81 && vitorias <= 90) {
            console.log(D + " os diamantes são realmente brutos!")

    }
        if (vitorias >= 91 && vitorias <= 100){
            console.log(L + " você é uma lenda!")

    }
        else {
            console.log(I + " imortais nunca morrem!")
    }
}
}