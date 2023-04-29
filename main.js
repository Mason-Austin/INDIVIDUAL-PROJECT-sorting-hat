console.log("its alive");

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

const cardsOnDom= () =>{
  console.log("cardsOnDom is running");
  let domString="";
  students.forEach(student => {
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

      <div class="form-floating mb-3">
      <input type="text" class="form-control" id="studentName" placeholder="Studen">
      <label for="studentName">Student Name</label>
    </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button data-bs-dismiss="modal" type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  `
  
  renderToDom("addStudentContainer", domString)
}

const startApp= () =>{
  cardsOnDom()
  addStudentForm()
}

startApp()
