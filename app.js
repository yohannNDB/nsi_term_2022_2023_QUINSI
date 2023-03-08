async function new_game(){
    try {
        id = localStorage.getItem("id_compt")
        fetch("http://45.145.166.47:5001/api/v1/new-game/", {
            method: 'POST',
            headers: {
                id:id,
            }
          }).then(res => res.json()).then(async (data) =>{
            await localStorage.setItem("code", data.id)
            var lien = document.getElementById("lien");
            lien.style.display = "block";
            lien.innerHTML = "http://45.145.166.47/nsi_term_2022_2023_QUINSI-main/templates/game2.html?id=" + data.id;

            var new_game = document.getElementById("new_game");
            new_game.style.display = "none";
            var start_game = document.getElementById("start_game");
            start_game.style.display = "block"
        })

      } catch (error) {
        console.error(error);
      }
}
async function start(){
    code = localStorage.getItem("code")
    fetch("http://45.145.166.47:5001/api/v1/verification-start/", {
         method: 'POST',
        headers: {
            code:code,
        }
    }).then(res => res.json()).then(async (data) => {
            if(data.message == "La partie commence"){

                var erreur = document.getElementById("erreur");
                erreur.style.display = "none";

                var succesDiv = document.getElementById("succes");
                succesDiv.style.display = "block";
                succesDiv.innerHTML = data.message;

                code = localStorage.getItem("code")
                window.location.href = 'templates/game2.html?id=' + code
            }
            else{
                var erreur = document.getElementById("erreur");
                erreur.style.display = "block";
                erreur.innerHTML = data.message;
            }
        })
}
async function setpage(){
    id_compte = localStorage.getItem("id_compt")
    if(id_compte == null){
        const randomNumber = Math.floor(Math.random() * 90000000) + 10000000;
        localStorage.setItem("id_compt",randomNumber)
    }
}
setpage()