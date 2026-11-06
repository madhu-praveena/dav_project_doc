// Application entry point: connects page navigation and user interactions.
import { customers, pageTitles } from "./data.js";
import { $, toast } from "./utils.js";
import { renderPriority, renderCustomers } from "./customer-dashboard.js";
import { addMsg, addBot, sendChat } from "./copilot.js";
import { runPrediction } from "./prediction.js";

function showPage(pageId) {
  document.querySelectorAll(".page").forEach((page) => page.classList.remove("active"));
  const selectedPage = $(`#${pageId}`);
  if (!selectedPage || !pageTitles[pageId]) return;

  selectedPage.classList.add("active");
  document.querySelectorAll(".nav button").forEach((button) => {
    button.classList.toggle("active", button.dataset.page === pageId);
  });

  $("#title").textContent = pageTitles[pageId][0];
  $("#subtitle").textContent = pageTitles[pageId][1];

  if (pageId === "customers") renderCustomers();
}

document.querySelectorAll(".nav button, [data-page]").forEach((button) => {
  button.addEventListener("click", () => showPage(button.dataset.page));
});

$("#heroPredict")?.addEventListener("click", () => showPage("predict"));
$("#goAI")?.addEventListener("click", () => showPage("copilot"));
$("#runPrediction")?.addEventListener("click", () =>
  runPrediction({ showPage, addMsg, addBot })
);

$("#custSearch")?.addEventListener("input", renderCustomers);
$("#riskFilter")?.addEventListener("change", renderCustomers);

$("#globalSearch")?.addEventListener("input", (event) => {
  const query = event.target.value.trim();
  if (!query) return;
  showPage("customers");
  $("#custSearch").value = query;
  renderCustomers();
});

$("#send")?.addEventListener("click", () => {
  const input = $("#chatInput");
  const question = input.value;
  input.value = "";
  sendChat(question);
});

$("#chatInput")?.addEventListener("keydown", (event) => {
  if (event.key === "Enter") $("#send").click();
});

document.querySelectorAll(".suggestions button").forEach((button) => {
  button.addEventListener("click", () => sendChat(button.dataset.q));
});

document.addEventListener("click", (event) => {
  if (!event.target.classList.contains("view")) return;

  const customer = customers.find((record) => record[0] === event.target.dataset.id);
  if (!customer) return;

  $("#modalTitle").textContent = customer[1];
  $("#modalText").innerHTML = `
    Customer ID: <b>${customer[0]}</b><br>
    Contract: <b>${customer[2]}</b><br>
    Monthly charges: <b>${customer[3]}</b><br>
    Illustrative churn probability: <b>${customer[4]}%</b><br>
    Risk category: <b>${customer[5]}</b>
  `;
  $("#modal").classList.add("show");

  $("#modalBtn").onclick = () => {
    $("#modal").classList.remove("show");
    showPage("copilot");
    addMsg(`Tell me about ${customer[1]} (${customer[4]}% illustrative churn score).`, "user");
    addBot(`${customer[1]} is marked as <b>${customer[5]} risk</b> in the sample data. Their contract is <b>${customer[2]}</b> and monthly charges are <b>${customer[3]}</b>. These are illustrative records, not verified customer data.`);
  };
});

$("#close")?.addEventListener("click", () => $("#modal").classList.remove("show"));

$("#export")?.addEventListener("click", () => {
  const header = "Customer ID,Name,Contract,Monthly Charges,Illustrative Churn Score,Risk";
  const rows = customers.map((customer) =>
    customer.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(",")
  );
  const csv = [header, ...rows].join("\n");
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "churniq_sample_customers.csv";
  anchor.click();
  URL.revokeObjectURL(url);
  toast("Sample customer CSV exported.");
});

renderPriority();
renderCustomers();
