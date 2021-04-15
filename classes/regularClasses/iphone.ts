import Phone from './phone'
/*class hierarchy also follows the same structure of js*/
class Iphone extends Phone{
  osVersion:number
  model:string
  chasisColor:string

  constructor(_os:string,_processor:string,_chasisMaterial:string,_carrier:string,_numberOfCameras:number,_serialNumber:number,_fabricationPlace:string,_osVersion:number,_model:string,_chasisColor:string){
      super(_os,_processor,_chasisMaterial,_carrier,_numberOfCameras,_serialNumber,_fabricationPlace)
      this.osVersion=_osVersion
      this.model=_model
      this.chasisColor=_chasisColor
  }

  updateOSVersion(newVersion:number):string{
    console.log(`uptading version to ${newVersion}`)
    return `updated to version ${newVersion}`

  }

  pairWithAirpod(airPodsDetected:boolean,acceptToPair:boolean):boolean{
    return airPodsDetected && acceptToPair
  }

  
}

export default Iphone 