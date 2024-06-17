from flask import Flask, request, render_template
import joblib
import os


app = Flask(__name__,static_url_path='/static')

app.config['DEBUG'] = os.environ.get('Flask_DEBUG')

# Load the model and vectorizer
model = joblib.load('sentiment_model.joblib')
vectorizer = joblib.load('vectorizer.joblib')

@app.route('/')
def home():
    prediction = None  # Initialize prediction to None for initial render
    return render_template('index.html', prediction=prediction)

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        review = request.form['review']
        if review:  # Check if review has any text (prevents unnecessary processing)
            data = [review]
            vect = vectorizer.transform(data).toarray()
            prediction = model.predict(vect)
    else:
        prediction = None  # Set prediction to None if review is empty
    return render_template('index.html', prediction=prediction, review=review)

if __name__ == '__main__':
    app.run(debug=True)
