var lista = [];

function nombreAmigoSecreto(){
	var x = $("#amigo").val();
	
	if(x == ""){
		 alert("ingresa un nombre");
		 
	}else{
	
		lista.push(x);

	
	   $("#lista").append('<div id="otro">' + x + '</div>');
	   $("#amigo").val('');
	   

	}

}


function Jugar (){
	
		if (lista.length%2 != 0)	
	{
		alert("Debes ingresar otro amigo para poder jugar");
		
	}else{
		
		amigoSecreto();
			
		
	}
	
	
}


function amigoSecreto(){
	
	$("#lista").hide("slow");
	random();
	armarDuplas();
	


}


function random (){
		lista.sort(function() {return 0.5 - Math.random()
		})
}

function armarDuplas(){
	for (var i=0; i<lista.length;i+=2){
	
	
		$("#sorteo").append('<div id="otro1"> ' + lista[i] + ' es el amigo secreto de '+lista[i+1]+'</div>');
		
	}
	$("#reiniciar").show("slow");
	$("#titulo").hide("slow");
	$("#amigo").hide("slow");
	$("#pares").hide("slow");
	$("#ingresar").hide("slow");
}


function
