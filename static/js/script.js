document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the form from submitting normally

    // collect form data
    var formData = new FormData(this);

    // convert form data to JSON
    var jsonData = {};
    formData.forEach(function(value, key) {
        jsonData[key] = value;
    });

    // send data to server
    fetch('/submit', {
        method: 'POST',
        body: JSON.stringify(jsonData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            throw new Error(data.error);
        }
        alert('Form submitted successfully!');
        document.getElementById('myForm').reset(); // reset the form
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Form submission failed: ' + error.message);
    });
});


// document.getElementById('myForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // prevent the form from submitting normally

//     // collect form data
//     var formData = new FormData(this);

//     // convert form data to JSON
//     var jsonData = {};
//     formData.forEach(function(value, key) {
//         jsonData[key] = value;
//     });

//     // send data to server
//     fetch('/submit', {
//         method: 'POST',
//         body: JSON.stringify(jsonData),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(response => {
//         if (!response.ok) {
//             // Handle HTTP errors
//             return response.text().then(text => {
//                 throw new Error(text || 'Form submission failed!');
//             });
//         }
//         return response.json();
//     })
//     .then(data => {
//         alert('Form submitted successfully!');
//         document.getElementById('myForm').reset(); // reset the form
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert('Form submission failed: ' + error.message);
//     });
// });


// document.getElementById('myForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // prevent the form from submitting normally

//     var formData = new FormData(this);

//     fetch('/submit', {
//         method: 'POST',
//         body: new URLSearchParams(formData),  // Send form data as URL-encoded
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         }
//     })
//     .then(response => {
//         if (!response.ok) {
//             return response.text().then(text => { throw new Error(text || 'Form submission failed!'); });
//         }
//         return response.text();
//     })
//     .then(data => {
//         document.body.innerHTML = data; // Update the page with the server's response
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert('Form submission failed: ' + error.message);
//     });
// });
