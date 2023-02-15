
console.log('This is app-6.js file')
// step-2: get 4 digit random numbers
function getPin(){
    const pin=genaratePin();
    const pinString=pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        console.log('pin not 4 digit');
        return getPin();
    }
}

// step-1
function genaratePin(){
    const random=Math.round(Math.random()*10000);
    return random;
}

// add click handlar on button
document.getElementById('generate-pin').addEventListener('click', function(){
   const pin_1=getPin();
//    console.log(pin_1)
// set pin_1 on inputField
const displayPinField= document.getElementById('display-pin')
 displayPinField.value =pin_1;
})
// --------------------------------------Calculator part----------
document.getElementById('calculator').addEventListener('click', function(event){
    // console.log('calculator btn clicked')
    // console.log(event.target)
    // console.log(event.target.innerText)
    const number= event.target.innerText;
if(isNaN(number)){
    console.log('This is not Number', number)
}
else{
   const typedNumberField= document.getElementById('typed-numbers')
//    typedNumberField.value= number;
// set number input Field
const previousTypedNumber= typedNumberField.value;
const newTypedNumber= previousTypedNumber + number;
typedNumberField.value= newTypedNumber;
}
})