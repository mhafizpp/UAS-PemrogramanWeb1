function showDescription(title, description) {
    document.getElementById('popup-title').textContent = title;
    document.getElementById('popup-description').textContent = description;
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function closeConfirmationPopup() {
    document.getElementById('confirmation-popup').style.display = 'none';
}

// Close the popup when clicking outside of the popup content
window.onclick = function(event) {
    var popup = document.getElementById('popup');
    if (event.target == popup) {
        popup.style.display = 'none';
    }

    var confirmationPopup = document.getElementById('confirmation-popup');
    if (event.target == confirmationPopup) {
        confirmationPopup.style.display = 'none';
    }
}

document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('confirmation-popup').style.display = 'block';
});
