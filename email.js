// Initialize EmailJS
emailjs.init('rkVHEqgmCIAfB8w0N'); // Replace 'your_public_key' with your actual EmailJS public key

// Add event listener for form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Gather form data
  const templateParams = {
    from_name: document.getElementById('name').value, // Name from form
    from_email: document.getElementById('email').value, // Email from form
    message: document.getElementById('message').value, // Message from form
  };

  // Your EmailJS Service ID and Template ID
  const serviceID = 'service_qnyzl5v'; // Replace with your EmailJS service ID
  const templateID = 'template_fq4rqf3'; // Replace with your EmailJS template ID

  // Send the email
  emailjs.send(serviceID, templateID, templateParams)
    .then(function (response) {
      alert('Message sent successfully!');
      document.getElementById('contact-form').reset(); // Clear the form
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch(function (error) {
      alert('Failed to send message. Please try again.');
      console.error('FAILED...', error);
    });
});
