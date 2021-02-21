'use strict';

let maxClicks = 26;
let attempt =0;

let div = document.getElementById('container');
let leftImageElement = document.getElementById('leftimage');
let middleImageElement = document.getElementById('middleimage');
let rightImageElement = document.getElementById('rightimage');


let arrOfObject = [];
function BusMarket(productName, imagePath){
this.productName=productName;
this.imagePath=imagePath;
this.time=0;
this.vote = 0;
arrOfObject.push(this);

}

new BusMarket('bag','img/bag.jpg');
new BusMarket('banana','img/banana.jpg');
new BusMarket('bathroom.','img/bathroom.jpg');
new BusMarket('boots','img/boots.jpg');
new BusMarket('brekfast','img/breakfast.jpg');
new BusMarket('bubblegum','img/bubblegum.jpg');
new BusMarket('chair','img/chair.jpg');
new BusMarket('cthulhu','img/cthulhu.jpg');
new BusMarket('dog-duck.','img/dog-duck.jpg');
new BusMarket('dragon','img/dragon.jpg');
new BusMarket('pen','img/pen.jpg');
new BusMarket('pet-sweep','img/pet-sweep.jpg');
new BusMarket('scissors','img/scissors.jpg');
new BusMarket('shark','img/shark.jpg');
new BusMarket('sweep.','img/sweep.png');
new BusMarket('tauntaun','img/tauntaun.jpg');
new BusMarket('unicorn','img/unicorn.jpg');
new BusMarket('usb','img/usb.gif');
new BusMarket('water-can','img/water-can.jpg');
new BusMarket('wine-glass','img/wine-glass.jpg');
 
function randomGenerate(){

   let randomImage= Math.floor(Math.random()*arrOfObject.length)
return randomImage;
}


let leftImage;
let middleImage;
let rightImage;
function renderImage(){
leftImage = randomGenerate();
middleImage = randomGenerate();
rightImage = randomGenerate();

while((leftImage === rightImage) || (leftImage === middleImage) || (middleImage === rightImage)){
    leftImage = randomGenerate();
    rightImage = randomGenerate();
}

leftImageElement.setAttribute('src', arrOfObject[leftImage].imagePath);
middleImageElement.setAttribute('src', arrOfObject[middleImage].imagePath);
rightImageElement.setAttribute('src', arrOfObject[rightImage].imagePath);

arrOfObject[leftImage].time++;
arrOfObject[middleImage].time++;
arrOfObject[rightImage].time++;

}
renderImage();

leftImageElement.addEventListener('click', handleClicking);
middleImageElement.addEventListener('click', handleClicking);
rightImageElement.addEventListener('click', handleClicking);
function handleClicking(event){
      attempt++;
  if(attempt <= maxClicks){
      if(event.target.id === 'leftimage'){
          arrOfObject[leftImage].vote++;
      }else if(event.target.id === 'middleimage'){
          arrOfObject[middleImage].vote++;
      }else if(event.target.id === 'rightimage'){
          arrOfObject[rightImage].vote++;
      } 
      renderImage();
      console.log(arrOfObject);
  }else {
      let ul = document.getElementById('list');
      div.appendChild(ul);
      let button = document.getElementById('button')
      button.addEventListener('click', viewResult);
      function viewResult(event){
      let li;
      for(let i = 0 ; i < arrOfObject.length; i++){  
          li = document.createElement('li');

          ul.appendChild(li);

          li.textContent = `${arrOfObject[i].productName} it had  ${arrOfObject[i].vote} vote, and seen ${arrOfObject[i].time} time.`;}
          button.removeEventListener('click', viewResult);
      }
      leftImageElement.removeEventListener('click', handleClicking);
      middleImageElement.removeEventListener('click', handleClicking);
      rightImageElement.removeEventListener('click', handleClicking);

    
    }


}

