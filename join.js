var database = require("./database");

database.select([" games.id as games_id",
                  "games.name as games_name",                 
                  "estudios.id as est_id",               
                  "estudios.name as estu_name"]).table("games").leftJoin("estudios","estudios.game_id","games.id")
                  .where("games.id",5)
                  .then(data =>{
                        console.log(data);
                  }).catch(err => {
                        console.log(err);
                  })


database.select([" games.id as games_id",
                  "games.name as games_name",                 
                  "estudios.id as est_id",               
                  "estudios.name as estu_name"]).table("games").innerJoin("estudios","estudios.game_id","games.id")
                  .then(data =>{

                        var estudiosGameArray = data;
                        var game = {
                              id: 0,
                              name: "",
                              estudios:[]
                        }

                        game.id = data[0].games_id;
                        game.name = data[0].games_name;

                        data.forEach(estudio => {
                             game.estudios.push({name: estudio.estu_name}) ;
                        });
                        console.log(game);
                  }).catch(err => {
                        console.log(err);
                  })                  