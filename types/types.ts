/*primitive types*/
let n1:number = 1 
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = BigInt(100); //from ES2020 it can be declare with an n at the end of the number ex. 100n

let name:string = 'john'
let flag:boolean = false

let array1:number[] =[1,2,3,4,5,6,7,8,9,10]
/*it can also be declared using generic*/
let array2: Array<number>= [1,2,3,4,5,6,7,8,9,10]


//interfaces
export interface product{
    name:string
    price:number
}

/*interfaces are types, so they can also be used inside
other interfaces as a property type*/
export interface brand{
  id:number
  name:string
  products:product[]
}

/*an interface can also give the definition of what a function needs to 
receive and what it should return, so when the function is inmplemented
it could have all the steps it needs to do the work but repecting defined 
the parameters and the return value */
export interface atm{
  bank:string,
  giveMoney:(code:string)=>number
}

/*interface can be defined to be generic, meaning that the properties
that use the generic type would not have an specific type until the interface
is implemented and its generic is specified*/
export interface employee<T>{
   name:string,
   lastName:string,
   custom:T 
}

/*the readonly option as it name implies set the property
to be unbale to change its value after defined it, it can
be compared as using const*/
/*the ? operand set a property to be optional, it means that
it can or can't be defined when a variable using the interfaceis
is declared*/
export interface manager{
  readonly id:number
  name: string
  age?:number
}


//enum
/*enums can be used to create a set of constants, by default
the value of each enum property is number, begining from 0
an incrementing by each property added*/
export enum rating{
  low,    //0
  medium, //1
  high    //2
}
/*whe can also set the specific value each property should contain*/
export enum customRating{
  low=1,
  medium=3,
  high=5
}

/*also an enum can be specied with a begining value when only
the first propery is set, for example this enum would start from 5
and incrementing on each propery added*/
export enum ratingStart{
  low=5,
  medium,
  high
}

/*an enum can also be a set of string constants*/
/*in this case, the enum does not increment and would
throw an error if a property withou a value is used*/
export enum ratingMeanings{
  low='Bad',
  medium='Okay',
  high="Excelent"
}

//union types
/*some times we need our variables to be capable of 
holding different types, for example a variable that can
be astring or a number, we can achieve this by using union types*/

let onlyNumberOrString: number | string = 1

let productOrPrice: product | number = {name:'iphone',price:9.99}

//type aliases
/*we can use type aliases to define a type that can hold 
different types like the previous examples using union types*/
export type basicType = number | string

export type customType =number | string | product | brand

/*it can also be used to define an object type and define
which types it properties can have*/
export type baseTemplateType ={
[key: string]: number | string 
}

//tuples
/*tuple is like an array object that can store 
values of the types defines in its declaration*/
let person:[string,number]=['john',99]

let car:[string,number,boolean]=['car',100,false]

/*a tuple can also be declared as nested array*/

let persons:[string,number][]
persons=[['johna',1],['xabi',2],['kevin',3]]

/*you can also make them as type aliases to reuse them*/
export type miniMap = [number,string]

export type admin=[number,string,boolean]

export type nestedTuple =[string,number][]


/*since tuple is an array like, it means you can use all
the array methods with it, like push,pop,concat,etc*/

person.push('andy',10)
