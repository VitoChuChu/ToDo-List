let userInput = document.getElementById("userinput");
let buttonEnter = document.getElementById("enter");
let ul = document.querySelector("ul");

function userInputCheck() {
  return userInput.value.length > 0;
}

function keypressEvent(event) {
  return event.key === "Enter";
}

function createElement() {
  // Create Element
  let createdDiv = document.createElement("div");
  let createdLi = document.createElement("li");
  let createdDoneButton = document.createElement("button");
  createdDoneButton.appendChild(document.createTextNode("Done"));
  let createdDelButton = document.createElement("button");
  createdLi.appendChild(document.createTextNode(userInput.value));
  createdDelButton.appendChild(document.createTextNode("Delete"));
  createdDiv.appendChild(createdLi);
  createdDiv.appendChild(createdDoneButton);
  createdDiv.appendChild(createdDelButton);
  userInput.value = "";
  ul.appendChild(createdDiv);
  // Toggle Done class
  createdDoneButton.addEventListener("click", function () {
    createdDiv.classList.toggle("done");
  });
  // Delete item
  createdDelButton.addEventListener("click", function () {
    let deleteItem = document.querySelector(".done");
    console.log(deleteItem);
    deleteItem.remove();
  });
}

function divAppendChildByClick() {
  if (userInputCheck()) {
    createElement();
  }
}

function liAppendChildByPress(event) {
  if (userInputCheck() && keypressEvent(event)) {
    createElement();
  }
}

buttonEnter.addEventListener("click", divAppendChildByClick);
userInput.addEventListener("keypress", liAppendChildByPress);
