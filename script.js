document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});

// Simple form validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
	e.preventDefault();
	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;

	if (name.trim() === '' || email.trim() === '') {
		alert('Please fill in all fields.');
	} else {
		alert('Form submitted successfully!');
		document.getElementById('name').value = '';
		document.getElementById('email').value = '';
	}
});
