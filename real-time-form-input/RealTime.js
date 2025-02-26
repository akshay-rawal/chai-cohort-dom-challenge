document.addEventListener("DOMContentLoaded",()=>{

    const nameInput = document.getElementById("nameInput")
    const jobInput = document.getElementById("jobInput")
    const ageInput = document.getElementById("ageInput")
    const bioInput = document.getElementById("bioInput")
     
    //dispaly span
    const nameDisplay = document.getElementById("nameDisplay")
    const jobDisplay = document.getElementById("jobDisplay")
    const ageDisplay = document.getElementById("ageDisplay")
    const bioDisplay = document.getElementById("bioDisplay")

    const updatePreview = (input,dispaly)=>{
        dispaly.textContent = input.value.trim() !== ""? input.value:"Not-provided";


    }

    nameInput.addEventListener("input",()=> updatePreview(nameInput,nameDisplay))
    jobInput.addEventListener("input",()=> updatePreview(jobInput,jobDisplay))
    ageInput.addEventListener("input",()=> updatePreview(ageInput,ageDisplay))
    bioInput.addEventListener("input",()=> updatePreview(bioInput,bioDisplay))

})