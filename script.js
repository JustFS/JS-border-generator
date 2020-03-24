const canvas = document.getElementById('canvas');
let topLeft = document.getElementById('top-left');
let topLeftAngle = document.getElementById('top-left-angle');

let leftRadius = '';

function resultDisplay() {

  canvas.style.borderRadius = leftRadius + 'px';

};



  document.addEventListener('input', (e) => {
    switch (e.target) {
      case topLeft:
        leftRadius = e.target.value;
        break;
      case topLeftAngle:
        console.log('wow');
        
    }

    
    resultDisplay();	
  });




