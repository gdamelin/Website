var topLeft = document.getElementById("topLeft");
var topRight = document.getElementById("topRight");
var bottomLeft = document.getElementById("bottomLeft");
var bottomRight = document.getElementById("bottomRight");
var startButton = document.getElementById("start");
var resetButton = document.getElementById("reset");
var currentScore = document.getElementById("currentScore");
var highScore = document.getElementById("highScore");
var sequence = [];

startButton.addEventListener("click", startGame);

function getRandomPanel()
{
  var panels = [topLeft, topRight, bottomLeft, bottomRight];
  var panel = panels[parseInt(Math.random()*panels.length)];
  console.log(panel);
  return(panel);
}

function makeSequence (num)
{
  for (let i = 0; i < num; i++)
  {
    sequence.push(getRandomPanel());
  }
}

function addFlash (panel)
{
  panel.classList.add("active");
}

function removeFlash (panel)
{
  panel.classList.remove("active");
}

function flash (panel)
{
  addFlash(panel);
  setTimeout(() => {removeFlash(panel)}, 1000);
}

function startGame ()
{
  makeSequence(4);
  for (let i = 0; i < sequence.length; i++)
  {
    setTimeout(() => {flash(sequence[i])}, 2000*i);
    setTimeout(() => {}, 1000);
  }
}

/*
var topLeft = document.getElementById("topLeft");
var topRight = document.getElementById("topRight");
var bottomLeft = document.getElementById("bottomLeft");
var bottomRight = document.getElementById("bottomRight");

function getRandomPanel
{
  var panels = [topLeft, topRight, bottomLeft, bottomRight];
  return panels[parseInt(Math.random()*panels.length)];
}

var sequence [];

function makeSequence (var num)
{
  for (let i = 0; i < num; i++)
  {
    sequence.add(getRandomPanel());
  }
}

function flash (panel)
{
  panel.classList.add("active");
  setTimeout(() =>
  {
    resolve();
  }, 250);
  panel.classList.remove("active");
}

for (let i = 0; i < sequence.length; i++)
{
  flash(sequence[i]);
}

let sequenceToGuess = [...sequence];

const flash = (panel) =>
{
  return new Promise((resolve, reject) =>
  {
    panel.className += ' active';
    setTimeout(() =>
    {
      panel.className = panel.className.replace(' active', '');

      setTimeout(() =>
      {
        resolve();
      }, 250);
    }, 500)
  });
};

let canClickPanel = false;

const panelClicked = (panel) =>
{
  if (!canClick)
  {
    return;
  }
  const expectedPanel = sequencetoGuess.shift();
  if (expectedPanel === panelClicked)
  {
    if (sequenceToGuess.length === 0)
    {
      //start new round
    }
    else
    {
      //end game
      alert('Game over!');
    }
  }
}

const main = async () =>
{
  for (const panel of sequence)
  {
    await flash(panel);
  }
  canClick = true;
};

main();
*/
