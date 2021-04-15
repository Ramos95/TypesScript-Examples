/*classes can also have generic types, so a property 
that is defined with the generic type would acquire
the type tha is defined when the class is implemented*/
class User<T>{

name:string
lastName:string
email:string
genericValue:T

constructor(name:string,lastName:string,email:string,genericValue:T){
  this.name=name
  this.lastName=lastName
  this.email=email
  this.genericValue = genericValue
}


displayProperty():void{
console.log(this.genericValue)
}


}

export default User;