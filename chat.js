// Websocket kapcsolat létrehozása
const socket = new WebSocket('ws.//localhost:8080');

// Kapcsolat nyitásakor elküldjük a felhasználó nevét
socket.onopen = function(event) {
  socket.send(prompt("Enter your username:"));
};

// Üzenet fogadása esetén a chat log-ba hozzáadjuk
socket.onmessage = function(event) {
  const chatLog = document.getElementById("chat-log");
  const message = document.createElement("div");
  message.innerHTML = event.data;
  chatLog.appendChild(message);
};

// Üzenet elküldése a gomb megnyomásakor
const sendButton = document.getElementById("send-button");
sendButton.onclick = function() {
  const messageInput = document.getElementById("message-input");
  socket.send(messageInput.value);
  messageInput.value = "";
};