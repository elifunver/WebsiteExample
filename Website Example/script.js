// initiation of the card's position and index
var cardIndex=4;
var positionLeft=0;
 //accessing div that holds all slides in one
var cardSlider=document.querySelector("#cardSlider");
console.log(cardSlider);
//get the size of carouselInner's width that contains all slide items
var carouselInnerWidth=$('.carousel-inner')[0].scrollWidth;
console.log("carouselInnerWidth: "+carouselInnerWidth);
//get the size of card item's width in order to calculating the count of item 
var cardItemwidth=$('.carousel-item').width();
console.log("cardItemwidth: "+cardItemwidth);
//carouselInnerWidth is divided by cardItemwidth because of calculating the count of item 
var countItem=Math.round(carouselInnerWidth/cardItemwidth);
console.log(countItem);
//slide item right to left if next button is clicked.
$('.carousel-control-next').on("click",function(){
    if(cardIndex<countItem-1){
        cardIndex++;
        positionLeft+=cardItemwidth+12;
        $('.carousel-inner').animate({scrollLeft: positionLeft},600);
    
    }
    
    
    
    
});
$('.carousel-control-prev').on("click",function(){
    if(cardIndex>4){
        cardIndex--;
        positionLeft-=cardItemwidth+12;
        $('.carousel-inner').animate({scrollLeft: positionLeft},600);
    }
      
});