from flask import Flask, render_template, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'

db = SQLAlchemy(app)

class Todo(db.Model):
    name = db.Column(db.String(200), primary_key = True )


@app.route('/')

def index():
    return render_template('index2.html')




if __name__ == "__main__":
    app.run(debug=True)


