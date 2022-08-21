// its is utility function ,use for another page 
// step 1: find the inputField value by Id 
function getInputFeildValueById(InputFieldID){
    const inputFieldValue = document.getElementById(InputFieldID);
    const inputFieldValueString = inputFieldValue.value;
    const inputFieldNewAmount = parseFloat(inputFieldValueString);
     inputFieldValue.value = '';
    return inputFieldNewAmount;

}
// step 2: find the textElement previous value by id 
function getElementPreviousTextValueById(ElementTextId){
    const preElementTextValue = document.getElementById(ElementTextId);
    const preElementTextValueString = preElementTextValue.innerText;
    const previousElementValue = parseFloat(preElementTextValueString);
    return previousElementValue;
}

// setElement value by id 
function setElementTextValue(ElementValueId,newValue){
    const setElementValue = document.getElementById(ElementValueId);
    const setElementText = setElementValue.innerText;
    setElementValue.innerText = newValue;
}
