const sect = document.getElementById("section")
const card = document.getElementById("card");
const info = document.getElementById("info");
const valorPerfil = sect.getBoundingClientRect();
const valorcard = Math.ceil(valorPerfil["y"])
function animate(){
    if ((valorcard - valorPerfil['y']) < (Math.ceil(window.scrollY))){
        card.classList.add('animacao')
        info.classList.add('animacaoLeft')
    }
}

window.addEventListener('scroll', animate)






let skill = document.getElementById("skils")
let posSkil = skill.getBoundingClientRect()
const elementos = document.getElementsByClassName("containerEXP")
const posYSkil = Math.ceil(posSkil["y"]);
function animateSkil (){
    if((posYSkil *0.7) < window.scrollY){
        skill.classList.add("animeSkill")
        elementos[0].style.display = "flex"
    }
    else{
        elementos[0].style.display = "none"
    }
}

window.addEventListener("scroll", animateSkil);

const windowWork = document.getElementById("works")
const btnWork = document.getElementById("btnWork");
const btnOFF = document.getElementById("workOff");
const workAllow = document.getElementsByClassName("containerWorkAllow");

const contato = document.getElementsByClassName("containerC");

function hideBtn(){
  workAllow[0].style.display = "flex"
  btnWork.style.display = "none"
  btnOFF.style.display = "inline-flex"
  contato[0].style.top = "40px"
  windowWork.style.height = "100%"

}

function showBtn(){
  workAllow[0].style.display = "none"
  btnOFF.style.display = "none"
  btnWork.style.display = "inline-flex"
  contato[0].style.top = "0px"
  windowWork.style.height = "100%"
}


btnOFF.addEventListener("click", showBtn);
btnWork.addEventListener("click", hideBtn);


// Animation opacity from Works

const works = document.getElementById("works");
const containerWorks = document.getElementsByClassName("containerWork");
let posWork = works.getBoundingClientRect();
let elementWork = Math.ceil(posWork["y"])
function animateWork(){
  if((elementWork * 0.7) < window.scrollY){
    works.classList.add("animeSkill")
    containerWorks[0].style.display = "flex"
  }
  else{
    containerWorks[0].style.display = "none"
  }

}
window.addEventListener("scroll", animateWork);


// Animation opacity from Contact



const contact = document.getElementById("contact");
const containerContact = document.getElementsByClassName("containerC");
let posContact = contact.getBoundingClientRect();
let elementContact = Math.ceil(posContact["y"])
function animateContact(){
  if((elementContact* 0.7) < window.scrollY){
    contact.classList.add("animeSkill")
    containerContact[0].style.display = "flex"
  }
  else{
    containerContact[0].style.display = "none"
  }

}
window.addEventListener("scroll", animateContact);




  // Hamburguer Button

const btnMenu = document.getElementById("btn_burguer");
const cardMenu = document.getElementsByClassName("cardMenu")
const ulMenu = document.getElementById("ulMenu")
const main = document.getElementById("main")
const idMenu = document.querySelectorAll('a')
  function showMenu(){
    if (cardMenu[0].style.display == "none"){
      cardMenu[0].style.display = "flex"
      ulMenu.style.opacity = "1"
      ulMenu.style.display = "block"
      main.style.top = "150px"
    }else{
      cardMenu[0].style.display = "none"
      main.style.top = "0px"
    }

  }

  function closeMenu(){
    cardMenu[0].style.display = "none"
    main.style.top = "0px"
  }

  for(let i = 0; i < idMenu.length; i++){
    idMenu[i].addEventListener('click', closeMenu)
  }




btnMenu.addEventListener('click', showMenu);

