from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('home.html')


@app.route('/QUINSI')
def jeu():
    return render_template('game.html')




if __name__ == "__main__":
    app.run(debug=True)


