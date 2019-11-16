// Reservation form event handler
$("#reservationSubmit").on("click", function (event) {
  event.preventDefault();
  let newReservation = {
    name: $("#name").val().trim(),
    role: $("#role").val().trim(),
    age: $("#age").val().trim(),
    forcePoints: $("#force-points").val().trim()
  };

  // Question: What does this code do??
  $.post("/api/reservation", newReservation)
    .then(function (data) {
      // console.log("add.html", data);
      // alert("Adding character...");
    });
});

