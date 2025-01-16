export function build(numBricks) {

   for (let i = 0; i < numBricks; i++) {
       const brick = document.createElement('div');
       brick.id = `brick-${i + 1}`;
       if ((i+1) % 3 === 2) brick.setAttribute('data-foundation', 'true');
       setTimeout(() => {
           document.body.appendChild(brick);
       }, i * 100);
   }
}

export function repair(...ids)
{
   for (let id of ids)
   {
       const elem = document.getElementById(id);
       elem.dataset.repaired = elem.hasAttribute('data-foundation') ? 'in progress' : 'true';
   }
}

export function destroy()
{
   const lastBrick = document.body.lastElementChild;
   if (lastBrick) lastBrick.remove();
}