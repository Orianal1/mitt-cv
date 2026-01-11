document.addEventListener("DOMContentLoaded", () => {
	// Active Navigation Handling
	const currentLocation = location.href;
	const menuItem = document.querySelectorAll(".nav-links a");
	const menuLength = menuItem.length;
	for (let i = 0; i < menuLength; i++) {
		if (menuItem[i].href === currentLocation) {
			menuItem[i].classList.add("active");
		}
	}

	// Simple Form Handler Log
	const contactForm = document.getElementById("contact-form");
	if (contactForm) {
		contactForm.addEventListener("submit", (e) => {
			e.preventDefault();
			const name = document.getElementById("name").value;
			const email = document.getElementById("email").value;
			const message = document.getElementById("message").value;

			console.log("Form submitted:");
			console.log("Name:", name);
			console.log("Email:", email);
			console.log("Message:", message);

			if (!name || !email || !message) {
				alert("Vänligen fyll i alla fält innan du skickar meddelandet.");
				return;
			}

			if (name.length < 2) {
				const nameError = document.getElementById("name-error");
				nameError.textContent = "Namnet måste vara minst 2 tecken långt.";
				nameError.style.display = "block";
				return;
			}

			alert(
				`Tack för ditt meddelande, ${name}! Jag återkommer till dig på ${email} så snart som möjligt.`
			);
			contactForm.reset();
		});
	}
});
