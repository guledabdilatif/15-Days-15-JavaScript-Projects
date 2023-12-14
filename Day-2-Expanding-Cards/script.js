const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        removeactiveCard()
        card.classList.add('active');
    })
})


function removeactiveCard() {
    cards.forEach(card => {
            card.classList.remove('active')        
    })

}