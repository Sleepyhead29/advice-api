let adviceNumber = document.getElementById("advice-number");
let advice = document.getElementById("advice");


const apiData = fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {

        let receivedAdviceNb = data.slip.id;
        let receivedAdvice = data.slip.advice;
        adviceNumber.append(`ADVICE #${receivedAdviceNb}`);
        advice.append(`"${receivedAdvice}"`);
    })
    .catch(error => console.log(error))

    .finally(displayMessage => console.log("API used"));