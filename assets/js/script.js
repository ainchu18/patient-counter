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
                saveTotalMinorAttendance();
            }
            if (this.getAttribute("data-type") === "add-minor-female") {
                incrementMinorFemaleCount();
            } else if (this.getAttribute("data-type") === "minus-minor-female") {
                decrementMinorFemaleCount();
            } else if (this.getAttribute("data-type") === "save-minor-female") {
                saveTotalMinorAttendance();
            }
            if (this.getAttribute("data-type") === "add-adult-male") {
                incrementAdultMaleCount();
            } else if (this.getAttribute("data-type") === "minus-adult-male") {
                decrementAdultMaleCount();
            } else if (this.getAttribute("data-type") === "save-adult-male") {
                saveTotalAdultAttendance();
            }
            if (this.getAttribute("data-type") === "add-adult-female") {
                incrementAdultFemaleCount();
            } else if (this.getAttribute("data-type") === "minus-adult-female") {
                decrementAdultFemaleCount();
            } else if (this.getAttribute("data-type") === "save-adult-female") {
                saveTotalAdultAttendance();
            }
        })
    }
})

// functions  for patient counter/main page

let minorMale = document.getElementById("minor-male");
let minorMaleCount = 0;

let minorFemale = document.getElementById("minor-female");
let minorFemaleCount = 0;

let adultMale = document.getElementById("adult-male");
let adultMaleCount = 0;

let adultFemale = document.getElementById("adult-female");
let adultFemaleCount = 0;

let totalNumberMinors = document.getElementById("total-number-minors");
let totalNumberAdults = document.getElementById("total-number-adults");

// functions for counting minor male attendance

function incrementMinorMaleCount() {
    minorMaleCount += 1
    minorMale.textContent = minorMaleCount
}

function decrementMinorMaleCount() {
    minorMaleCount -= 1
    minorMale.textContent = minorMaleCount
}

// functions for counting minor female attendance

function incrementMinorFemaleCount() {
    minorFemaleCount += 1
    minorFemale.textContent = minorFemaleCount
}

function decrementMinorFemaleCount() {
    minorFemaleCount -= 1
    minorFemale.textContent = minorFemaleCount
}

// functions for counting adult male attendance

function incrementAdultMaleCount() {
    adultMaleCount += 1
    adultMale.textContent = adultMaleCount
}

function decrementAdultMaleCount() {
    adultMaleCount -= 1
    adultMale.textContent = adultMaleCount
}

// functions for counting adult female attendance

function incrementAdultFemaleCount() {
    adultFemaleCount += 1
    adultFemale.textContent = adultFemaleCount
}

function decrementAdultFemaleCount() {
    adultFemaleCount -= 1
    adultFemale.textContent = adultFemaleCount
}

// funtion to sum up minor total

function saveTotalMinorAttendance() {
    let totalMinorCount = minorMaleCount + minorFemaleCount
    totalNumberMinors.textContent = totalMinorCount + parseInt(totalNumberMinors.textContent)
    minorMale.textContent = 0
    minorFemale.textContent = 0
    minorMaleCount = 0
    minorFemaleCount = 0
}

// funtion to sum up adult total

function saveTotalAdultAttendance() {
    let totalAdultCount = adultMaleCount + adultFemaleCount
    totalNumberAdults.textContent = totalAdultCount + parseInt(totalNumberAdults.textContent)
    adultMale.textContent = 0
    adultFemale.textContent = 0
    adultMaleCount = 0
    adultFemaleCount = 0
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