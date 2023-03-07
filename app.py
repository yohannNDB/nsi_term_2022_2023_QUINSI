"""Ce code crée une application web Flask qui comprend plusieurs routes pour différentes pages."""

from flask import Flask, render_template, url_for """ cette ligne importe les modules Flask, render_template (pour renvoyer le contenu HTML des pages) et url_for (pour générer des URL pour les routes de l'application)."""

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/QUINSI1')
def game1():
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
    app.run(debug=True)


