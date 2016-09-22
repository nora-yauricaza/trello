window.addEventListener("load",function(){
	var lista=document.getElementById("lista");

	lista.addEventListener("click",function(){
		hiddenElement();
		showFormulario();
	});
});

function hiddenElement(){
	var padre=document.getElementById("padre");
	var hijo=document.getElementById("lista");
	padre.removeChild(hijo);
}

function showFormulario(){
	var padre=document.getElementById("padre");
	var form=document.createElement("form");
	padre.appendChild(form);

	var input=document.createElement("input");
	form.appendChild(input);

	var boton= document.createElement("button");
	form.appendChild(boton);
	boton.innerText="Agregar";
	boton.classList.add("boton");
	boton.classList.add("boton:hover");
	boton.classList.add("icon-cross");
}


