// Front-end demo scoring only. Replace this with an API call to a trained model
// before describing the output as a genuine machine-learning prediction.
import { $ , toast } from "./utils.js";

export function runPrediction({ showPage, addMsg, addBot }) {
  const tenure = Math.max(0, Number($("#tenure").value) || 0);
  const charges = Math.max(0, Number($("#charges").value) || 0);
  const support = Math.max(0, Number($("#support").value) || 0);
  const contract = $("#contract").value;

  const score = Math.min(97, Math.max(5,
    50 +
    (tenure < 12 ? 18 : 0) +
    (charges > 2500 ? 12 : 0) +
    (contract === "Month-to-month" ? 15 : 0) +
    (support >= 3 ? 8 : 0)
  ));

  const risk = score >= 75 ? "High" : score >= 50 ? "Medium" : "Low";
  const background = risk === "High" ? "var(--coral)" :
    risk === "Medium" ? "var(--gold)" : "var(--aqua)";

  $("#predictionResult").innerHTML = `
    <div class="result" style="background:${background}">
      <div class="crumb">DEMO ASSESSMENT COMPLETE</div>
      <h2 style="margin:6px 0;font-size:21px">${risk} churn risk · ${score}%</h2>
      <p style="font-size:9px;color:#68757a">
        This illustrative score is calculated using a simple JavaScript rule.
        It is not produced by a trained machine-learning model.
      </p>
      <button class="btn teal" id="askResult">Ask ChurnAI to explain</button>
    </div>
  `;

  $("#askResult").onclick = () => {
    showPage("copilot");
    addMsg("Explain my latest demo assessment", "user");
    addBot(`The latest illustrative assessment is <b>${risk} risk (${score}%)</b>. The score reflects the values entered in the form. A production system should obtain probabilities from a validated model.`);
  };

  toast("Demo assessment completed.");
}
