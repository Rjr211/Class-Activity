  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBOk-QMHgH8gyO-9xdFP-JVJGF9NR2vVJA",
    authDomain: "test-591bb.firebaseapp.com",
    databaseURL: "https://test-591bb.firebaseio.com",
    projectId: "test-591bb",
    storageBucket: "test-591bb.appspot.com",
    messagingSenderId: "115420572333"
  };

  firebase.initializeApp(config);


//firebase database variable
var database = firebase.database();

//When changes are made to database append change to table
database.ref("/employeeNode").on("child_added", function(childSnapshot, prevChildKey) {

    var empName = childSnapshot.val().name,
        empRole = childSnapshot.val().role,
        empStart = childSnapshot.val().start,
        empRate = childSnapshot.val().rate;

    // Prettify the employee start
    var empStartPretty = moment.unix(empStart).format("MM/DD/YY");

    // Calculate the months worked using hardcore math
    // To calculate the months worked
    var empMonths = moment().diff(moment(empStart, "X"), "months");
    console.log(empMonths);

    // Calculate the total billed rate
    var empBilled = empMonths * empRate;
    console.log(empBilled);

    // Add each train's data into the table
    $("#employee-table > tbody").append("<tr><td>" + empName + "</td><td>" + empRole + "</td><td>" +
    empStartPretty + "</td><td>" + empMonths + "</td><td>" + empRate + "</td><td>" + empBilled + "</td></tr>");

});

//When employee submits form enter into firebase database
$("#target").submit(function(event) {
    event.preventDefault();
    
    var empName = $("#employee-name-input").val().trim(),
        empRole = $("#role-input").val().trim(),
        empStart = moment($("#start-input").val().trim(), "DD/MM/YY").format("X"),
        empRate = $("#rate-input").val().trim();
    console.log(empStart);
    database.ref("/employeeNode").push({
        "name": empName,
        "role": empRole,
        "date": empStart,
        "rate": empRate,
    })
});

