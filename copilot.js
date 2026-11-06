// Local demonstration Copilot. It is not connected to a live AI service.
import { $ } from "./utils.js";

export function addMsg(message, type) {
  const container = $("#messages");
  if (!container) return;
  const element = document.createElement("div");
  element.className = `msg ${type === "user" ? "userMsg" : "botMsg"}`;
  element.innerHTML = message;
  container.appendChild(element);
  container.scrollTop = container.scrollHeight;
}

export function addBot(message) {
  setTimeout(() => addMsg(message, "bot"), 180);
}

export function botAnswer(question) {
  const query = question.toLowerCase();

  if (query.includes("what is churn")) {
    return "Customer churn means a customer stops using a service or leaves a business. The project explores how organizations can identify customers who may need retention attention.";
  }
  if (query.includes("model") || query.includes("xgboost")) {
    return "The proposed workflow can compare Logistic Regression, Decision Tree, Random Forest, SVM, KNN and XGBoost. The current interface is a demonstration and does not train these models.";
  }
  if (query.includes("factor") || query.includes("increase")) {
    return "The demo highlights contract type, tenure, monthly charges and support interactions as illustrative signals. Actual feature importance must be calculated from a trained model.";
  }
  if (query.includes("metric") || query.includes("accuracy") || query.includes("recall")) {
    return "A real model evaluation should report precision, recall, F1-score, ROC-AUC and accuracy. For imbalanced churn datasets, do not rely on accuracy alone.";
  }
  if (query.includes("prediction") || query.includes("workflow")) {
    return "A typical workflow is data collection → preprocessing → exploratory data analysis → feature preparation → model training → evaluation → deployment.";
  }
  if (query.includes("high risk")) {
    return "The demo customer hub labels records with higher illustrative scores as High risk. Open Customer Profiles to inspect the sample records.";
  }
  return "I can explain churn, preprocessing, EDA, model evaluation, risk categories and the project workflow. Try asking: “Which models can be compared?”";
}

export function sendChat(question) {
  if (!question.trim()) return;
  addMsg(question, "user");
  addBot(botAnswer(question));
}
