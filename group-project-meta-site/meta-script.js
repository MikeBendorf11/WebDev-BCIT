//Creators (in alphabetical order): Daniel Joo, Ivan Chen, Mijael Bendorf

window.onload = function() {

    //MEET THE TEAM

    function revealTeam() {
        var teamElem = document.getElementById("team-section");
        teamElem.style.zIndex = "10";
        teamElem.style.opacity = "1";
        teamElem.style.transition = "opacity 0.7s";
    }

    document.getElementById("toggle-reveal-team").addEventListener("click", revealTeam);

    //SITE MAP

    function revealMap() {
        var teamElem = document.getElementById("map-section");
        teamElem.style.zIndex = "10";
        teamElem.style.opacity = "1";
        teamElem.style.transition = "opacity 0.7s";
    }

    document.getElementById("toggle-reveal-map").addEventListener("click", revealMap);

    //LINK BACKGROUND

    var buttonElem = document.getElementById("prototype-button");
    var buttonBackground = document.getElementById("prototype-link");

    buttonElem.addEventListener("mouseover", function() {
        buttonBackground.style.backgroundColor = "black";
        buttonElem.style.color = "red";
        buttonBackground.style.transition = "background-color 4.5s";
        buttonElem.style.transition = "color 4.5s";
    });

    buttonElem.addEventListener("mouseout", function() {
        buttonBackground.style.backgroundColor = "white";
        buttonElem.style.color = "#459CFF";
        buttonBackground.style.transition = "background-color 0.5s";
        buttonElem.style.transition = "color 0.5s";
    });

};