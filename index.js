// Write your solution in this file!
// Declare customerName in global scope
var customerName = "bob";

// Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to set bestCustomer in global scope
function setBestCustomer() {
  bestCustomer = "not bob"; // Implicit global variable (bad practice, but required for the lab)
}

// Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

// Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = "someone";

// Function to attempt changing leastFavoriteCustomer (this will cause an error)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "another person"; // This will throw an error since constants cannot be reassigned
}
