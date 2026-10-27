function confirmBooking() {
    var name = document.getElementById("username").value;

    if (name == "") {
        alert("Please enter your name!");
    } else {
        alert("Thank you, " + name + "! Your booking request has been received.");
    }
}