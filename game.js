const topLeft = document.querySelector('.top-left');
const topRight = document.querySelector('.top-right');
const bottomLeft = document.querySelector('.bottom-left');
const bottomRight = document.querySelector('.bottom-right');

const getRandomPanel = () =>
{
  const panels = [
    topLeft,
    bottomRight,
    bottomLeft,
    topRight
  ];

  return panels[parseInt(Math.random()*panels.length)];
}

const sequence = [
  getRandomPanel(),
  getRandomPanel(),
  getRandomPanel(),
  getRandomPanel()
];

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

const main = async () =>
{
  for (const panel of sequence)
  {
    await flash(panel);
  }
};

main();
