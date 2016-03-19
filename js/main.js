function runGenderFilter(element) {
     element.src = element.bln ? "img/gender.png" : "img/genderGreen.png";
     element.bln = !element.bln;  /* assigns opposite boolean value always */
 }

 function runAgeFilter(element) {
      element.src = element.bln ? "img/age.png" : "img/ageGreen.png";
      element.bln = !element.bln;  /* assigns opposite boolean value always */
  }

function runPartyFilter(element) {
     element.src = element.bln ? "img/party.png" : "img/partyGreen.png";
     element.bln = !element.bln;  /* assigns opposite boolean value always */
 }
