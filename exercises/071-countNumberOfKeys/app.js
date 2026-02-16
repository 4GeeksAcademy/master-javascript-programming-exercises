let obj = {
    firstName: "Rafael",
    lastName: "Leao",
    country: "Italy",
    city: "Milan",
    phoneNum: "123-456-789",
    jerseyNum: 27
}

function countNumberOfKeys(obj) {
    // your code here
   let llaves = 0;

   for(let i in obj){
    llaves += 1 
   }

   return llaves
}

let output = countNumberOfKeys(obj);
console.log(output); // --> 6
