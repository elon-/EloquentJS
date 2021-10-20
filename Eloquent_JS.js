
// Lesson 3
// Squar of 2 number 
/*
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

console.log(countChar("kakkerlak", "k")); */

// Chapter  4 - Data Structure : Object and Arrays 
// Data Set

/*let list_of_numbers = [2,3,4,5,9];

console.log(list_of_numbers[4-1]);

console.log("karthik"["length"]);
console.log(list_of_numbers.length)

let doh = "Doh";
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase());

let sequence = [1,2,3];
sequence.push(4);
sequence.push(9);
console.log(sequence);
console.log(sequence.pop(1));
console.log(sequence);

let day1 = [{
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"]
}];

console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false ;
console.log(day1.wolf);

day1.wolf = "correct";

console.log(day1);

delete( day1.wolf);
console.log(day1);
console.log(Object.keys(day1));

console.log("events" in day1);

let ObjectA = {A : 1 , B:2};
Object.assign(ObjectA, day1);

console.log(ObjectA);*/

// Journal data

/*let JOURNAL = [];

function addEntry (events, squirrel){
	JOURNAL.push({events, squirrel});
};

addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);

console.log(JOURNAL);
console.log(JOURNAL[2].squirrel == false);
if ( (JOURNAL[2].events.includes("pizza") ) ==  (JOURNAL[2].squirrel == false) ) {
	console.log("works")
}

*/
//journal[i].events.includes(event)  ==  (journal[i].squirrel == false 

var JOURNAL = [
  {"events":["carrot","exercise","weekend"],"squirrel":false},
  {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
  {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","computer","work"],"squirrel":false},
  {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["cauliflower","reading","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
  {"events":["spaghetti","nachos","work"],"squirrel":false},
  {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
  {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
  {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["pizza","ice cream","computer","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work"],"squirrel":false},
  {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["potatoes","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","work"],"squirrel":false},
  {"events":["pizza","beer","work","dentist"],"squirrel":false},
  {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
  {"events":["lasagna","peanuts","work"],"squirrel":true},
  {"events":["pizza","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
  {"events":["pizza","cycling","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","peanuts","candy","work"],"squirrel":true},
  {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
  {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
  {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","candy","work"],"squirrel":false},
  {"events":["potatoes","nachos","work"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
  {"events":["brussel sprouts","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
  {"events":["candy","brushed teeth","work"],"squirrel":false},
  {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
  {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
  {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
  {"events":["brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
  {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","reading","weekend"],"squirrel":false},
  {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
  {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
];


function table_for(event, journal){
	let table_event = [0,0,0,0];
	for (i=0; i< journal.length; i++){
		//console.log("i", i);
		//console.log( (journal[i].squirrel == true) );
		if (journal[i].events.includes(event) && (journal[i].squirrel ) ) {
			table_event[0] +=1; }
		else if ((journal[i].events.includes(event) ) ==  (journal[i].squirrel ) ) {
			table_event[1] +=1; }
		else if  (journal[i].events.includes(event)){
			if (journal[i].squirrel == false) {
				table_event[2] +=1;
			}
			else break ;}
		else if (journal[i].events.includes(event) == false)  {
			if (journal[i].squirrel){
				table_event[3] +=1;
			}
			else break; }

			//console.log("check", table_event)

		} 
	return table_event;
};

console.log(table_for("pizza", JOURNAL))

function table_for1 (event, journal){
	let table_event = [0,0,0,0];
	for (i=0; i < journal.length; i++){
		let entry = journal[i];
		if (entry.events.includes(event)){
			if (entry.squirrel){
				table_event[0] +=1 ;
			}
			else {
				table_event[2] +=1;
			}
		}
		else {
			if (entry.squirrel){
				table_event[3] +=1;
			}
			else {
				table_event[1] += 1;
			}
		}
	}
		return table_event;
}

console.log("pizza", phi (table_for1("pizza", JOURNAL))); 

function phi (table){
	return ((table[0]*table[1] - table[2]*table[3])/ Math.sqrt ((table[0]+ table[2]) 
		* (table[1] + table[3])
		* (table[0] + table[3])
		* (table[1] +table[2])
		) );
};



function journal_events (journal){
	let events = []; 
	for (let entry of journal){
		for ( let event of entry.events){
			if (!events.includes(event)){
				events.push(event);
			}
		}
	}
	return events;
}

for (i of journal_events (JOURNAL)){
	console.log(`${i} : ${phi(table_for1(i,JOURNAL))}`);
}

for (entry of JOURNAL){
	if(entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")) {
		entry.events.push("peanut teeth");
	}
}

for (entry of JOURNAL){
	for (event of entry.events){
		if (event.includes("peanut teeth")){
			console.log	(entry.events);
		}
	}
};

console.log(phi(table_for1("peanut teeth",JOURNAL)));

let todolist = [];
function remember (task){
	todolist.push(task);
}

function getTask(){
	return todolist.shift();
}

function rememberUrgently (task){
	todolist.unshift(task);
}

remember('car');
rememberUrgently('karthik');
getTask();
console.log(todolist);

console.log([1,2,3,4,1,3].indexOf(1));

array = [23,24,25,26];

for (i of array){
	console.log(i);
}
console.log([1,2,3,4,5,6].slice(2,5));

function remove (array, index){
	return array.slice(0, index).concat(array.slice(index+1));
}

console.log(remove(['a','b','c','d','e','f'], 2));

console.log("   okay    ".trim());
console.log(String(6).padStart(3, "0"));

let sentence = "How are you doing today";
let words = sentence.split('a');
console.log(words);
console.log(words.join('a'));
console.log(Infinity> 5);

function max(numbers){
	let result = - Infinity;
	for (number of numbers ){
		if (number> result) result = number ;
	}
	return result;
}

console.log(max([2,4,1,8,3,9]));

let word = ["never", "say", "ever"];
console.log(["well", ...word, "love"]);

//console.log(Object.keys(JOURNAL));

function randomPointOnCircle(radius){
	let angle = Math.random() * 2 * Math.PI;
	return {
		x:radius*Math.cos(angle),
		y:radius*Math.sin(angle)
	};
}

console.log(randomPointOnCircle(2));

let {age} = {
	name : "karthik",
	age : 30
};

console.log(age);