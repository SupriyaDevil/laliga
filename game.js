var score = [0, 1, 2, 4, 6, 8]; //All the possible runs in the game
var team1 = {
	//Team 1 Details
	name: "MC",
	runs: [],
	score: 0
};
var team2 = {
	//Team 2 Details
	name: "AR",
	runs: [],
	score: 0
};

var toss;
window.onload=()=>{
	selectToss(); // Decide strike of team
	updateButtonText(); // Update the text of button according to strike
    updateScore();
    updateNames();
	
};
var selectToss = () => {
    toss = Math.round(Math.random()) + 1;
    console.log(toss);
};
var updateButtonText = () =>{
    var button = document.getElementById("strike-button");
    console.log(button);
    button.textContent = `${toss === 1 ? team1.name:team2.name} Batting`;
}
var updateNames = () =>{
    // Update Team - 1 name
    document.getElementById("team-1-name").textContent = team1.name;
    // Update Team - 2 name
    document.getElementById("team-2-name").textContent = team2.name;
}

var updateScore = () => {
	
	document.getElementById("team-1-score").textContent = team1.score;
	document.getElementById("team-2-score").textContent = team2.score;
};