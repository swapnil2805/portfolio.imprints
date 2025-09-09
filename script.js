// Replace this URL with your deployed Google Apps Script Web App URL
const scriptURL = "https://script.google.com/macros/s/AKfycbzrhYkJRmHjI3NzJaEHTetVx9iNLz948-WV8lIc9Cbu6AHel69RAVkyatqyJI7RPfXnJQ/exec";

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch(scriptURL, { method: "POST", body: formData })
    .then(response => {
      alert("Thank you! Your response has been recorded.");
      this.reset();
    })
    .catch(error => {
      alert("Something went wrong. Please try again.");
      console.error("Error!", error.message);
    });
});
