const myArray = [];

function writeCards(myArray = ["Guadalupe", "Ollie", "Aki"] , event = "surprise"){
  for(let i = 0 ; i<myArray.length; i++){

    console.log(`Thank you, ${myArray[i]}, for the wonderful ${event} gift!`)


  }
  return myArray;
}

function countDown(n){
  while(n>=0){

   console.log(n);

    n--;

  }


}