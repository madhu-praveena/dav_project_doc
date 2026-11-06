# ChurnIQ – Customer Churn Prediction and Analytics Dashboard

## Project details
- **Project title:** ChurnIQ – Customer Churn Prediction and Analytics Dashboard
- **Course:** Data Analytics and Visualization (DAV)
- **Project type:** Interactive front-end prototype / analytics decision-support interface
- **Technology:** HTML5, CSS3, JavaScript
- **Execution:** Local web browser

## Team details

| S. No. | Roll number | Student name |
|---:|---|---|
| 1 | 2420030321 | Madhu |
| 2 | 2420030699 | Hema |
| 3 | 2420030303 | Name to be confirmed |

Please replace the third student's placeholder with the exact name before final submission.

## 1. Introduction
Customer churn refers to the situation in which a customer stops using a company's product or service. Churn can affect revenue, customer lifetime value, and business growth. Analysing customer characteristics and usage patterns can help organizations identify customers who may be at risk of leaving and prioritize retention activities.

ChurnIQ is a browser-based dashboard prototype that organizes customer information and churn-related insights in one interface. It is intended to demonstrate how a business user could review customer risk, inspect customer-level information, and explore analytics.

## 2. Problem statement
Businesses may store customer information across multiple records and systems. Without a consolidated view, it can be difficult to identify customers who may be at risk of churn, understand patterns in customer behaviour, and communicate findings to decision-makers. The project addresses this usability and analysis problem by presenting customer records, risk indicators, and visual summaries through a single dashboard.

## 3. Objectives
1. Build an interactive dashboard for customer churn analysis.
2. Present customer records and categorize illustrative churn risk.
3. Provide a customer prediction form and display a demo risk result.
4. Organize customer analytics and model-comparison information.
5. Demonstrate a local Copilot-style interface for answering common project questions.
6. Provide a foundation that can later be connected to a trained machine-learning model and backend service.

## 4. Scope
The current version focuses on the front-end experience and interaction flow. It includes dashboard navigation, customer views, a prediction workspace, analytics/model sections, local demo chat responses, customer detail interaction, CSV export, notifications, and responsive styling. It does not currently include a trained model, persistent database, authentication service, or live generative-AI integration.

## 5. Existing system and proposed system
**Existing situation:** Customer details and churn indicators may be reviewed manually or across separate reports, making it harder to obtain a consolidated view.

**Proposed prototype:** ChurnIQ provides a single interface for viewing summary indicators, customer-level information, illustrative risk categories, and analytics-oriented screens.

## 6. System requirements
### Hardware
- Computer or laptop capable of running a modern web browser.
- Recommended: 4 GB RAM or higher.

### Software
- Windows, macOS, or Linux.
- Google Chrome, Microsoft Edge, Firefox, or Safari.
- Visual Studio Code (optional).
- Live Server extension (optional).

## 7. Technologies used
- **HTML5:** Page structure and interface elements.
- **CSS3:** Layout, responsive styling, cards, charts and visual design.
- **JavaScript:** Navigation, user interactions, demo prediction logic, local chatbot responses, notifications and CSV export.

## 8. System modules
1. **Dashboard:** Displays summary cards, visual summaries and customer information.
2. **Prediction workspace:** Accepts customer attributes and calculates an illustrative risk score using a front-end demo rule.
3. **Customer hub:** Displays customer records, risk categories and customer details.
4. **Analytics studio:** Presents churn-related analytical views and visualizations.
5. **Model comparison:** Provides a screen for comparing candidate algorithms and evaluation metrics.
6. **AI Copilot demo:** Responds to a limited set of predefined prompts locally; it is not connected to a live language model.
7. **CSV export:** Allows available customer information to be exported from the interface.

## 9. Methodology
A full machine-learning implementation would follow these stages:
1. **Data collection:** Obtain a suitable customer churn dataset with a documented source and usage permission.
2. **Data understanding:** Inspect columns, data types, target distribution and missing values.
3. **Data preprocessing:** Handle missing values, duplicates, inconsistent categories and outliers where justified.
4. **Exploratory data analysis:** Study churn distribution and relationships between churn and customer attributes using summary statistics and visualizations.
5. **Feature preparation:** Encode categorical variables and scale numerical features when required by the selected algorithm.
6. **Train-test split:** Separate data into training and testing sets while preserving class proportions where appropriate.
7. **Model training:** Train candidate classification algorithms such as Logistic Regression, Decision Tree, Random Forest, SVM, KNN and XGBoost.
8. **Evaluation:** Compare models using precision, recall, F1-score, ROC-AUC and accuracy. For imbalanced churn data, emphasize recall, precision, F1-score and ROC-AUC rather than accuracy alone.
9. **Deployment:** Expose the selected model through an API and connect the web interface to it.

**Implementation status:** The current ZIP contains a static HTML/CSS/JavaScript prototype. The above ML pipeline is the proposed workflow and is not represented as completed model training in this version.

## 10. System architecture
Current prototype flow:

**User → Browser interface (HTML/CSS) → JavaScript interaction logic → Demo data / demo scoring / local response logic → Dashboard output**

Planned ML-enabled flow:

**Customer dataset → Preprocessing → Trained classification model → Model API → ChurnIQ frontend → Prediction and analytics output**

## 11. Testing
Suggested functional test cases:

| Test ID | Test scenario | Expected result |
|---|---|---|
| TC01 | Open the main HTML file | Dashboard loads in browser |
| TC02 | Navigate between dashboard sections | Selected section is displayed |
| TC03 | Enter customer details in prediction form | Demo risk result is displayed |
| TC04 | Open a customer record | Customer detail view/modal is displayed |
| TC05 | Use Copilot with a supported prompt | A local demo response is displayed |
| TC06 | Export customer data | A CSV file is generated by the browser |
| TC07 | Resize browser to mobile width | Layout adapts to a narrow screen |

Record actual results after executing each test on your machine.

## 12. Results and discussion
The prototype demonstrates a consolidated interface for exploring customer records and churn-related information. It supports navigation across dashboard modules and provides interactive demonstration flows. Since the prediction logic and displayed model metrics are not generated by a trained model in this version, no claim of predictive accuracy or real-world model performance is made.

## 13. Advantages
- Simple browser-based execution.
- Consolidated dashboard interface.
- Clear customer risk presentation.
- Responsive layout.
- Demonstrates a potential workflow for churn analytics.
- Can be extended with a backend and trained model.

## 14. Limitations
- No live database or persistent storage.
- Current prediction score is based on a demo rule.
- Copilot responses are local predefined responses.
- Model comparison screen is demonstrative; it does not train or evaluate models.
- Actual predictive performance has not been established.

## 15. Future enhancements
- Integrate a verified customer churn dataset.
- Implement preprocessing and EDA using Python, Pandas, NumPy and visualization libraries.
- Train and validate classification models.
- Add confusion matrix, ROC curve and feature-importance analysis.
- Build a Flask or FastAPI backend.
- Connect the frontend to the prediction API.
- Add database storage, authentication and role-based access.
- Integrate a real AI assistant with suitable safeguards.

## 16. Conclusion
ChurnIQ demonstrates a user-friendly interface for presenting customer information and churn-related analytics. It provides a foundation for a more complete customer-retention decision-support system. Connecting the prototype to a properly trained and evaluated machine-learning model is the key next step toward producing reliable churn predictions.

## 17. References
Add the exact dataset, research papers, libraries and learning resources used by the team. Suggested technical references to consult:
- Scikit-learn User Guide: https://scikit-learn.org/stable/user_guide.html
- Pandas Documentation: https://pandas.pydata.org/docs/
- NumPy Documentation: https://numpy.org/doc/
- XGBoost Documentation: https://xgboost.readthedocs.io/

Do not list a dataset or paper as used unless the team actually used it.
