/*abstract classes are only for inheritance, where the 
subclasses can inherit the parent structure and properties
and derive from it, we can not create an instace of an abstract class*/

/*abtract classes are defined with the keyword abstract*/

/*a property declared abstract doesn't need to be initlized on 
the abstract class, it has to be defined on the constructor of
the subclass, they work as obligatory propeties the subclasses
has to implement*/

/*an abstract function gives what the function expects as parameters and
what it shoul return, but its the subclass that is the one the writes what
the method would actually do*/
abstract class Phone{
  
abstract os:string
abstract processor:string
abstract chasisMaterial:string
abstract carrier:string
abstract numberOfCameras:number
abstract simSlots: string[] 


  abstract makePhoneCall(phoneNumner:number,simSlot:number):string

  abstract takePicture():string

  turnOn():void{
    console.log('gonna work ma frend')
  }

  turnOff():void{
    console.log('gonna sleep ma fren')
  }

  reboot():void{
    console.log('gonna fix some problems ma frend')
  }

}

export default Phone;