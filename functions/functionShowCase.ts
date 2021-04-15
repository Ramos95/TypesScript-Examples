import * as functions from './functions'
/*addTwoNumbers,printString,optionalPatameters,defaultParameters,restPatameter,genericFunction,multiplyTwoNumbers,multipleReturnTypeArrow,printNumber,optionalArrowFunctionParameters,defaultArrowFunctionParameters,restArrowFunctionParameter,genericArrowFunction*/
let result:number = functions.addTwoNumbers(1,2)
console.log(result)

let numberResult:number = functions.multipleReturnType(1)
let stringResult:string = functions.multipleReturnType(2)
console.log(`${stringResult} ${numberResult}`)

functions.printString('pikachu')

functions.optionalPatameters('john','potato')
functions.optionalPatameters('john','potato',10)

functions.defaultParameters('john','potato')
functions.defaultParameters('john','potato',10)

functions.restPatameter('a')
functions.restPatameter('a','b','c')

let name:string = functions.genericFunction<string>('john')
let age:number functions.genericFunction<number>(99)
//a generic can pick the type of the argument and assig it to T
let lastName:string = functions.genericFunction('john')



