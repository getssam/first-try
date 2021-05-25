$(window).on("load", function(){
    $(".hambo").click(function(){
        $(".mobile").animate({left: "1px"}, 900);
    })
    $(".btnmob").click(function(){
        $(".mobile").animate({left : `${-1*100}%`}, 900);
    })
})
