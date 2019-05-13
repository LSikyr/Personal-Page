//fetch random advice
document.querySelector('.fetch-advice').addEventListener('click', fetchJoke);
function fetchJoke(){
  fetch('https://api.adviceslip.com/advice')
  .then ( response => response.json() )
  .then ( advice => document.querySelector('.modal-text').innerText = advice.slip.advice )
};

//check input
const name = document.querySelector('#name-input');
const email = document.querySelector('#email-input');
const comment = document.querySelector('#comment-input');

document.querySelector('button[type=submit]')
  .addEventListener('click', saveText);

document.querySelector('.load')
  .addEventListener('click', loadText);

function saveText(e) {
  e.preventDefault();
  localStorage['name'] = name.value;
  localStorage['email'] = email.value;
  localStorage['comment'] = comment.value;
  document.querySelector('.modal-name').innerText = localStorage['name'] || '';
  document.querySelector('.modal-email').innerText = localStorage['email'] || '';
  document.querySelector('.modal-comment').innerText = localStorage['comment'] || '';
}

function loadText() {
  name.value = localStorage['name'] || '';
}



