/***********************************
           Event Listner
***********************************/


document.querySelector(".add__btn").addEventListener('click',ctrlAddItem);



    document.addEventListener('keypress', function(event){

        if(event.keyCode === 13){
            ctrlAddItem();
        }


    });
    
    
    
    
    // This code runs the function whenever keycode 13 || the "Enter" key is pressed.
