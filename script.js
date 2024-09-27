

//add event listener to all buttons
//select buttons
const buttons = document.querySelectorAll("input.number");
const screen = document.querySelector("input[type='text']");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
console.log(clear);
console.log(equals);

//clear the screen 
clear.addEventListener('click', function(){
    screen.value = "";
});

equals.addEventListener('click', function(){
    //get the value of the screen 
    const screenValue = screen.value;
    
    //evaluate the expression
    //split the expression 
    //if the expression contains + make addition
    //else if expression contains - make substraction 

});


buttons.forEach(button => {
    button.addEventListener('click', function(){
        //console.log(typeof(button.value));
        let operation = "";
        const number = parseInt(button.value);
        operation += button.value;
        console.log(operation);
        //capture the number and concatenate the operation 
        screen.value += operation;
        //display the number on the screen
        //get the screen input 
        //update the screen input with the value of number 
        
    });
});

const addition = (a, b) => {
    return a + b;
}



