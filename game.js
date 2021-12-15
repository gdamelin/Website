var topLeft = document.getElementById("topLeft");
var topRight = document.getElementById("topRight");
var bottomLeft = document.getElementById("bottomLeft");
var bottomRight = document.getElementById("bottomRight");
var startButton = document.getElementById("start");
var resetButton = document.getElementById("reset");
var currentScore = document.getElementById("currentScore");
var highScore = document.getElementById("highScore");
var sequence = [];
var playerSequence = [];
var level = 1;
var ready = false;
var failed = false;
var answerCompleted = false;

startButton.addEventListener("click", startGame);

function getRandomPanel()
{
  var panels = ["topLeft", "topRight", "bottomLeft", "bottomRight"];
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
  getPanel(panel).classList.add("active");
}

function removeFlash (panel)
{
  getPanel(panel).classList.remove("active");
}

function flash (panel)
{
  addFlash(panel);
  setTimeout(() => {removeFlash(panel)}, 1000);
}

function doFlashes ()
{
  for (let i = 0; i < sequence.length; i++)
  {
    setTimeout(() => {flash(sequence[i])}, 2000*i);
    setTimeout(() => {}, 1000);
  }
}

function startGame ()
{
  /*while (failed != true)
  {
    if (sequence.length != level)
    {
      sequence.push(getRandomPanel());
    }
  }
  */
  if (failed != true)
  {
    makeSequence(4);
    doFlashes();
    ready = true;

    if (ready == true)
    {
      topLeft.addEventListener("click", addTopLeftAnswer);
      topRight.addEventListener("click", addTopRightAnswer);
      bottomLeft.addEventListener("click", addBottomLeftAnswer);
      bottomRight.addEventListener("click", addBottomRightAnswer);
    }
  }
}

function checkAnswer ()
{
    if (arraysEqual(playerSequence, sequence))
    {
      alert ("Sequence Correct!");
      level = level+1;
    }
    else
    {
      alert ("Sequence Wrong!");
      failed = true;
    }
}

function addTopLeftAnswer ()
{
  playerSequence.push("topLeft");
  console.log("topLeft");
  checkIfAnswerIsDone();
}

function addTopRightAnswer ()
{
  playerSequence.push("topRight");
  console.log("topRight");
  checkIfAnswerIsDone();
}

function addBottomLeftAnswer ()
{
  playerSequence.push("bottomLeft");
  console.log("bottomLeft");
  checkIfAnswerIsDone();
}

function addBottomRightAnswer ()
{
  playerSequence.push("bottomRight");
  console.log("bottomRight");
  checkIfAnswerIsDone();
}

function checkIfAnswerIsDone ()
{
  if (playerSequence.length == sequence.length)
  {
    checkAnswer();
  }
}

function getPanel (panel)
{
  if (panel == "topLeft")
  {
    return (topLeft);
  }
  if (panel == "topRight")
  {
    return (topRight);
  }
  if (panel == "bottomLeft")
  {
    return (bottomLeft);
  }
  if (panel == "bottomRight")
  {
    return (bottomRight);
  }
}

function arraysEqual (playerSequence, sequence)
{
  for (let i = 0; i < sequence.length; i++)
  {
    if (playerSequence[i] != sequence[i])
    {
      return (false);
    }
  }

  return (true);
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
