const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let index = 0;

function init() {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown', compareSequence);
  function compareSequence(e) {
    const key = parseInt(e.detail || e.which);
    
    if (key === code[index]) {
      index++;
      
      if (index === code.length) {
        alert('Congratulations! You found the easter egg.');

        index = 0;
      }
    } else {
      index = 0;
    }
  }
}