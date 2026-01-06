const url= "https://holidays.abstractapi.com/v1/?api_key=c3bd703352004180b80425fb650ad860&country=US"
async function getData() {
    try {
        //go get data
const response = await fetch(url);
// handle errors
if(response.status !=200){
    throw new error(response);
} else {
    // makes the response into json data we can use
    const data = await response.json();
    console.log(data);
    // document.getElementById("").textContent=data.name;
}
    } catch (error) {
        console.error(error);
    }
    
}
getData("");
