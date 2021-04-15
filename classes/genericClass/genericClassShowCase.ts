import User from './user'
import {product} from '../../types/types'

let shirt: product = {
name: 'shirt',
price: 10.5
}

let user = new User<shirt>('Juan','jojo','juan@jojo.com',shirt)

console.log(user.name)
console.log(user.displayProperty())

/*if you want to extend a generic class, it subclass
would have to be generic too,even if no properties use
the generic*/

class subclass<T> extends User<T>{
  code:number
  
  constructor(name:string,lastName:string,email:string,genericValue:T,code:number){
    super(name,lastName,email,genericValue)
    this.code = code
  }
}

let subClassInstance = new subclass<T>('Juan','jojo','juan@jojo.com',shirt,10)