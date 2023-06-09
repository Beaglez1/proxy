const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const iframe = document.querySelector('#proxy');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const url = input.value;
  iframe.src = `https://cors-anywhere.herokuapp.com/${url}`;
});
