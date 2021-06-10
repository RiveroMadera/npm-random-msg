const Messages = [
  "Que la fuerza te acompañe!",
  "¡Hakuna Matata!",
  "C'est la Vie",
  "I'm not a robot",
  "This is the way!",
  "Que el producto resultante de la masa por la aceleracion te acompañe",
  "Hello World",
  "Before software can be reusable it first has to be usable. (Ralph Johnson)", 
  "It’s not a bug – it’s an undocumented feature. (Anonymous)",
  "The best thing about a boolean is even if you are wrong, you are only off by a bit. (Anonymous)",
  "Deleted code is debugged code. (Jeff Sickel)",
  "Don’t worry if it doesn’t work right. If everything did, you’d be out of a job. (Mosher’s Law of Software Engineering)",
  //"Keyboard not found. Press a button on the non-existent keyboard to fix it. ° _ ° "

];

const randomMsg = () => {
  const message = Messages[Math.floor(Math.random() * Messages.length)]; 
    console.log(message);
}

module.exports = { randomMsg };