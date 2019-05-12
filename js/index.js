if(localStorage['text']){
    window.onload = function(){
        alert('Hello ' + localStorage['text']);
    }
}

const text = document.querySelector('#name-input');

document.querySelector('#modal-button')
  .addEventListener('click', saveText);


function saveText(e) {
  e.preventDefault();
  const str = text.value;
  localStorage['text'] = str;
}

// need to fix
// document.getElementById('#modall-name').innerHTML = "Hello " + str; 
