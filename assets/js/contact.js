$(function() {
    $('form#contact_form').submit(function(e) {
        e.preventDefault(); // Prevent the default form submission

        // Serialize form data
        var formData = $(this).serialize(); 
        
        // URL for Formspree
        var url = "https://formspree.io/f/xeojwpvz";

        // AJAX request
        $.ajax({
            type: "POST",
            url: url,
            data: formData,
            dataType: "json", // Expect a JSON response from Formspree
            success: function(response) {
                // Redirect to custom thank you page on success
                window.location.href = "thank-you.html";
            },
            error: function(xhr, status, error) {
                // Log any error for debugging
                console.log("Error: " + error);
                // Display an alert to the user in case of failure
                alert("Oops! Something went wrong. Please try again.");
            }
        });
    });
});
