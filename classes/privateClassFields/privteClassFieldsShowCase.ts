import User from './user'

let user = new User('JUan','jojo','juan@jojo.com')


/*
trying to access directly to the class property
will result in error now that they are private and
can only be accessed by the getter and settet of the 
property

console.log(user._name)
  user._name = 'Juan */


console.log(user.name)
user.name = 'Juan'
console.log(user.name)