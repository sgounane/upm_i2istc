let msgs=[
  "Hello",
  "Welcome to the DOM",
  "This is a new message",
  "Goodbye"
];
setInterval(() => {
  document.body.innerHTML = msgs[Math.floor(Math.random() * msgs.length)];
}
, 500000);