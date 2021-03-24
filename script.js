var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var colorName1 = document.getElementById("label1");
var colorName2 = document.getElementById("label2");
var generateButton = document.getElementById("buttonGen");
var code = document.getElementById("code");
var randomize = document.getElementById("random");
var direction = document.getElementById("direction-select");

/********************************************************* */
/*Picking colors */
color1.addEventListener("input", changeColorName_1);
color2.addEventListener("input", changeColorName_2);

function changeColorName_1() {
  colorName1.textContent = color1.value;
}

function changeColorName_2() {
  colorName2.textContent = color2.value;
}


/********************************************************* */
/*Generated with the button*/
generateButton.addEventListener("click", generate);

function directionSelection() {
  return direction.options[direction.selectedIndex].value;
}

function generate() {
  var dir = directionSelection();
  var codeGenerated = "linear-gradient( to " + dir + ", " + color1.value + ", " + color2.value + ")";
  document.body.style.backgroundImage = codeGenerated;

  /*creating code in the code box*/
  code.textContent = codeGenerated;
  code.classList.add("code-box");
}

/************************************************************************************************* */
/*Button randomize */
randomize.addEventListener("click", generateRandomColors);

/* select a random direction of the gradient */
function randomDirection() {
  var g = direction.options[Math.floor(Math.random() * direction.length)].value;
  //console.log(g)

  /* update select input */
  for (let i = 0; i < direction.length; i++) {
    /* if it is selected, deselect */
    if (direction[i].getAttribute("selected")) {
      direction[i].removeAttribute("selected");
    }

    /*select a new element in the select input */
    if (direction[i].value === g) {
      direction[i].setAttribute("selected", "_self");
    }
  }
  return g;
}
function getRandomColor() {
  const hexLetters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexLetters[Math.floor(Math.random() * 16)];
  }
  return color;
}
/*generating linear-gradient */
function generateRandomColors() {
  colorGenerated_1 = getRandomColor();
  colorGenerated_2 = getRandomColor();
  colorGenerated_3 = getRandomColor();

  var codeGenerated = "linear-gradient ( to " + randomDirection() + ", " + colorGenerated_1 + ", " + colorGenerated_2 + ")";

  document.body.style.background = codeGenerated;
  color1.value = colorGenerated_1;
  color2.value = colorGenerated_2;
  colorName1.textContent = colorGenerated_1;
  colorName2.textContent = colorGenerated_2;

  document.body.classList.remove("start-background");
  /*  generate(); */

  /* creating code in the code box*/
  code.textContent = codeGenerated;
  code.classList.add("code-box");

}