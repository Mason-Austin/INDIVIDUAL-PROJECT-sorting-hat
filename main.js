let students=[
  {
    id:1,
    name:"Harry Potter",
    house: "Gryffindor"
  }
];

const renderToDom= (divId, htmlToRender)=>{
  const selectedDiv=document.getElementById(divId)
  selectedDiv.innerHTML = htmlToRender
}

const cardsOnDom= (arry) =>{
  let domString="";
  arry.forEach(student => {
    domString +=`
    <div class="${student.house}">
    
    </div>

    <div id="studentInfo">
      <h2>${student.name}</h2>
      <h3>${student.house}</h3>
      <button id="delete--${student.id}" type="button" class="btn btn-danger">Danger</button>
    </div>`

      // id:1,
      // name:"Harry Potter",
      // house: "Gryffindor"

   });
  renderToDom("firstYearContainer", domString)
}

const addStudentForm = () =>{
  const domString = `
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add student
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add new student</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

      <form id="form1">

        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="studentName" placeholder="Student name" required>
          <label for="floatingInput">Student name</label>
        </div>

  
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary">Add student</button>
        </div>
        
      </form>

    </div>
  </div>
</div>
  `
  
  renderToDom("addStudentContainer", domString)
}

const houseRandom = () =>{
 const randNum=Math.floor(Math.random()*4)
 let house=""
 switch (randNum) {
  case 0:
    house = "Gryffindor"
    break;
 
  case 1:
    house ="Hufflepuff"
    break;

    case 2:
    house ="Ravenclaw"
    break;
 
  case 3:
    house ="Slytherin"
    break;
 }
 return house
}


const startApp= () =>{
  cardsOnDom(students)
  addStudentForm()
}

startApp()

const createStudent = (e) =>{
  e.preventDefault();

  console.log("addStudent is called");
  const newStudentObj={
    id: students.length+1,
    name: document.getElementById("studentName").value,
    house: houseRandom()
  }
  console.log(newStudentObj);
  students.push(newStudentObj)
  cardsOnDom(students)
  form.reset()
}

const form = document.getElementById("form1")

form.addEventListener("submit", createStudent);
