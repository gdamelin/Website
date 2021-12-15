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
