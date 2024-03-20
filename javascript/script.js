// async function fetchData(){
//   try{
//     const response = await fetch('cv.json');
//     if(!response.ok){
//       throw new Error('couldnt read json file' + response.status)
//     }
//     const data = await response.json();
//     displayCV(data);
//   } 
//   catch(error){

//   }
// }


//fetch api för att läsa in asynkront från cv.json
//händelselyssnare som väntar på att hela DOM:en är inläst innan funktion körs
//När fetch mottagit ett svar (response objekt) används then för att hand om svaret
//response.json metod som extraherar json kroppen från svaret

document.addEventListener('DOMContentLoaded', () => {
  fetch('cv.json')
    .then(response => response.json())
    .then(data => {
      displayCV(data);
   })
   .catch(error => console.error('kunde inte läsa in cv:', error));
});


//funktion som skapar listor med innehållet från utbildningar och arbetsplatser i cv.json
function displayCV(cv) {
  const utbildningElement = document.getElementById('utbildningar');
  cv.utbildningar.forEach(utbildning => {
    const utbildningItem = document.createElement('li');
    utbildningItem.textContent = `${utbildning.skola} - ${utbildning.examen} - ${utbildning.år}`;
    utbildningElement.appendChild(utbildningItem);
  });

  const arbetsplatsElement = document.getElementById('arbetsplatser');
  cv.arbetsplatser.forEach(arbetsplats => {
    const arbetsplatsItem = document.createElement('li');
    arbetsplatsItem.textContent = `${arbetsplats.företag} - ${arbetsplats.position} - ${arbetsplats.år}`;
    arbetsplatsElement.appendChild(arbetsplatsItem);
  });
}



//Easter ägg klicka på header så byts färgen på bakgrund i body
//väntar på att hela DOM:en är färdigladdad (dokumentets innehåll)
//var header queryselector söker igenom dokument efter första element som matcher selektorn 'header'
//header eventListener click fångar upp klick på header elementet, om detta sker körs funktionen i header.addEvenListener

document.addEventListener('DOMContentLoaded', function(){
  const header = document.querySelector('header');

  header.addEventListener('click', function(){
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    });
  });


  // Easter ägg kombination på tangentbordet 1337
  // addEventListener 'keydown', (e) lyssnar på knapptryck från användare
  // om enteredCode som är en tom string matchar med secretnum skrivs console.log samt showModal funktion anropas
  
  let secretNum = '1337';
  let enteredCode = '';

  document.addEventListener('keydown', (e) => {
    enteredCode += e.key;
    enteredCode = enteredCode.slice(-secretNum.length);

    if(enteredCode === secretNum){
      console.log('1337 entered by user')
      showModal();
    }
  });

  //modal som visar då användaren har tryckt in 1337 
  function showModal() {
    const modal = document.getElementById('newModal');
    
    modal.style.display = "block";

    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }



const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const counterLabel = document.getElementById("counterLabel");
let count = 0;

increaseBtn.onclick = function(){
  count++;
  counterLabel.textContent = count;
}
decreaseBtn.onclick = function(){
  count--;
  counterLabel.textContent = count;
}  
resetBtn.onclick = function(){
  count = 0;
  counterLabel.textContent = count;
}
