const joke = document.querySelector('#joke')
const generate = document.querySelector('#generate')

generate.addEventListener('click', generateQuote)

async function generateQuote() {
    const res = await fetch('https://icanhazdadjoke.com', {
        headers: {
            'Accept': 'application/json',
            
        }
    });
    const data = await res.json()
    console.log(data);
    joke.innerText = data.joke;

}
generateQuote();