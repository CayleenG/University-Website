const form = document.getElementById("visitform");
const errorContainer = document.getElementById("error");
const errorMessage = document.createElement("p");
const errorVisitorMessage = document.createElement("p");
errorMessage.style.textAlign = "center";
errorMessage.textContent = "Data not completed, please re-enter";
errorVisitorMessage.textContent = "Please enter a valid number of people!";

errorContainer.append(errorMessage);
errorContainer.append(errorVisitorMessage);

errorMessage.style.display = "none";
errorVisitorMessage.style.display = "none";

var isFormValid = false;

function reservation(){
    const dateInput = form.elements["date"];
    const timeSelect = form.elements["time"];
    const visitorsInput = form.elements["visitors"];


    const reserveResult = reserve(
        dateInput.value,
        timeSelect.value,
        parseInt(visitorsInput.value)
    );
    if (reserveResult) {
        alert("Your reservation is successful!");
    } else {
        alert(
            "Sorry, the reservation is full!");
    }
}


function handleFormSubmit(e) {
    e.preventDefault();
    const dateInput = form.elements["date"];
    const timeSelect = form.elements["time"];
    const visitorsInput = form.elements["visitors"];
    const visitors = parseInt(visitorsInput.value);

    if (
        !dateInput.value.trim() ||
        !timeSelect.value.trim() ||
        !visitorsInput.value.trim()
    ) {
        errorMessage.style.display = "block";
        errorVisitorMessage.style.display = "none";
        return;
    } else if (visitors <= 0){
        errorVisitorMessage.style.display = "block";
        errorMessage.style.display = "none";
    } else{
        errorMessage.style.display = "none";
        errorVisitorMessage.style.display = "none";
        setTimeout(reservation, 100)
    }
}

form.addEventListener("submit", handleFormSubmit);



    



