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
    monthlyRate = "",

function monthsWorked (startDate) {

};

function totalBilled (monthlyRate, monthsWorked) {
   var totalBilled = monthlyRate * monthsWorked;
   return totalBilled;
}

$(document).ready(function() {

})