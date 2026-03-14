console.log($("h1").css("font-size"));



$("h1").css("color","green");


$("h1").addClass("big-title")

$("h1").addClass("margin")

// $("h1").removeClass("big-title") 
$("button").text("Dont Touch");

$("a").attr("href","https://www.bing.com/")

$("h1").click(function(){
    $("h1").css("color","purple");
});


$("button").click(function(){
    $("h1").css("color","red")
});


$(document).keydown(function(event){
$("h1").text(event.key);
}
)


// $("h1").on("click", function(){
//     $("h1").css("color","black")
// })
// $("h1").on("click", function(){
//     $("h1").hide()
// });
$("button").on("click", function(){
    $("h1").animate({opacity: 0}).slideUp().slideDown().animate({opacity: 1})
})
