// Get context with jQuery - using jQuery's .get() method.
// This will get the first returned node in the jQuery collection.
var regVoters = 300;
var votingVoters = 100;

var data = [
    {
        value: regVoters,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: votingVoters,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
  ];

var ctx = $("#myChart").get(0).getContext("2d");
var myNewChart = new Chart(ctx);
myNewChart.Doughnut(data);
