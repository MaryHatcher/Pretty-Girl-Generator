let Data=[]; //IMPORTANT
let apiURL = "https://api.airtable.com/v0/appds3yRXb0CtUoZF/Table%201?api_key=key1vt4SKxNqfcEUl";
let eyesURL ="https://api.airtable.com/v0/appds3yRXb0CtUoZF/Eyes?api_key=key1vt4SKxNqfcEUl";

let eyes = [];

const eyesSelect = document.getElementById("eyesselect");
const eyesContainer = document.getElementById("eyesdiv");


//only to get data from api
async function getData(url){
    //response I get from my client API
    let response = await fetch(url);
    let jsonData = await response.json();
    return jsonData;
}

async function main(){
    let eyesData = await getData(eyesURL); //must be different

    for(let i = 0; i < eyesData.records.length; i++){
        let record = eyesData.records[i].fields;
        Data.push(record); //IMPORTANT
    }
    console.log(Data);//IMPORTANT
    makeDropdown();
}
    
    main();

    function makeDropdown(){
        //iterate over all the description (cartoon shows)
        for(let i = 0; i < Data.length; i++){
            let eyeColor = Data[i].categories;
            eyes.push(eyeColor);
        }
    }
    eyeColor.forEach(element =>{
        let new_option = document.createElement("option");
        new_option.className = "option";
        new_option.innerHTML = element;
        new_option.value = element;
        eyesSelect.appendChild(new_option);
    });
function removeDuplicates(){
    return arr.filter((item, index) => arr.indexOf(item) === index);
};