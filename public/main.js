let data = {}

function getMonth() {
  const d = new Date();
  let month = d.getUTCMonth() + 1;
  let year = d.getUTCFullYear();

  month = month.toString();
  month = `0${month}`;

  valueString = `${year}-${month}`;
  console.log(valueString)
  return valueString;
}

// document.getElementById('date-input').value = getMonth();



async function fetchAPI() {
  
  const baseURL = "https://usage-server.herokuapp.com/data"
  const date = document.getElementById("date-input").value;
  const tier = document.getElementById("tier-input").value;

  const url = `${baseURL}/${date}/${tier}`;

  window.open(url, '_blank').focus();
  const res = await fetch(url);

  const data = await res.json();
  // console.log(data.data)
  // for(const [key, value] of Object.entries(data.data)){
  //   console.log(`${key}: ${value}`);
  // }
  const results = new Array();
  results.push(data.data);
  console.log(results)
  return results
}


function resetForm(){
  document.getElementById("date-input").value = getMonth();
  document.getElementById("tier-input").value = "";
}