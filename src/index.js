const Messages = [
  "Que la fuerza te acompañe!",
  "This is the way!",
  "Que el producto resultante de la masa por la aceleracion te acompañe",
  "Hello World",
  "si vis pasem parabellum!"
];

const randomMsg = () => {
  const message = Messages[Math.floor(Math.random() * Messages.length)]; 
    console.log(message);
}

module.exports = { randomMsg };