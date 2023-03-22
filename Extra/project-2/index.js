// variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: `"Believe you can and you're halfway there."`,
    person: "Theodore Roosevelt",
  },
  {
    quote: `"Success is not final, failure is not fatal: It is the courage to continue that counts."`,
    person: "Winston Churchill",
  },
  {
    quote: `"You miss 100% of the shots you don't take."`,
    person: "Wayne Gretzky",
  },
  {
    quote: `"The only way to do great work is to love what you do."`,
    person: "Steve Jobs",
  },
  {
    quote: `"It does not matter how slowly you go as long as you do not stop."`,
    person: "Confucius",
  },
  {
    quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
    person: "Nelson Mandela",
  },
  {
    quote: `"Don't watch the clock; do what it does. Keep going."`,
    person: "Sam Levenson",
  },
  {
    quote: `"If you want to achieve greatness, stop asking for permission."`,
    person: "Ajay Dhangar",
  },
  {
    quote: `"You can't build a reputation on what you are going to do."`,
    person: "Henry Ford",
  },
  {
    quote: `"Success is walking from failure to failure with no loss of enthusiasm."`,
    person: "Winston Churchill",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
