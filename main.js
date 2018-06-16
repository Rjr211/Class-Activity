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
    startDate = "", // DD/MM/YY
    monthlyRate = "";

function relativeTime (dateSplit) {
    var relTime = moment(dateSplit, "DDMMYY").fromNow();
    var relYears = relTime.split(" ")[0];
    return relYears;
};

function monthsWorked (startDate) {
    var dateSplit = startDate.split("/");
    var currentDateSplit = moment().format("DD/MM/YY").split('/');
    var worked = relativeTime(dateSplit) * 12;

    return worked;
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
    monthlyRate = parseInt($("#rate-input").val().trim());

    database.ref("/employeeData").push({
        "employeeName": employeeName,
        "role": role,
        "startDate": startDate,
        "monthsWorked": monthsWorked(startDate),
        "monthlyRate": monthlyRate,
    })
});

