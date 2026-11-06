# Source Code Guide

The frontend is split into small JavaScript modules so that each file has one responsibility.

| File | Responsibility |
|---|---|
| `src/churniq_customer_churn_prediction.html` | Main page markup and module entry reference |
| `src/css/styles.css` | All page styling and responsive layout |
| `src/js/data.js` | Sample customer records and page titles |
| `src/js/utils.js` | DOM selector, risk badge and toast helper |
| `src/js/customer-dashboard.js` | Priority table and customer directory rendering |
| `src/js/prediction.js` | Illustrative form-based demo score |
| `src/js/copilot.js` | Local predefined Copilot responses |
| `src/js/app.js` | Navigation, event handlers, modal and CSV export |

## How modules work
`app.js` is loaded with `<script type="module">`. It imports the functions and data it needs from the other files. The browser resolves those relative imports automatically.

## Important note
The current prediction function is a transparent JavaScript demonstration rule. It is not a trained machine-learning model. Sample customer records, sample scores, and local Copilot responses are illustrative. A real ML implementation needs a dataset, preprocessing pipeline, trained model, evaluation, and backend/API integration.
