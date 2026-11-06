ChurnIQ – Customer Churn Prediction and Analytics Dashboard
Project Domain: Data Analytics and Visualization
Project Type: Web Application and Machine Learning
Programming Languages: Python, JavaScript
Technologies: HTML, CSS, JavaScript, Python, Pandas, NumPy, Scikit-learn, FastAPI
1. Introduction
ChurnIQ is a customer churn prediction and analytics dashboard designed to help businesses identify customers who are likely to discontinue their services.

Customer churn is one of the major challenges faced by subscription-based businesses. Losing existing customers can negatively impact revenue, customer relationships, and business growth. Therefore, identifying customers who are likely to leave is important for developing effective customer-retention strategies.

ChurnIQ combines data analytics, interactive visualizations, and machine-learning techniques to analyse customer information and demonstrate how predictive analytics can support business decision-making.

The application provides an interactive dashboard for exploring customer data, understanding churn patterns, and viewing customer risk information.
2. Objectives
The primary objectives of ChurnIQ are:
1. To develop an interactive dashboard for customer churn analysis.
2. To analyse customer characteristics and subscription behaviour.
3. To identify patterns associated with customer churn.
4. To perform data preprocessing and exploratory data analysis.
5. To implement machine-learning classification algorithms.
6. To evaluate and compare different machine-learning models.
7. To develop a backend API for customer churn predictions.
8. To present analytical results through an intuitive user interface.
3. Features
3.1 Customer Analytics Dashboard
- Displays customer statistics and summary information.
- Provides an overview of customer churn.
- Displays customer records and risk categories.
- Supports customer search and filtering.
- Provides visual representations of customer analytics.
3.2 Churn Prediction
- Allows users to explore customer attributes.
- Demonstrates churn probability estimation.
- Categorizes customers into different risk levels.
- Helps identify customers who may require retention strategies.
3.3 Machine Learning
- Data preprocessing and cleaning.
- Missing-value handling.
- Feature encoding and scaling.
- Logistic Regression classification.
- Random Forest classification.
- Model comparison using evaluation metrics.
3.4 AI Copilot Demonstration
- Provides an interactive chatbot-style interface.
- Displays predefined responses related to customer analytics.
- Helps users understand churn-related information.
3.5 Data Export
- Supports exporting customer records into CSV format.
- Allows users to access customer information for further analysis.
4. Technologies Used
Frontend Technologies
- HTML5
- CSS3
- JavaScript
Backend Technologies
- Python
- FastAPI
Data Analytics Libraries
- Pandas
- NumPy
Machine Learning Libraries
- Scikit-learn
- Joblib
Testing and Development Tools
- Pytest
- Git
- GitHub
- Visual Studio Code
5. Project Architecture
ChurnIQ consists of two major components: the frontend application and the Python backend.

Frontend: The frontend is developed using HTML, CSS, and JavaScript. It provides the user interface for displaying customer information, analytics, and demonstration churn predictions.

Backend: The backend is developed using Python and FastAPI. It handles dataset preprocessing, machine-learning model training, evaluation, and prediction requests.

The overall workflow is:
1. Customer dataset collection.
2. Data preprocessing.
3. Exploratory Data Analysis.
4. Feature engineering.
5. Machine-learning model training.
6. Model evaluation.
7. Customer churn prediction.
8. Visualization and interpretation of results.
6. Dataset Description
The project includes a synthetically generated dataset containing 5,000 customer records.

The dataset contains the following attributes:
- Customer ID
- Gender
- Senior Citizen
- Partner
- Dependents
- Tenure
- Phone Service
- Multiple Lines
- Internet Service
- Online Security
- Online Backup
- Device Protection
- Tech Support
- Streaming TV
- Streaming Movies
- Contract
- Paperless Billing
- Payment Method
- Monthly Charges
- Total Charges
- Churn
The target variable is Churn, which indicates whether a customer has discontinued the service.
- Yes: Customer has churned.
- No: Customer has not churned.
The dataset is used to demonstrate customer behaviour analysis and machine-learning classification.

Note: The included dataset is synthetically generated for academic demonstration purposes. It does not represent actual customer records.
7. Data Preprocessing
Data preprocessing is an important stage in the machine-learning workflow. It prepares raw customer information for analysis and model training.

The following preprocessing techniques are implemented:
1. Loading the customer dataset using Pandas.
2. Handling missing values.
3. Converting numerical columns into appropriate data types.
4. Removing unnecessary identifier columns.
5. Encoding categorical variables.
6. Scaling numerical features.
7. Separating input features and the target variable.
8. Splitting the dataset into training and testing sets.
8. Machine-Learning Algorithms
Two classification algorithms are implemented and compared.
8.1 Logistic Regression
Logistic Regression is a supervised machine-learning algorithm used for binary classification problems. It estimates the probability of a customer belonging to a particular class.

In this project, it is used to classify customers into churn and non-churn categories.
8.2 Random Forest Classifier
Random Forest is an ensemble-learning algorithm that combines multiple decision trees to generate predictions.

It improves classification by combining the results of several decision trees and can capture complex relationships between customer attributes.
9. Model Evaluation
The models are evaluated using the following performance metrics:
- Accuracy
- Precision
- Recall
- F1-score
- ROC-AUC

