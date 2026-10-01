
// MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {

    navLinks.classList.toggle("active");

    menuBtn.textContent =
        navLinks.classList.contains("active") ? "✕" : "☰";

});


// CLOSE MOBILE MENU

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


// FLIGHT SEARCH FORM

const flightForm = document.getElementById("flightForm");

flightForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const from = document.getElementById("from").value;

    const to = document.getElementById("to").value;

    const date = document.getElementById("date").value;

    const passengers =
        document.getElementById("passengers").value;

    const bookingMessage =
        document.getElementById("bookingMessage");

    if (from.trim().toLowerCase() === to.trim().toLowerCase()) {

        bookingMessage.textContent =
            "Departure and destination must be different.";

        return;

    }

    bookingMessage.textContent =
        "Thank you! Your travel enquiry from " +
        from + " to " + to +
        " for " + passengers +
        " passenger(s) has been prepared. This is a demo only.";

});


// CONTACT FORM

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("customerName").value;

    const email =
        document.getElementById("customerEmail").value;

    const message =
        document.getElementById("customerMessage").value;

    const businessEmail = "yourbusiness@example.com";

    const subject = encodeURIComponent(
        "Travel Enquiry from " + name
    );

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\nMessage: " + message
    );

    document.getElementById("contactStatus").textContent =
        "Opening your email application...";

    window.location.href =
        "mailto:" + businessEmail +
        "?subject=" + subject +
        "&body=" + body;

});