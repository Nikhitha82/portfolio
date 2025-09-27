document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById('contactForm');

    if(contactForm) { // Only run if form exists on this page
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent page reload

            const name = contactForm.name.value;
            const email = contactForm.email.value;
            const message = contactForm.message.value;

            if (name && email && message) {
                alert(`Thank you, ${name}! Your message has been received.`);
                contactForm.reset(); // Clear form
            } else {
                alert("Please fill in all fields.");
            }
        });
    }
});
