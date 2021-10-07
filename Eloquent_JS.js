
// Lesson 3
// Squar of 2 number 

const square = function (x){
	return x*x;
}

console.log (square (12));

const power = function (base, exponent){
	let result = 1 ;
	for (let count = 0 ; count < exponent; count ++){
		result = result * base ; 
	}
	return result;
}

console.log(power (2, 10));

let y = 20;
if (true){
	let y = 40;
	let z = 30;
	console.log(y+z);
}

console.log(y);

// nested scope 
const hummus = function (factor){
	const ingredient = function ( amount, unit, name ){
		let ingredient_amount = amount * factor;
		if (ingredient_amount < 1 ) {
			unit += "s"; 
		}
		console.log(`${ingredient_amount} ${unit} ${name}`);
	};
	ingredient(1, "can", "chickpeas");
  	ingredient(0.25, "cup", "tahini");
 	ingredient(0.25, "cup", "lemon juice");
  	ingredient(1, "clove", "garlic");
  	ingredient(2, "tablespoon", "olive oil");
  	ingredient(0.5, "teaspoon", "cumin");
  	return null ;
};

console.log(hummus(2));

//Declaration Notation 

function square1 (x){
	return x*x ;
}


console.log("The future says:", future());

function future (){
	return "You'll have flying cars" ;
}

const power1 = (base, exponent) => {
	let result = 1;
	for (count = 0; count < exponent; count++){
		result = result * base ;
	}
	return result; 
}

console.log( power1 (2,10));

const horn = () => {
	console.log("Toot");
};

//console.log(horn ())

// The call stack 
const chicken = () => {
	return egg();
}

const  egg = () => {
	return chicken();
}

//console.log(chicken() + "came first");


const square2= (x) => { return x*x }; 
console.log(square2(3, false, "Happy"));

function minus(a,b = 3){
	if (b === undefined) return -a;
	else return a-b;
}

console.log(minus(10));
console.log(minus(10,3));

function wrapValue(n){
	let local =n;
	return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

// clouser 

const multple = function (x){
	return y => x*y;
}

let multple1 = multple(4);

console.log(multple1(2));

// recursive 

const power2 = function (base, exponent){
	if (exponent== 0){
		
		return 1;
	}
	else return base * power2 (base, exponent-1);
};

console.log( power2 (2,4));

const findsolution = function (traget ){
	function find (current, history){
		if (current == traget){
			return history;
		}
		else if ( current > traget){
			return false ;
		}
		else {return find (current + 5, `(${history} + 5)`) || find (current *3 , `${history} *3`);}
	}
	return find (1, '1');
};

console.log(findsolution(24));

// Growing Function 

function padding (x){
	x = String(x)
	while (x.length < 3){
		x = '0' + x;
	}
	return x;

};

console.log(padding(3));

function farm (cow, chicken) {
	console.log(padding(cow), "cow");
	console.log(padding(chicken), "chicken");
};

farm(7,15);

// exercise 1
function min(num1, num2){
	if (num1 < num1){
		return num1;
	}
	else return num2;
};


console.log(min(0,-10));

// recursion

function iseven (num){
	if (num == 0 ) return true ;
	else if (num == 1 ) return false ;
	else if (num < 0) return iseven(-num);
	else return iseven(num -1);
}

console.log(iseven (11));

// Bean counting 

text = 'india'
console.log (text.length-1);


function countChar (text, char){
	count = 0;
	for(i=0; i < text.length ; i++){
		if (text [i] == char) {
			count += 1 ;
		}
	}
	return count ;
}

console.log(countChar("kakkerlak", "k"));