var Apre_e_Fecha_Menu = false

function ApagarTextoPes(){
    Input = document.getElementById("InputPes")
    Input.value = ""
}

function ApreFechaMenu(){
    var MenuVer = document.getElementById("MenuVertical")
    var TextoBtns = document.querySelectorAll(".TXTMenuVer")
    var BtnsVer = document.querySelectorAll(".BtnMenuve")
    var IconsBtnsVer = document.querySelectorAll(".IconsMenuver")
    var ConteúdoPrin = document.querySelectorAll(".ConteudoPrinJS")
    var Rodapé = document.querySelectorAll(".Rodapé")
    var BtnAtivo = document.querySelectorAll(".AtivoMenVer")

    if(Apre_e_Fecha_Menu === false){
        Apre_e_Fecha_Menu = true
        MenuVer.style.cssText = "position: fixed; width: 42vh; height: 100%; background-color: rgb(17, 17, 17); z-index: 2; box-shadow: 0.2vh 0 rgb(43, 43, 43); display: flex; flex-direction: column; gap: 6vh; padding-top: 6vh; align-items: center;"
        for(var i = 0; i < TextoBtns.length; i++){
            TextoBtns[i].style.display = "block"
        }
        for(var i = 0; i < BtnsVer.length; i++){
            BtnsVer[i].style.cssText = "width: 34vh; height: 8.6vh; background-color: rgb(23, 23, 23); align-items: center; border-radius: 2.6vh; cursor: pointer; transition: 0.4s; display: flex; flex-direction: row; padding-left: 2.8vh;"
        }
        for(var i = 0; i < IconsBtnsVer.length; i++){
            IconsBtnsVer[i].style.paddingTop = "1vh"
        }
    BtnAtivo[0].style.backgroundColor = "rgb(61, 26, 203)"
    } else{
        Apre_e_Fecha_Menu = false
        for(var i = 0; i < Rodapé.length; i++){
            Rodapé[i].style.filter = "none"
        }
        ConteúdoPrin[0].style.filter = "none"
        MenuVer.style.cssText = "position: fixed; width: 12.7vh; height: 100%; background-color: rgb(17, 17, 17); z-index: 2; box-shadow: 0.2vh 0 rgb(43, 43, 43); display: flex; flex-direction: column; align-items: center; gap: 5vh; padding-top: 3vh;"
        for(var i = 0; i < TextoBtns.length; i++){
            TextoBtns[i].style.display = "none"
        }
        for(var i = 0; i < BtnsVer.length; i++){
            BtnsVer[i].style.cssText = "width: 8.6vh; height: 8.6vh; background-color: rgb(23, 23, 23); text-align: center; border-radius: 2.6vh; cursor: pointer; transition: 0.4s; display: flex; flex-direction: column;"
        }
        for(var i = 0; i < IconsBtnsVer.length; i++){
            IconsBtnsVer[i].style.paddingTop = "1.9vh"
        }
        BtnAtivo[0].style.backgroundColor = "rgb(61, 26, 203)"
    }
}

document.querySelectorAll(".ConteudoPrinJS")[0].addEventListener("click",function(){
    Apre_e_Fecha_Menu = true
    ApreFechaMenu()
})

var Rodapés = document.querySelectorAll(".Rodapé")
for(var i = 0; i < Rodapés.length; i++){
    Rodapés[i].addEventListener("click",function(){
        Apre_e_Fecha_Menu = true
        ApreFechaMenu()
    })
}

var Btnslider = document.querySelectorAll(".btnsd");
var Div = document.getElementById("ImgCursos")
var tc = document.getElementById("o")
for (let i = 0; i < Btnslider.length; i++) {
    Btnslider[i].addEventListener("click", function () {
        for (let l = 0; l < Btnslider.length; l++) {
            Btnslider[l].classList.remove("atv")
        }
        Btnslider[i].classList.add("atv")
        if(i === 0){
            Div.style.backgroundImage = 'url("Banner\ do\ C.png")'
            tc.textContent = "Tópicos de C e C++"
        } else if(i === 1){
            Div.style.backgroundImage = 'url("Banner\ do\ Java.png")'
            tc.textContent = "Liguagem Java"
        } else if(i === 2){
            Div.style.backgroundImage = 'url("Banner\ do\ SQL.png")'
            tc.textContent = "SQL Avançado"
        }
    })
}
