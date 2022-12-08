/* Global Variables */
/* spliting the URL into 3 pieces, so i can put the user input zip code into the URL which is required to get the desired API */

// Start with the site URL where i get the data from.
const siteURL = 'https://api.openweathermap.org/';

// Here is my sepecial API Key that i get when signing up to 'openweathermap.org'. 
const apiKey = '235e48b301613dfacc8114c7110c1899';

// Here is a variable that hold the temperature unit. so we can easily change it later
const tempUnit = 'imperial'

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '/' + d.getDate() + '/' + d.getFullYear();

// Getting the Button element that will generate the data for us.
const generatorButton = document.querySelector('#generate')

// Adding an eventListener to the button element, when clicking on, it should generate the Data.
generatorButton.addEventListener('click', generateData)

// Function that Generate Data when ckicking on the Generate button on the website.
async function generateData() {

    // Getting the User desired Zip code he enetered. to reimplement this again into the Full URL.
    const userZip = document.querySelector('#zip').value;
    
    // Full URL path
    const fullURL = `${siteURL}data/2.5/weather?zip=${userZip}&appid=${apiKey}&units=${tempUnit}`;

    // Geeting the User feelings to re-display it again. 
    const userFeelings = document.querySelector('#feelings').value;

    
    // calling the Get function
    getWeatherInfo(fullURL)
    
        // Then calling our POST function.
        .then(temperature => {
            // console.log(temperature)
            postDataToSite('/addData', { date: newDate, temp: temperature, content: userFeelings });

            // Then updating our web site with the data returned from the get and post functions.
        }).then(updateUIInterface)
}

// Defining our Async GET function to fetch the data from the app endpoint. 
const getWeatherInfo = async (fullURL) => {
    // The fetch will get the data using the the url, zip(entered by user), apiKey and the temp unit
    const response = await fetch(fullURL);

    // The try and catch here to know if error happen at this stage of code. 
    try {
        // if everything is ok, then create a new variable after changing the data we get from the url above to json type.
        let recievedData = await response.json();
        // console.log(recievedData)
        return recievedData.main.temp;
        // If something gone wrong. then ignore creating the variable above and let me know that there is and error here.
    } catch (error) {
        console.log('Error in getting info', error);
    }
}


// Post function to add new entries to the project endpoint.
// This function takes two parameters, url to make a POST to, and the object that hold the data to POST.
const postDataToSite = async (url = '', data = {}) => {

    // creating a variable to fetch the url and the data object.
    const requested = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            date: data.date,
            temp: data.temp,
            content: data.content,
        })
    })
    // if everything going right. then create a new variable after changing the required data into json. then return these data.
    
}

// function to update the UI of the web site with the data from the data object.
const updateUIInterface = async () => {
    // a variable to collect the data we already passed into the projectData object we created in the server.js file using the get route.
    const allData = await fetch('/getData')
    try {
        // convert the collected data to json
        const DataToJson = await allData.json();
        // displaying the data to the user in a nice format.
        document.querySelector('#date').innerHTML = `The Date : ${DataToJson.date}`;
        document.querySelector('#temp').innerHTML = `The temperature : ${Math.round(DataToJson.temp)} degree in Fahrenheit `;
        document.querySelector('#content').innerHTML = `Your status : ${DataToJson.content}`;

    } catch (error) {
        console.log('Error in Updating the Elements.', error)
    }
}