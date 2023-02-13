from flask import Flask, render_template, url_for

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


if __name__ == "__main__":
    app.run(debug=True)


