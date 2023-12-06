let shiftStart = document.getElementById("shiftStartSelect");
let shiftEnd = document.getElementById("shiftEndSelect");
let addBtn = document.getElementById("addbutton");

let clear = document.getElementById("clear");
let tds = document.querySelectorAll('#calendar table td');
let weekno = document.querySelectorAll('.weekno th');
let presets = document.querySelectorAll('.preset');
let presetClass = document.getElementById("presetsClass")
let weekInput = document.getElementById("weekinput");
let weekInput2 = document.getElementById("weekinput2");
let weekInput3 = document.getElementById("weekinput3");
let weekInput4 = document.getElementById("weekinput4");
let weekInput5 = document.getElementById("weekinput5");
let weekInput6 = document.getElementById("weekinput6");
let inputBase = document.getElementById("inputBase");
let inputEvening = document.getElementById("inputEvening");
let inputSaturday = document.getElementById("inputSaturday");
let inputSunday = document.getElementById("inputSunday");
let inputPension = document.getElementById("inputPension");
let inputTax = document.getElementById("inputTax");
let inputLBC = document.getElementById("inputLBC");
let inputPerk = document.getElementById("inputPerk");
let inputPFA = document.getElementById("inputPFA");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let currentMonthIndex = 0;
localStorage.setItem("currentMonthIndex", JSON.stringify(currentMonthIndex))
let currentMonthSpan = document.getElementById("currentMonth");
let weekNoList = JSON.parse(localStorage.getItem("weekNoList")) || [];
let currentMonth = weekNoList[currentMonthIndex];
let ratesList = JSON.parse(localStorage.getItem("ratesList")) || [];
createRates();
let monthList = JSON.parse(localStorage.getItem("monthList")) || [];
let dots = document.getElementById("dots");
let rateInputMonth = document.getElementById("rateInputMonth");

ratesList = JSON.parse(localStorage.getItem("ratesList"));


createRates();
createWeekNo();
displayWeeks(currentMonth);
updateWeeks();
displayRates();
updateRates()

let checkDiv = document.getElementById("checkBody");
let calendarDiv = document.getElementById("calendarBody");
let chartsDiv = document.getElementById("chartsBody");

let navBtnCalendar = document.getElementById("navBtnCalendar")
let navBtnCheck = document.getElementById("navBtnPaycheck");
let navBtnCharts = document.getElementById("navBtnCharts");



navBtnCalendar.addEventListener("click", function () {
    let calendar = calendarDiv.style.display;
    if (calendar !== "block") {
        checkDiv.style.display = "none";
        chartsDiv.style.display = "none";
        dots.style.opacity = "1";
        calendarDiv.style.display = "block";

        navBtnCalendar.classList.add("selectedPage");
        navBtnCheck.classList.remove("selectedPage");
        navBtnCharts.classList.remove("selectedPage");

    }
})
navBtnCheck.addEventListener("click", function () {
    let check = checkDiv.style.display;
    if (check !== "block") {
        calendarDiv.style.display = "none";
        chartsDiv.style.display = "none";
        dots.style.opacity = "1";
        checkDiv.style.display = "block";

        navBtnCheck.classList.add("selectedPage");
        navBtnCalendar.classList.remove("selectedPage");
        navBtnCharts.classList.remove("selectedPage");

    }
})
navBtnCharts.addEventListener("click", function () {
    let charts = navBtnCharts.style.display;
    if (charts !== "block") {
        calendarDiv.style.display = "none";
        checkDiv.style.display = "none";
        dots.style.opacity = "0";
        chartsDiv.style.display = "block";

        navBtnCheck.classList.remove("selectedPage");
        navBtnCalendar.classList.remove("selectedPage");
        navBtnCharts.classList.add("selectedPage")

    }
})

let clearAll = document.getElementById("clearAll");
clearAll.addEventListener("click", function () {
    let monthList = [];
    localStorage.setItem("monthList", JSON.stringify(monthList));
    location.reload();
})


function updateWeeks() {
    weekInput.addEventListener("blur", function () {
        week = [];

        week.push(parseInt(weekInput.value));

        week.push(+weekInput.value + 1);
        week.push(+weekInput.value + 2);
        week.push(+weekInput.value + 3);
        week.push(+weekInput.value + 4);
        week.push(+weekInput.value + 5);

        weekNoList.splice(currentMonthIndex, 1, week);

        localStorage.setItem("weekNoList", JSON.stringify(weekNoList));

        displayWeeks(monthList[currentMonthIndex]);
    })
}

function updateRates() {
    let saveButton = document.getElementById("rateSave");
    saveButton.addEventListener("click", function () {
        rates = [];
        rates.push(inputBase.value)
        rates.push(inputEvening.value)
        rates.push(inputSaturday.value)
        rates.push(inputSunday.value)
        rates.push(inputPension.value)
        rates.push(inputLBC.value)
        rates.push(inputTax.value)
        rates.push(inputPerk.value)
        rates.push(inputPFA.value)
        ratesList.splice(currentMonthIndex, 1, rates);

        localStorage.setItem("ratesList", JSON.stringify(ratesList));
        displayRates();
        paycheck();
    })

}

function displayRates() {
    inputBase.value = ratesList[currentMonthIndex][0];
    inputEvening.value = ratesList[currentMonthIndex][1];
    inputSaturday.value = ratesList[currentMonthIndex][2];
    inputSunday.value = ratesList[currentMonthIndex][3];
    inputPension.value = ratesList[currentMonthIndex][4];
    inputLBC.value = ratesList[currentMonthIndex][5];
    inputTax.value = ratesList[currentMonthIndex][6];
    inputPerk.value = ratesList[currentMonthIndex][7];
    inputPFA.value = ratesList[currentMonthIndex][8];
    paycheck();
}

function displayWeeks() {
    if (weekNoList) {
        weekInput.value = weekNoList[currentMonthIndex][0];
        thinput = document.getElementById("week1");
        if (weekInput.value != 0) {
            thinput.style.backgroundColor = "var(--lightgray)";
            weekInput.style.color = "black";
            weekInput.style.fontSize = "16px";

        } else {
            thinput.style.backgroundColor = "var(--gray)";
            weekInput.style.color = "white";
        }

    }
    if (weekNoList) {
        weekInput2.innerHTML = weekNoList[currentMonthIndex][1]
    }
    if (weekNoList) {
        weekInput3.innerHTML = weekNoList[currentMonthIndex][2]
    }
    if (weekNoList) {
        weekInput4.innerHTML = weekNoList[currentMonthIndex][3]
    }
    if (weekNoList) {
        weekInput5.innerHTML = weekNoList[currentMonthIndex][4]
    }
    if (weekNoList) {
        weekInput6.innerHTML = weekNoList[currentMonthIndex][5]
    }

    for (let i = 0; i < dots.children.length; i++) {
        let child = dots.children[i];
        if (i === currentMonthIndex) {
            child.classList.add("dotMonth");
        } else {
            child.classList.remove("dotMonth");
        }


    }
}

function createRates() {
    if (ratesList.length < 1) {
        let rates = [];
        rates.push(128.83);
        rates.push(27.75);
        rates.push(48.8);
        rates.push(54.35);
        rates.push(-0.038);
        rates.push(-0.08);
        rates.push(-0.38);
        rates.push(0.07);
        rates.push(0.077);


        for (let i = 0; i < 12; i++) {

            ratesList.push(rates);
        }

        localStorage.setItem("ratesList", JSON.stringify(ratesList))
    }
    ratesList[currentMonthIndex].push(ratesList);
}

function createWeekNo() {
    if (monthList.length < 1) {
        for (let i = 0; i < 12; i++) {
            monthList.push([]);
        }
        localStorage.setItem("monthList", JSON.stringify(monthList));
    }
    if (weekNoList.length < 1) {
        let week = [];
        for (let j = 0; j < 6; j++) {
            week.push(0);
        }
        for (let i = 0; i < 12; i++) {

            weekNoList.push(week);
        }

        localStorage.setItem("weekNoList", JSON.stringify(weekNoList));
    }
}

function updateMonthSpan() {

    if (currentMonthIndex === 0) {
        currentMonthSpan.innerHTML = "January";
        rateInputMonth.innerHTML = "January";
    } else if (currentMonthIndex === 1) {
        currentMonthSpan.innerHTML = "February";
        rateInputMonth.innerHTML = "February";
    } else if (currentMonthIndex === 2) {
        currentMonthSpan.innerHTML = "March";
        rateInputMonth.innerHTML = "March";
    } else if (currentMonthIndex === 3) {
        currentMonthSpan.innerHTML = "April";
        rateInputMonth.innerHTML = "April";
    } else if (currentMonthIndex === 4) {
        currentMonthSpan.innerHTML = "May";
        rateInputMonth.innerHTML = "May";
    } else if (currentMonthIndex === 5) {
        currentMonthSpan.innerHTML = "June";
        rateInputMonth.innerHTML = "June";
    } else if (currentMonthIndex === 6) {
        currentMonthSpan.innerHTML = "July";
        rateInputMonth.innerHTML = "July";
    } else if (currentMonthIndex === 7) {
        currentMonthSpan.innerHTML = "August";
        rateInputMonth.innerHTML = "August";
    } else if (currentMonthIndex === 8) {
        currentMonthSpan.innerHTML = "September";
        rateInputMonth.innerHTML = "September";
    } else if (currentMonthIndex === 9) {
        currentMonthSpan.innerHTML = "October";
        rateInputMonth.innerHTML = "October";
    } else if (currentMonthIndex === 10) {
        currentMonthSpan.innerHTML = "November";
        rateInputMonth.innerHTML = "November";
    } else if (currentMonthIndex === 11) {
        currentMonthSpan.innerHTML = "December";
        rateInputMonth.innerHTML = "December";
    }

}

function changeMonth() {
    let week = weekNoList[currentMonthIndex];
    prevBtn.addEventListener("click", function () {
        currentMonthIndex--;
        if (currentMonthIndex < 0) {
            currentMonthIndex = weekNoList.length - 1;
        }
        localStorage.setItem("currentMonthIndex", currentMonthIndex.toString());
        loadCell();
        paycheck();
        updateMonthSpan();
        displayWeeks(week);
        displayRates();
        createSpec();
        showSpec();
    })

    nextBtn.addEventListener("click", function () {
        currentMonthIndex++;
        if (currentMonthIndex >= weekNoList.length) {
            currentMonthIndex = 0;
        }
        localStorage.setItem("currentMonthIndex", currentMonthIndex.toString());
        loadCell();
        paycheck();
        updateMonthSpan();
        displayWeeks(week);
        displayRates();
        createSpec();
        showSpec();

    })
    paycheck();
    displayWeeks(week);
}

presetTimes();
createCell();
paycheck();
loadCell();
changeMonth();
updateMonthSpan();
showSpec();
createSpec();



function presetTimes() {
    let shiftSelectToChange = shiftStart;
    for (let i = 0; i < presets.length; i++) {
        presets[i].addEventListener("click", function () {
            let clickedValue = presets[i].innerHTML;
            shiftSelectToChange.value = clickedValue;
            if (shiftSelectToChange === shiftStart) {
                shiftSelectToChange = shiftEnd;
            } else {
                shiftSelectToChange = shiftStart;
            }
        });
    }
}

function createCell() {
    for (let i = 0; i < tds.length; i++) {
        monthList = JSON.parse(localStorage.getItem("monthList")) || [];
        let td = tds[i];
        td.addEventListener("click", function () {
            let id = td.id;
            let match = id.match(/\d+/);
            let date = match[0];
            number = date;
            if (this.classList == "off") {
                this.classList = "on";
                addShift();
                paycheck();
                createSpec();
                loadCell();
                showSpec();
                displayWeeks(weekNoList[currentMonthIndex]);
                for (let j = 0; j < monthList[currentMonthIndex].length; j++) {
                    if (monthList[currentMonthIndex][j][0][0] === date) {
                        this.innerHTML = monthList[currentMonthIndex][j][0][2] + " " + monthList[currentMonthIndex][j][0][3];
                    }
                }
                localStorage.setItem("monthList", JSON.stringify(monthList));
            }
        })
    }
}

function loadCell() {
    for (let i = 0; i < tds.length; i++) {
        let td = tds[i];
        monthList = JSON.parse(localStorage.getItem("monthList")) || [];
        if (monthList.length < weekNoList.length) {
            for (let i = 0; i < weekNoList.length; i++) {
                monthList.push([]);
            }
        }
        let updated = false;
        for (let j = 0; j < monthList[currentMonthIndex].length; j++) {
            if (monthList[currentMonthIndex][j][0][0] === td.id.match(/\d+/)[0]) {
                td.classList = "on";
                td.innerHTML = monthList[currentMonthIndex][j][0][2] + " " + monthList[currentMonthIndex][j][0][3];
                updated = true;
                break;
            }
        }
        if (!updated) {
            td.classList = "off";
            td.innerHTML = "";
        }
    }
}

function addShift() {

    ratesList = JSON.parse(localStorage.getItem("ratesList"));

    let shiftStartTime = shiftStartSelect.value;
    let shiftEndTime = shiftEndSelect.value;
    let shiftStart = new Date(`2000-01-01T${shiftStartTime}:00`);
    let shiftEnd = new Date(`2000-01-01T${shiftEndTime}:00`);
    let timeDifference = shiftEnd.getTime() - shiftStart.getTime();
    let extraPay = 0;
    let lunch = 0;
    let time = timeDifference / 1000 / 60 / 60;

    if (shiftStartTime < shiftEndTime) {

        // lunch //
        if (time < 4.5) {
            lunch = 0;
        }
        if (time > 4.5 && time <= 7) {
            lunch = 0.5;
        }
        if (time > 7 && time <= 9) {
            lunch = 0.75;
        }
        if (time > 9 && time <= 10.5) {
            lunch = 1;
        }
        if (time > 10.5 && time <= 12) {
            lunch = 1.25;
        }
        if (time > 12 && time <= 15) {
            lunch = 1.5;
        }


        // evening 18:00 //
        let eveningHours = 0;
        let weekday = "";
        if (number % 7 == 6) {
            weekday = "Sunday";
        }
        if (number % 7 == 5) {
            weekday = "Saturday";
        }
        if (number % 7 == 4) {
            weekday = "Friday"
        }
        if (number % 7 == 3) {
            weekday = "Thursday"
        }
        if (number % 7 == 2) {
            weekday = "Wednesday"
        }
        if (number % 7 == 1) {
            weekday = "Tuesday"
        }
        if (number % 7 == 0) {
            weekday = "Monday"
        }

        if (weekday != "Saturday" && weekday != "Sunday") {
            if (shiftStart.getHours() <= 18 && shiftEnd.getHours() >= 18) {
                let eveningStart = new Date(`2000-01-01T18:00:00`);
                let eveningDifference = shiftEnd.getTime() - eveningStart.getTime();
                eveningHours = eveningDifference / 1000 / 60 / 60 - lunch;
                extraPay = eveningHours * ratesList[currentMonthIndex][1];
            };
            if (shiftStart.getHours() <= 18 && shiftEnd.getHours() < 18) {
                eveningHours = 0;
            };
            if (shiftStart.getHours() >= 18 && shiftEnd.getHours() >= 18) {
                let eveningDifference = shiftEnd.getTime() - shiftStart.getTime();
                eveningHours = eveningDifference / 1000 / 60 / 60;
                extraPay = eveningHours * ratesList[currentMonthIndex][1];
            }
        }

        // saturday 15:00 //
        let saturdayHours = 0;
        if (weekday === "Saturday") {
            if (shiftStart.getHours() <= 15 && shiftEnd.getHours() >= 15) {
                let saturdayStart = new Date(`2000-01-01T15:00:00`);
                let saturdayDifference = shiftEnd.getTime() - saturdayStart.getTime();
                saturdayHours = saturdayDifference / 1000 / 60 / 60;
                extraPay = saturdayHours * ratesList[currentMonthIndex][2];
            };
            if (shiftStart.getHours() < shiftEnd.getHours() && shiftEnd.getHours() < 15) {
                saturdayHours = 0;
            };
            if (shiftStart.getHours() >= 15 && shiftEnd.getHours() >= 15) {
                let saturdayDifference = shiftEnd.getTime() - shiftStart.getTime();
                saturdayHours = saturdayDifference / 1000 / 60 / 60 - lunch;
                extraPay = saturdayHours * ratesList[currentMonthIndex][2];
            }
        }

        let paidTime = time - lunch;




        // sunday //
        let sundayHours = 0;
        if (weekday === "Sunday") {
            sundayHours = paidTime;
            extraPay = sundayHours * ratesList[currentMonthIndex][3];

        }

        let pay = paidTime * ratesList[currentMonthIndex][0];
        let totalPay = pay + extraPay;

        let shift = [];
        let month = [];
        shift.push(number); // 0
        shift.push(weekday); // 1
        shift.push(shiftStartSelect.value); // 2
        shift.push(shiftEndSelect.value); // 3
        shift.push(time); // 4
        shift.push(eveningHours); // 5
        shift.push(saturdayHours); // 6
        shift.push(sundayHours); // 7
        shift.push(lunch); // 8
        shift.push(Math.round(pay)); // 9
        shift.push(Math.round(extraPay)); // 10
        shift.push(paidTime); // 11
        shift.push(Math.round(totalPay)); // 12
        month.push(shift)

        if (monthList.length <= currentMonthIndex) {
            monthList[currentMonthIndex] = [];
        }

        monthList[currentMonthIndex].push(month);
        localStorage.setItem("monthList", JSON.stringify(monthList));
    }
}

function createSpec() {
    weekNoList = JSON.parse(localStorage.getItem("weekNoList")) || [];
    monthList = JSON.parse(localStorage.getItem("monthList")) || [];

    weekInput.value = weekNoList[currentMonthIndex][0];
    weekInput2.innerHTML = weekNoList[currentMonthIndex][1];
    weekInput3.innerHTML = weekNoList[currentMonthIndex][2];
    weekInput4.innerHTML = weekNoList[currentMonthIndex][3];
    weekInput5.innerHTML = weekNoList[currentMonthIndex][4];
    weekInput6.innerHTML = weekNoList[currentMonthIndex][5];

    let shiftDiv = document.getElementById("shifts" + currentMonthIndex);
    shiftDiv.innerHTML = "";
    for (let i = 0; i < monthList[currentMonthIndex].length; i++) {
        let shift = document.createElement("div");

        let deleteShift = document.createElement("Button");
        let editShift = document.createElement("Button");

        let table1 = document.createElement("table");
        let row1 = document.createElement("tr");
        let tdDay = document.createElement("td");

        let table2 = document.createElement("table");
        let row2 = document.createElement("tr");

        let table3 = document.createElement("table");
        let row3 = document.createElement("tr");
        let row4 = document.createElement("tr");
        let row5 = document.createElement("tr");

        let table4 = document.createElement("table");
        let row6 = document.createElement("tr");

        let tdStart = document.createElement("td");
        let tdEnd = document.createElement("td");

        let tdHoursText = document.createElement("td");
        let tdHours = document.createElement("td");
        let tdEveningText = document.createElement("td");
        let tdEvening = document.createElement("td");

        let tdLunchText = document.createElement("td");
        let tdLunch = document.createElement("td");
        let tdSaturdayText = document.createElement("td");
        let tdSaturday = document.createElement("td");

        let tdPaidHoursText = document.createElement("td");
        let tdPaidHours = document.createElement("td");
        let tdSundayText = document.createElement("td");
        let tdSunday = document.createElement("td");

        let tdExtraPayText = document.createElement("td");
        let tdExtraPay = document.createElement("td");
        let tdPayText = document.createElement("td");
        let tdPay = document.createElement("td");

        let row7 = document.createElement("tr");
        let tdTotalPay = document.createElement("td");

        tdDay.innerHTML = monthList[currentMonthIndex][i][0][1]

        tdStart.innerHTML = monthList[currentMonthIndex][i][0][2];
        tdEnd.innerHTML = monthList[currentMonthIndex][i][0][3];

        tdHours.innerHTML = monthList[currentMonthIndex][i][0][4];
        tdEvening.innerHTML = monthList[currentMonthIndex][i][0][5];

        tdSaturday.innerHTML = monthList[currentMonthIndex][i][0][6];
        tdSunday.innerHTML = monthList[currentMonthIndex][i][0][7];

        tdLunch.innerHTML = monthList[currentMonthIndex][i][0][8];
        tdPay.innerHTML = monthList[currentMonthIndex][i][0][9];

        tdExtraPay.innerHTML = monthList[currentMonthIndex][i][0][10];
        tdPaidHours.innerHTML = monthList[currentMonthIndex][i][0][11];

        tdTotalPay.innerHTML = monthList[currentMonthIndex][i][0][12];

        tdHoursText.innerHTML = "Hours";
        tdEveningText.innerHTML = "EveningHours";
        tdLunchText.innerHTML = "Lunch";
        tdSaturdayText.innerHTML = "SaturdayHours";
        tdPaidHoursText.innerHTML = "ActualHours";
        tdSundayText.innerHTML = "SundayHours";
        tdExtraPayText.innerHTML = "ExtraAmount";
        tdPayText.innerHTML = "BaseAmount";


        tdEveningText.style.textAlign = "right";
        tdEvening.style.textAlign = "right";
        tdSaturdayText.style.textAlign = "right";
        tdSaturday.style.textAlign = "right";
        tdSundayText.style.textAlign = "right";
        tdSunday.style.textAlign = "right";
        tdExtraPayText.style.textAlign = "right";
        tdExtraPay.style.textAlign = "right";




        shift.setAttribute("id", "shift");
        deleteShift.setAttribute("id", "deleteShift");
        editShift.setAttribute("id", "editShift");


        table1.setAttribute("id", "table1");
        row1.setAttribute("id", "row1");
        tdDay.setAttribute("id", "tdDay");

        table2.setAttribute("id", "table2");
        row2.setAttribute("id", "row2");

        table3.setAttribute("id", "table3");

        table4.setAttribute("id", "table4");
        row5.setAttribute("id", "row5");

        row6.setAttribute("id", "row6");


        shift.append(deleteShift);
        shift.append(editShift)

        shift.append(table1);
        shift.append(table2);
        shift.append(table3);
        shift.append(table4);


        table1.append(row1)
        row1.append(tdDay);

        table2.append(row2);
        row2.append(tdStart);
        row2.append(tdEnd);


        table3.append(row3);
        row3.append(tdHoursText);
        row3.append(tdHours);
        row3.append(tdEvening);
        row3.append(tdEveningText);


        table3.append(row4);
        row4.append(tdLunchText);
        row4.append(tdLunch);
        row4.append(tdSaturday);
        row4.append(tdSaturdayText);


        table3.append(row5);
        row5.append(tdPaidHoursText);
        row5.append(tdPaidHours);
        row5.append(tdSunday);
        row5.append(tdSundayText);


        table3.append(row6);
        row6.append(tdPayText);
        row6.append(tdPay);
        row6.append(tdExtraPay);
        row6.append(tdExtraPayText);



        table4.append(row7)
        row7.append(tdTotalPay);

        shiftDiv.append(shift);

    }
    paycheck();
    showSpec();

}


/* for (let k = 0; k < monthList[currentMonthIndex].length; k++) {
    if (monthList[currentMonthIndex][k][0][0] === number) {
        monthList[currentMonthIndex].splice(k, 1);
        localStorage.setItem("monthList", JSON.stringify(monthList));
    }
} */

function showSpec() {
    let shift = null;
    let shiftId = 0;

    let shiftDiv = document.getElementById("shifts" + currentMonthIndex);

    document.querySelectorAll("#calendar td.on").forEach(td => {
        let noOfon = document.querySelectorAll("#calendar td.on");
        let time = td.innerHTML;
        let bt1 = document.createElement("button");
        let bt2 = document.createElement("button");
        bt1.style.backgroundColor = "var(--red)";
        bt2.style.backgroundColor = "var(--darkyellow)";
        let actionButtons = document.createElement("div");
        actionButtons.setAttribute("id", "actionButtons");
        bt1.innerHTML = "Delete";
        bt2.innerHTML = "Edit";
        actionButtons.appendChild(bt1);
        actionButtons.appendChild(bt2);

        td.addEventListener("mouseover", e => {
            if (td.className === "on") {
                td.innerHTML = "";
                td.appendChild(actionButtons);
                actionButtons.classList.add("visible");
                if (e.target.tag !== "td") {
                    let id = e.target.id;
                    let match = id.match(/\d+/);
                    let number = match[0];
                    shiftId = 0;
                    for (let i = 0; i < noOfon.length; i++) {
                        if (number === monthList[currentMonthIndex][i][0][0]) {
                            shiftId = [i];
                        }
                    }
                }
                shift = shiftDiv.children[shiftId];
                shiftDiv.style.position = "absolute";

                actionButtons.addEventListener("mouseover", function () {

                    if (shift) {
                        shift.style.display = "block";
                        // get the position of the td element relative to the viewport
                        let rect = e.target.getBoundingClientRect();
                        let top = rect.top + rect.height; // set top position below the td
                        let left = rect.left; // set left position same as td
                        let width = rect.width * 2;
                        let offset = 0.5 * width;;

                        shiftDiv.style.top = 10 + top + "px";
                        shiftDiv.style.left = left - offset + "px";
                        shift.style.width = offset + width + "px";
                    }
                })
            }
        });


        actionButtons.addEventListener("mouseout", e => {
            shift.style.display = "none";
            td.innerHTML = time;
        })



    });

    /* let bt1 = document.getElementById("removeShiftBtn")
    bt1.addEventListener("click", function () {
        let id = td.id;
        let match = id.match(/\d+/);
        let date = match[0];
        number = date;
        td.classList.remove("on");
        td.classList.add("off");


    }) */
}

function paycheck() {
    let baseRateRate = ratesList[currentMonthIndex][0];
    let eveningRateRate = ratesList[currentMonthIndex][1];
    let saturdayRateRate = ratesList[currentMonthIndex][2];
    let sundayRateRate = ratesList[currentMonthIndex][3];
    let DSPension = ratesList[currentMonthIndex][4];
    let lbcRate = ratesList[currentMonthIndex][5];
    let taxRate = ratesList[currentMonthIndex][6];
    let addPerkRate = ratesList[currentMonthIndex][7];
    let pfaRate = ratesList[currentMonthIndex][8];



    //  Time  //
    let totalTime = document.getElementById("totalTime");
    let time = 0;
    for (let i = 0; i < monthList[currentMonthIndex].length; i++) {
        time = time + monthList[currentMonthIndex][i][0][11];
    }
    totalTime.innerHTML = time;

    //  Evening  //
    let totalEvening = document.getElementById("totalEvening");
    let evening = 0;
    for (let i = 0; i < monthList[currentMonthIndex].length; i++) {
        evening = evening + monthList[currentMonthIndex][i][0][5];
    }
    totalEvening.innerHTML = evening;


    //  Saturday  //
    let totalSaturdayh3 = document.getElementById("totalSaturday");
    let saturday = 0;
    for (let i = 0; i < monthList[currentMonthIndex].length; i++) {
        saturday = saturday + monthList[currentMonthIndex][i][0][6];
    }
    totalSaturdayh3.innerHTML = saturday;


    //  Sunday  //
    let totalSundayh3 = document.getElementById("totalSunday");
    let sunday = 0;
    for (let i = 0; i < monthList[currentMonthIndex].length; i++) {
        sunday = sunday + monthList[currentMonthIndex][i][0][7];
    }
    totalSundayh3.innerHTML = sunday;


    let ATPamount = 0;
    if (time > 39) {
        ATPamount = -31.55;
    } else {
        ATPamount = 0.00;
    }
    let pForAarhus = 0.00;
    if (time > 0) {
        pForAarhus = -20;
    }


    let baseRate = document.getElementById("baseRate");
    let eveningRate = document.getElementById("eveningRate");
    let saturdayRate = document.getElementById("saturdayRate");
    let sundayRate = document.getElementById("sundayRate");

    let baseAmount = document.getElementById("baseAmount");
    let eveningAmount = document.getElementById("eveningAmount");
    let saturdayAmount = document.getElementById("saturdayAmount");
    let sundayAmount = document.getElementById("sundayAmount");

    let ground5 = document.getElementById("ground5");
    let amount5 = document.getElementById("amount5");
    let rate5 = document.getElementById("rate5");

    let amount6 = document.getElementById("amount6");

    let ground7 = document.getElementById("ground7");
    let rate7 = document.getElementById("rate7");
    let amount7 = document.getElementById("amount7");

    let ground8 = document.getElementById("ground8");
    let rate8 = document.getElementById("rate8");
    let amount8 = document.getElementById("amount8");

    let amount9 = document.getElementById("amount9");

    let amount10 = document.getElementById("amount10");

    let ground11 = document.getElementById("ground11");
    let rate11 = document.getElementById("rate11");
    let amount11 = document.getElementById("amount11");

    let amount12 = document.getElementById("amount12");

    let ground13 = document.getElementById("ground13");
    let rate13 = document.getElementById("rate13");
    let amount13 = document.getElementById("amount13");



    baseRate.innerHTML = baseRateRate;
    eveningRate.innerHTML = eveningRateRate;
    saturdayRate.innerHTML = saturdayRateRate;
    sundayRate.innerHTML = sundayRateRate;

    baseAmount.innerHTML = (time * baseRateRate).toFixed(2);
    eveningAmount.innerHTML = (evening * eveningRate.innerHTML).toFixed(2);
    saturdayAmount.innerHTML = (saturday * saturdayRate.innerHTML).toFixed(2);
    sundayAmount.innerHTML = (sunday * sundayRate.innerHTML).toFixed(2);

    ground5.innerHTML = 0;
    if (time != 0) {
        ground5.innerHTML = (+baseAmount.innerHTML + +eveningAmount.innerHTML + +saturdayAmount.innerHTML +
            +sundayAmount.innerHTML + +amount11.innerHTML + +amount12.innerHTML).toFixed(2);
    }

    rate5.innerHTML = DSPension;
    amount5.innerHTML = (ground5.innerHTML * rate5.innerHTML).toFixed(2);

    amount6.innerHTML = ATPamount;

    ground7.innerHTML = (+baseAmount.innerHTML + +eveningAmount.innerHTML + +saturdayAmount.innerHTML + +sundayAmount.innerHTML + +amount5.innerHTML + +amount6.innerHTML).toFixed(2);
    rate7.innerHTML = lbcRate;
    amount7.innerHTML = (+rate7.innerHTML * +ground7.innerHTML).toFixed(2);

    ground8.innerHTML = (+ground7.innerHTML + +amount7.innerHTML).toFixed(2);
    rate8.innerHTML = taxRate;
    amount8.innerHTML = (+ground8.innerHTML * +rate8.innerHTML).toFixed(2);

    amount10.innerHTML = pForAarhus;

    ground11.innerHTML = (+baseAmount.innerHTML + +eveningAmount.innerHTML + +saturdayAmount.innerHTML + +sundayAmount.innerHTML).toFixed(2);
    rate11.innerHTML = addPerkRate;
    amount11.innerHTML = (+ground11.innerHTML * +rate11.innerHTML).toFixed(2);

    amount12.innerHTML = (ground11.innerHTML * 0.125).toFixed(2);

    ground13.innerHTML = (+ground11.innerHTML + +amount12.innerHTML + +amount11.innerHTML).toFixed(2);
    rate13.innerHTML = pfaRate;
    amount13.innerHTML = (+ground13.innerHTML * +rate13.innerHTML).toFixed(2);

    amount9.style.backgroundColor = "var(--gray)";

    let amount14 = document.getElementById("paycheck");

    let payNoPerk = (+baseAmount.innerHTML + +eveningAmount.innerHTML + +saturdayAmount.innerHTML +
        +sundayAmount.innerHTML + +amount5.innerHTML + +amount6.innerHTML + +amount7.innerHTML +
        +amount8.innerHTML + +amount10.innerHTML).toFixed(2);

    amount14.innerHTML = payNoPerk;

    let perkList = JSON.parse(localStorage.getItem("perkList")) || Array(12).fill("0");
    let payList = JSON.parse(localStorage.getItem("payList")) || Array(12).fill("0");
    localStorage.setItem("perkList", JSON.stringify(perkList));
    localStorage.setItem("payList", JSON.stringify(payList));

    amount9.value = perkList[currentMonthIndex];

    if (amount9.value != 0) {
        amount9.style.backgroundColor = "var(--lightgray)";
    } else {
        amount9.style.backgroundColor = "var(--gray)";
    }

    amount9.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            perkList.splice(currentMonthIndex, 1, amount9.value)
            payList.splice(currentMonthIndex, 1, amount14.innerHTML)
            amount14.innerHTML = +payNoPerk + +amount9.value;
            localStorage.setItem("perkList", JSON.stringify(perkList));
            localStorage.setItem("payList", JSON.stringify(payList));
        }
        if (amount9.value != 0) {
            amount9.style.backgroundColor = "var(--lightgray)";
        } else {
            amount9.style.backgroundColor = "var(--gray)";
        }

    });

    amount14.innerHTML = +payNoPerk + +amount9.value;

}