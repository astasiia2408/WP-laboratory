function argument() {
    x = Math.floor(Math.random() * (300 - 2 + 1)) + 10;
    let y = Number.isInteger(x);
  if(y){
      if (x%2==0){
          console.log("Рандомне число " + x + " парне!");
      }
      else {
        console.log("Рандомне число " + x + " непарне!");
      }
  } 
  else {
    console.log(" ")
  }
}

function numbers(){
  let mas = [];
  let sum = 0;
  while(true)
  {
    let flag = true;
    for (x=1; x<20;x++) {
         if(x===1){
           console.log("1 не є простим числом!");
         }
         else {
    for(k = 2; k < x; k++){
        if(x % k == 0){
            flag = false;
            break;
            }
            else {
       flag = true;}
     }
     if(flag){
        mas.push(x);
        if(mas.length == 5){ 

        for(k = 0; k < mas.length;k++){
         console.log(mas[k]);
          sum += mas[k];
        }
      }
      }

    }
      console.log("Сума перших 5 простих чисел дорівнює " + parseInt(sum));


}

  break;
  }
}

function chislo()
{
    let addit ;
    let x=6;
    addit = Math.floor((Math.pow(10, x + 1) + 10 -(9 * x)) / 81);
    console.log(addit);
}

Task1.addEventListener("click", argument, true)
Task2.addEventListener("click", numbers, false)
Task3.addEventListener("click", chislo, false)