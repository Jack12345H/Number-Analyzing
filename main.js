// Number Analyzer

// HTML Elements
let numEl = document.getElementById("numInput");

// Add Event Listener
numEl.addEventListener("change", analyzeNumber);

// Event Function
function analyzeNumber() {
  // Get Number from Input Element
  let numInput = Number(numEl.value);

  // Analyze Number and display results (Some are commented out so you can test your functions individually without errors coming up)
  document.getElementById("sign").innerHTML = getSign(numInput);
  document.getElementById("even-odd").innerHTML = evenOrOdd(numInput);
  document.getElementById("multiple").innerHTML = multipleOf10(numInput);
  document.getElementById("digits").innerHTML = numDigits(numInput);

  //**BONUS**//
  document.getElementById("prime").innerHTML = isPrime(numInput);
}

// Analyze Functions - Add your functions below. These should match the named functions above (e.g. getSign). When ready to test, uncomment the appropriate line in analyzeNumber before running.
function getSign(numInput) {
  if (numInput < 0) {
    return "negative";
  } else if (numInput > 0) {
    return "positive";
  } else if (numInput == 0) {
    return "zero";
  }
}

function evenOrOdd(numInput) {
  let remainder = numInput % 2;
  if (remainder != 0) {
    return "odd";
  } else if (remainder == 0) {
    return "even";
  }
}

function multipleOf10(numInput) {
  let remainder = numInput % 10;
  if (remainder != 0) {
    return "false";
  } else if (remainder == 0) {
    return "true";
  }
}

function numDigits(numInput) {
  let digit = numInput;
  digit = numInput.toString();
  return digit.length;
}

function isPrime(numInput) {
  for (let i = 2; i < numInput; i++) {
    if (numInput % i == 0) {
      return "composite";
    } else if (numInput % i != 0) {
      return "prime";
    }
  }
}

// 6
// e.g. 6 / 2 = 3, no remainder. Therefore NOT prime number

// 5
// Check 2, 3, 4 and there is always a remainder, then the number is prime

// 6
// 6 / 2.... 6 % 2 == 0, break the loop because this number is NOT prime

// 5
// 5 % 2 not zero
// 5 % 3 not zero
// 5 % 4 not zero
// end of the loop.... didn't find a remainder of zero.  Know the number is prime.
