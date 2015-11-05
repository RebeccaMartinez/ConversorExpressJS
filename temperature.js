"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function Medida(valor, tipo){
	this.valor = valor;
	this.tipo = tipo;
}

Medida.prototype.getTipo = function() {
	return this.tipo;
}

Medida.prototype.getValor = function() {
	return this.valor;
};

Medida.prototype.setTipo = function(tipo) {
	this.tipo = tipo;
}

Medida.prototype.setValor = function(valor) {
	this.valor = valor;
}

function Temperatura(){
	Medida.call(this);
}

Temperatura.prototype = new Medida();

/* Pasa los Fahrenheit a Celsius*/
Temperatura.prototype.fac = function(){
	var result1 = (this.getValor() - 32)*5/9;
	return result1;
};

/* Pasa los Fahrenheit a Kelvin*/
Temperatura.prototype.fak = function(){
	var result1 = ((this.getValor() - 32)*5/9) + 273.15;
	return result1;
};

/* Pasa los celsius a Kelvin*/
Temperatura.prototype.cak = function(){
	var result1 = this.getValor() + 273.15;
	return result1;
};

/* Pasa los celsius a Fahrenheit*/
Temperatura.prototype.caf = function(){
	var result1 = (this.getValor() * 9/5)+32;
	return result1;
};
/*Pasa los Kelvin a Celsius*/
Temperatura.prototype.kac = function(){
	var result1 = this.getValor() - 273.15;
	return result1;
};

/*Pasa los Kelvin a Fahrenheit*/
Temperatura.prototype.kaf = function(){
	var result1 = 1.8 * (this.getValor() - 273.15) + 32;
	return result1;
};

Temperatura.prototype.inicializador = function(temp){
	var regexp = /([+-]?\d+(?:\.\d*)?(?:\s*[eE]\d+)?)\s*([fFcCkK])/
	var m = temp.match(regexp);
	if(m){
		m[1] = parseFloat(m[1]);
		this.setTipo(m[2]);
		this.setValor(m[1]);
	}
}

Medida.prototype.calculate = function(){
	var final = 0;
	if(this.getTipo() == 'c' || this.getTipo() == 'C'){
		final = this.caf().toFixed(2) + " Fahrenheit" + ", " +this.cak().toFixed(2) + "Kelvin";
		return (final);	
	}
	else if(this.getTipo() == 'f' || this.getTipo() == 'F'){
		final = this.fac().toFixed(2) + " Celsius" + ", " +this.fak().toFixed(2) + "Kelvin";
		return (final);
	}
	else if(this.getTipo() == 'k' || this.getTipo() == 'K'){
		final = this.kac().toFixed(2) + "Celsius" + ", " +this.kaf().toFixed(2) + "Fahrenheit";
		return (final);
	}
	else {
		return("ERROR! Introduzca algo tipo '-4.2C', '78K', '23f' ...");
	}
	

	

}


module.exports = Temperatura;
