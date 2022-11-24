var database = require("./database");

database.select([" games.id as games_id",
                  "games.name as games_name",                 
                  "estudios.id as est_id",               
                  "estudios.name as estu_name"]).table("games").innerJoin("estudios","estudios.game_id","games.id")
                  .then(data =>{
                        console.log(data);
                  }).catch(err => {
                        console.log(err);
                  })