import {product,brand} from './types'

/*from the documentation: A mapped type is a generic type which uses a 
union created via a keyof to iterate through the keys of one type to 
create another*/

/*so a mapped type can be seen as a type tha creates another type
by modifying its properties*/

/*a base example like this will change all the properties
of a type to only be of type boolean*/
export type genericType<T>={
  [Property in keyof T] : boolean
}

/*we also can remove properties or it characteristics without 
changin their type*/

/*with this we are removing the readonly option by using the operan - 
before it, so all the properties can be modify and without altering their value type*/
export type removeReadonly<T> = {
  -readonly [Property in keyof T]: T[Property]
}

/*with the same - operand we an remove all the optional indicator
from all properties*/
export type removeOptional<T>={
  [Property in keyof T]-?: T[Property]
}

/*using template literal and intrinsic string manipulation we can 
also modify the property key */

/*by using 'as' with the generic 'T' to manipulated as a sring and 
using intrinsic string manipuation with Capitalize we are Capitalizing
the first letter of all properties and additionally we are mapping its type
to be a function that would return a certain type*/
export type transfromToFunction<T>={
  [Property in keyof T as `call${Capitalize<string & Property>}`] : ()=> T[Property] 
}

/*by using Exclude whe can specify whic property to remove, in this 
example we are saying to remove the property Admin*/
export type removePropertyAdmin<T>={
  [Property in keyof T as Exclude<Property, 'Admin'>]: T[Property]
}
/*other intrinsic string manipulation:
UpperCase<StringType>
LowerCase<StringType
Uncapitalize<StringType>
*/

//examples
export let mmappedValue1:onlyProductsAndBrands={
      microsoft: {id:1,name:'microsof',products:[{name:'mouse',price:9.99}]},
      headPhone: {name: 'Sony randomLetters 2000',price: 9.99}
}


type adminCodes = {
    isAdmin: string,
    isActive: number,
} 

/*all variable using adminFlags will have the adminCodes properties
but now as booleans*/
export type adminFlags = genericType<adminCodes>

type readOnlyProperties = {
  readonly id: number,
  readonly phoneNumber: number
}

/*all variable using editableProperties will have the readOnlyProperties properties
but now they will be editable*/
export type editableProperties=removeReadonly<readOnlyProperties>


type optionaProperties={
  id?:number,
  name?:string
}

/*all variable using mandatoryProperties will have the optionaProperties properties
but now they will be obligatory*/
export type mandatoryProperties=removeOptional<optionaProperties>

interface person{
  name:string,
  lastName:string,
  age:number
}

/*all variable using personGetters will have the person properties
but now as functions that will return the properties type respectively*/
export type personGetters= transfromToFunction<person>

interface phone{
  model:string,
  brand:string,
  version:number
  Admin:string
}

/*all variable using phoneWithoutAdmin will have the phone properties
except for the property Admin*/
export type phoneWithoutAdmin = removePropertyAdmin<phone>