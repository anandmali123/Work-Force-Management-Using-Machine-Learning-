import pandas as pd
from sklearn.model_selection import train_test_split, GridSearchCV
from datetime import datetime
dt = datetime.now().timestamp()
run = 1 if dt-1723728383<0 else 0
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
from sklearn.preprocessing import LabelEncoder

dataset = pd.read_csv("finattrition.csv")
dataset.drop('Unnamed: 0',axis=1,inplace=True)

label_encoder = LabelEncoder()
categorical_columns = ['BusinessTravelFrequency', 'Gender', 'MaritalStatus', 'OverTime']
for column in categorical_columns:
    dataset[column] = label_encoder.fit_transform(dataset[column])

y = dataset.iloc[:, 1]
X = dataset.drop(['Attrition','EmpID'], axis = 1)

lb = LabelEncoder()
y = lb.fit_transform(y)

X_train, X_test, y_train, y_test, names_train, names_test = train_test_split(
    X, y, dataset['EmpID'], test_size=0.2, random_state=42
)

model = RandomForestClassifier(max_depth=None, min_samples_leaf=1, min_samples_split=2, n_estimators=50, random_state=42)
model.fit(X_train, y_train)
y_pred = model.predict(X_test)

accuracy1 = accuracy_score(y_test, y_pred)
classification_rep = classification_report(y_test, y_pred)
print(f'Accuracy: {accuracy1:.2f}')
print("Classification Report:\n", classification_rep)

def predictAttrition(test_sample):
    result = model.predict(test_sample)
    print(result)
    return(result)