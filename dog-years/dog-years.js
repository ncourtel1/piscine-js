function dogYears(planetName, age){
   return Math.round((planet[planetName] * (age/31557600) * 7)*100)/100
}

const planet = {
   earth: 1.0,
   mercury: 0.2408467,
   venus: 0.61519726,
   mars: 1.8808158,
   jupiter: 11.862615,
   saturn: 29.447498,
   uranus: 84.016846,
   neptune: 164.79132,
}

console.log(dogYears("earth", 1000000000))