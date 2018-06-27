/*
https://jqueryui.com/effect/
- Banner slide
- Title bounce

https://github.com/chadselph/jquery-typewriter
- h2 typewriter effect for both titles consecutively*/ 

$(function(){

  var subtitles = document.getElementsByTagName("h2");
  $(subtitles[0]).hide();
  $(subtitles[1]).hide();
  
  $("#banner").effect("slide", 800, function(){
    $("header h1").effect("bounce", 1000, function(){
        $(subtitles[0]).typewrite({'callback': function(){
          $(subtitles[1]).typewrite();
        }});                 
    });
  });   
});