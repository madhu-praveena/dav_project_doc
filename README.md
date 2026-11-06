# ChurnIQ Python backend

## 1. Create and activate a virtual environment

macOS/Linux:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

Windows:

```powershell
python -m venv .venv
.venv\Scripts\Activate.ps1
```

## 2. Install dependencies

```bash
pip install -r requirements.txt
```

## 3. Add a dataset and train

Place your authorized CSV at `data/customer_churn.csv`. The CSV must contain a `Churn` target column with `Yes`/`No` values.

From the project root:

```bash
python -m backend.churniq.train_model --data data/customer_churn.csv
```

The command compares Logistic Regression and Random Forest on a stratified 80/20 train/test split, then saves the selected pipeline and metrics under `models/`.

## 4. Start the API

From the project root:

```bash
uvicorn backend.churniq.api:app --reload
```

Open `http://127.0.0.1:8000/docs` for interactive API documentation and `http://127.0.0.1:8000/health` for service status.

## 5. Prediction request

Use the exact feature names and valid values from the training CSV. Example structure (replace fields with the dataset's actual columns):

```json
{
  "customer": {
    "gender": "Female",
    "SeniorCitizen": 0,
    "Partner": "Yes",
    "Dependents": "No",
    "tenure": 12,
    "PhoneService": "Yes",
    "MultipleLines": "No",
    "InternetService": "Fiber optic",
    "OnlineSecurity": "No",
    "OnlineBackup": "Yes",
    "DeviceProtection": "No",
    "TechSupport": "No",
    "StreamingTV": "Yes",
    "StreamingMovies": "No",
    "Contract": "Month-to-month",
    "PaperlessBilling": "Yes",
    "PaymentMethod": "Electronic check",
    "MonthlyCharges": 75.5,
    "TotalCharges": 905.0
  }
}
```

The request fields must match the model's training feature columns. The sample above is for a commonly used Telco dataset; adjust it if your CSV differs.

## Important
This backend is a separate, optional ML extension to the existing front-end prototype. It does not automatically replace the current browser demo prediction until the frontend is explicitly connected to the API. Train and validate with your chosen dataset before presenting any metrics as project results.
