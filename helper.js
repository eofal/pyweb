advice_url = "https://sf-pyw.mosyag.in/m04/api/forecasts"
$(document).ready(function() {
    var currentTime = new Date();
    p = $("#current-date");
    //p.html(currentTime.getDate() + "-" + (currentTime.getMonth()+1) + "-" + currentTime.getFullYear());
    p.html(currentTime.toLocaleDateString());
});

$("#main-header").click(function() {
    $.getJSON(advice_url, function(data) {
        console.log("Вот, что пришло:");
        prophecies = data["prophecies"];
        console.log(data); 
        set_content_in_divs(prophecies);
    });

    
});

function set_content_in_divs(paragraphs) {
    $.each(paragraphs, function(i, d) {
      p = $("#p-" + i)
      p.html("<p>" + d + "</p>")
  });
}