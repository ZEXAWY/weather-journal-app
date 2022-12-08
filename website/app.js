/* Global Variables */
const siteURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=235e48b301613dfacc8114c7110c1899';
const tempUnit = '&units=metric'
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const generatorButton = document.querySelector('#generate')
generatorButton.addEventListener('click',() => {

    const userZip = document.querySelector('#zip').value;
    const userFeelings = document.querySelector('#feelings').value;

    getWeatherInfo(siteURL, userZip, apiKey)
        .then((userData) => {

            postDataToSite('/addData', {date: newDate, temp: userData.main.temp, content: userFeelings})
        }).then((newData) => {
            updateUIInterface();
        })
})

const getWeatherInfo = async (siteURL, userZip, apiKey) => {
    
    const response = await fetch(siteURL + userZip + apiKey + tempUnit);
    try{
        const recievedData = await response.json();
        return recievedData;
    }catch(error){
        console.log('Error in getting info', error);
    }
}

const postDataToSite = async (url = '', data = {}) =>{
    
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
    try {
        const traitedData = await requested.json();
        return traitedData;
    } catch (error) {
        console.log('Error in Posting Data', error);
    }
}

const updateUIInterface = async () => {
    const allData = await fetch('/getData')
    try {
        const DataToJson = await allData.json();

        document.querySelector('#date').textContent = `The Date : ${DataToJson.date}`;
        document.querySelector('#temp').textContent = `The temperature : ${DataToJson.temp}`;
        document.querySelector('#content').textContent = `Your status : ${DataToJson.content}`;
        
        
    } catch (error) {
        console.log('Error in Updating the Elements.', error)
    }
}