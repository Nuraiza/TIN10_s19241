module.exports = function () {
  const input = parseFloat(document.getElementById('dinput').value)
  const from = document.getElementById('distfrom').value
  const to = document.getElementById('distto').value
  
  if (from === 'mile') {
      if(to==='kilometer'){
           return input * 1.609344;
      } else{
          return input;
      }
  
  } else if (from === 'kilometer') {
      if(to==='mile'){
           return input / 1.609344;
      }else{
          return input;
      }
      
    
  }
}
