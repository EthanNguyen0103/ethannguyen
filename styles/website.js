const mutilStep = document.querySelector("[multi-step]");
const fontSteps = [...mutilStep.querySelectorAll("[data-step]")]
const mySound = document.getElementById('mySound');
let currentStep = fontSteps.findIndex(step  => {
  return step.classList.contains("active")
})
if (currentStep <0){
  currentStep = 0
  showCurrenStep()
}

mutilStep.addEventListener("click", e =>{
  if(e.target.matches("[data-next]")){
      currentStep +=1
  }
  showCurrenStep()
})
function showCurrenStep(){
  fontSteps.forEach((step, index)  =>{
    step.classList.toggle("active", index === currentStep)
  })
  setTimeout(() => {
    const mySound = document.getElementById('mySound');
    mySound.play()
  }, 1000);
}



