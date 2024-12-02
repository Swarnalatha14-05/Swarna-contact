document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    email: document.getElementById('email').value,
    queryType: document.querySelector('input[name="queryType"]:checked').value,
    message: document.getElementById('message').value,
    consent: document.getElementById('consent').checked,
  };
  console.log('Form Submitted:', formData);
  alert('Thank you for your submission! We will get back to you shortly.');
  document.getElementById('contactForm').reset();
});