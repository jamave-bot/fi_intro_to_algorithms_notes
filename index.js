// console.log("helo")

// one by one
function stringIncludes(string, letter){
	let matches;
	for(let i = 0; i < string.length; i++){
		if(string[i] === letter){
			matches = true
		}
	}
	return !!matches
}

function binarySearch(string, letter) {
    var startpoint = 0
    var endpoint = string.length - 1;
    var guessPosition = parseInt((endpoint - startpoint)/2)
    while (startpoint != endpoint) {
        console.log(`start point is ${startpoint}, endpoint is ${endpoint} and guessposition is ${guessPosition}`)
        if (string[guessPosition] < letter) {
            console.log('too low')
            startpoint = guessPosition
            guessPosition = startpoint + Math.round((endpoint - startpoint)/2)
        } else if(string[guessPosition] > letter) {
            console.log('too high')
            endpoint = guessPosition
            guessPosition = startpoint + parseInt((endpoint - startpoint)/2)
        } else {
            console.log('just right')
            return true;
        }
    }
    if(string === letter){
        return true
    } else{
        console.log('sorry')
        return false;
    }
}

let string = "aabeeeeeeffhhiiiimmooorsssssstttttttwww"
let letter = "i"
// console.log(`Does ${string} contain '${letter}'?`)
// console.log(stringIncludes(string, letter))
// console.log(binarySearch(string, letter))


//Recursion 
// Recursive functions are functions that call themselves.

function sayDownFrom(n){
	console.log(n)
	if(n > 1){
		sayDownFrom(n -1) // recursive call
	} else {
		return true // base case
	}
}

// sayDownFrom(5)
// 5
// 4
// 3
// 2
// 1

// It needs a recursive call like on line 54 and a base case to end it like on line 56 so it doesn't loop forever

function sumUpTo(n){
	if(n > 1){
		return sumUpTo(n - 1) + n
	} else {
		return 1;
	}
}

console.log(sumUpTo(6))