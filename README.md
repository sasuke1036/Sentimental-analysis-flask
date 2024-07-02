# Sentimental-analysis-flask -using-Supervised Machine Learning

Dataset: [IMDB data](https://www.kaggle.com/datasets/lakshmi25npathi/imdb-dataset-of-50k-movie-reviews)

## Table of Content

* [Objective](#objective)
* [Overview](#overview)
* [Data Preprocessing](#data-preprocessing)
* [Modeling](#modeling)
* [Deployment](#deployment)

## Objective 

Analysis of Sentiment delivered by movie reviews

## Overview
Supervised Machine Learning using Logistic Regression and Naive Baye's Algorithm to train the data(IMDB Dataset) taken from Kaggle, to classify the review as positive or negative. The result is displayed to the user indicating the prediction as either positive or negative.

## Data Preprocessing
Text preprocessing is traditionally an important step for natural language processing (NLP) tasks. It transforms text into a more digestible form so that machine learning algorithms can perform better. In this problem, the following types of preprocessing are used.
 * Removing all URLs from data.
 * Removing all tags from the data
 * Decontracting the words
 * Removing special characters from data
 * Removing stop words
 * Stemming and Lemmatization
 * Tf-idf vectorization

## Modeling
2 Supervised Machine learning methods are used to train the Model
* Logistic Regression
* Naive Baye's Algorithm

## Deployment
* Created a flask app for better user interaction with the model.
* Deployment of the model is done at Render.


