function citiesOnly(arr) {
   return arr.map(item => item.city);
}
console.log(citiesOnly([
   { city: 'Los Angeles', temperature: '  101 °F   ' },
   { city: 'San Francisco', temperature: ' 84 ° F   ' }
])); 


function upperCasingStates(arr) {
   return arr.map(state => 
       state.split(' ').map(word => 
           word.charAt(0).toUpperCase() + word.slice(1)
       ).join(' ')
   );
}
console.log(upperCasingStates(['alabama', 'new jersey'])); // -> ['Alabama', 'New Jersey']


function fahrenheitToCelsius(arr) {
   return arr.map(temp => {
       const fahrenheit = parseInt(temp);
       const celsius = Math.floor((fahrenheit - 32) * (5 / 9));
       return `${celsius}°C`;
   });
}
console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F'])); 


function trimTemp(arr) {
   return arr.map(item => ({
       ...item, 
       temperature: item.temperature.replace(/\s+/g, '') 
   }));
}
console.log(trimTemp([
   { city: 'Los Angeles', temperature: '  101 °F   ' },
   { city: 'San Francisco', temperature: ' 84 ° F   ' }
])); 


function tempForecasts(arr) {
   return arr.map(item => {
       const tempCelsius = Math.floor((parseInt(item.temperature) - 32) * (5 / 9));
       const formattedState = item.state.split(' ').map(word =>
           word.charAt(0).toUpperCase() + word.slice(1)
       ).join(' ');

       return `${tempCelsius}°Celsius in ${item.city}, ${formattedState}`;
   });
}
console.log(tempForecasts([
   {
       city: 'Pasadena',
       temperature: ' 101 °F',
       state: 'california',
       region: 'West'
   }
]));