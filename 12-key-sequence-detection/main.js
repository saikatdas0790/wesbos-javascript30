const pressed = [];
const secretCode = "saikat";

window.addEventListener("keyup", e => {
  console.log(e.key);
  pressed.push(e.key);

  while (pressed.length > secretCode.length) pressed.shift();

  if (pressed.join("").includes(secretCode)) {
    console.log("DING DING!");
    cornify_add();
  }

  console.log(pressed);
});
