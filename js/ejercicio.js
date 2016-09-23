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
		padre.appendChild(form);

		var input=document.createElement("input");
		form.appendChild(input);

		var button= document.createElement("button");
		form.appendChild(button);
		button.innerText="Guardar";
		button.setAttribute("id", "button");
		button.classList.add("boton");
		button.classList.add("boton:hover");
		button.classList.add("icon-cross");


		var buttonAgregado = document.getElementById("button");
		buttonAgregado.addEventListener("click", function() {

    });


	function createListado() {
		var input=input.value;
		var divContador=document.createElement("div");
		var contenedor=document.getElementById("contenedor");
		var divElemento=document.createElement("div");
		var divListado=document.createElement("div");
		
		contenedor.insertBefore(divContador,form);
		divContador.appendChild(divListado);
		divContador.appendChild(divElemento);
		div.Listado.textContent=input;
		divListado.value="";
		}

		function addListado(){
			var addListado=document.getElementById("addListado");

		}
	}
});
