// wait for DOM to finish loading before running the counter
// get button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "add-minor-male") {
                incrementMinorMaleCount();
            } else if (this.getAttribute("data-type") === "minus-minor-male") {
                decrementMinorMaleCount();
            } else if  (this.getAttribute("data-type") === "save-minor-male") {
                saveMinorMaleCount();
            }
            if (this.getAttribute("data-type") === "add-minor-female") {
                incrementMinorFemaleCount();
            } else if (this.getAttribute("data-type") === "minus-minor-female") {
                decrementMinorFemaleCount();
            } else if (this.getAttribute("data-type") === "save-minor-female") {
                saveMinorMaleCount();
            }     
        })
    }
})

// functions  for patient counter/main page


let minorMale = document.getElementById("minor-male");
let minorMaleCount = 0;

let minorFemale = document.getElementById("minor-female");
let minorFemaleCount = 0;

let totalNumberMinors = document.getElementById("total-number-minors");


function incrementMinorMaleCount() {
    minorMaleCount += 1
    minorMale.textContent = minorMaleCount
}

function incrementMinorFemaleCount() {
    minorFemaleCount += 1
    minorFemale.textContent = minorFemaleCount
}

function decrementMinorMaleCount() {
    minorMaleCount -= 1
    minorMale.textContent = minorMaleCount
}

function decrementMinorFemaleCount() {
    minorFemaleCount -= 1
    minorFemale.textContent = minorFemaleCount
}

function saveMinorMaleCount() {
    let totalMinorCount = minorMaleCount + minorFemaleCount
    totalNumberMinors.textContent = totalMinorCount + parseInt(totalNumberMinors.textContent)
    minorMale.textContent = 0
    minorFemale.textContent = 0
    minorMaleCount = 0
    minorFemaleCount = 0
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