/**
 * Write your challenge solution here
 */
// wait for the page to load before running javascript

document.addEventListener('DOMContentLoaded', () => {
    const bulbContainer = document.getElementById('bulb-container');
    const bulb = document.getElementById('bulb');
    const h1P= document.querySelectorAll("h1,p")
    const button = document.getElementById('toggleButton');
    const status = document.getElementById('status');
  
    //now update button because when button status chane then also need to change
  
    button.addEventListener('click', () => {
      if (bulb.classList.contains('off')) {
        // turn on bulb
        bulb.classList.remove('off');
        bulb.classList.add('on');
        button.textContent = 'Turn off';
        status.textContent = 'status: on';
        h1P.forEach(element=>element.classList.add('light-on'))
      } else {
        bulb.classList.remove('on');
        bulb.classList.add('off');
        button.textContent = 'Turn On';
        status.textContent = 'Status: Off';
        h1P.forEach(element=>element.classList.remove('light-on'))
      }
    });
  });
  