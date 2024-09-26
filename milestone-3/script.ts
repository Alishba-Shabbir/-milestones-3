// get referene to the form and display area
const form = document.getElementById(`resume-form`)as HTMLFormElement;
const resumeDisplayElement = document.getElementById(`resume-display`)as HTMLFormElement;

// handle form submission
form.addEventListener(`submit`,(event:Event)=>{
    event.preventDefault(); //prevent page reload

    // colect input values
    const name = (document.getElementById(`name`)as HTMLFormElement).value
    const email = (document.getElementById(`email`)as HTMLFormElement).value
     const phone = (document.getElementById(`phone`)as HTMLFormElement).value
      const education = (document.getElementById(`education`)as HTMLFormElement).value
      const experience = (document.getElementById(`experience`)as HTMLFormElement).value
      const skills = (document.getElementById(`skills`)as HTMLFormElement).value

     //Generate the resume content dynamically
      const resumeHTML =`
      <h2><b>Ressume</b></h>
      <h3>Personal Information</b</h3>
      <p><b>Name:</b>${name}</p>
      <p><b>Email:</b>${email}</p>
      <p><b>Phone:</b>${phone}</p>
      
      <h3>Education<h3/>
      <p>${education}</p>

      <h3>Experience<h3/>
      <p>${experience}</p>

      <h3>Skills<h3/>
      <p>${skills}</p>
      `;

      // Display the generated resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML= resumeHTML;
    }else  {
        console.error(`The resume display element is missing`)
    }
    })
