from sklearn.metrics import accuracy_score, f1_score
from sklearn.metrics import confusion_matrix
from sklearn.metrics import precision_score, recall_score
import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
import sklearn
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.metrics import precision_score, recall_score, f1_score


# reading data
data = pd.read_csv('data/IRIS.csv')
print(data)
# data.head(50)
# data['sepal_length'].hist()
# data['sepal_width'].hist()
# 'showing data in histogram'
# data['petal_length'].hist()
# data['petal_width'].hist()
data.corr()
le_data = LabelEncoder()
data['species'] = le_data.fit_transform(data['species'])
data.head(150)
# spliting data into 80/20 ratio
X = data.drop(columns=['species'])
Y = data['species']
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, stratify=Y,
                                                    random_state=1)
model = LogisticRegression(max_iter=1000)
# fiting with training data
Final = model.fit(X_train, Y_train)
# making prediction
Y_pred = model.predict(X_test)
print(Y_pred)

# calculate precison score and recall score
precision = precision_score(Y_test, Y_pred, average='weighted')
recall = recall_score(Y_test, Y_pred, average='weighted')

print("Precision:", precision)
print('Recall:', recall)
# accuracy of data
print("Accuracy: ", model.score(X_test, Y_test) * 100)
# accuracy and F1 score
Y_true = [0, 1, 1, 0, 0, 0, 1, 1, 1, 0]
Y_pred = [0, 1, 1, 0, 0, 0, 1, 1, 1, 0]
accuracy = accuracy_score(Y_true, Y_pred)
f1 = f1_score(Y_true, Y_pred)
print("Accuracy:", accuracy)
print('F1 score :', f1)
# confusion matrix
Y_true = [1, 0, 1, 2, 3, 0, 1]
Y_pred = [2, 1, 3, 0, 0, 1, 2]
conf_matrix = confusion_matrix(Y_true, Y_pred)
print('Confusion matrix:', conf_matrix)
