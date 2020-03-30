/* var types
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'teacher';
console.log(job); */

/*// var mutation and type coercion 

var firstName = 'John';
var age = 28;
 
// Type coercian
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation 
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName); 

//Basic operators
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

//Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

//Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// typeof operator 
console.log(typeof ageJohn); 

// Operator procedence

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average); 

// If else statements 

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully married soon');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully married soon');
} */

// The ternary operator 

var firstName = 'John';
var age = 20;

age >= 18 ? console.log(firstName + 'drinks beer.')
: console.log(firstName + 'drinks juice.');


/*if (age >= 18) {
    var drink = 'beer';
}
    else {
        var drink = 'juice';
    }
console.log(drink);

// Switch statement
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches us how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in lisborn.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
    } 

// Truthy and falsy values

var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable is not defined');
}

// Equality operators
if (height == '23') {
    console.log('The == operator does type coercian!');
} 

//Functions

function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName)
{
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + 'retires in ' + retirement + 'years.');
    } else
        console.log(firstName + 'is already retired')
    }

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane'); 

// Function statements and expressions
//function declaration whatDoYouDo = function(job, firstName) {}

// function expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + 'teaches kids how to code';
        case 'driver':
            return firstName + 'drives a cab in lisbon';
        case 'designer':
            return firstName + 'designs websites';
        default:
            return firstName + 'does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark')); 

//Initialize new array

var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names.length);

// Muted Array data
names[1] = 'Ben';
names[5] = 'Mary';
console.log(names);

//Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner); 

//Objects and properties

//Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['job']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

//new Object syntax
var jane = new Object();
jane.Name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane); 

//Objects and methods

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john); 

//Loops

for (var i = 1; i <= 20; i += 2) {
    console.log(i);
} `

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 , 10 true, log i to the console, i++
// ... 
// i = 9, 9 , 10 true, log i to the console, i++
// i = 10, 10 < 10 FALSE, exit the loop


var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// While loop
var i = 0;
while(i < john.length) {
    console.log(john[i]);
    i++;
} 

// Continue and break statements

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// Looping backwards
for (var i = john.length - 1; i >=0; i--) {
    console.log(john[i]);
} */