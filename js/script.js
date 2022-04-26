$(document).ready(function(){
    $(".slide > .slide_all > li").eq(0).siblings().hide();
    var slideI=0;
    setInterval(function(){
        if(slideI<4){
            slideI++;
        }else{
            slideI=0;
        }
        $(".slide > .slide_all > li").eq(slideI).siblings().fadeOut(500);
        $(".slide > .slide_all > li").eq(slideI).animate().fadeIn(500);
    },5000);//이미지슬라이드 script
});//ready