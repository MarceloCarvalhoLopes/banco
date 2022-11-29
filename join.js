var database = require("./database");

database.select([
            "estudios.name as estudios_name",
            "games.name as games_name"
      ]).table("games_estudios")
      .innerJoin("games", "games.id","games_estudios.game_id")
      .innerJoin("estudios", "estudios.id","games_estudios.estudio_id")
            .where("games.id",6)
            .then(data =>{
                  console.log(data);
            }).catch(err => {
                  console.log(err);
            })                  