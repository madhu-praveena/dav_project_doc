// Shared DOM and presentation utilities.
export const $ = (selector) => document.querySelector(selector);

export const pill = (risk) =>
  `<span class="pill ${risk.toLowerCase()}">${risk}</span>`;

export function toast(message) {
  const element = $("#toast");
  if (!element) return;
  element.textContent = `✓  ${message}`;
  element.classList.add("show");
  setTimeout(() => element.classList.remove("show"), 2200);
}
