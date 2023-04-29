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

const startApp= () =>{
  cardsOnDom()
}

startApp()
