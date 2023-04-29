console.log("its alive");

let students=[
  
  {
    id:1,
    name:"Harry Potter",
    house: "Gryffindor"
  }
]

const renderToDom= (divID, textToHtml)=>{
  let selectedDiv=divID
  selectedDiv.innerHTMl(textToHtml)
}
