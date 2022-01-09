let myLibrary = [];

function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function displayBooks() {
	removeElementsByClass("bookDisplay")
  for (let x = 0; x < myLibrary.length; x++) {
    const para = document.createElement("p");
	para.classList.add("bookDisplay");

	let readToggleButton = document.createElement("button");
	readToggleButton.addEventListener("click", function() {
		if (myLibrary[x].Read === "Read") {
			myLibrary[x].Read = "Not Read";
		} else if (myLibrary[x].Read === "Not Read") {
			myLibrary[x].Read = "Read";
		};
		displayBooks();
	});

	let removeButton = document.createElement("button");
	removeButton.setAttribute("class", "removeButtonClass");
	removeButton.addEventListener("click", function() {
		removeBookFromList();
	});
	function removeBookFromList () {
		myLibrary.splice(x, 1);
		displayBooks();
	};
	removeButton.setAttribute.type = "button";
	removeButton.style.height = "20px";
	removeButton.style.width = "200px";
	removeButton.textContent = "Remove this book";

	readToggleButton.setAttribute.type = "button";
	readToggleButton.style.height = "20px";
	readToggleButton.style.width = "200px";
	readToggleButton.textContent = "Change Status";
	para.appendChild(removeButton);
	para.appendChild(readToggleButton);
	for (var property in myLibrary[x]) {
    	const node = document.createTextNode(`${property}: ${myLibrary[x][property]}`);
		para.appendChild(node);
		const element = document.getElementById("bookDisplay");
		element.appendChild(para);
	  }
	}
}
document.getElementById("addBook").addEventListener("click", function() {
	document.getElementById("bookInfo").style.display = "block";
});
document.getElementById("bookInfo").addEventListener("submit", function(event) {
	event.preventDefault();
	let book = {
		Title: document.getElementById("bookTitle").value,
		Author: document.getElementById("bookAuthor").value,
		Pages: document.getElementById("bookPages").value,		
		Read: undefined
	};
	if(document.getElementById("read").checked) {
		book.Read = "Read";
	  }else if(document.getElementById("notRead").checked) {
		book.Read = "Not Read";
	  }
	myLibrary.push(book);
	document.forms[0].reset();
	document.getElementById("bookInfo").style.display = "none";
	displayBooks();
});






