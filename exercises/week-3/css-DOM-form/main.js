document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  const nameInput = document.getElementById("name");
  const salaryInput = document.getElementById("salary");
  const birthdayInput = document.getElementById("birthday");
  const phoneInput = document.getElementById("phone");
  
  const name = nameInput.value.trim();
  const salary = Number(salaryInput.value);
  const birthday = birthdayInput.value;
  const phone = phoneInput.value;

  const errorMessages = [];

  if (name === "") {
    errorMessages.push("Name is missing.");
  }

  if (salary < 10000 || salary > 16000) {
    errorMessages.push("Desired salary must be between 10000 and 16000.");
  }

  if (birthday === "") {
    errorMessages.push("Birthday is missing.");
  }

  if (phone.length !== 10) {
    errorMessages.push("Phone number must be 10 digits long.");
  }

  displayErrorMessages(errorMessages);
});

function displayErrorMessages(messages) {
  const errorElement = document.getElementById("errorMessages");
  errorElement.innerHTML = ""; // Clear previous error messages

  messages.forEach(function(message) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = message;
    errorMessage.style.color = "red";
    errorElement.appendChild(errorMessage);
  });
}
