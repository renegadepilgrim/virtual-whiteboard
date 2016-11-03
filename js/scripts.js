// business logic
function Event(title, time, location, meetupLocation, description) {
  this.eventTitle = title;
  this.eventTime = time;
  this.eventLocation = location;
  this.meetupLocation = meetupLocation;
  this.eventDescription = description;
}

function Creator(creator, creatorContact) {
  this.creatorName = creator;
  this.creatorContact = creatorContact;
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
  $("#HOMEPAGE form").submit(function(event) {
    event.preventDefault();

    var eventTitle = $("#EVENTTITLE").val();
    var eventTime = $("").val();
    var eventLocation = $("").val();
    var meetupLocation = $("").val();
    var eventDescription = $("").val();

    var creatorName = $("").val();
    var creatorContact = $("").val();

    $("#SHOW").text(event1.eventTitle);

    var event1 = new Event(eventTitle, eventTime, eventLocation, meetupLocation, eventDescription);
    var creator1 = new Creator(creatorName, creatorContact);
  });
});
