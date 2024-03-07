document.addEventListener('DOMContentLoaded', () => {
    fetch('cv.json')
      .then(response => response.json())
      .then(data => {
        visaCV(data);
      })
      .catch(error => console.error('Fel vid inläsning av CV:', error));
  });
  
  function visaCV(cv) {
    const utbildningElement = document.getElementById('utbildningar');
    cv.utbildningar.forEach(utbildning => {
      const utbildningItem = document.createElement('ul');
      utbildningItem.textContent = `${utbildning.skola}, ${utbildning.examen}, ${utbildning.år}`;
      utbildningElement.appendChild(utbildningItem);
    });
  
    const arbetsplatsElement = document.getElementById('arbetsplatser');
    cv.arbetsplatser.forEach(arbetsplats => {
      const arbetsplatsItem = document.createElement('ul');
      arbetsplatsItem.textContent = `${arbetsplats.företag}, ${arbetsplats.position}, ${arbetsplats.år}`;
      arbetsplatsElement.appendChild(arbetsplatsItem);
    });
  }



  //Easter ägg ett klicka på header så byts färgen på bakgrund i body
  document.addEventListener('DOMContentLoaded', function(){
    var header = document.querySelector('header');

    header.addEventListener('click', function(){
      var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      document.body.style.backgroundColor = randomColor;
    });
  });


  // Easter ägg två kombination på tangentbordet 1337
  let secretNum = '1337';
  let enteredCode = '';

  document.addEventListener('keydown', (e) => {
    enteredCode += e.key;
    enteredCode = enteredCode.substr(-secretNum.length);

    if(enteredCode === secretNum){
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