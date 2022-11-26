let explorer = true

function cardOut(){
   const fig = document.getElementById("fig-nlw")
   if(explorer == true){
      fig.setAttribute("src","./assets/figurinha2.svg")
      explorer = false
   }
   else{
      fig.setAttribute("src","./assets/figurinha.svg")
      explorer = true
   }
    
}

