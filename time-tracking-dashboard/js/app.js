// fetch('./data.json')
//   .then(response => response.json())
//   .then(data => console.log(data));

const timeReference = document.querySelectorAll('.js-time-reference');

timeReference.forEach( time => {
  time.addEventListener('click', (e) => console.log(e.target.dataset));
})