// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Declare and initialize employees array
const employeesArray = [];

// Collect employee data
const collectEmployees = function() {
  

  // Get user input to create and return an array of employee objects

  let firstName = prompt("Please enter the employee's first name");
  let lastName =   prompt("Please enter the employee's last name");
  let salary = prompt("Please enter the employee's salary");

  // Create employee object using user input
  const employee = {
    firstName: firstName,
    lastName: lastName,
    salary: salary
  };

  // Test for employee object
  console.log(employee);

  // Add object to array
  employeesArray.push(employee);

  // Test for employees array
  console.log(employeesArray);

  return employeesArray;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

  // Declare and initialize total salary
  let totalSalary = 0;

  // Use a for-of loop to add all salaries together
  for (const employee of employeesArray) {
    totalSalary = totalSalary + employee.salary;
    console.log(employee.salary);
  }

  // Test for total salary
  console.log(totalSalary);
  
  // Divide salary by employees to get mean salary
  let meanSalary = totalSalary / employeesArray.length;

  // Test mean salary
  console.log(meanSalary);

  alert(`Average employee salary is ${meanSalary}.`);

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
