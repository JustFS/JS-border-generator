const canvas = document.getElementById('canvas');
const codeToCopy = document.getElementById('code-to-copy');

const topLeft = document.getElementById('top-left');
const displayTopLeft = document.getElementById('display-top-left');

const topLeftAngle = document.getElementById('top-left-angle');
const displayTopLeftAngle = document.getElementById('display-top-left-angle');

let leftRadius = 0;
let leftAngleRadius = 0;


function resultDisplay() {

  if (leftAngleRadius > 0) {
    canvas.style.borderRadius = leftAngleRadius + '% /' + leftRadius + 'px';
    codeToCopy.innerHTML = `border-radius: ${leftAngleRadius}% / ${leftRadius} px;`;
  } else {
    canvas.style.borderRadius = leftRadius + 'px';
    codeToCopy.innerHTML = `border-radius: ${leftRadius} px;`;
  };
};

document.addEventListener('input', (e) => {
  switch (e.target) {
    case topLeft:
    case displayTopLeft:
      leftRadius = e.target.value;
      break;
    case topLeftAngle:
    case displayTopLeftAngle:
      leftAngleRadius = e.target.value;
      break;
    }

  resultDisplay();	
});

// CODE TO COPY
  const button = document.getElementById('button');

function copyCode() {
  codeToCopy.select();
  document.execCommand('copy');
  button.innerHTML = "Copied !";
  setTimeout(() => {button.innerHTML = "Copy your code"}, 3500);
};


