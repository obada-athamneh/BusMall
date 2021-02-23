'use strict';

let maxClicks = 25;
let attempt =0;

let div = document.getElementById('container');
let leftImageElement = document.getElementById('leftimage');
let middleImageElement = document.getElementById('middleimage');
let rightImageElement = document.getElementById('rightimage');


let arrOfObject = [];
let nameArr=[];
let imgCountArr=[];
let arrOfVotes=[];
let arrOfThreeImage=[];
function BusMarket(productName, imagePath){
this.productName=productName;
this.imagePath=imagePath;
this.imageDisplayed =0;
this.vote = 0;
arrOfObject.push(this);
nameArr.push(this.productName);


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

// function randomGenerate2(){

//     let randomImage2= Math.floor(Math.random()*arrOfObject.length)
//  return randomImage2;
//  }


let leftImage;
let middleImage;
let rightImage;

// console.log(Arr1.includes(middleImage));
// console.log(Arr1.includes(rightImage));

function renderImage(){
leftImage = randomGenerate();
middleImage = randomGenerate();
rightImage = randomGenerate();


while (leftImage === middleImage || leftImage === rightImage || middleImage === rightImage || 
    arrOfThreeImage.includes(leftImage) || arrOfThreeImage.includes(middleImage)||arrOfThreeImage.includes(rightImage) )
     {
    middleImage = randomGenerate();
    rightImage = randomGenerate();
}

arrOfThreeImage[0]=leftImage;
arrOfThreeImage[1]=middleImage;
arrOfThreeImage[2]=rightImage;

arrOfObject[leftImage].imageDisplayed++;
arrOfObject[middleImage].imageDisplayed++;
arrOfObject[rightImage].imageDisplayed++;

leftImageElement.setAttribute('src', arrOfObject[leftImage].imgPath);
middleImageElement.setAttribute('src', arrOfObject[middleImage].imgPath);
rightImageElement.setAttribute('src', arrOfObject[rightImage].imgPath);

while((leftImage === rightImage) || (leftImage === middleImage) || (middleImage === rightImage)){
    leftImage = randomGenerate();
    rightImage = randomGenerate();
}



leftImageElement.setAttribute('src', arrOfObject[leftImage].imagePath);
middleImageElement.setAttribute('src', arrOfObject[middleImage].imagePath);
rightImageElement.setAttribute('src', arrOfObject[rightImage].imagePath);

arrOfObject[leftImage].imageDisplayed++;
arrOfObject[middleImage].imageDisplayed++;
arrOfObject[rightImage].imageDisplayed++;

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

          li.textContent = `${arrOfObject[i].productName} it had  ${arrOfObject[i].vote} vote, and seen ${arrOfObject[i].imageDisplayed} time.`;}
          button.removeEventListener('click', viewResult);
         

      }
      for ( let j = 0 ; j < arrOfObject.length; j++){
        arrOfVotes.push((arrOfObject[j]).vote);
        imgCountArr.push(arrOfObject[j].imageDisplayed ) 
     }
     chartRender();

     leftImageElement.removeEventListener('click', handleClicking);
      middleImageElement.removeEventListener('click', handleClicking);
      rightImageElement.removeEventListener('click', handleClicking);
      
    
    }
}

function chartRender(){
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',
    
        // The data for our dataset
        data: {
            labels: nameArr,
            datasets: [{
                label: 'Bus Mall',
                backgroundColor: '#e36bae',
                borderColor: 'rgb(255, 99, 132)',
                data: arrOfVotes,
            },{
                label: 'BusMall Displayed',
                backgroundColor: '#f1d1d0',
                borderColor:'rgb(155,100,30)',
                data: imgCountArr,
    
            }]
        },
    
        // Configuration options go here
        options: {}
    });
}
// function chartRender(){
//   var ctx = document.getElementById('myChart').getContext('2d');
//   var chart = new chart(ctx, {
//       type: 'bar',
//       data: {
//           label: nameArr,
//           datasets: [{
//               label: 'Bus Mall',
//               backgroundColor: '#e36bae',
//               borderColor: 'rgb(255, 99, 132)',
//               data:arrOfVotes,
//           }, {
//               label: 'Image Display',
//               backgroundColor: '#f1d1d0',
//               borderColor: 'rgb(155,100,30)',
//               data:imgCountArr,
//           }]
//       },
//       Option: {}
//       }) 