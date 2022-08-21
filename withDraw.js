// withDraw now to easy Way: To call the function 

// step: 1 > find the button and add eventListener 
document.getElementById('btn-withdraw').addEventListener('click',function(){
    //step: 2 > find the inputValue of withdraw 
    const inputFieldValue = getInputFeildValueById('input-withdraw');

    // step: 3 > find the withdraw total element 
    const withDrawElementTextValue = getElementPreviousTextValueById('withdraw-total');

   

    // step 6:> find the previosTotal Balance 
    const previousBalance = getElementPreviousTextValueById('total-balance');


    if(inputFieldValue > previousBalance ){
        alert('Please enter the amount less then your main balance');
    }
    else{
         // step :4 > calculate two number sum : inputWithDrawValue and previousWithDrawValue 
    const sumOfTotalWithDraw = inputFieldValue + withDrawElementTextValue;

    // step 5: > call the function and setElement withDraw Total 
    setElementTextValue('withdraw-total',sumOfTotalWithDraw);
     
           // step 7: subtract number from totalBalance to newAmount 
    const subtractOfTotalBalance  = previousBalance -  inputFieldValue;

    // step 8: call the funcion and set the element total balance 
    setElementTextValue('total-balance',subtractOfTotalBalance);
    }


})

    // clear deposit total previous  element 
    function clearDeposit(){
        const withDrawTotal = document.getElementById('withdraw-total').innerText = '00'; 
    }
