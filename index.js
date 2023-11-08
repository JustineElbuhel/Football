"use strict"

window.onload = init;

function init(){
    initTeamDropdown();
    
    const teamList = document.getElementById("footballTeams");
    teamList.onchange = onTeamSelectionChanged;

    let select = document.getElementById("selectForm");
    select.onsubmit = displayTeamInfo;
}
let teams = [
    {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
    {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
    {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
    {code:"KAN", name:"Kansas City Chiefs",
    plays:"Kansas City, MO"},
];

//TODO Create the dropdown using the object array
function initTeamDropdown() {

    const teamList = document.getElementById("footballTeams");

    let preSelection = new Option("Select a team", null);
    teamList.appendChild(preSelection);

    let numTeams = teams.length;
    for (let index = 0; index < numTeams; index++) {
        let theOption = new Option(teams[index].name, teams[index].code);
        teamList.appendChild(theOption);
    }
}

//TODO Display the selected team's info
function displayTeamInfo(event) {
    event.preventDefault();
    let teamList = document.getElementById("footballTeams");
    if(teamList.selectedIndex >= 0){
        let text = teamList.options[teamList.selectedIndex].text;
        let value = teamList.value;

        let location = "";
        for (let index = 0; index < teams.length; index++){
            if(teams[index].code === value){
                location = teams[index].plays;
            }
        }

        
        let displayInfo = `You selected the ${text} (${value}) who play in ${location}`
        document.getElementById("displayInfo").innerHTML = displayInfo;
    }
}

//TODO Remove text if another selection has been made
function onTeamSelectionChanged(){
    const teamList = document.getElementById("footballTeams");
    let selectedValue = teamList.value;

    if(selectedValue){
        document.getElementById("displayInfo").innerHTML = '';
    }
}
