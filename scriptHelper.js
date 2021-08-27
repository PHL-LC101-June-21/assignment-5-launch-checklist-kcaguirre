function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // get the missionTarget div
    const div = document.getElementbyId("missionTarget");
    div.innerHTML = `                 
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: </li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: </li>
            <li>Number of Moons: </li>
         </ol>
        <img src="">
    `;
}


function validateInput(testInput) {

    if (testInput == null) {
        return 'Empty';
    }
    if (isNaN(testInput)) {
        return 'Not a Number';
    } else {
        return 'Is a number';
    }
}

function formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoLevelValue) {
    if (validateInput(pilotValue) === 'Empty' || validateInput(copilotValue) === 'Empty' || validateInput(fuelLevelValue) === 'Empty' || validateInput(cargoLevelValue) === 'Empty') {
        alert('All fields are required.');
    }

    if (validateInput(fuelLevelValue) === 'Not a Number' || validateInput(cargoLevelValue) === 'Not a Number') {
        alert('Please enter a valid input.')
    }

    list.style.visibility = 'visible';

    // set the list.style.visibility = 'visible'
    // get the pilot status, update the inner HTML to say `Pilot ${pilotValue} is ready for launch`
    // get the copilot status, update the inner HTML to say `CoPilot ${copilotValue} is ready for launch`
    // check if the fuel level is less 10,000
    // change launchStatus to "Shuttle not ready for launch", and color to red
    // change the fuelStatus to "Fuel level too low for launch"

    // check if the cargo level is more than 10,000
    // change launchStatus to "Shuttle not ready for launch", and color to red
    // change the cargoStatus to "Cargo level too high for launch"

    // if both fuel and cargo are good
    // change the launchStatus to "Shuttle is Ready for Launch" and color to green
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response) {
        response.json().then(function(json) {

            console.log(json);
        });
        // get the json from the response
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    // randomly pick a planet from the array
    // Math random for index
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;