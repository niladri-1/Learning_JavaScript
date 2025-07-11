// Add & change HTML = Create HTML elements to create, edit and delete
// 					   from DOM.

// .createElement("h1")
// .id ="myId"
// .append(newH1)
// .prepend(newH1)
// .insertBefore(newH1, box1)
// .removeChild(newH1)


// -------------------- EXAMPLE 1 --------------------
// STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "I like Pizza";
newH1.id = "idH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// STEP 3 APPEND ELEMENT TO DOM
document.body.append(newH1);
document.body.prepend(newH1);

document.getElementById("box1").append(newH1);
document.getElementById("box1").prepend(newH1);

document.getElementById("box2").append(newH1);
document.getElementById("box2").prepend(newH1);

const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box1);
document.body.insertBefore(newH1, box2);

const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newH1, boxes[0]);

// STEP 4 REMOVE HTML ELEMENT
document.removeChild(newH1);
box1.removeChild(newH1)
box2.removeChild(newH1)




// // -------------------- EXAMPLE 2 --------------------
// STEP 1 CREATE THE ELEMENT
const newListItem = document.createElement("li");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen"

// STEP 3 APPEND ELEMENT TO DOM
document.body.append(newListItem);
document.body.prepend(newListItem);

document.getElementById("fruits").append(newListItem);
document.getElementById("fruits").prepend(newListItem);

const orange = document.getElementById("orange");
const banana = document.getElementById("banana");
document.getElementById("fruits").insertBefore(newListItem, orange);
document.getElementById("fruits").insertBefore(newListItem, banana);

const listItem = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem, listItem[0]);

// STEP 4 REMOVE HTML ELEMENT
document.body.removeChild(newListItem);
document.getElementById("fruits").removeChild(newListItem);