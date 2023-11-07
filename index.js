"use strict"

window.onload = init;

function init(){
    initTeamDropdown();

    let selectBtn = document.getElementById("selectBtn");
    selectBtn.onsubmit = displayTeamInfo;
}

function initTeamDropdown() {
    let teams = [
        {code:"DAL", name:"Dallas Cowboys", plays:"Arlington, TX"},
        {code:"DEN", name:"Denver Broncos", plays:"Denver, CO"},
        {code:"HOU", name:"Houston Texans", plays:"Houston, TX"},
        {code:"KAN", name:"Kansas City Chiefs",
        plays:"Kansas City, MO"},
    ];

    const teamList = document.getElementById("footballTeams");

    let numTeams = teams.length;
    for (let index = 0; index < numTeams; index++) {
        let theOption = new Option(teams[index].name, teams[index].code);
        teamList.appendChild(theOption);
    }
}
