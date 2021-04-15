/*in simple terms, a function needs to have the types
of it parameters and the value it would return*/
function addTwoNumbers(n1:number,n2:number):number{
  return n1+n2
}

/*using union type we can say that the function can return
more than one kind of type*/
function multipleReturnType(n1:number):number|string{
  return n1%2===0 ? 'even' : n1
}

/*if the function won't return anything we can say it using void*/
function printString(value:string):void{
console.log(value)
}

/*functions can also have optional parameters,especifiying them with ? operand*/
function optionalPatameters(name:string,lastName:string,age?:number):void{
console.log(`name: ${name} lastName:${lastName} ${age? `age: ${age}`:''}`)
}

/*parameters can have a default value, so in case its missing whe the function
is called, the parameters would take the value assigned*/
/*if the parameter number isn't passed to the function it will always take 
the value of 20*/
function defaultParameters(name:string,lastName:string,age:number=20):void{
console.log(`name: ${name} lastName:${lastName} age: ${age}`)
}

/*rest parameters are used when we don know the exact number
of parameters a function will receive, buy usint the syntax
...parameterName:type[] we can receive and undetermined number of
parameters as an array*/
function restPatameter(...values:string[]):void{
  console.log(values)
}

/*functions using generics allows to have their type of parameter
and return value  to be defined at the moment of their implementation*/
function genericFunction<T>(value:T):T{
      console.log(typeof value);
      return value;
}


//equivalent functions in the form of arrow function
const multiplyTwoNumbers=(n1:number,n2:number):number=> n1*n2

const multipleReturnTypeArrow=(n1:number):number|string => n1%2===0 ? 'even' : n1

const printNumber=(value:number):void=>console.log(value)

const optionalArrowFunctionParameters=(name:string,lastName:string,age?:number):void=> console.log(`name: ${name} lastName:${lastName} ${age? `age: ${age}`:''}`)

const defaultArrowFunctionParameters=(name:string,lastName:string,age:number=20):void=>console.log(`name: ${name} lastName:${lastName} age: ${age}`)

const restArrowFunctionParameter=(...values:string[]):void=>console.log(values)

const genericArrowFunction=<T>(value:T):T=>{
  console.log(typeof value)
  return value
}

export {addTwoNumbers,printString,optionalPatameters,defaultParameters,restPatameter,genericFunction,multiplyTwoNumbers,multipleReturnTypeArrow,printNumber,optionalArrowFunctionParameters,defaultArrowFunctionParameters,restArrowFunctionParameter,genericArrowFunction}