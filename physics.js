function getAcceleration(obj){
   if(typeof obj.m === 'number' && !isNaN(obj.m) && typeof obj.f === 'number' && !isNaN(obj.f)){
      return obj.f/obj.m;
   } else if(typeof obj.Δv === 'number' && !isNaN(obj.Δv) && typeof obj.Δt === 'number' && !isNaN(obj.Δt)){
      return obj.Δv/obj.Δt
   } else if(typeof obj.d === 'number' && !isNaN(obj.d) && typeof obj.t === 'number' && !isNaN(obj.t)){
      return (2*obj.d)/(obj.t*obj.t)
   } else{
      return 'impossible'
   }
}

const obj = {
   f: 10, 
   m: NaN,
   Δv: 100,
   Δt: 1,
   d: 10
}
console.log(getAcceleration(obj))
