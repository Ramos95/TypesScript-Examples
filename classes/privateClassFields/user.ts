/*classes can have their properties private, meaning that they can't be
accesed by regular means*/
class User{

private _name:string
private _lastName:string
private _email:string

constructor(name:string,lastName:string,email:string){
  this._name=name
  this._lastName=lastName
  this._email=email
}

/*the way to read or modify the properties values is by using the
accessors get/set, if a property does not hava a set accessor it would
be trated as a readonly, and wihotu the two accessor it would be unaccesible
to the subclasess*/
get name(){
  return this._name
}

get lastName(){
  return this._lastName
}

get email(){
  return this._email
}

set name(name:string){
  this._name = name
}

set lastName(lastName:string){
  this._lastName = lastName
}

set email(email:string){
  this._email=email
}


}

export default User;