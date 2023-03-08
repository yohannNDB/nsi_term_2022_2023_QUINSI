function trouve(){
    player = localStorage.getItem("player")
    let urlParams = new URLSearchParams(window.location.search);
    let id_page = urlParams.get('id');
    var question = prompt("Prenom de la personne trouvé ?");
    if (question !== null && question !== '') {
        fetch("http://45.145.166.47:5001/api/v1/tentative", {
         method: 'POST',
        headers: {
            id_page:id_page,
            player: player,
            proposition:question

        }
    }).then(res => res.json()).then(async (data) => {
        setTimeout(alert(data.message),1000)
        })
    }
}

function setpage(){
    console.log("eththtest")
    player = localStorage.getItem("player")
    count = localStorage.getItem("count")
    let urlParams = new URLSearchParams(window.location.search);
    let id_page = urlParams.get('id');
    if(count == null){
        localStorage.setItem("count", 0)
        if(player == "R"){
            console.log("tesgthfght")
            var Attente = document.getElementById("Attente");
            Attente.style.display = "block";
            Attente.innerHTML = "Veuillez patienter que votre adversaire pose une question"
            verification_question()

        }
        else{
            console.log("test")
            var question = document.getElementById("question");
            question.style.display = "block";
        }
    }
}
setpage()

function question(){
    player = localStorage.getItem("player")
    count = localStorage.getItem("count")
    let urlParams = new URLSearchParams(window.location.search);
    let id_page = urlParams.get('id');
    var question = prompt("Quelle est votre question ?");
    if (question !== null && question !== '') {
        fetch("http://45.145.166.47:5001/api/v1/add-question", {
         method: 'POST',
        headers: {
            id_page:id_page,
            player: player,
            question:question
        }
    }).then(res => res.json()).then(async (data) => {
        setTimeout(alert(data.message),1000)
        var Attente = document.getElementById("Attente");
        Attente.style.display = "block";
        Attente.innerHTML = "Veuillez patienter que votre adversaire pose une question"
        var question = document.getElementById("question");
        question.style.display = "none";
        count = count + 1
        console.log(count)
        verification_reponse()
        })
    }
}

async function verification_reponse() {
    const player = localStorage.getItem("player");
    const count = localStorage.getItem("count");
    const urlParams = new URLSearchParams(window.location.search);
    const id_page = urlParams.get("id");
  
    let nouvelle_reponse = false;
    
    // Boucle while qui vérifie toutes les secondes s'il y a une nouvelle réponse
    while (!nouvelle_reponse) {
      fetch("http://45.145.166.47:5001/api/v1/verification-reponse", {
        method: "POST",
        headers: {
          id_page: id_page,
          player: player,
        },
      })
        .then((res) => res.json())
        .then(async (data) => {
          if (data.message == "Nouvelle reponse") {
            nouvelle_reponse = true;
            await alert("Vous avez reçu une réponse : \n"+ data.reponse)
            // Lancer une autre fonction une fois qu'une nouvelle réponse est détectée
            await verification_question();
          }
        });
  
      // Attendre 1 seconde avant de vérifier à nouveau
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
async function verification_question() {
    const player = localStorage.getItem("player");
    const count = localStorage.getItem("count");
    const urlParams = new URLSearchParams(window.location.search);
    const id_page = urlParams.get("id");
  
    let nouvelle_question = false;
  
    // Boucle while qui vérifie toutes les secondes s'il y a une nouvelle question
    while (!nouvelle_question) {
      fetch("http://45.145.166.47:5001/api/v1/verification-question", {
        method: "POST",
        headers: {
          id_page: id_page,
          player: player,
        },
      })
        .then((res) => res.json())
        .then(async (data) => {
            console.log(data)
          if (data.message == "Nouvelle question") {
            nouvelle_question = true;
            const question = await prompt(
              "Vous avez reçu une nouvelle question :\n" + data.question);
            if (question !== null && question !== "") {
              fetch("http://45.145.166.47:5001/api/v1/add-reponse", {
                method: "POST",
                headers: {
                  id_page: id_page,
                  player: player,
                  reponse: question,
                },
              })
                .then((res) => res.json())
                .then(async (data) => {
                  await alert(data.message);
                  const Attente = document.getElementById("Attente");
                  Attente.style.display = "none";
                  const question = document.getElementById("question");
                  question.style.display = "block";
                });
            }
          }
        });
  
      // Attendre 1 seconde avant de vérifier à nouveau
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }


  function leave(){
    window.location.href = '../Acceuil.html'
  }