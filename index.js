const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.querySelector('input[type="text"]');
  const url = input.value;
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const targetUrl = `${proxyUrl}${url}`;

  fetch(targetUrl)
    .then(response => response.text())
    .then(data => {
      const container = document.querySelector('.container');
      container.innerHTML = data;
    })
    .catch(error => console.error(error));
});
