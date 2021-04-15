/*classes can also implements interfaces, and it can 
aslo work like if the class is exetneding an abstract 
class, where the functions are specified and need to be 
implemented*/

interface Admin{
  code:number
  fixSomething(id: number):string
  banSomeone(id: number):string
}


class User implements Admin{
  id:number
  name: string
  lastName:string

  code:number
  
  constructor(_id:number,_name:string,_lastName:string,_code:number){
      this.id=_id
      this.name=_name
      this.lastName=_lastName
      this.code=_code
  }

  fixSomething(id: number):string{
    return `item ${id} fiex`
  }

  banSomeone(id:number):string{
    return `user ${id} banned`
  }

  
}

export default User