$(document).ready(function(){
    // jQuery methods go here...
    $('.b1').click(function(){
        $('ol').hide();
    });
    $('.b2').click(function(){
        $('ol').show();
    });
    $('.b3').click(function(){
        $('ol li:first').hide();
    });
    $('.b4').click(function(){
        $('ol li:first').show();
    });
    $('.b5').click(function(){
        $("li:contains('Apple')").fadeOut(2000);
    });
    $('.b5').click(function(){
        $("li:contains('Apple')").fadeOut(2000);
    });
    $('.b6').click(function(){
        $("li:contains('Apple')").fadeIn(2000);
    });
    $('.b7').click(function(){
        $("li:even").fadeOut(2000);
    });
    $('.b8').click(function(){
        $("li:even").fadeIn(2000);
    });
    $('.b9').click(function(){
        $(".items").slideUp(2000);
    });
    $('.b10').click(function(){
        $(".items").slideDown(2000);
    });
    $('ol li').mouseenter(function(){
        $("ol li").css("background","red");
    });
    $('ol li').mouseleave(function(){
        $("ol li").css("background","rgb(166, 207, 15)");
    });
    $(".b11").click(function(){
        $("ol li").css("background", "magenta").slideUp(2000).slideDown(2000);
    });
    $(".b12").click(function(){
        $("ol li:last").text("I am a new item");
    });
    $(".b13").click(function(){
        $("#w3s").attr("href", "https://www.w3schools.com/jquery/");
    });
    $(".b14").click(function(){
        $(".random").prepend("click the link ");
    });
    $(".b15").click(function(){
        $(".line").remove();
    });
    $(".b16").click(function(){
        $(".line").addClass("important blue");
    });
    $(".b17").click(function(){
        $(".line").removeClass("blue");
    });
    $(".b18").click(function(){
        var w = "Width: " + $(".items").width();
        var h = "Height: " + $(".items").height();
        var txt=w+" " + h;
        $('.dimension').html(txt);
    });
  
  
  
  });