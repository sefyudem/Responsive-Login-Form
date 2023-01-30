const inputs = document.querySelectorAll(".input");

const isSomeEmpty = inputs === "";
if (isSomeEmpty) {
	window.alert("Preencha os Campos Antes de Enviar!!");
}


function addcl() {
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl() {
	let parent = this.parentNode.parentNode;
	if (this.value == "") {
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
