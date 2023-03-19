function addItem() {
  var input = document.getElementById("input");
  var text = input.value;
  if (text === "") {
    alert("Please enter an item.");
  } else {
    var item = document.createElement("li");
    var itemText = document.createTextNode(text);
    item.appendChild(itemText);
    document.getElementById("list").appendChild(item);
    input.value = "";
  }
}

document.getElementById("list").addEventListener("click", function (e) {
  if (e.target && e.target.nodeName == "LI") {
    e.target.parentNode.removeChild(e.target);
  }
});
