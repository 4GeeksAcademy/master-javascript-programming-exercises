function isOldEnoughToDrinkAndDrive(edad) {
  // your code here
  if (edad>=16 && edad<21) {
        console.log("puedes conducir pero no beber")
    }else if (edad>=21){
        console.log("puedes conducir ó beber, pero nunca juntos")
    }else {
        console.log("no puedes ni conducir ni beber.")
    }	
}
isOldEnoughToDrinkAndDrive(prompt("¿cual es su edad?"));
