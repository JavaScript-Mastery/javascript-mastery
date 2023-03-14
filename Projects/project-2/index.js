// variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: "1. Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    person: "Ajay",
  },
  {
    quote: "2. Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    person: "Ajay",
  },
  {
    quote: "3. Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    person: "Ajay",
  },
  {
    quote: "4. Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    person: "Ajay",
  },
  {
    quote: "5. Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    person: "Ajay",
  },
  {
    quote: "6. Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    person: "Ajay",
  },
  {
    quote: "7. Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    person: "Ajay",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
