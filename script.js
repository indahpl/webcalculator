const calculatorScreen = document.querySelectorAll('.calculator-screen')

const updateScreen = (number) => {
	calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		updateScreen(event.target.value)
	})
})

const inputNumber = (number) => {
	if (currentNumber === '0') {
		currentNumber = number
	} else {
		currentNumber += number
	}
}

const numbers = document.querySelectorAll(".operator")

numbers.forEach((operator) => {
	number.addEventListener("click", (event) => {
		inputOperator(event.target.value)
	})
})

const inputOperator = (operator) => {
	prevNumber = currentNumber
	calculationOperator = operator
	currentNumber = ''
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
	console.log('equal button is pressed')
})

const calculate = () => {
	let result = ''
	switch(calculationOperator) {
		case "+":
			result = parseFloat(prevNumber) + parseFloat(currentNumber)
			break
		case "-":
			result = parseInt(prevNumber) - parseInt(currentNumber)
			break
		case "*":
			result = parseInt(prevNumber) * parseInt(currentNumber)
			break
		case "/":
			result = parseInt(prevNumber) / parseInt(currentNumber)
			break
		default:
			return
	}
	currentNumber = result
	calculationOperator = ''
}

const persentage = document.querySelector('.persentage');

persentage.addEventListener('click', (event) => {
    persentageNumber(event.target.value);
    updateScreen(currentNumber);
});


const persentageNumber = () => {
    if (currentNumber === '0') {
        return;
    }
    currentNumber = currentNumber / 100;
} 

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
	calculate()
	updateScreen(currentNumber)
})

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
	console.log('AC button is pressed')
})

const clearAll = () => {
	prevNumber = ''
	calculationOperator = ''
	currentNumber = '0'
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
	clearAll()
	updateScreen(currentNumber)
})

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
	inputDecimal(event.target.value)
	updateScreen(currentNumber)
})

inputDecimal = (dot) => {
	if(currentNumber.includes('.')) {
		return
	}
	currentNumber += dot
}

const inputOperator = (operator) => {
	if (calculationOperator === '') {
		prevNumber = currentNumber
	}
	calculationOperator = operator
	currentNumber = '0'
}