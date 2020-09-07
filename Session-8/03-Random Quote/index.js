let randomQuote;

let btnReload = document.getElementById("button_reload");
let quote = document.getElementById("quote");
let author = document.getElementById("author");

random();

btnReload.addEventListener("click", () => {
    
    random();
});

function random() {
    randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerHTML = randomQuote.quoteText;
    author.innerHTML = randomQuote.quoteAuthor;
}