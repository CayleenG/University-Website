const headingEng = document.getElementById("heng");
const headingSci = document.getElementById("hsci");
const headingInt = document.getElementById("hint");
const formSci = document.getElementById("colsci");
var elementsSci = colsci.getElementsByClassName("formsci")
const formEng = document.getElementById("coleng");
const formInt = document.getElementById("colinter");

window.onload = function(){
    headingSci.style.backgroundColor = "lightgrey";
    headingEng.style.backgroundColor = "white";
    headingInt.style.backgroundColor = "lightgrey";
    formSci.style.display = "none";
    formEng.style.display = "block";
    formInt.style.display = "none";
}

headingSci.onclick = function(){
    headingSci.style.backgroundColor = "white";
    headingEng.style.backgroundColor = "lightgrey";
    headingInt.style.backgroundColor = "lightgrey";
    formSci.style.display = "block";
    formEng.style.display = "none";
    formInt.style.display = "none";
}

headingEng.onclick = function(){
    headingSci.style.backgroundColor = "lightgrey";
    headingEng.style.backgroundColor = "white";
    headingInt.style.backgroundColor = "lightgrey";
    formSci.style.display = "none";
    formEng.style.display = "block";
    formInt.style.display = "none";
}

headingInt.onclick = function(){
    headingSci.style.backgroundColor = "lightgrey";
    headingEng.style.backgroundColor = "lightgrey";
    headingInt.style.backgroundColor = "white";
    formSci.style.display = "none";
    formEng.style.display = "none";
    formInt.style.display = "block";
}


const collegeChoice = ["College of Engineering", "College of Science", "College of Interdisciplinary Studies"];

var totalmajor = 0


var majorsSelected = new Set()
var ranksSelected = new Set()
function numbercheck(i, event) {
    event.preventDefault()
    
    const rankButton = document.querySelectorAll("button");
    const input = document.getElementById(rankButton[i].id + "input");
    var value = input.value;

    const major = document.getElementById(rankButton[i].id + "img").alt;
    const college = getCollege(i);

    if (!Number.isInteger(parseInt(value))) {
        alert("Please enter the rank of the chosen major");
        return;
    }

    var rank = parseInt(value);

    if (rank < 1 || rank > 10) {
        alert("Please enter the rank of the chosen major between 1 and 10");
        return;
    }

    for (let j = 1; j <= 10; j++){
        if(majorsSelected.has(major)){
            
            
        
            alert("You have already chosen this major");
            return;
        }
        if(ranksSelected.has(rank)){
            
            
            alert("You have already chosen this rank");
            return;
        }
    }

    setTimeout(() => {
        majorsSelected.add(major)
        ranksSelected.add(rank)
        alert(`You have chosen ${major} as your ${ranktext(rank)} chosen major in ${college} successfully`);
        }, 10);


const rankTd = document.querySelectorAll(".tdrank")
rankTd[value-1].classList.add("tdranked")
totalmajor += 1

handleRankButton(i, value);
updateTable()

}

function ranktext(value) {
    if (value === 1) {
    return "1st";
    } else if (value === 2) {
    return "2nd";
    } else if (value === 3) {
    return "3rd";
    } else {
    return value + "th";
    }
}

function updateTable(){
    
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const totalnumber = document.getElementById("end");
    totalnumber.innerText = `Total number of completed choices: ${totalmajor}`;

    const timehead = document.getElementById("time");
    var timenow = `${year}/${month}/${day} ${hour}:${minute}:${second}`;
    timehead.innerText = `Last change time: ${timenow}`
}

function getCollege(i) {
    console.log(i);
    if (i <= 4) {
        return collegeChoice[0];
    } else if (i <= 7) {
        return collegeChoice[1];
    } else {
        return collegeChoice[2];
    }
}

const rankButton = document.querySelectorAll("button");

for (let i = 0; i < rankButton.length; i++) {

    rankButton[i].addEventListener("click", (event) => numbercheck(i, event));
}



function handleRankButton(i) {
    const majorTd = document.querySelectorAll(".tdmajor");
    const collegeTd = document.querySelectorAll(".tdcollege");

    const major = document.getElementById(rankButton[i].id + "img").alt;
    
    const college = getCollege(i);

    const input = document.getElementById(rankButton[i].id + "input");

    var value = input.value;

    majorTd[value - 1].textContent = major;
    collegeTd[value - 1].textContent = college;

}

const submitElement = document.getElementById("submita")
submitElement.onclick = function(e){
    e.preventDefault()

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    var timenow = `${year}/${month}/${day} ${hour}:${minute}:${second}`;

    var rankcheck = []

    const majorTd = document.querySelectorAll(".tdmajor");
    const collegeTd = document.querySelectorAll(".tdcollege");
    var ismajorTdEmpty = true;
    var iscollegeTdEmpty = true;
    var gap = []
    for (let x = 0; x < majorTd.length; x++){
    if (majorTd[x].textContent !== "" && collegeTd[x].textContent !== "")
        {
        ismajorTdEmpty = false;
        iscollegeTdEmpty = false
        rankcheck.push(x+1);
    }
    
}
const maxRank = Math.max(...rankcheck)

    for (let g = 1; g<=maxRank; g++){
        if(!rankcheck.includes(g)){
        gap.push(ranktext(g) + " chosen major");
        }
    }

    const submitAlert = document.getElementById("alertsubmit");
    if (ismajorTdEmpty && iscollegeTdEmpty) {
        submitAlert.textContent = "You have not chosen any major";
        submitAlert.style.display = "block";
    } else if (gap.length > 0) {
        const gapMajors = gap.join(", and ");
        submitAlert.textContent = `You have not chosen your ${gapMajors}, you cannot leave any gap between your chosen majors`;
        submitAlert.style.display = "block";
    } else {
        submitAlert.textContent = `You have successfully submitted your application at ${timenow}`;
        submitAlert.style.display = "block";
    }
};



function cleartable(){
    event.preventDefault()

    
    const submitAlert = document.getElementById("alertsubmit");

    submitAlert.style.display="none";
    totalmajor = 0
    const totalnumber = document.getElementById("end");
    totalnumber.innerText = `Total number of completed choices: ${totalmajor}`;


    
    const majorTd = document.querySelectorAll(".tdmajor");
    const collegeTd = document.querySelectorAll(".tdcollege");
    for (let k = 0; k < majorTd.length; k++){
        majorTd[k].textContent ="";
        collegeTd[k].textContent="";    
    }

    majorsSelected.clear()
    ranksSelected.clear()

    

}





