function gameObject() {
   const object = {
    home: {
        teamName: "Brooklyn Nets",
        colors: ["Black" , "White"],
        players:{
            "Alan Anderson": {
                "number": 0,
                "shoe": 16,
                "points": 22,
                "rebounds": 12,
                "assists": 12,
                "steals": 3,
                "blocks": 1,
                "slamDunks": 1,
            },
            "Reggie Evans": {
                "number": 30,
                "shoe": 14,
                "points": 12,
                "rebounds": 12,
                "assists": 12,
                "steals": 12,
                "blocks": 12,
                "slamDunks": 7,
            },
            "Brook Lopez": {
                "number": 11,
                "shoe": 17,
                "points": 17,
                "rebounds": 19,
                "assists": 10,
                "steals": 3,
                "blocks": 1,
                "slamDunks": 15,
            },
            "Mason Plumlee": {
                "number": 1,
                "shoe": 19,
                "points": 26,
                "rebounds": 12,
                "assists": 6,
                "steals": 3,
                "blocks": 8,
                "slamDunks": 6,
            },
            "Jason Terry": {
                "number": 31,
                "shoe": 15,
                "points": 19,
                "rebounds": 2,
                "assists": 2,
                "steals": 4,
                "blocks": 11,
                "slamDunks": 1,
            }, 
         },
    },
    away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise" , "Purple"],
        players:{
        "Jeff Adrien": {
            "number": 4,
            "shoe": 18,
            "points": 10,
            "rebounds": 1,
            "assists": 1,
            "steals": 2,
            "blocks": 7,
            "slamDunks": 2,
        },
        "Bismak Biyombo": {
            "number": 0,
            "shoe": 16,
            "points": 12,
            "rebounds": 4,
            "assists": 7,
            "steals": 7,
            "blocks": 15,
            "slamDunks": 10,
        },
        "DeSagna Diop": {
            "number": 2,
            "shoe": 14,
            "points": 24,
            "rebounds": 12,
            "assists": 12,
            "steals": 4,
            "blocks": 5,
            "slamDunks": 5,
        },
        "Ben Gordon": {
            "number": 8,
            "shoe": 15,
            "points": 33,
            "rebounds": 3,
            "assists": 2,
            "steals": 1,
            "blocks": 1,
            "slamDunks": 0,
        },
        "Brendan Haywood": {
            "number": 33,
            "shoe": 15,
            "points": 6,
            "rebounds": 12,
            "assists": 12,
            "steals": 22,
            "blocks": 5,
            "slamDunks": 12,
        }, 
     },
},

   };
    
    return object;
}
//console.log(gameObject());

//------Step 2: Functions

function homeTeamName (){
    const object = gameObject();
    return object.home.teamName;
}


function numPointsScored (playersName){
   //nested for loops iterate of keys successively to match playername and return points
   const gameStats = gameObject(); 
   for (let key in gameStats){ 
        for (let teamKey in gameStats[key]){
           if (teamKey === "players")
           {
            for (let playerKey in gameStats[key][teamKey])
            {
                if (playerKey === playersName){
                    return gameStats[key][teamKey][playerKey].points;
                }
            }
           
           }
        }
    }
    return "not a player"
}

function shoeSize (playersName){
    const gameStats = gameObject();
     
    //nested for loops iterate of keys successively to match playername and return points
     for (let key in gameStats){ 
         for (let teamKey in gameStats[key]){
            if (teamKey === "players")
            {
             for (let playerKey in gameStats[key][teamKey])
             {
                 if (playerKey === playersName){
                     return gameStats[key][teamKey][playerKey].shoe;
                 }
             }
            
            }
         }
     }
     return "not a player"
 }

 function teamColors (teamName){
    const gameStats = gameObject();
    for (let key in gameStats){
        for (let teamKey in gameStats[key]){
           //console.log(gameStats[key][teamKey]);
            if (gameStats[key][teamKey] === teamName){
                console.log(teamKey);
                return gameStats[key].colors;
            }
        }
    }
 }

 function teamNames (){
    const gameStats = gameObject();
    const aTeamNames = [];
    for (let key in gameStats){
        aTeamNames.push(gameStats[key].teamName)
    }
    return aTeamNames;
 }

 function playerNumbers (teamName){
    const gameStats = gameObject();
    const allNumbers = [];
    for (let key in gameStats){
       for (let teamKey in gameStats[key]){
        if (gameStats[key][teamKey] === teamName){
            
            const playerStats = Object.values(gameStats[key].players);
            
            for (element of playerStats){
                allNumbers.push(element.number);
            }
            }
        }
    }
    return allNumbers;
 }


 function playerStats(playersName){

    //if the playersName key = playerName return value of playersName key

    const gameStats = gameObject(); 
    for (let key in gameStats){ 
         for (let teamKey in gameStats[key]){
            if (teamKey === "players")
            {
             for (let playerKey in gameStats[key][teamKey])
             {
                 if (playerKey === playersName){
                     return gameStats[key][teamKey][playerKey];
                 }
             }
            
            }
         }
     }
     return "not a player"
 }

 function bigShoeRebounds(){
    const gameStats = gameObject();
    let maxShoe = 0;
    let bigShoePlayer = "";
    let playerBoards = 0;
    for (let key in gameStats){
       
        const playerStats = Object.entries(gameStats[key].players);
        for (let player of playerStats){
            if(player[1].shoe > maxShoe){
                maxShoe = player[1].shoe;
                playerBoards = player[1].rebounds;
            }

        }
    }
    return playerBoards;
 }
