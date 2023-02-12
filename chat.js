const messages = document.getElementById("messages");
const chatForm = document.getElementById("chat-form");
const username = document.getElementById("username");
const message = document.getElementById("message");

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const user = username.value;
  const msg = message.value;

  messages.innerHTML += `<p><strong>${user}:</strong> ${msg}</p>`;

  username.value = "";
  message.value = "";
});
