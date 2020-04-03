var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var content = document.createElement("label");
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



button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);