// business logic
function resetFields() {
    $("input#event").val("");
    $("input#date option:selected").val("");
    $("input#location").val("");
    $("input#meetuplocation").val("");
    $("input#description").val("");
    $("input#name").val("");
    $("input#email").val("");
    $("input#phone").val("");
}

// user interface logic
$(document).ready(function() {
  $("#login-button").click(function(event) {
    event.preventDefault();
    var getin = $("#pass-input").val();
    if (getin=="peppermint") {
      location.href='index.html'
    } else {
      alert("Try again!");
    }
  });
  $(".container .form").submit(function(event) {
    event.preventDefault();

    var eventTitle = $("#event").val();
    var eventDate = $("#date option:selected").val();
    var eventTime = $("#time").val();
    var eventLocation = $("#location").val();
    var eventDescription = $("#description").val();

    var creatorName = $("#name").val();
    var creatorContactEmail = $("#email").val();
    var creatorContactPhone = $("#phone").val();

    if(eventDate === "Wednesday, January 4, 2017") {
      $("#page-wed .container").append("<div class='row event-item'><div class='col-md-6'><p>Event: " + eventTitle + "</p><p>Date and Time: " + eventDate + " " + eventTime + "</p><p>Location: " + eventLocation + "</p></div><div class='col-md-6'><p>Name: " + creatorName + "</p><p>Email: " + creatorContactEmail + "</p><p>Phone: " + creatorContactPhone + "</p></div><div class='col-md-12'><p>Description: " + eventDescription + "</p></div></div>");
    } else if(eventDate === "Thursday, January 5, 2017") {
      $("#page-thur .container").append("<div class='row event-item'><div class='col-md-6'><p>Event: " + eventTitle + "</p><p>Date and Time: " + eventDate + " " + eventTime + "</p><p>Location: " + eventLocation + "</p></div><div class='col-md-6'><p>Name: " + creatorName + "</p><p>Email: " + creatorContactEmail + "</p><p>Phone: " + creatorContactPhone + "</p></div><div class='col-md-12'><p>Description: " + eventDescription + "</p></div></div>");
    } else if(eventDate === "Friday, January 6, 2017") {
      $("#page-fri .container").append("<div class='row event-item'><div class='col-md-6'><p>Event: " + eventTitle + "</p><p>Date and Time: " + eventDate + " " + eventTime + "</p><p>Location: " + eventLocation + "</p></div><div class='col-md-6'><p>Name: " + creatorName + "</p><p>Email: " + creatorContactEmail + "</p><p>Phone: " + creatorContactPhone + "</p></div><div class='col-md-12'><p>Description: " + eventDescription + "</p></div></div>");
    } else if(eventDate === "Saturday, January 7, 2017") {
      $("#page-sat .container").append("<div class='row event-item'><div class='col-md-6'><p>Event: " + eventTitle + "</p><p>Date and Time: " + eventDate + " " + eventTime + "</p><p>Location: " + eventLocation + "</p></div><div class='col-md-6'><p>Name: " + creatorName + "</p><p>Email: " + creatorContactEmail + "</p><p>Phone: " + creatorContactPhone + "</p></div><div class='col-md-12'><p>Description: " + eventDescription + "</p></div></div>");
    } else if(eventDate === "Sunday, January 8, 2017") {
      $("#page-sun .container").append("<div class='row event-item'><div class='col-md-6'><p>Event: " + eventTitle + "</p><p>Date and Time: " + eventDate + " " + eventTime + "</p><p>Location: " + eventLocation + "</p></div><div class='col-md-6'><p>Name: " + creatorName + "</p><p>Email: " + creatorContactEmail + "</p><p>Phone: " + creatorContactPhone + "</p></div><div class='col-md-12'><p>Description: " + eventDescription + "</p></div></div>");
    } else if(eventDate === "Monday, January 9, 2017") {
      $("#page-mon .container").append("<div class='row event-item'><div class='col-md-6'><p>Event: " + eventTitle + "</p><p>Date and Time: " + eventDate + " " + eventTime + "</p><p>Location: " + eventLocation + "</p></div><div class='col-md-6'><p>Name: " + creatorName + "</p><p>Email: " + creatorContactEmail + "</p><p>Phone: " + creatorContactPhone + "</p></div><div class='col-md-12'><p>Description: " + eventDescription + "</p></div></div>");
    }

    resetFields();
  });

  $("#link-wed").click(function() {
    $("#page-home").hide();
    $("#page-wed").show();
    $("#page-thur").hide();
    $("#page-fri").hide();
    $("#page-sat").hide();
    $("#page-sun").hide();
    $("#page-mon").hide();
  });
  $("#link-thur").click(function() {
    $("#page-home").hide();
    $("#page-wed").hide();
    $("#page-thur").show();
    $("#page-fri").hide();
    $("#page-sat").hide();
    $("#page-sun").hide();
    $("#page-mon").hide();
  });
  $("#link-fri").click(function() {
    $("#page-home").hide();
    $("#page-wed").hide();
    $("#page-thur").hide();
    $("#page-fri").show();
    $("#page-sat").hide();
    $("#page-sun").hide();
    $("#page-mon").hide();
  });
  $("#link-sat").click(function() {
    $("#page-home").hide();
    $("#page-wed").hide();
    $("#page-thur").hide();
    $("#page-fri").hide();
    $("#page-sat").show();
    $("#page-sun").hide();
    $("#page-mon").hide();
  });
  $("#link-sun").click(function() {
    $("#page-home").hide();
    $("#page-wed").hide();
    $("#page-thur").hide();
    $("#page-fri").hide();
    $("#page-sat").hide();
    $("#page-sun").show();
    $("#page-mon").hide();
  });
  $("#link-mon").click(function() {
    $("#page-home").hide();
    $("#page-wed").hide();
    $("#page-thur").hide();
    $("#page-fri").hide();
    $("#page-sat").hide();
    $("#page-sun").hide();
    $("#page-mon").show();
  });
});
