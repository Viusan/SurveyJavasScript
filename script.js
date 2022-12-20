var himmel = document.querySelector("#himmelNei");

var flat = document.querySelector("#flatNei");

var venus = document.querySelector("#venusNei");

var saturn = document.querySelector("#saturnNei");

var himmelSvar = 0;
var jordenSvar = 0;
var venusSvar = 0;
var saturnSvar = 0;
var antallBrukereSomHarSvart = 0;

function svar(){
  if(himmel.value == 1){
    console.log("du er enig med at himmelen er grønn")
    himmelSvar++;
  }else{
    console.log("himmelen er ikke grønn")
  }

  if(flat.value == 1){
    console.log("flat")
    jordenSvar++;
  }else{
    console.log("ikke flat")
  }

  if(venus.value == 1){
    console.log("venus er firkant")
    venusSvar++;
  }else{
    console.log("venus er rund")
  }

  if(saturn.value == 1){
    console.log("saturn er rund")
    saturnSvar++;
  }else{
    console.log("saturn er flat")
  }
  antallBrukereSomHarSvart++
}

function visResultat(){
  var xValues = ["Himmelen er grønn", "Jorden er flat", "Venus er firkantet", "Saturn er rund"];
  var yValues = [(himmelSvar/antallBrukereSomHarSvart)*100, (jordenSvar/antallBrukereSomHarSvart)*100, (venusSvar/antallBrukereSomHarSvart)*100, (saturnSvar/antallBrukereSomHarSvart)*100];
  var barColors = ["red", "green","blue","orange","brown"];
  
  new Chart("myChart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "Hvor mange som var enig med spørsmålene"
      },
      scales: {
        yAxes:[{
          ticks:{
            beginAtZero: true,
            max: 100
          }
        }]
      }
    }
  });
  document.getElementById("antallBrukereDisplay").innerHTML = "Antall bruker som har tatt spørreundersøkelsen: " + antallBrukereSomHarSvart;
}