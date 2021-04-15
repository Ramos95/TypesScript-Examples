import Phone from './phone'

class Iphone extends Phone{
  os:string
  processor:string
  chasisMaterial:string
  carrier:string
  numberOfCameras:number
  osVersion:number
  model:string
  chasisColor:string
  simSlots: string[]

  constructor(_os:string,_processor:string,_chasisMaterial:string,_carrier:string,_numberOfCameras:number,_osVersion:number,_model:string,_chasisColor:string,_simSlots:string[]){
      super()
      this.os=_os
      this.processor=_processor
      this.chasisMaterial=_chasisMaterial
      this.carrier=_carrier
      this.numberOfCameras=_numberOfCameras
      this.osVersion=_osVersion
      this.model=_model
      this.chasisColor=_chasisColor
      this.simSlots=_simSlots
  }

  makePhoneCall(phoneNumber:number,simSlot:number):string{
    let selectedSimSlot:string = this.simSlots[simSlot]
    console.log(`Using the sim slot ${selectedSimSlot} to call ${phoneNumber}`)
    return 'You dont have enough minutes to make the call'
  }

  takePicture(){
   return 'picture taken with the best camera'
  }

  updateOSVersion(newVersion:number):string{
    console.log(`uptading version to ${newVersion}`)
    return `updated to version ${newVersion}`

  }


  pairWithAirpod(airPodsDetected:boolean,acceptToPair:boolean):boolean{
    return airPodsDetected && acceptToPair
  }

  
}

export default Iphone;