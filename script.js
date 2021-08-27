const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

    let listedPlanets;
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function(result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function() {
        console.log(listedPlanets);
        const planet = pickPlanet(listedPlanets);
        console.log(planet);
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.imageUrl);
    })

    let form = document.querySelector("form");
    let list = document.getElementById('faultyItems');
    list.style.visibility = "hidden";

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let pilotInput = document.querySelector("input[name=pilotName]");
        let copilotInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoLevelInput = document.querySelector("input[name=cargoMass]");
        const pilotValue = pilotInput.value;
        const copilotValue = copilotInput.value;
        const fuelLevelValue = fuelLevelInput.value;
        const cargoLevelValue = cargoLevelInput.value;

        formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoLevelValue);

    });


});