// Function to open the modal
function openModal(videoUrl) {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    
    // Set the video URL in iframe and show the modal
    videoFrame.src = videoUrl;
    modal.style.display = 'block'; // Ensure modal is visible
    setTimeout(() => {
        modal.classList.add('show'); // Add the 'show' class after slight delay for transition
    }, 10); // Delay for transition
    
    // Disable scrolling on the main page
    document.body.classList.add('modal-open');
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    
    // Remove the 'show' class for fade-out effect
    modal.classList.remove('show');
    
    // Wait for the fade-out transition to finish before hiding the modal and resetting the video
    setTimeout(() => {
        modal.style.display = 'none';
        videoFrame.src = ''; // Stop the video
    }, 500); // Match the CSS transition time (0.5s)
    
    // Enable scrolling on the main page again
    document.body.classList.remove('modal-open');
}

// Close the modal if the user clicks outside the modal content
window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target == modal) {
        closeModal();
    }
}
