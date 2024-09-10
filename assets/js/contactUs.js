document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    // Clear previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("locationError").textContent = "";
    document.getElementById("messageError").textContent = "";

    // Name validation
    const name = document.getElementById("name").value.trim();
    if (name === "") {
      document.getElementById("nameError").textContent = "Name is required";
      isValid = false;
    }

    // Email validation (simple regex for demonstration purposes)
    const email = document.getElementById("email").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailRegex.test(email)) {
      document.getElementById("emailError").textContent =
        "Valid email is required";
      isValid = false;
    }

    // Phone validation (numeric check)
    const phone = document.getElementById("phone").value.trim();
    const phoneRegex = /^[0-9]+$/;
    if (phone === "" || !phoneRegex.test(phone) || phone.length < 10) {
      document.getElementById("phoneError").textContent =
        "Valid phone number is required";
      isValid = false;
    }

    // Location validation
    const location = document.getElementById("location").value.trim();
    if (location === "") {
      document.getElementById("locationError").textContent =
        "Location is required";
      isValid = false;
    }

    // Message validation
    const message = document.getElementById("message").value.trim();
    if (message === "") {
      document.getElementById("messageError").textContent =
        "Message is required";
      isValid = false;
    }

    // Inline Alert Function
    function showInlineAlert() {
      var alertDiv = document.getElementById("inline-alert");
      alertDiv.innerHTML = "Form Submitted Successfully!";
      alertDiv.style.display = "block"; // Make the alert visible
    }

    // If the form is valid, you show inline alert message
    if (isValid) {
      showInlineAlert();
    }
  });

let footerLinks = document.querySelector(".footerLinks");
const LinksArray = [
  "About Us",
  "Menu",
  "Blog",
  "FAQ",
  "Services",
  "Gallery",
  "Contact Us",
];

const linksloop = LinksArray.forEach((ele) => {
  footerLinks.innerHTML += `<P class="mb-2">${ele}</p>`;
});

