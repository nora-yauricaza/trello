window.addEventListener("load",function(){
	
	var lista=document.getElementById("lista");
	lista.addEventListener("click",function(){
		hiddenElement();
		showFormulario();
	});

	function hiddenElement(){
		var padre=document.getElementById("padre");
		var hijo=document.getElementById("lista");
		padre.removeChild(hijo);
	}

	function showFormulario(){
		var padre=document.getElementById("padre");
		var form=document.createElement("form");
		var input=document.createElement("input");
		var button= document.createElement("button");
		padre.appendChild(form);
		form.appendChild(input);
		form.appendChild(button);
		button.innerText="Guardar";
		button.type="button";
		button.setAttribute("id", "button");
		button.classList.add("boton");
		button.classList.add("icon-cross");
		form.classList.add("formulario");

		button.addEventListener("click", function(){
		form.style.display="none";
		createListado(input.value);
		});
    
	function createListado(value) {
		var divContenedorGrande=document.createElement("div");
		var divContenedor=document.createElement("div");
		var divElemento=document.createElement("div");
		var divtarjeta=document.createElement("div");
		var divA= document.createElement("a");
		var divListado=document.createElement("div");
		document.getElementById("padre").appendChild(divContenedorGrande);
		divContenedorGrande.appendChild(divContenedor);
		divContenedor.appendChild(divElemento);
		divContenedor.appendChild(divtarjeta);
		divtarjeta.appendChild(divA);
		divtarjeta = document.createTextNode("Añadir una tarjeta...");
		divContenedor.appendChild(divListado);

		divContenedorGrande.classList.add("divContenedorGrande");
		divListado.classList.add("divListado")
		divContenedor.classList.add("contenedor");
		divElemento.classList.add("elemento");
		divA.classList.add("a");
		divA.appendChild(document.createTextNode(value));
		divContenedor.appendChild(divtarjeta);		
		}
	}
});
