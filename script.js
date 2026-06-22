const state = {
  date: "6/22（日）",
  time: "10:00",
};

const toast = document.querySelector("#toast");
const form = document.querySelector("#reservationForm");

function selectWithin(selector, selectedClass, onSelect) {
  document.querySelectorAll(selector).forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(selector).forEach((item) => item.classList.remove(selectedClass));
      button.classList.add(selectedClass);
      onSelect(button);
    });
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.setTimeout(() => toast.classList.remove("visible"), 3200);
}

selectWithin(".date-card", "selected", (button) => {
  state.date = button.dataset.date;
});

selectWithin(".time-chip", "selected", (button) => {
  state.time = button.dataset.time;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.reportValidity()) {
    return;
  }

  const menu = document.querySelector("#menuSelect").value;
  const staff = document.querySelector("#staffSelect").value;
  const name = document.querySelector("#customerName").value.trim();

  showToast(`${name}様、${state.date} ${state.time} / ${menu} / ${staff} で予約内容を受け付けました。`);
});

window.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
});
