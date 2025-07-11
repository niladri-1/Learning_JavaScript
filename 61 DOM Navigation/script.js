// DOM navigation = The process of navigation through the structure
// 					of an HTML document using JavaScript

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

const container = document.getElementById("container");
const ul = document.getElementById("list");
const secondItem = document.getElementById("secondItem");

console.log(`First child of #List: ${ul.firstElementChild.textContent}`); // Item 1

console.log(`Last child of #List: ${ul.lastElementChild.textContent}`); // Item 3

console.log(`Next sibling of <ul>: ${ul.nextElementSibling.tagName}`); // P

console.log(`Previous sibling of <ul>: ${ul.previousElementSibling.tagName}`); // H2

console.log(`Parent of <ul>: ${ul.parentElement.id}`); //container

console.log(`Children of #list`);
for (let child of ul.children) {
	console.log(child.textContent); // Item 1  Item 2  Item 3
}