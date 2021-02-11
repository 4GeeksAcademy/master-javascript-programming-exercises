function isOldEnoughToVote(edad) {
  // your code here
if (edad>=18) {
        console.log("si puedes ejercer el voto, un USA")
    }else{
        console.log("lo siento, no puedes votar ni aqui ni en usa")
    }	
}
isOldEnoughToVote(prompt("¿cual es su edad?"));