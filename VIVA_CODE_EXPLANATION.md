# Viva: Code Explanation

## Frontend
- `app.js` is the entry point. It attaches event listeners for navigation, search, filtering, modal actions and CSV export.
- `data.js` stores illustrative customer records and page titles.
- `customer-dashboard.js` renders customer rows and cards based on selected filters.
- `prediction.js` calculates a demonstration score using fixed rule-based conditions.
- `copilot.js` maps a small set of keywords to predefined answers; it is not a live LLM.
- `utils.js` contains reusable DOM selection and toast helpers.
- `styles.css` controls the visual layout.

## Machine-learning backend
- `preprocessing.py` reads the CSV, cleans the churn target and separates features from labels.
- `train_model.py` builds preprocessing pipelines, trains two classifiers, evaluates the held-out test set and saves the best model.
- `api.py` loads the saved model and exposes `/health`, `/model-info` and `/predict` endpoints through FastAPI.

## Questions to prepare
1. What is customer churn?
2. Why is churn prediction a classification problem?
3. Why do we use a train-test split?
4. What is one-hot encoding?
5. Why is missing-value imputation needed?
6. What is the difference between precision and recall?
7. Why can accuracy be misleading on an imbalanced dataset?
8. What does ROC-AUC measure?
9. Why is a pipeline useful?
10. What is the role of an API in connecting frontend and backend?

Be transparent: the current web interface is a prototype and the ML backend requires a dataset and training run before it produces real model-based predictions.
