var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var content = document.createElement("label");
  content.setAttribute("id", "text");
  content.appendChild(document.createTextNode(input.value));

  var checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  var trashIcon = document.createElement("i");
  trashIcon.setAttribute("class", "fa fa-trash icon-trash");

  var item = document.createElement("li");
  item.setAttribute("class", "list-item");
  item.appendChild(checkbox);
  item.appendChild(content);
  item.appendChild(trashIcon);

  ul.appendChild(item);

  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

function toggleDone(event) {
  var clickTarget1 = event.target;

  if (clickTarget1.tagName === "INPUT") {
    var sibling = clickTarget1.nextElementSibling;

    if (sibling.hasAttribute("class")) {
      sibling.removeAttribute("class");
    } else {
      sibling.setAttribute("class", "done");
    }
  }
}

function deleteItem(event) {
  var clickTarget2 = event.target;
	
  if (clickTarget2.tagName === "I") {
    var targetParent = clickTarget2.parentNode;
    var targetGrandParent = clickTarget2.parentNode.parentNode;

    targetGrandParent.removeChild(targetParent);
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleDone);

ul.addEventListener("click", deleteItem);
