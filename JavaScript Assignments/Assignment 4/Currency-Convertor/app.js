document.getElementById("btn").addEventListener("click", function (event) {
    event.preventDefault();

    const amount = document.getElementById("Amount").value;
    const currency = document.getElementById("Currency").value;
    const resultField = document.getElementById("Ans");

    if (amount <= 0) {
        resultField.value = "Invalid";
        return;
    }
    let rate;

    switch (currency) {
        case "USD":
            rate = 0.0035;
            break;
        case "GBP":
            rate = 0.0026;
            break;
        case "POUND":
            rate = 0.0027;
            break;
        case "JPY":
            rate = 0.52;
            break;
        default:
            resultField.value = "Invalid Currency";
            return;
    }

    const converted = amount * (rate);
    resultField.value = converted.toFixed(2);
});
