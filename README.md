ChurnIQ – Customer Churn Prediction and Analytics Dashboard
Project Overview
ChurnIQ is a customer churn prediction and analytics dashboard developed to analyse customer behaviour and identify customers who are likely to discontinue a service.

Customer churn is a significant challenge for subscription-based businesses, as losing existing customers can negatively affect revenue and long-term business growth. Identifying customers who are at risk of leaving helps businesses understand customer behaviour and develop effective retention strategies.

ChurnIQ combines data analytics, interactive visualizations, and machine-learning techniques to demonstrate how customer data can be used to support data-driven business decisions.
Objectives
- Develop an interactive customer churn analytics dashboard.
- Analyse customer characteristics and subscription behaviour.
- Identify patterns associated with customer churn.
- Perform data preprocessing and exploratory data analysis.
- Implement and compare machine-learning classification algorithms.
- Evaluate model performance using standard evaluation metrics.
- Demonstrate customer churn prediction through a user-friendly interface.
- Provide insights that can support customer-retention strategies.
Key Features
Customer Analytics Dashboard
- Customer statistics and summary information.
- Customer records and profile information.
- Customer search and filtering.
- Churn-related analytics and visualizations.
- Customer risk categorization.
Churn Prediction
- Customer attribute analysis.
- Demonstration of churn probability estimation.
- Low, medium, and high-risk categorization.
- Identification of customers who may require retention strategies.
Machine Learning
- Data preprocessing and cleaning.
- Missing-value handling.
- Feature encoding and scaling.
- Logistic Regression classification.
- Random Forest classification.
- Model comparison and evaluation.
AI Copilot Demonstration
- Interactive chatbot-style interface.
- Predefined responses related to customer analytics.
- Assistance in understanding churn-related information.
Data Export
- Export customer records in CSV format.
- Access customer information for further analysis.
Technology Stack
Category	Technologies
Frontend	HTML5, CSS3, JavaScript
Backend	Python, FastAPI
Data Processing	Pandas, NumPy
Machine Learning	Scikit-learn
Model Storage	Joblib
Testing	Pytest
Version Control	Git, GitHub

Dataset Description
The project uses a synthetically generated customer dataset containing 5,000 records.

The dataset includes customer attributes such as:
- Customer ID
- Gender
- Senior Citizen
- Partner and Dependents
- Customer Tenure
- Phone Service
- Internet Service
- Online Security
- Online Backup
- Device Protection
- Technical Support
- Streaming Services
- Contract Type
- Payment Method
- Monthly Charges
- Total Charges
- Churn Status
The target variable is Churn, which indicates whether a customer has discontinued the service.

The dataset is used for demonstrating customer behaviour analysis, data preprocessing, and machine-learning classification.

Note: The dataset is synthetically generated for academic and demonstration purposes. It does not contain actual customer records.
Methodology
The project follows a structured data analytics and machine-learning workflow.
1. Data Collection – Loading the customer dataset.
2. Data Preprocessing – Cleaning the data and handling missing values.
3. Exploratory Data Analysis – Understanding customer characteristics and churn patterns.
4. Feature Engineering – Preparing numerical and categorical variables.
5. Model Development – Training classification algorithms.
6. Model Evaluation – Comparing models using performance metrics.
7. Prediction – Demonstrating customer churn prediction.
8. Visualization – Presenting analytical results through the dashboard.
Machine-Learning Algorithms
Logistic Regression

Logistic Regression is a supervised machine-learning algorithm used for binary classification. It estimates the probability of a customer belonging to the churn or non-churn category.

Random Forest Classifier

Random Forest is an ensemble-learning algorithm that combines multiple decision trees to improve classification performance and identify complex patterns in customer data.
Model Evaluation
The implemented models are evaluated using accuracy, precision, recall, F1-score, and ROC-AUC.

The following results were obtained using the synthetic dataset:
Evaluation Metric	Logistic Regression	Random Forest
Accuracy	66.70%	67.50%
Precision	48.09%	48.26%
Recall	71.75%	44.13%
F1-score	57.58%	46.10%
ROC-AUC	73.36%	70.61%

Logistic Regression was selected based on its higher ROC-AUC score.

These results represent experiments conducted on synthetic data and should not be interpreted as real-world model performance.
Project Architecture
ChurnIQ consists of two major components:

Frontend: The frontend is developed using HTML, CSS, and JavaScript. It provides an interactive interface for customer analytics, customer information, visualizations, and demonstration churn predictions.

Backend: The backend is developed using Python and FastAPI. It supports dataset preprocessing, machine-learning model training, model evaluation, and prediction requests.

The backend provides API endpoints for checking server status, retrieving model information, and generating predictions.
Testing
The project includes unit testing for the data preprocessing module.

The following functionalities are considered for testing:
- Dashboard loading and navigation.
- Customer information display.
- Customer search and filtering.
- Churn prediction interface.
- CSV export functionality.
- Backend health check.
- Model prediction endpoint.
- Data preprocessing operations.
Limitations
- The dataset is synthetically generated.
- The frontend currently uses a demonstration scoring mechanism for churn predictions.
- The frontend is not yet integrated with the Python machine-learning prediction API.
- The AI Copilot uses predefined local responses rather than a live language model.
- Model performance has not been validated using real-world customer data.
Future Enhancements
- Integrate the frontend with the trained machine-learning backend.
- Incorporate real-world customer datasets.
- Add advanced exploratory data analysis.
- Include confusion matrices and ROC curves.
- Implement feature-importance analysis.
- Integrate a database for customer information.
- Introduce user authentication and authorization.
- Improve model performance through hyperparameter tuning.
- Develop a real-time AI-powered customer-retention assistant.
- Deploy the application on a cloud platform.
Conclusion
ChurnIQ demonstrates the application of data analytics, visualization, and machine-learning techniques to the customer churn prediction problem.

By combining an interactive dashboard with a machine-learning pipeline, the project provides an academic demonstration of how customer information can be analysed to identify churn-related patterns and generate predictive insights.

The project establishes a foundation for a customer-retention decision-support system and highlights the importance of data-driven decision-making in modern businesses.
Project Team
S. No.	Roll Number	Name
1	2420030321	Madhu
2	2420030572	Varda Parnavi
3	2420030699	Hema

Acknowledgement
We would like to express our gratitude to our faculty and institution for their guidance and support throughout the development of this project. This project provided us with an opportunity to apply concepts of data analytics, data visualization, Python programming, and machine learning to a practical business problem.
