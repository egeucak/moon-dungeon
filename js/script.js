$(function(){

   // jQuery methods go here...

});

function welcome() {
  $(".messages p").text("Welcome to The Moon Dungeon");
}

function print(text) {
    text += " </br>What now?";
    // text = $(".messages p").html() + "</br>" + text;
    $(".messages p").html(text);
}

function start() {
    var $myCanvas = $("#canvas");
    $myCanvas.drawText({
        text: "This is the map",
        fillStyle : "black",
        fontSize: 40,
        x: 250, y: 200,
    });
    welcome();
}

$(function(){
    start();
    $("#btn").click(
        function () {
            var action = $("#inp").val();
            console.log(action);
            print(action);
        }
    );
});

window.onbeforeunload = function() {
    return "Data will be lost if you leave the page, are you sure?";
};