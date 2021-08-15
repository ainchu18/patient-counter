// wait for DOM to finish loading before running the counter
// get button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "add") {
                incrementMinorMaleCount();
            } else if (this.getAttribute("data-type") === "minus") {
                decrementMinorMaleCount();
            } else if  (this.getAttribute("data-type") === "save") {
                saveMinorMaleCount();
            }        
        })
    }
})

// functions  for patient counter/main page


let minorMale = document.getElementById("minor-male");
let totalNumberMinors = document.getElementById("total-number-minors");
let minorMaleCount = 0;

function incrementMinorMaleCount() {
    minorMaleCount += 1
    minorMale.textContent = minorMaleCount
}

function decrementMinorMaleCount() {
    minorMaleCount -= 1
    minorMale.textContent = minorMaleCount

}

function saveMinorMaleCount() {
    let totalMinorCount = minorMaleCount
    totalNumberMinors.textContent = totalMinorCount + parseInt(totalNumberMinors.textContent)
    minorMale.textContent = 0
    minorMaleCount = 0
}


// functions for tally page

function minorTotalJanuary(){

}

function adultTotalJanuary(){

}

function minorTotalFebruary(){

}

function adultTotalFebruary(){

}

function minorTotalMarch(){

}

function adultTotalMarch(){

}

function minorTotalApril(){

}

function adultTotalApril(){

}

function minorTotalMay(){

}

function adultTotalMay(){

}

function minorTotalJune(){

}

function adultTotalJune(){

}

function minorTotalJuly(){

}

function adultTotalJuly(){

}

function minorTotalAugust(){

}

function adultTotalAugust(){

}

function minorTotalSeptember(){

}

function adultTotalSeptember(){

}

function minorTotalOctober(){

}

function adultTotalOctober(){

}

function minorTotalNovember(){

}

function adultTotalNovember(){

}

function minorTotalDecember(){

}

function adultTotalDecember(){

}