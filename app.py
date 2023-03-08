#Ce code crée une application web Flask qui comprend plusieurs routes pour différentes pages.

from flask import Flask, render_template, url_for 
# cette ligne importe les modules Flask, render_template (pour renvoyer le contenu HTML des pages) et url_for (pour générer des URL pour les routes de l'application).

app = Flask(__name__) 
# cette ligne crée une instance de l'application Flask.

@app.route('/') 
# cette ligne crée une route pour la page d'accueil de l'application. Lorsque l'utilisateur accède à l'URL racine de l'application, la fonction index() est appelée.
def index(): 
    #cette ligne définit la fonction index() qui renvoie le contenu HTML de la page d'accueil.
    return render_template('home.html')

@app.route('/QUINSI1') 
# cette ligne crée une route pour une page de jeu, accessible via l'URL /QUINSI1.
def game1(): 
    # cette ligne définit la fonction game1() qui renvoie le contenu HTML de la page de jeu.
    return render_template('game.html')

@app.route('/QUINSI2')
def game2():
    return render_template('game2.html')

@app.route('/QUINSI3')
def player1():
    return render_template('player1.html')

@app.route('/QUINSI4')
def player2():
    return render_template('player2.html')

@app.route('/contributeurs')
def contributeurs():
    return render_template('contributeurs.html')
if __name__ == "__main__": 
    #if __name__ == "__main__": : cette ligne vérifie si le script est exécuté directement (et non importé comme un module) et démarre le serveur Flask en mode débogage (debug=True).
    app.run(debug=True)


#Les autres routes (/QUINSI2, /QUINSI3, /QUINSI4, /contributeurs) sont similaires et ont des fonctions associées qui renvoient le contenu HTML des pages correspondantes.

#En résumé, ce code crée une application Flask avec plusieurs routes pour différentes pages, qui renvoient toutes des pages HTML spécifiques en utilisant la fonction render_template().