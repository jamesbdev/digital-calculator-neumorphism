
//add event listener to all buttons
//select buttons
const buttons = document.querySelectorAll("input.number , input.operator");
const screen = document.querySelector("input[type='text']");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");


//clear the screen 
clear.addEventListener('click', function(){
    screen.value = "";
});

//evaluate the expression and show the result on the screen
equals.addEventListener('click', function(){
    //get the value of the screen 
    const screenValue = screen.value;
    //evaluate the expression
    //split the expression 
    //if the expression contains + make addition
    //else if expression contains - make substraction 

});

//take the value from the button and show it on the screen
buttons.forEach(button => {
    button.addEventListener('click', function(){
        let operation = "";
        //const number = parseInt(button.value);
        operation += button.value;
   
         //update the screen input with the value of number 
        screen.value += operation;
    });
});

//function for addition
const addition = (a, b) => {
    return a + b;
}



