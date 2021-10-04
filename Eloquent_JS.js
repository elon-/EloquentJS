
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