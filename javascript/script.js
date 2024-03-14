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




document.addEventListener('DOMContentLoaded', () => {
  fetch('cv.json')
    .then(response => response.json())
    .then(data => {
      displayCV(data);
   })
   .catch(error => console.error('Fel vid inläsning av CV:', error));
});


//funktion som skapar listor med innehållet från utbildningar och arbetsplatser i cv.sjon
function displayCV(cv) {
  const utbildningElement = document.getElementById('utbildningar');
  cv.utbildningar.forEach(utbildning => {
    const utbildningItem = document.createElement('li');
    utbildningItem.textContent = `${utbildning.skola}, ${utbildning.examen}, ${utbildning.år}`;
    utbildningElement.appendChild(utbildningItem);
  });

  const arbetsplatsElement = document.getElementById('arbetsplatser');
  cv.arbetsplatser.forEach(arbetsplats => {
    const arbetsplatsItem = document.createElement('li');
    arbetsplatsItem.textContent = `${arbetsplats.företag}, ${arbetsplats.position}, ${arbetsplats.år}`;
    arbetsplatsElement.appendChild(arbetsplatsItem);
  });
}



  //Easter ägg klicka på header så byts färgen på bakgrund i body
  document.addEventListener('DOMContentLoaded', function(){
    var header = document.querySelector('header');

    header.addEventListener('click', function(){
      var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      document.body.style.backgroundColor = randomColor;
    });
  });


  // Easter ägg kombination på tangentbordet 1337
  let secretNum = '1337';
  let enteredCode = '';

  document.addEventListener('keydown', (e) => {
    enteredCode += e.key;
    enteredCode = enteredCode.substr(-secretNum.length);

    if(enteredCode === secretNum){
      console.log('1337 entered by user')
      showModal();
    }
  });

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
