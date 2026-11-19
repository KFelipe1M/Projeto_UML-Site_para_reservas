const form = document.getElementById("reservation-form");
const labSelect = document.getElementById("laboratorio");
const feedback = document.getElementById("feedback");
const reservationList = document.getElementById("reservation-list");
const count = document.getElementById("reservation-count");

const now = new Date();
document.getElementById("today").textContent = now.toLocaleDateString("pt-BR", {
  weekday: "long", day: "2-digit", month: "long", year: "numeric"
});
document.getElementById("data").min = now.toISOString().slice(0, 10);

document.querySelectorAll(".reserve-lab").forEach((button) => {
  button.addEventListener("click", () => {
    labSelect.value = button.dataset.lab;
    document.getElementById("nova-reserva").scrollIntoView({ behavior: "smooth" });
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const lab = labSelect.value;
  const dateValue = document.getElementById("data").value;
  const date = new Date(`${dateValue}T12:00:00`);
  const formattedDate = date.toLocaleDateString("pt-BR", {
    day: "2-digit", month: "short", year: "numeric"
  });
  const time = document.getElementById("horario").value;
  const purpose = document.getElementById("finalidade").value.trim();

  const row = document.createElement("article");
  row.className = "reservation-row";

  const space = document.createElement("div");
  const spaceName = document.createElement("strong");
  spaceName.textContent = lab;
  const description = document.createElement("small");
  description.textContent = purpose;
  space.append(spaceName, description);

  const schedule = document.createElement("div");
  const day = document.createElement("strong");
  day.textContent = formattedDate;
  const hours = document.createElement("small");
  hours.textContent = time;
  schedule.append(day, hours);

  const status = document.createElement("span");
  status.className = "confirmed";
  status.textContent = "✓ Confirmada";

  row.append(space, schedule, status);
  reservationList.prepend(row);

  count.textContent = String(reservationList.children.length).padStart(2, "0");
  feedback.textContent = "Reserva adicionada à lista desta sessão.";
  form.reset();
  document.getElementById("data").min = now.toISOString().slice(0, 10);
});