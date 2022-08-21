// deposit now easy way: just call the function and set the parameter

// button click addEventListener 
document.getElementById('btn-deposit').addEventListener('click',function(){
    const inputFieldValueFind = getInputFeildValueById('input-deposit');
 

    // call the function to get the element value deposit
    const  previousElementDeposit = getElementPreviousTextValueById('deposit-total');
    // calculta the newInputvalue and previousElementValue 
    const sumOfDeposit = inputFieldValueFind + previousElementDeposit;
    
    // call the function to set the total elementValue of deposit total
    setElementTextValue('deposit-total', sumOfDeposit);

    // call the funciton to find the previous value of total balance 
    const   previousElementValueOfTotalBalance = getElementPreviousTextValueById('total-balance');

    // calculate newDepositAmont and previous total balance 
    const sumOfTotalBalance = inputFieldValueFind + previousElementValueOfTotalBalance;

    // call the function to set the value of total balance 
    setElementTextValue('total-balance', sumOfTotalBalance);

})

// clear deposit total previous  element 
function clearWithDraw(){
    const withDrawTotal = document.getElementById('deposit-total').innerText = '00'; 
}
