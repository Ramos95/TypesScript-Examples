import Iphone from './iphone'


let iphone = new Iphone('iOS','A1','Aluminium','at&T',100,123456789,'China',14.1,'12 PRO MAX VERY HARD','pink')

console.log(iphone.os)


console.log(iphone.model)
iphone.model = 'PRO MAX MINI LITE'
console.log(iphone.model)

iphone.makePhoneCall(123456789)

iphone.updateOSVersion(999)