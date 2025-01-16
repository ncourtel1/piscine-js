export const getArchitects = () => {
   // Utilisation de getElementsByTagName()
   const architects = document.getElementsByTagName('a')
   const others = document.getElementsByTagName('span')
   return [Array.from(architects), Array.from(others)]
}

export const getClassical = () => {
   const classical = document.getElementsByClassName('classical')
   const classicalArchitects = Array.from(classical).filter(el => el.tagName.toLowerCase() === 'a')
   const others = document.querySelectorAll('a:not(.classical)')
   return [classicalArchitects, Array.from(others)]
}

export const getActive = () => {
   const active = document.querySelectorAll('a.classical.active')
   const others = document.querySelectorAll('a.classical:not(.active)')
   return [Array.from(active), Array.from(others)]
}

export const getBonannoPisano = () => {
   const bonannoPisano = document.getElementById('BonannoPisano')
   const others = document.querySelectorAll('a.classical.active:not(#BonannoPisano)')
   return [bonannoPisano, Array.from(others)]
}