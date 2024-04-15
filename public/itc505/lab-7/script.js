document.getElementById('mad-lib-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Gather form data
    const formData = new FormData(event.target);

    // Convert FormData to JSON
    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    // Make the POST request
    fetch('/generate-story', { // Assuming the form is submitted to the same URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
    })
    .then(response => response.json()) // Assuming the server responds with JSON
    .then(data => {
        // Assuming the server sends back the generated story in the response
        document.getElementById('story').innerHTML = data.story;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('story').innerHTML = 'An error occurred while generating the story.';
    });
});
