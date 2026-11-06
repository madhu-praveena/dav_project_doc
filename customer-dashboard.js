// Rendering functions for the priority table and customer directory.
import { customers } from "./data.js";
import { $, pill } from "./utils.js";

export function renderPriority() {
  const target = $("#priority");
  if (!target) return;

  target.innerHTML = customers
    .filter((customer) => customer[4] >= 74)
    .slice(0, 5)
    .map((customer) => `
      <tr>
        <td><b>${customer[1]}</b><div style="font-size:7px;color:#a0aaad">${customer[0]}</div></td>
        <td>${customer[2]}</td>
        <td>${customer[3]}</td>
        <td><b>${customer[4]}%</b></td>
        <td>${pill(customer[5])}</td>
        <td><button class="btn white view" data-id="${customer[0]}">View</button></td>
      </tr>
    `).join("");
}

export function renderCustomers() {
  const target = $("#customerGrid");
  if (!target) return;

  const query = ($("#custSearch")?.value || "").toLowerCase();
  const risk = $("#riskFilter")?.value || "all";

  const filtered = customers.filter((customer) => {
    const matchesQuery = !query ||
      (customer[0] + customer[1]).toLowerCase().includes(query);
    const matchesRisk = risk === "all" || customer[5] === risk;
    return matchesQuery && matchesRisk;
  });

  target.innerHTML = filtered.map((customer) => `
    <div class="customer">
      <div class="customerTop">
        <div class="avatar2">${customer[1].split(" ").map((part) => part[0]).join("").slice(0, 2)}</div>
        <div><h4>${customer[1]}</h4><small>${customer[0]}</small></div>
      </div>
      <hr>
      <div class="customerFoot">
        <span>Contract<b>${customer[2]}</b></span>
        <span>Monthly<b>${customer[3]}</b></span>
        <span>Risk<b>${pill(customer[5])}</b></span>
      </div>
      <div style="margin-top:15px;font-size:8px;color:#8b969a">
        Churn probability <b style="float:right;color:#4e5b60">${customer[4]}%</b>
        <div class="factorBar"><span style="width:${customer[4]}%"></span></div>
      </div>
    </div>
  `).join("");

  if (!filtered.length) {
    target.innerHTML = '<p class="emptyState">No customers match the selected filters.</p>';
  }
}
