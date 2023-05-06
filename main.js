let students=[
  {
    id:1,
    name:"Harry Potter",
    house: "Gryffindor",
    expelled: false,
    dead: false,
    wand: "Dragon heartstring",
    lineage: "Pure blood"
  },
  {
    id:2,
    name:"Ron Weasly",
    house: "Slytherin",
    expelled: false,
    dead: false,
    wand: "Phoenix feather",
    lineage: "Half blood"
  },
  {
    id:3,
    name:"Ginny Weasly",
    house: "Hufflepuff",
    expelled: false,
    dead: false,
    wand: "Unicorn tail hair",
    lineage: "Muggle born"
  },
  {
    id:4,
    name:"Fred Weasly",
    house: "Ravenclaw",
    expelled: false,
    dead: false,
    wand: "Veela hair",
    lineage: "Pure blood"
  },
];

const renderToDom= (divId, htmlToRender) => {
  const selectedDiv=document.getElementById(divId)
  selectedDiv.innerHTML = htmlToRender
}

const cardsOnDom= (arry) => {
  let domString="<h2>Hogwarts</h2>";
  let domStringExpel="<h2>Voldamort's Army</h2>";
  arry.forEach(student => {
    if (student.expelled === true) {
      
      domStringExpel +=`
      <div id="studentCard">
        <div id="studentInfo">
          <div class="house voldArmy">

          </div>

          <div>
              <h4>${student.name}</h4>
              <h4>Former ${student.house}</h4>
              <h4>Wand Core: ${student.wand}</h4>
              <h4>Lineage: ${student.lineage}</h4>
              <button id="kill--${student.id}" type="button" class="button btn btn-danger">Avada Kedavra</button>
          </div>
        </div>
      </div>`

    } else {

      domString +=`
      <div id="studentCard">
        <div id="studentInfo">

          <div class="house ${student.house}">

          </div>
            <div>
              <h4>Student: ${student.name}</h4>
              <h4>House: ${student.house}</h4>
              <h4>Wand Core: ${student.wand}</h4>
              <h4>Lineage: ${student.lineage}</h4>
              <button id="expel--${student.id}" type="button" class="btn btn-danger">Expel</button>
            </div>
        </div>
      </div>`
      
    }
   });
  renderToDom("firstYearContainer", domString)
  renderToDom("voldContainer", domStringExpel)
}

const addStudentForm = () => {
  const domString =`<h2>Welcome professor</h2>
<button id="addStudntBtn "type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add student
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Student will be assigned automatically</h1>
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

const addFilterbtn = () => {
  const domString = `
  <button id="allBtn" type="button" class="btn btn-info">All</button>
  <button id="gryfBtn" type="button" class="btn btn-danger">Gryffindor</button>
  <button id="raveBtn" type="button" class="btn btn-primary">Ravenclaw</button>
  <button id="huffBtn" type="button" class="btn btn-warning">Hufflepuff</button>
  <button id="slytBtn" type="button" class="btn btn-secondary">Slytherin</button>
  `
  renderToDom("filterContainer", domString)
}

const houseRandom = () => {
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

const wandRandom = () => {
  const randNum = Math.floor(Math.random()*3)
  let wand=""
 switch (randNum) {
  case 0:
    wand = "Dragon heartstring"
    break;
 
  case 1:
    wand ="Phoenix feather"
    break;

    case 2:
    wand ="Unicorn tail hair"
    break;
 }
 return wand
}

const lineageRandom = () => {
  const randNum = Math.floor(Math.random()*3)
  let lineage=""
 switch (randNum) {
  case 0:
    lineage = "Pure blood"
    break;
 
  case 1:
    lineage ="Half blood"
    break;

    case 2:
    lineage ="New blood"
    break;
 }
 return lineage
}

const filterHouse = (house) => {
  const newArray = []
  students.forEach(student => {

    if (student.expelled===false)  {
     
      if (student.house === house) {
        newArray.push(student)
      }

    }else{
      newArray.push(student)
    }
    
  });
  cardsOnDom(newArray)
}


const startApp= () => {
  cardsOnDom(students)
  addStudentForm()
  addFilterbtn()
}

startApp()

const createStudent = (e) => {
  e.preventDefault();

  const newStudentObj={
    id: students.length+1,
    name: document.getElementById("studentName").value,
    house: houseRandom(),
    expelled: false,
    dead: false,
    wand: wandRandom(),
    lineage: lineageRandom()
  }
  students.push(newStudentObj)
  cardsOnDom(students)
  form.reset()
} 

const form = document.getElementById("form1")
const body = document.querySelector("body")
const allBtn = document.querySelector("#allBtn")
const gryfBtn = document.querySelector("#gryfBtn")
const huffBtn = document.querySelector("#huffBtn")
const raveBtn = document.querySelector("#raveBtn")
const slytBtn = document.querySelector("#slytBtn")

allBtn.addEventListener("click", () => {
  cardsOnDom(students)
});

gryfBtn.addEventListener("click", () => { filterHouse("Gryffindor")});

huffBtn.addEventListener("click", () => { filterHouse("Hufflepuff")});

raveBtn.addEventListener("click", () => { filterHouse("Ravenclaw")});

slytBtn.addEventListener("click", () => { filterHouse("Slytherin")});

form.addEventListener("submit", createStudent);
body.addEventListener("click", (e) => {
  if (e.target.id.includes("expel")){
    const [,id] = e.target.id.split("--")
    const index = students.findIndex(student=>student.id=== Number(id))
    students[index].expelled=true
    cardsOnDom(students)
  }if (e.target.id.includes("kill")){
    const [,id] = e.target.id.split("--")
    const index = students.findIndex(student=>student.id === Number(id))
    students.splice(index,1)
    cardsOnDom(students)
  }
})
