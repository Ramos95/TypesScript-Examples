import {product,brand,employee,admin,rating,basicType,baseTemplateType,miniMap} from './types';

export let shirt: product = {
name: 'shirt',
price: 10.5
}


export let google: brand ={
id: 1,
name: 'google',
products: [{name: 'pixel',price: 1100},{name:'chrome',price:1},{name:'drive',price:99.99}]
}


export let johnWorker:employee<brand> ={
  name: 'John',
  lastName: 'Potter',
  custom: google
}

export let johnWorkerBoss:admin={
  id:1,
  name:'boss'
}

export let low:rating = rating.low
export let medium:rating = rating.medium
export let high:rating = rating.high

export let basicTypeString: basicType = 'YES'
export let basicTypeNumber: basicType = 10
export let templateNumber: baseTemplateType ={
  id:1
}
export let templateString: baseTemplateType ={
  name:'Narutooooo'
}

export let simpleTuple:miniMap = [1,'duck']

