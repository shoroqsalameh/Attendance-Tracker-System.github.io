// // Sample user data
// let userData = {
//     firstName: "John",
//     lastName: "Doe",
//     email: "john.doe@example.com",
//     password: "securepassword"
// };

// // Function to fill the form with user data from local storage
// function fillForm() {
//     const storedUserData = JSON.parse(localStorage.getItem('userData'));

//     // If there's stored data, use it; otherwise, use the default data
//     userData = storedUserData || userData;

//     document.getElementById('firstName').value = userData.firstName;
//     document.getElementById('lastName').value = userData.lastName;
//     document.getElementById('email').value = userData.email;
//     document.getElementById('password').value = userData.password;
// }

// // Function to enable form fields for editing
// function editProfile() {
//     const formElements = document.getElementById('profileForm').elements;

//     for (let i = 0; i < formElements.length; i++) {
//         formElements[i].removeAttribute('readonly');
//     }

//     document.getElementById('saveBtn').style.display = 'block';
// }

// // Event listener for form submission
// document.getElementById('profileForm').addEventListener('submit', function (event) {
//     event.preventDefault();
//     saveChanges();
// });

// // Function to save changes and update local storage
// function saveChanges() {
//     const formElements = document.getElementById('profileForm').elements;

//     for (let i = 0; i < formElements.length; i++) {
//         formElements[i].setAttribute('readonly', true);
//     }

//     document.getElementById('saveBtn').style.display = 'none';

//     // Update the userData object with the form values
//     userData = {
//         firstName: document.getElementById('firstName').value,
//         lastName: document.getElementById('lastName').value,
//         email: document.getElementById('email').value,
//         password: document.getElementById('password').value
//     };

//     // Save the updated user data to local storage
//     localStorage.setItem('userData', JSON.stringify(userData));
// }

// // Fill the form with user data when the page loads
// fillForm();


// Sample user data
// Function to enable editing of user info

function populateFieldsFromLocalStorage() {
    const storedFirstName = localStorage.getItem('firstName');
    const storedLastName = localStorage.getItem('lastName');
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    document.getElementById('firstName').value = storedFirstName || '';
    document.getElementById('lastName').value = storedLastName || '';
    document.getElementById('email').value = storedEmail || '';
    document.getElementById('password').value = storedPassword || '';
}

// Function to save changes to local storage
function saveChanges() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // You can also display a success message or perform other actions if needed

    // Hide the save button after saving changes
    document.getElementById('saveBtn').style.display = 'none';
    console.log('values added')
}

// Function to enable the input fields for editing
function editProfile() {
    // Show the save button
    document.getElementById('saveBtn').style.display = 'block';
    document.getElementById('edit').style.display='none';

    // You can also add additional logic if needed
}

// Populate input fields on page load
populateFieldsFromLocalStorage();
