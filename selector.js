// Select by ID
const title = document.getElementById("main-title");
console.log("ID selector:", title.textContent);

// Select by class
const paragraph = document.querySelector(".description");
console.log("Class selector:", paragraph.textContent);

// Select by tag name
const button = document.querySelector("button");
console.log("Tag selector:", button.textContent);

// Select by attribute
const customDiv = document.querySelector('[data-role="custom"]');
console.log("Attribute selector:", customDiv.textContent);

// Select all matching elements
const allParagraphs = document.querySelectorAll("p");
console.log("All <p> elements:", allParagraphs.length);