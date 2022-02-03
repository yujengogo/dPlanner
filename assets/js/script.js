$(document).ready(function(){
    updateTime();
});
function updateTime(){
    $("#timeBlock").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}
setInterval(updateTime, 1000);

const momentHour = moment().format("H");

var allTimeBlocks = $(".textbox");

for(var i = 0; i < allTimeBlocks.length; i++) {
    // console.log(allTimeBlocks[i])

    var blockHour = parseInt($(allTimeBlocks[i]).attr("data-hour"));//parseInt is to make string to value
    var currentHour = parseInt(momentHour)

    // console.log(currentHour + " vs. " + blockHour)

    if(currentHour == blockHour) {
        $(allTimeBlocks[i]).addClass("present")
    } else if (currentHour < blockHour) {
        $(allTimeBlocks[i]).addClass("future")
    }else if (currentHour > blockHour) {
        $(allTimeBlocks[i]).addClass("past")
    }

}
var $textbox9AM = $("#t9");
var $textbox10AM = $("#t10");
var $textbox11AM = $("#t11");
var $textbox12PM = $("#t12");
var $textbox1PM = $("#t13");
var $textbox2PM = $("#t14");
var $textbox3PM = $("#t15");
var $textbox4PM = $("#t16");
var $textbox5PM = $("#t17");
var $textbox6PM = $("#t18");
var $textbox7PM = $("#t19");
var $textbox8PM = $("#t20");
var $textbox9PM = $("#t21");
var $textbox10PM = $("#t22");
var $textbox11PM = $("#t23");
var $textbox12AM = $("#t24");

$(".saveBtn").on("click", function(){
localStorage.setItem("9AM", ($textbox9AM.val()))
localStorage.setItem("10AM", ($textbox10AM.val()))
localStorage.setItem("11AM", ($textbox11AM.val()))
localStorage.setItem("12PM", ($textbox12PM.val()))
localStorage.setItem("1PM", ($textbox1PM.val()))
localStorage.setItem("2PM", ($textbox2PM.val()))
localStorage.setItem("3PM", ($textbox3PM.val()))
localStorage.setItem("4PM", ($textbox4PM.val()))
localStorage.setItem("5PM", ($textbox5PM.val()))
localStorage.setItem("6PM", ($textbox6PM.val()))
localStorage.setItem("7PM", ($textbox7PM.val()))
localStorage.setItem("8PM", ($textbox8PM.val()))
localStorage.setItem("9PM", ($textbox9PM.val()))
localStorage.setItem("10PM", ($textbox10PM.val()))
localStorage.setItem("11PM", ($textbox11PM.val()))
localStorage.setItem("12AM", ($textbox12AM.val()))
})

$textbox9AM.append(localStorage.getItem("9AM"));
$textbox10AM.append(localStorage.getItem("10AM"));
$textbox11AM.append(localStorage.getItem("11AM"));
$textbox12PM.append(localStorage.getItem("12PM"));
$textbox1PM.append(localStorage.getItem("1PM"));
$textbox2PM.append(localStorage.getItem("2PM"));
$textbox3PM.append(localStorage.getItem("3PM"));
$textbox4PM.append(localStorage.getItem("4PM"));
$textbox5PM.append(localStorage.getItem("5PM"));
$textbox6PM.append(localStorage.getItem("6PM"));
$textbox7PM.append(localStorage.getItem("7PM"));
$textbox8PM.append(localStorage.getItem("8PM"));
$textbox9PM.append(localStorage.getItem("9PM"));
$textbox10PM.append(localStorage.getItem("10PM"));
$textbox11PM.append(localStorage.getItem("11PM"));
$textbox12AM.append(localStorage.getItem("12AM"));

