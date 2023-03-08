function setpage(){
    id_compte = localStorage.getItem("id_compt")
    if(id_compte == null){
        const randomNumber = Math.floor(Math.random() * 90000000) + 10000000;
        localStorage.setItem("id_compt",randomNumber)
        id_compte = randomNumber
    }
    let urlParams = new URLSearchParams(window.location.search);
    let id_page = urlParams.get('id');
    fetch("http://45.145.166.47:5001/api/v1/verification-page", {
         method: 'POST',
        headers: {
            id_page:id_page,
            id_compte: id_compte
        }
    }).then(res => res.json()).then(async (data) => {
        console.log(data)
        if(data.message == "Une erreur c'est produite"){
            window.location.href = '../../Acceuil.html'
        }
        if(data.message == "Receveur de la partie"){
            localStorage.setItem("player", "R")
        }
        else{
            localStorage.setItem("player", "C")
        }
        })
}
setpage()
function enregistrerChoixJ2(nom){
    player = localStorage.getItem("player")
    let urlParams = new URLSearchParams(window.location.search);
    let id_page = urlParams.get('id');
    fetch("http://45.145.166.47:5001/api/v1/set-choix", {
        method: 'POST',
       headers: {
           player:player,
           id_page: id_page,
           choix:nom
       }
   }).then(res => res.json()).then(async (data) => {
    window.location.href = 'attente.html?id=' + id_page
   })
}