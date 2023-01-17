function fetchAPI(event) {
  event.preventDefault();
  
  const baseURL = "https://usage-server.herokuapp.com/data"
  const date = document.getElementById("date-input").value;
  const tier = document.getElementById("tier-input").value;

  fetch(`${baseURL}/${date}/${tier}`)
  .then(response => response.json())
  .then(data => document.getElementById("main-text").innerText = data);
}

function resetForm(){
  document.getElementById("userForm").reset();
}