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

var employeeName = "",
    role = "",
    startDate = "",
    monthlyRate = "";

function monthsWorked (startDate) {
    var dateSplit = startDate.split("/");
    console.log(moment().calendar());
};

// function totalBilled (monthlyRate, monthsWorked) {
//     var monthlyRate.split("/");
//     var totalBilled = monthlyRate * monthsWorked;
//     return totalBilled;
// }

//When changes are made to database append change to table
// database.ref("/employeeData").on("value", function(snapshot) {

// });

//When employee submits form enter into firebase database
$("#target").submit(function(event) {
    event.preventDefault();

    employeeName = $("#employee-name-input").val().trim();
    role = $("#role-input").val().trim();
    startDate = $("#start-input").val().trim();
    monthlyRate = $("#rate-input").val().trim();

    database.ref("/employeeData").push({
        "employeeName": employeeName,
        "role": role,
        "startDate": startDate,
        "monthlyRate": monthlyRate,
    })
    // console.log(monthsWorked(startDate));
});

