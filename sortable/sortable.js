// This function is called only after the data has been fetched, and parsed.
// const loadData = (heroes) => {
//    console.log(heroes);
// };

function addData(data){
   let container = document.getElementById("main-container");
   for(let i = 0; i < data.length; i++){
      let table = document.createElement("table");
      table.textContent = "Name: " + data[i].name;
      container.appendChild(table);
   }
}

// Request the file with fetch, and the data will be downloaded to your browser cache.
fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json")
   .then((response) => response.json()) // parse the response from JSON
   .then(addData); // .then will call the `loadData` function with the JSON value.

