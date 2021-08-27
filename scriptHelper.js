// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    document.getElementById("missionTarget").innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src="${imageUrl}">
                 `;
}

function validateInput(testInput) {

    if (!testInput) {
        return 'Empty';
    }
    if (isNaN(testInput)) {
        return 'Not a Number';
    } else {
        return 'Is a Number';
    }
}

function formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoLevelValue) {

    if (validateInput(pilotValue) === 'Empty' || validateInput(copilotValue) == 'Empty' || validateInput(fuelLevelValue) == 'Empty' || validateInput(cargoLevelValue) == 'Empty') {
        alert('All fields are required.');
    }

    if (validateInput(fuelLevelValue) == 'Not a Number' || validateInput(cargoLevelValue) == 'Not a Number') {
        alert('Please enter a valid input.')
    }

    list.style.visibility = 'visible';

    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotValue} is ready for launch`;
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotValue} is ready for launch`;

    const launchStatus = document.getElementById("launchStatus");
    if (fuelLevelValue < 10000) {
        document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`;
    }
    if (cargoLevelValue > 10000) {
        document.getElementById("cargoStatus").innerHTML = `Cargo mass too heavy for launch`;
    }
    if (fuelLevelValue < 10000 || cargoLevelValue > 10000) {
        launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
        launchStatus.style.color = "rgb(199, 37, 78)";
    } else {
        document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`;
        document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`;
        launchStatus.innerHTML = `Shuttle is Ready for Launch`;
        launchStatus.style.color = "rgb(65, 159, 106)";
    }
    // if both fuel and cargo are good
    // change the launchStatus to "Shuttle is Ready for Launch" and color to green
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    return planets[Math.floor(Math.random() * (planets.length - 1))];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;