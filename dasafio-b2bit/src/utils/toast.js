export function showToast(message, type = "success", duration = 4000) {
  const id = Date.now() + Math.random().toString(36).slice(2, 7);
  const detail = { id, message, type, duration };
  window.dispatchEvent(new CustomEvent("app:toast", { detail }));
}
