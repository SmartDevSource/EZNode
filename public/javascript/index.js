const socket = io();

/// ELEMENTS DE LA PAGE ///
const text_input = document.getElementById("text_input");
const send_button = document.getElementById("send_button");
const span_received = document.getElementById("span_received");

/// RECEPTION ///
socket.on("message", (msg)=>{
    span_received.style.display = "block";
    span_received.textContent = msg;
})

/// EMISSION ///
send_button.addEventListener("click", ()=>{
    socket.emit("message", text_input.value);
    text_input.value = "";
})