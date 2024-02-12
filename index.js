/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn");
const inputBox = document.getElementById("input-convert")
let meterToFeet;
let feetToMeter;
let litresToGallons;
let gallonsToLitres;
let kilogramsToPounds;
let poundsToKilograms;

const meterFeetCF = 3.281;
const litreGallonCF = 0.264;
const kilogramPoundCF = 2.204;

const lengthConverted = document.getElementById("length-converted");
const volumeConverted = document.getElementById("volume-converted");
const massConverted = document.getElementById("mass-converted");

// Execute a function when the user presses a key on the keyboard
inputBox.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      convertBtn.click();
    }
  });

convertBtn.addEventListener("click", function() {
    const inputValue = Number(inputBox.value)
    convertAllValues(inputValue)
    render(inputValue)
})

function convertAllValues(inputValue) {
    meterToFeet = (inputValue*meterFeetCF).toFixed(3);
    feetToMeter = (inputValue/meterFeetCF).toFixed(3);
    litresToGallons = (inputValue*litreGallonCF).toFixed(3);
    gallonsToLitres = (inputValue/litreGallonCF).toFixed(3);
    kilogramsToPounds = (inputValue*kilogramPoundCF).toFixed(3);
    poundsToKilograms = (inputValue/kilogramPoundCF).toFixed(3);
}

function render(inputValue) {
    lengthConverted.textContent = `${inputValue} meters = ${meterToFeet} feet | ${inputValue} feet = ${feetToMeter} meters`
    volumeConverted.textContent = `${inputValue} litres = ${litresToGallons} gallons | ${inputValue} gallons = ${gallonsToLitres} litres`
    massConverted.textContent = `${inputValue} kilos = ${kilogramsToPounds} pounds | ${inputValue} pounds = ${poundsToKilograms} kilos`
}   