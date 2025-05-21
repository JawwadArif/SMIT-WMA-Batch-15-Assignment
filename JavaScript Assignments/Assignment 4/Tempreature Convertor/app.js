document.getElementById("btn").addEventListener("click", function (event) {
    event.preventDefault();

    const temperature = parseFloat(document.getElementById("Tempreature").value);
    const from = document.getElementById("from").value;
    const to = document.getElementById("Conversion").value;
    const converted = document.getElementById("Converted");

    if (isNaN(temperature)) {
        converted.value = "Invalid input";
        return;
    }

    if (from === to) {
        converted.value = "From and To units must be different";
        return;
    }

    let result;

    switch (from + " to " + to) {
        case "Fahrenheit to Celsius":
            result = (temperature - 32) * 5 / 9;
            break;
        case "Celsius to Fahrenheit":
            result = (temperature * 9 / 5) + 32;
            break;
        case "Celsius to Kelvin":
            result = temperature + 273.15;
            break;
        case "Kelvin to Celsius":
            result = temperature - 273.15;
            break;
        case "Fahrenheit to Kelvin":
            result = (temperature - 32) * 5 / 9 + 273.15;
            break;
        case "Kelvin to Fahrenheit":
            result = (temperature - 273.15) * 9 / 5 + 32;
            break;
        default:
            converted.value = "Conversion error";
            return;
    }

    let unit = to === "Celsius" ? "°C" : to === "Fahrenheit" ? "°F" : "°K";
    converted.value = result.toFixed(2) + " " + unit;
});
