const scriptURL = 'https://script.google.com/macros/s/AKfycbyrD091Be2mhpbkn0zVE_TFqGC7lLa3QFR5Ph9gHtiODi6JwLk/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
hash = calcMD5("input string");
alert(hash)