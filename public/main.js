DOMStrings.userSubmit.addEventListener('click', e => {
  const userDate = document.getElementsByClassName('date-input').value;
  const userTier = document.getElementsByClassName('tier-input').value;

  location.href = `localhost:5000/data/${userDate}/${userTier}`
  
})