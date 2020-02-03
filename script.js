var currentDate = moment().format("MM/DD/YYYY");
$("#theDate").append(currentDate);

var timeArr = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
updatetime();

function updatetime() {
  var currentTime = moment().format('H');
  for(var i = 0; i < timeArr.length; i++) {

    if (parseInt(timeArr[i]) > currentTime) {
      $("#" + timeArr[i]).attr("style", "background-color: white");


    }
    else if (parseInt(timeArr[i]) < currentTime) {
      $("#" + timeArr[i]).attr("style", "background-color: lightpink");

    }
    else if (parseInt(timeArr[i]) == currentTime) {
      $("#" + timeArr[i]).attr("style", "background-color: lightgreen");
    
    }
  }
}

$(".rowBtn").on("click", function() {
    var timeArr = $(this).parent().attr("id");
    var textContent = $("input").val().trim();

    localStorage.setItem(timeArr, textContent);
    console.log(timeArr, textContent);
});

  $("input").val(localStorage.getItem("rowBtn"));