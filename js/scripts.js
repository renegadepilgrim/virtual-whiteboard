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
  $(".container .form").submit(function(event) {
    event.preventDefault();

    var eventTitle = $("#event").val();
    var eventTime = $("#date option:selected").val();
    console.log(eventTime);
    var eventLocation = $("#location").val();
    var meetupLocation = $("#meetuplocation").val();
    var eventDescription = $("#description").val();

    var creatorName = $("#name").val();
    var creatorContactEmail = $("#email").val();
    var creatorContactPhone = $("#phone").val();



    var event1 = new Event(eventTitle, eventTime, eventLocation, meetupLocation, eventDescription);
    //var creator1 = new Creator(creatorName, creatorContact);
  });
});
