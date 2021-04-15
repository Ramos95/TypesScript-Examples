/*classes follow the same structure use in js, but now with the
type requirement on its properties and methods*/
class Phone{
  os:string
  processor:string
  chasisMaterial:string
  carrier:string
  numberOfCameras:number
  /*in ts we can define private and protected properties*/
  /*with private we say that the property can not be accesed
  outside it class, not even by it subclasses*/
  private serialNumber:number
  /*with proceted we say it can only be accessed by its class 
  and subclasses*/
  protected fabricationPlace:string

  constructor(_os:string,_processor:string,_chasisMaterial:string,_carrier:string,_numberOfCameras:number,_serialNumber:number,_fabricationPlace:string){
    this.os=_os
    this.processor=_processor
    this.chasisMaterial=_chasisMaterial
    this.carrier=_carrier
    this.numberOfCameras=_numberOfCameras
    this.serialNumber=_serialNumber
    this.fabricationPlace=_fabricationPlace
  }

  makePhoneCall(phoneNumner:number):string{
    console.log(`calling number ${phoneNumner}`)
    return 'you dont have enough minutes to make a call >:c'
  }

  takePicture():string{
    console.log('taking a museum worthy photo')
    return 'saved on gallery'
  }

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