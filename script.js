// Write your JavaScript code here!

const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper.js");

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();

    listedPlanetsResponse.then(function(result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function() {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        //  const planet = pickPlanet(listedPlanets)
        //  addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)
    })

    let form = document.querySelector('form');
    form.addEventListener("submit", function(event) {


        let pilotInput = this.document.querySelector("input[name=pilotName]");
        let copilotInput = this.document.querySelector("input[name=copilotName]");
        let fuelLevelInput = this.document.querySelector("input[name=fuelLevel]");
        let cargoLevelInput = this.document.querySelector("input[name=cargoMass]");
        const pilotValue = pilotInput.value;
        const copilotValue = copilotInput.value;
        const fuelLevelValue = fuelLevelInput.value;
        const cargoLevelValue = cargoLevelInput.value;

        let list = document.getElementById('faultyItems');

        formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoLevelValue)

    });



});