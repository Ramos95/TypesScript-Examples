/*quick start*/

/*in ts we have the primitives tha we use everyday:
string
number
boolean*/
let brand:string='apple'
let price:number = 999
let isNew:boolean = false

/*an interface is an object type that defines how
a new object that implements it should be structured*/
interface tv{
  brand:string
  price:number
  isNew:boolean
}

/*when a new variable is said to be of the type
of and interface,it has to fullfil the structure given
by the implemnented interface*/
let television:tv ={
  brand: 'apple',
  price: 999.99,
  isNew: false
}

/*when using arrays we specify the type of content it can hold
using the type[] notation*/
let prices:number[]=[1,10,99.99]

/*the same when using an interface*/
let tvList:tv[] = [{brand:'apple',price:999,isNew: false},{brand:'samsung',price:990,isNew: false},{brand:'tlc',price:800,isNew: false},{brand:'huawei',price:900,isNew: false},{brand:'lg',price:800,isNew: false},{brand:'zivo',price:890,isNew: false}]

/*a function requires to know the type of parameter it would receive
and the type of the value it will return*/
function capitalizeAll(name:string):string{
  return name.toUpperCase()
}

/*when a function does not return anything is we cuould specify it
using void*/
function printSomething():void{
  console.log('drink water ma fren')
}

/*if a function will return more than one type of value we can say it
using the operand | */

/*for example if try to find the first tv with the specified brand and price
we can use the array function find(), and as we now it will return the value
of the first match or it would return undefined in case there is none*/

/*so using find o tvList we are aware the it could return a tv object or undefined*/
const sellTv=(searchBrand:string,searchPrice:number):tv | undefined=>
  tvList.find((tvItem) => (tvItem.brand === searchBrand && tvItem.price === searchPrice))
  

console.log(sellTv('apple',999))

