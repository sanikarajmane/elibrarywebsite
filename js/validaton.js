document.addEventListener("DOMContentLoaded", function() {
        function formValidation(event) {
            event.preventDefault(); // Prevent the form from submitting
    
            // Get form values
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var subject = document.getElementById("subject").value;
            var message = document.getElementById("message").value;
    
            // Regular expression for email validation
            var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
            // Validate name (not empty)
            if (name.trim() === "") {
                alert("Please enter your name.");
                return false;
            }
    
            // Validate email (not empty and valid pattern)
            if (email.trim() === "") {
                alert("Please enter your email.");
                return false;
            } else if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return false;
            }
    
            // Validate subject (not empty)
            if (subject.trim() === "") {
                alert("Please enter a subject.");
                return false;
            }
    
            // Validate message (not empty)
            if (message.trim() === "") {
                alert("Please enter your message.");
                return false;
            }
    
            // If all validations pass, submit the form
            alert("Form submitted successfully!");
            document.getElementById("form").submit(); // Uncomment this to submit the form
        }
    
        // Add event listener to the form
        document.getElementById("form").addEventListener("submit", formValidation);
    });