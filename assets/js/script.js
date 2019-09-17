//Toggle specific list items by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//Click on X to delete list item
$("ul").on("click", "span", function(e){
    $(this).parent().slideUp(250, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

//press enter to add list item
$("input:text").keypress(function(e){
    if(event.which === 13) {
        addListItem();
    }
});

//click + icon to add list item
$("span i.fa-plus").on("click", function(){
    if($("input:text").val() !== "") {
        addListItem();
    }
});


//function to add list item
function addListItem() {
    var todoText = $("input:text").val();
    $("input:text").val("");
    //$("ul").append("<li>"+ todoText +" <span><i class='far fa-trash-alt'></i></span></li>").slideDown("fast");
    $("<li>"+ todoText +" <span><i class='far fa-trash-alt'></i></span></li>").appendTo("ul").slideUp(0).slideDown(250, function(){
        console.log("OK");
    });
}