function dogYears(planetName, age){
   let earthYears = age / 31557600;
   let planetYears = earthYears / planet[planetName];
   let dogYears = planetYears * 7;
   return Math.round(dogYears*100)/100;
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