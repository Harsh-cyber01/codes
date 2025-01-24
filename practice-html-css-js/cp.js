
function toggleDarkMode() {
var body = document.body;
var darkMode = localStorage.getItem('darkMode'); // Get the current state from localStorage
                                      // If darkMode is enabled, disable it; if it's disabled, enable it
if (darkMode === 'enabled') {
body.classList.remove('dark-mode');
localStorage.setItem('darkMode', null);      // Set the state to null (disabled)
} else {
body.classList.add('dark-mode');
localStorage.setItem('darkMode', 'enabled');       // Set the state to 'enabled'
}
}
                               // Check if dark mode was enabled previously and set it accordingly
document.addEventListener('DOMContentLoaded', function() {
var darkMode = localStorage.getItem('darkMode');
var body = document.body;
if (darkMode === 'enabled') {
body.classList.add('dark-mode');
}
});


function run(){
    let ag = parseInt(document.getElementById("age").value); 
    
    if( ag <= 1 ){                                                                  /*isNaN(age) || */
        window.alert("invalid age");
               }
       else if(ag >= 18 && ag <= 60){
            window.alert("you can drive & age  is valid");
               }
         else if(ag >= 61 && ag <= 100){
              window.alert("you can drive age , but you must drive safely");
                     }
          else{
                 window.alert("you can't drive because of small age")
                }
                                           
}