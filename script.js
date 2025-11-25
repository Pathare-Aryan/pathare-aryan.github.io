document.getElementById('contact-form').addEventListener('submit', function(event){
    event.preventDefault();
    document.getElementById('status').innerText = "Thank you for contacting me! I'll get back to you soon.";
    // For demo purposes only. To actually send emails, use a service like EmailJS or Formspree.
});
