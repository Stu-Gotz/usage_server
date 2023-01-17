let data = {}

function fetchAPI() {
  data = {}
  const baseURL = "https://usage-server.herokuapp.com/data"
  const date = document.getElementById("date-input").value;
  const tier = document.getElementById("tier-input").value;

  window.location.replace(`${baseURL}/${date}/${tier}`)
}

function resetForm(){
  document.getElementById("userForm").reset();
}