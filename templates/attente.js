function attente(){
    localStorage.removeItem('count');
    let urlParams = new URLSearchParams(window.location.search);
    let id_page = urlParams.get('id');
    fetch("http://45.145.166.47:5001/api/v1/verification-choix", {
        method: 'POST',
       headers: {
           id_page: id_page
       }
   }).then(res => res.json()).then(async (data) => {
    if(data.message == "Partie commence"){
        window.location.href = 'player1.html?id=' + id_page
    }
   })
}
attente()

setInterval(attente,600)