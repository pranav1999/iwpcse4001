function fun() {
    alert("i am working");
}

function radio() {
    document.getElementById("radio").innerHTML = "radio checked";
}

function checkbox() {
    document.getElementById("checkbox").innerHTML = "box checked";
}


$(document).ready(function () {
    $("#hide").click(function () {
        $("p").hide();
        $("#div1").hide();
            $("#div2").hide();
            $("#div3").hide();

    });
    $("#show").click(function () {
        $("p").show();
    });
});

$(document).ready(function () {
    $("#fade").click(function () {
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });
});

$(document).ready(function(){
    $("#btn1").click(function(){
      $("#btn1").append(" <b>Appended text</b>.");
    });
});

$(document).ready(function(){
    $("#btn2").click(function(){
      $("#btn2").remove();
    });
  });

  $(document).ready(function(){
    $("#pu").click(function(){
      $("#pu").css("background-color", "yellow");
    });
  });

  $(document).ready(function(){
    $("#big").click(function(){
      $("#big").width(500).height(500);
    });
  });

  $(document).ready(function(){
    $("span").parent().css({"color": "red", "border": "2px solid red"});
  });