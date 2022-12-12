//Creo array immagini
const imagesArray = [
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp"
]

//Creiamo dinamicamente i div con le immagini del carosello
let itemsContent = '';

for(let i = 0; i < imagesArray.length; i++){
    itemsContent += `<div class="item">
        <img src="./img/${imagesArray[i]}">
    </div>`
}

//inseriamo le immagini nel div che le deve contenere
const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML = itemsSlider.innerHTML + itemsContent;

//Prendiamo la prima immagine dell'array e la rendiamo attiva

//const items = document.querySelector('.item'); //ALTERNATIVA

const items = document.getElementsByClassName('item');
let itemActive = 0;

items[itemActive].classList.add('active');

//rendo attivo anche il primo cerchio di navigazione

const circles = document.getElementsByClassName('circle');

circles[itemActive].classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', function(){
    //verifico l'elemento attivo (itemActive)
    //incremento il suo valore di 1
    //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
    //stessa cosa per i cerchi

    // SE immagine non è l'ultima
    if(itemActive < items.length -1){

        // RIMUOVO LA CLASSE ACTIVE NEGLI ELEMENTI ATTUALMENTE VISIBILI
        items[itemActive].classList.remove('active')
        circles[itemActive].classList.remove('active')

        // ESEGUO INCREMENTO
        itemActive++;

        // AGGIUNGERE LA CLASSE ACTIVE AL NUOVO ELEMENTO (QUELLO SUCCESSIVO)
        items[itemActive].classList.add('active')
        circles[itemActive].classList.add('active')

        prev.classList.remove('hidden')
        if(itemActive === items.length -1){
            next.classList.add('hidden')
        }
        
    
    }

  

});

prev.addEventListener('click', function(){
    //  SE immagine attiva non è la prima
    if(itemActive > 0){

        // RIMUOVO LA CLASSE ACTIVE NEGLI ELEMENTI ATTUALMENTE ATTIVI
        items[itemActive].classList.remove('active')
        circles[itemActive].classList.remove('active')

        // ESEGUO IL DECREMENTO
        itemActive--;

        // AGGIUNGERE LA CLASSE ACTIVE AL NUOVO ELEMENTO (QUELLO SUCCESSIVO)
        items[itemActive].classList.add('active')
        circles[itemActive].classList.add('active')

        next.classList.remove('hidden')
        if(itemActive == 0){
            prev.classList.add('hidden')
        }

    }


})


