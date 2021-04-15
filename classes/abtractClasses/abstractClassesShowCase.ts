import Iphone from './iphone'

let iphone = new Iphone('iOS','A1','Aluminium','at&T',100,14.1,'12 PRO MAX VERY HARD','pink',['a','b'])


console.log(iphone.simSlots)
iphone.makePhoneCall(123456789,0)