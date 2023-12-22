const questions = document.querySelectorAll(".question")
const answers = document.querySelectorAll(".answer");
const arrowdown = document.querySelectorAll(".arrowdown");

questions.forEach((question, index) => {
    question.addEventListener('click', () => {
        answers.forEach(answer=>{
            removeActice()
            answers[index].classList.toggle("active")
            
        })

    })
})
function removeActice(){
    answers.forEach(answer=>{
       answer.classList.remove("active")
    })

}