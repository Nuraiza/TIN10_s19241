const temp = require('./temperature.js');
const dist = require('./distance.js');


var tempbutton = document.getElementById('tempbutton');
tempbutton.addEventListener('click', function(){
    document.getElementById('tempresult').innerHTML="Result :"+temp();
})

var distbutton = document.getElementById('distbutton');
distbutton.addEventListener('click', function(){
     document.getElementById('distresult').innerHTML = "Result : " + dist();
    
})

