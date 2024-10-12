//!initial values
var selectedRow = null;
//!form submit logic
function onFormSubmit(e) {
  event.preventDefault();
  var formData = readFormData();
  if (selectedRow == null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}
//!get method(Retrieving the data)
function readFormData() {
  var formData = {};
  formData["fullName"] = document.getElementById("fullName").value;
  formData["yearOfStudy"] = document.getElementById("yearOfStudy").value;
  formData["dateOfBirth"] = document.getElementById("dateOfBirth").value;
  formData["linkedIn"] = document.getElementById("linkedIn").value;
  return formData;
}
//!insert the data (Post method)
function insertNewRecord(data) {
  var table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fullName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.yearOfStudy;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.dateOfBirth;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.linkedIn;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick = "onDelete(this)">Delete</button>`;
}
//!edit and update the data (Update method)
//editing the data(get)
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("yearOfStudy").value = selectedRow.cells[1].innerHTML;
  document.getElementById("dateOfBirth").value = selectedRow.cells[2].innerHTML;
  document.getElementById("linkedIn").value = selectedRow.cells[3].innerHTML;
}
//updating the data
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.fullName;
  selectedRow.cells[1].innerHTML = formData.yearOfStudy;
  selectedRow.cells[2].innerHTML = formData.dateOfBirth;
  selectedRow.cells[3].innerHTML = formData.linkedIn;
}
//!deleting the data (delete method)
//delete the data
function onDelete(td) {
  if (confirm("Are you sure about deleting the data ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
    resetForm();
  }
}
//!reseting the values in form
function resetForm() {
  document.getElementById("fullName").value = "";
  document.getElementById("yearOfStudy").value = "";
  document.getElementById("dateOfBirth").value = "";
  document.getElementById("linkedIn").value = "";
  selectedRow = null;
}