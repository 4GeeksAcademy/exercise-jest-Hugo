let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

 const fromDollarToYen = function(valueInDollar){

    let valueInEuro = valueInDollar/oneEuroIs.USD;
     let valueInYen = valueInEuro * oneEuroIs.JPY;
     return parseFloat(valueInYen.toFixed(2));
 }

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
  return parseFloat(valueInDollar.toFixed(2));
 }


const fromYenToPound = function(valueInYen){
   let valueInEuro = valueInYen / oneEuroIs.JPY;
    let valueInPound =  valueInEuro * oneEuroIs.GBP;
  return parseFloat(valueInPound.toFixed(2));
 }


const sum = (a,b) => {
    return a + b
}


console.log(sum(7,3))
console.log(fromDollarToYen(1));
console.log(fromEuroToDollar(1));
console.log(fromYenToPound(1));



module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};