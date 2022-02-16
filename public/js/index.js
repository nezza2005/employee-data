

function Employees(photo, fName, lName, yearsInService, jobRole, skillSets, phoneNumber) {
  this.photo = photo;
  this.fName = fName;
  this.lName = lName;
  this.yearsInService = yearsInService;
  this.jobRole = jobRole;
  this.skillSets = skillSets;
  this.phoneNumber = phoneNumber;
}



const employee0 = new Employees(
  'public/img/employees/person-0.jpg', "John", "Field", 15, "Head Chef", ["cooking", "cleaning", "hygene quality"], "+44-755-955-027", "johnF12@testEmail.co.uk"
)

const employee1 = new Employees(
  'public/img/employees/person-1.jpg', "Emma", "Wright", 7, "Team Leader", ["people skills", "Computer literate", "Organisation skills"], "+44-775-055-025", "emma1@Email.co.uk"
)

const employee2 = new Employees(
  'public/img/employees/person-2.jpg', "Tommo", "Dali", 4, "Logistic", ["Computer literate", "Organisation skills"], "+44-725-052-095", "tommoDal1@exampleEmail.co.uk"
)

const employee3 = new Employees(
  'public/img/employees/person-3.jpg', "Sherry", "Hodgekinson", 9, "Carer", ["People skills", "Cleaning", "Cooking", "First Aid"], "+44-788-022-791", "ShirleyH@Email.co.uk"
)

const employee4 = new Employees(
  'public/img/employees/person-4.jpg', "Tim", "Carpenter", 5, "Carer", ["People skills", "Cleaning", "First Aid"], "+44-798-027-754", "TT@exampleEmail.co.uk"
)

const employee5 = new Employees(
  'public/img/employees/person-5.jpg', "Charlie", "Den", 8, "Carer", ["People skills", "First Aid"], "+44-798-555-875", "Charlie@exampleEmail.co.uk"
)

const employee6 = new Employees(
  'public/img/employees/person-6.jpg', "Kirsten", "Rose", 2, "Carer", ["People skills", "First Aid", "Computer literature"], "+44-799-112-871", "Krose@Email.co.uk"
)

//needs to be placed after new Employee objects to avoid initialisation errors.





function showEmployeeData() {
  const randomEmployeeArr = [];
  const employeeArr = [employee0, employee1, employee2, employee3, employee4, employee5, employee6] ;
  const randomise = Math.floor(Math.random() * employeeArr.length);
  const pushRandomEmployee = randomEmployeeArr.push(employeeArr[randomise]);
  console.log(randomise, randomEmployeeArr)


    document.querySelector(".card img").src = randomEmployeeArr[0].photo;
    document.getElementById("first").textContent = randomEmployeeArr[0].fName;
    document.getElementById("last").textContent = randomEmployeeArr[0].lName;
    document.getElementById("yos").textContent = randomEmployeeArr[0].yearsInService;
    document.getElementById("job").textContent = randomEmployeeArr[0].jobRole;
    document.getElementById("skills").textContent = randomEmployeeArr[0].skillSets;
    document.getElementById("phone").textContent = randomEmployeeArr[0].phoneNumber;
}



//Button listener.
document.getElementById("btn").addEventListener("click", showEmployeeData);


//What have i learned.

//to create a "different" random number everyitme button is clicked i need to create 2 arrays, one with original elements and one empty to push to via Math.random.
//If you have an array of objects you will then need to access the properties within by using index [0].property name.
