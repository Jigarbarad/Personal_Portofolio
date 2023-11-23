// Add smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Example form submission (replace with your backend logic)
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.querySelector('#contact-form input[type="text"]').value;
    const email = document.querySelector('#contact-form input[type="email"]').value;
    const message = document.querySelector('#contact-form textarea').value;
    
    // Replace this with your own logic (e.g., sending data to a server)
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  });
  