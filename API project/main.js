// const url= "c3bd703352004180b80425fb650ad860&country=US"
// async function getData(url) {
//     try {
//         //go get data
// const response = await fetch(url);
// // handle errors
// if(response.status !=200){
//     throw new error(response);
// } else {
//     // makes the response into json data we can use
//     const data = await response.json();
//     console.log(data);
//     // document.getElementById("").textContent=data.name;
// }
//     } catch (error) {
//         console.error(error);
//     }
    
// }
// getData("");

// const url = "c3bd703352004180b80425fb650ad860&country=US";

// console.log(fetch(url));

// fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// async function fetchData(url) {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data);
//         return data;
//     } catch (err) {
//         console.error(err);
//     }
// }
// fetchData(url);

const url = "https://randomfox.ca/floof/";

async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data); 
    
    document.getElementById("api-response").innerHTML = `<img src="${data.image}" alt="Random Fox" style="max-width:400px;"><br><a href="${data.link}" target="_blank">View fox page</a>`;

    return data;
  } catch (err) {
    console.error(err);
  }
}

fetchData(url);
