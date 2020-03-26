const canvas = document.getElementById('canvas');
const codeToCopy = document.getElementById('codeToCopy');

// RADIUS BOX
const radiusInput = document.getElementById('radiusInput');
const radiusDisplay = document.getElementById('radiusDisplay');

// ANGLE BOX
const angleInput = document.getElementById('angleInput');
const angleDisplay = document.getElementById('angleDisplay');

let radius = 0;
let angle = 0;


function resultDisplay() {

  if (angle === 0) {
    canvas.style.borderRadius = radius + 'px';
    codeToCopy.value = `border-radius: ${radius}px;`;
  } else {
    canvas.style.borderRadius = angle + '% /' + radius +'px';
    codeToCopy.value = `border-radius: ${angle}% / ${radius}px;`;
  };
};

document.addEventListener('input', (e) => {
  switch (e.target) {
    case radiusInput:
    case radiusDisplay:
      radius = e.target.value;
      break;
    case angleInput:
    case angleDisplay:
      angle = e.target.value;
      break;
  }
  resultDisplay();	
});


function copyCode() {
  codeToCopy.select();
  document.execCommand('copy');
  alert ('Copied !');
};