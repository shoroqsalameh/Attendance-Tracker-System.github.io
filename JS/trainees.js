// popup
document.querySelector("#btn_1").addEventListener("click", function () {
  document.querySelector(".popup").classList.add("active");
});
document
  .querySelector(".popup .close-btn")
  .addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("active");
  });

document.querySelector("#btn_2").addEventListener("click", function () {
  document.querySelector(".popup_task").classList.add("active");
});
document
  .querySelector(".popup_task .close-btn")
  .addEventListener("click", function () {
    document.querySelector(".popup_task").classList.remove("active");
  });

  //btn3
  document.querySelector("#btn_3").addEventListener("click", function () {
    document.querySelector(".popup3").classList.add("active");
  });
  document
    .querySelector(".popup3 .close-btn")
    .addEventListener("click", function () {
      document.querySelector(".popup3").classList.remove("active");
    });

// popup_task
text_field = document.querySelector(".text-field");
test = document.querySelector(".test");
let value = 0;

if (localStorage.getItem("value") != null) {
  value = localStorage.getItem("value");
  text_field.innerHTML = localStorage.getItem("value");
  test.innerHTML = localStorage.getItem("value");
}

document.querySelector(".up-btn").addEventListener("click", () => {
  value++;
  localStorage.setItem("value", value);
  text_field.innerHTML = localStorage.getItem("value");
  test.innerHTML = localStorage.getItem("value");
});

document.querySelector(".down-btn").addEventListener("click", () => {
  value--;
  localStorage.setItem("value", value);
  text_field.innerHTML = localStorage.getItem("value");
  test.innerHTML = localStorage.getItem("value");
});

document.querySelector(".reset-btn").addEventListener("click", () => {
  value = 0;
  localStorage.setItem("value", value);
  text_field.innerHTML = localStorage.getItem("value");
  test.innerHTML = localStorage.getItem("value");
});



//Function
let editRowIndex = -1; // Variable to store the index of the row being edited
let nextId = 1; // Variable to generate dynamic IDs

// Function to add trainee to the table and save data to local storage
function addTrainee() {
  const firstName = document.getElementById("FirstName").value;
  const lastName = document.getElementById("LastName").value;
  const task = document.getElementById("task").value;
  const absence = document.getElementById("absence").value;

  // Validate the input (you may add more validation as needed)
  if (!firstName || !lastName || !task || !absence) {
    alert("Please fill in all fields");
    return;
  }

  if (editRowIndex !== -1) {
    // If editRowIndex is not -1, it means we are in edit mode
    // Update the existing row with the edited data
    const editedRow = document.querySelector(
      `.table__body tbody tr:nth-child(${editRowIndex + 1})`
    );
    editedRow.innerHTML = ` 
                <td>${nextId}</td>
                <td>${firstName} ${lastName}</td>
                <td>${task} </td>
                <td class="test">${(test.innerHTML =
                  localStorage.getItem("value"))}</td>
                <td>${absence}</td>
                <td>
                  <a class="link_table" href="#" onclick="editTrainee(this)">
                    <i class="fa-solid fa-pen-to-square fas"></i>
                  </a>
                  <a class="link_table" href="#" onclick="deleteTrainee(this)">
                    <i style="margin-right: 30px;" class="fa-solid fa-trash fas"></i>
                  </a>
                </td>
              `;
    // Reset editRowIndex
    editRowIndex = -1;
  } else {
    // Create a new row for the table
    const tbody = document.querySelector(".table__body tbody");
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
                <td>${nextId}</td>
                <td>${firstName} ${lastName}</td>
                <td>${task}</td>
                <td class="test">${(test.innerHTML =
                  localStorage.getItem("value"))}</td>
                <td>${absence}</td>
                <td>
                  <a class="link_table" href="#" onclick="editTrainee(this)">
                    <i class="fa-solid fa-pen-to-square fas"></i>
                  </a>
                  <a class="link_table" href="#" onclick="deleteTrainee(this)">
                    <i style="margin-right: 30px;" class="fa-solid fa-trash fas"></i>
                  </a>
                </td>
              `;
    // Append the new row to the table
    tbody.appendChild(newRow);
    // Increment nextId for the next entry
    nextId++;
  }

  // Save data to local storage after adding or editing a trainee
  saveDataToLocalStorage();

  // Clear the form fields
  document.getElementById("FirstName").value = "";
  document.getElementById("LastName").value = "";
  document.getElementById("task").value = "";
  document.getElementById("absence").value = "";

  // Close the popup
  document.querySelector(".popup").classList.remove("active");
}

// Function to edit trainee data
function editTrainee(row) {
  const cells = row.parentElement.parentElement.cells;

  // Fill the form fields with existing data
  document.getElementById("FirstName").value =
    cells[1].textContent.split(" ")[0];
  document.getElementById("LastName").value =
    cells[1].textContent.split(" ")[1];
  document.getElementById("task").value = cells[2].textContent;
  document.getElementById("absence").value = cells[4].textContent;

  // Store the index of the row being edited
  editRowIndex = row.parentElement.parentElement.rowIndex - 1;

  // Open the popup for editing
  document.querySelector(".popup").classList.add("active");
}

// Function to delete trainee
function deleteTrainee(row) {
  if (confirm("Are you sure you want to delete this trainee?")) {
    row.parentElement.parentElement.remove();

    // Save the updated data to local storage
    saveDataToLocalStorage();
  }
}

// Function to save data to local storage
function saveDataToLocalStorage() {
  // Get the table rows
  const tableRows = document.querySelectorAll(".table__body tbody tr");

  // Create an array to store the data
  const data = [];

  // Loop through each row and extract data
  tableRows.forEach((row) => {
    const rowData = {
      id: row.cells[0].textContent,
      name: row.cells[1].textContent,
      solvedTask: row.cells[2].textContent,
      totalTask: row.cells[3].textContent,
      absences: row.cells[4].textContent,
    };

    data.push(rowData);
  });

  // Save the data to local storage
  localStorage.setItem("tableData", JSON.stringify(data));
}

// Function to load data from local storage and display it
function loadDataFromLocalStorage() {
  const savedData = localStorage.getItem("tableData");

  if (savedData) {
    const parsedData = JSON.parse(savedData);

    // Populate the table with saved data
    const tbody = document.querySelector(".table__body tbody");
    tbody.innerHTML = ""; // Clear existing rows

    // Find the maximum ID in the saved data
    let maxId = 0;
    parsedData.forEach((rowData) => {
      const id = parseInt(rowData.id);
      if (id > maxId) {
        maxId = id;
      }
    });

    // Set nextId to the next available ID
    nextId = maxId + 1;

    parsedData.forEach((rowData) => {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
                  <td>${rowData.id}</td>
                  <td>${rowData.name}</td>
                  <td id="saif${rowData.id}">${rowData.solvedTask} <i id='icon${rowData.id}' class="fa-solid fa-plus plus" onclick="addsol(${rowData.id})"></i></td>
                  <td>${settotal()}</td>
                  <td id="hamzeh${rowData.id}">${rowData.absences} <i id='icons${rowData.id}' class="fa-solid fa-plus plus" onclick="addabs(${rowData.id})"></i></td>
                  <td>
                    <a class="link_table" href="#" onclick="editTrainee(this)">
                      <i class="fa-solid fa-pen-to-square fas"></i>
                    </a>
                    <a class="link_table" href="#" onclick="deleteTrainee(this)">
                      <i style="margin-right: 30px;" class="fa-solid fa-trash fas"></i>
                    </a>
                  </td>
                `;

      tbody.appendChild(newRow);
    });
  }
}

  
 function addsol(x){
  let addtask=document.getElementById(`saif${x}`);
  let icon=document.getElementById(`icon${x}`);
  console.log(x);
  addtask.textContent= (parseInt(addtask.textContent) + 1);
  addtask.appendChild(icon);
  // console.log(addtask.textContent);
let sol=localStorage.getItem('tableData');
let parsol=JSON.parse(sol);
parsol[x].solvedTask=addtask.textContent ;
let updatesol=JSON.stringify(parsol);
localStorage.setItem('tableData',updatesol);

 }
 function addabs(x){
  let addabs=document.getElementById(`hamza${x}`);
  let icon=document.getElementById(`icons${x}`);
  
  addabs.textContent= (parseInt(addabs.textContent) + 1);
  addabs.appendChild(icon);
  console.log(addabs.textContent);
let sol=localStorage.getItem('tableData');
let parsol=JSON.parse(sol);
parsol[x].absences=addabs.textContent ;
let updatesol=JSON.stringify(parsol);
localStorage.setItem('tableData',updatesol);

 }
 function settotal(){
   let get =document.getElementById('Totaltask');
   console.log(get.textContent);
   return get.textContent;
  }
  
  function add(){
    location.reload();
  }


// Add event listener to the "Add Trainees" button
document.querySelector(".form button").addEventListener("click", addTrainee);

// Load data from local storage and display on page load
window.addEventListener("load", loadDataFromLocalStorage);


	


// read name from localStorge and put them in the select as option
document.addEventListener('DOMContentLoaded', function () {
  // Read data from local storage
  const studentsData = JSON.parse(localStorage.getItem('tableData')) || [];

  const selectElement = document.getElementById('studentSelect');

  studentsData.forEach(student => {
      const option = document.createElement('option');
      option.value = student.name;
      option.textContent = student.name;
      selectElement.appendChild(option);
  });
});
function onclick_function() {
  // Read existing feedback data from local storage or initialize an empty string
  var existingData = window.localStorage.getItem('feedbackData') || '';

  //GET THE DATA
  var drName = document.getElementById('doctorName').value;
  var stdName = document.getElementById('studentSelect').value;
  var dateAndTime=getCurrentDateTime();
  // alert(stdName);
  var feedbackText = document.getElementById('feedback').value;

  // Concatenate the new feedback with existing data, separated by a semicolon
  var newFeedback = `${drName},${stdName},${feedbackText},${dateAndTime}`;
  var updatedData = existingData ? `${existingData};${newFeedback}` : newFeedback;

  // Save the updated string back to local storage
  window.localStorage.setItem('feedbackData', updatedData);
}
function getCurrentDateTime() {
  const currentDate = new Date();
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
  };

  const formattedDate = currentDate.toLocaleString('en-US', options);
  return formattedDate;
}

function logout(){
  localStorage.clear();
  window.location.replace("loginPage.html");
}
