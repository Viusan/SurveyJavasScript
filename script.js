//Varibler for radio knappene
var himmel = document.querySelector("#himmelNei");
var flat = document.querySelector("#flatNei");
var venus = document.querySelector("#venusNei");
var saturn = document.querySelector("#saturnNei");

//Variabel for hvor mange brukere og hvor mange svarte at de var enige i en array.
var svarArray = [0,0,0,0,0]

function svar(){//Hvis de er enige, økes variablene som brukes som statistikk
  if(himmel.value == 1){
    console.log("du er enig med at himmelen er grønn")
    svarArray[1]++
  }else{
    console.log("himmelen er ikke grønn")
  }

  if(flat.value == 1){
    console.log("flat")
    svarArray[2]++
  }else{
    console.log("ikke flat")
  }

  if(venus.value == 1){
    console.log("venus er firkant")
    svarArray[3]++
  }else{
    console.log("venus er rund")
  }

  if(saturn.value == 1){
    console.log("saturn er rund")
    svarArray[4]++
  }else{
    console.log("saturn er flat")
  }
  //Teller hvor mange som svarer på undersøkelsen
  svarArray[0]++
  console.log(svarArray)
}

function visResultat(){//Lager chart når du trykker på vis resultat knappen
  //Variabler som blir brukt til charten
  var xValues = ["Himmelen er grønn", "Jorden er flat", "Venus er firkantet", "Saturn er rund"];
  var yValues = [(svarArray[1]/svarArray[0])*100, (svarArray[2]/svarArray[0])*100, (svarArray[3]/svarArray[0])*100, (svarArray[4]/svarArray[0])*100];
  var barColors = ["red", "green","blue","orange","brown"];
  
  new Chart("myChart", { //Koden som lager chart
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
  //Tekst som viser hvor mange som har tatt undersøkelsen
  document.getElementById("antallBrukereDisplay").innerHTML = "Antall bruker som har tatt spørreundersøkelsen: " + antallBrukereSomHarSvart;
}