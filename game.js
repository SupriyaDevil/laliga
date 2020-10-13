var score = [0, 1]; //All the possible runs in the game
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
	
	var result = document.getElementById("result");
    result.style.visibility ="";
    // check if game is over
    if(team1.runs.length == 5 && team2.runs.length == 5){
        button.remove();
        // check if the match is draw Don't forget to use backticks ` ` and $ while calculating
        result.textContent = team1.score === team2.score ? `Its a draw`: `${team1.score > team2.score? team1.name:team2.name} Wins`;
    }
    else{
        // check if the strike is over
        toss = team1.runs.length ===5 ? 2 : team2.runs.length === 5 ? 1 : toss;
    }


    button.textContent = `${toss === 1 ? team1.name:team2.name} Shooting`;
};
   
var updateNames = () =>{
    // Update Team - 1 name
    document.getElementById("team-1-name").textContent = team1.name;
    // Update Team - 2 name
    document.getElementById("team-2-name").textContent = team2.name;
}

var updateScore = () => {
	
	document.getElementById("team-1-score").textContent = team1.score;
	document.getElementById("team-2-score").textContent = team2.score;
	updateRuns();
};
var handleStrikeButtonClick = () =>{
	var runs = score[Math.floor(Math.random()*score.length)];
	console.log(runs);
   
	//runs = runs === 5?"W": runs; // if run is 5 we mark it as a wicket
	//console.log(runs);
   
	// check which team is on strike
	if (toss ===1)
	  {
	   team1.runs.push(runs);
	  team1.score= calculateScore(team1.runs); // Update the team score
	   
	  } 
	  else{
	   team2.runs.push(runs);
	   team2.score = calculateScore(team2.runs); // Update the team score
	   
	  }
   
	  updateButtonText();
	  updateScore();
   }
   var calculateScore = (runs) =>{
	console.log("Calculate score method");
	
	return runs.map(num =>{
		
	return /*num =='W'? 0: */num;
	
	}).reduce((total,num) => total + num
	
	);
	
	};
	var updateRuns = () =>{
		var teamOneRunsElement = document.getElementById("team-1-round-runs").children;
		var teamTwoRunsElement = document.getElementById("team-2-round-runs").children;
		// update runs on score board
		team1.runs.forEach((run,index)=>{
			teamOneRunsElement[index].textContent = run === 0 ? `🔴` :`🟢`;
			});
		team2.runs.forEach((run,index)=>{
			teamTwoRunsElement[index].textContent = run === 0 ? `🔴` :`🟢`;
		});
	};
	