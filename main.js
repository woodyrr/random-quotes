const authors = document.querySelector(".author");
const categories = document.querySelector(".categories");
const quotes = document.querySelector(".quote");
const random = document.querySelector(".random");
const copy = document.querySelector(".copy");

// function start(){

let randomQuote = async () =>{
    await fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
    
        authors.innerHTML = `
            ${data.author}
        `
        quotes.innerHTML = `
            " ${data.content} "
        `;
        data.tags.forEach(e => {
            categories.innerHTML = `
            <div class="border border-[#6466E9] rounded-2xl px-2 py-1 flex justify-center items-center"> ${e}</div>
        `;
        return data
        });
    // console.log(data)
        
    })
    }

randomQuote()
random.addEventListener("click", randomQuote)

copy.addEventListener("click", () =>{
    navigator.clipboard.writeText(`${quotes.innerHTML} by: ${authors.innerHTML}`);
    alert('Content copied to clipboard');
})






