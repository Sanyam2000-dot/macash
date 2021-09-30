var billamt = document.querySelector("#billamnt");
var cashamt = document.querySelector("#cashamnt");
var billbtn = document.querySelector("#billbtn");
var cashbtn = document.querySelector("#cashbtn");
var cashBox = document.querySelector("#cash-box");
var notesBox = document.querySelector("#notes-box");
var notesGiven = document.querySelector("#notesgiven");
var errormsg = document.querySelector("#error-msg");

cashBox.style.display = "none";
notesBox.style.display = "none";

billbtn.addEventListener("click", checkBillAmt);
cashbtn.addEventListener("click", calculateNotes);
const notes = [2000, 500, 100, 20, 10, 5, 1];
var nOfNotes;

function showMessage(message) {
    errormsg.style.display = "block";
    errormsg.innerHTML = message;
    console.log(errormsg.innerHTML);
}

function checkBillAmt() {
    console.log(billamt.value);
    if (billamt.value > 0) {
        cashBox.style.display = "block";
    } else {
        showMessage("Bill amount is not valid");
    }
}

function calculateNotes() {
    if (Number(cashamt.value) >= Number(billamt.value)) {
        let returnamt = cashamt.value - billamt.value;
        return calculateReturn(returnamt);
    } else {
        showMessage("Amount should be greater than bill amount");
    }
}

function calculateReturn(returnamt) {
    notesBox.style.display = "block";

    var amt = returnamt;
    for (var i = 0; i < notes.length; i++) {
        nOfNotes = Math.trunc(amt / notes[i]);
        if (nOfNotes > 0) {
            displayNotes(nOfNotes, notes[i]);
        }
        amt = amt % notes[i];
    }
}

function displayNotes(nOfNotes, currentNote) {
    notesGiven.innerHTML =
        notesGiven.innerHTML + nOfNotes + " notes of " + currentNote + "\n";
}