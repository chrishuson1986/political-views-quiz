$("document").ready(function() {
  $("#form-quiz").submit(function(event) {

    var points = 20;

    var equality = $("#equality").val();
    var diversity = $("#diversity").val();
    var government = $("#government").val();
    var market = $("#market").val();

    if (equality === "yes") {
      points += 5;
    }
    else {
      points -= 5;
    }

    if (diversity === "yes") {
      points += 5;
    }
    else {
      points -= 5;
    }

    if (government === "no") {
      points += 5;
    }
    else {
      points -= 5;
    }

    if (market === "no") {
      points += 5;
    }
    else {
      points -= 5;
    }

    $("#result").show();
    $("#form-quiz").hide();

    if (points < 15) {
      $(".result").text("conservative");
    }
    else if (points > 25){
      $(".result").text("liberal");
    }
    else {
      $(".result").text("moderate");
    }
    event.preventDefault();
  });
});
