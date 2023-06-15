const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
};

function checkReservation() {
  const nameInput = document.getElementById("nameInput");
  const message = document.getElementById("message");
  const name = nameInput.value.trim();

  if (name !== "") {
    if (reservations[name] && !reservations[name].claimed) {
      message.textContent = "Welcome, " + name;
    } else if (reservations[name] && reservations[name].claimed) {
      message.textContent = "Hmm, someone already claimed this reservation";
    } else {
      message.textContent = "You have no reservation";
    }
  } else {
    message.textContent = "Please enter your name";
  }

  nameInput.value = "";
}

const checkButton = document.getElementById("checkButton");
checkButton.addEventListener("click", checkReservation);
