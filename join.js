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


async function testTransaction(){
      
      try{
          await database.transaction( async trans => {
          await database.insert({name:"Bom games"}).table("estudios");
          await database.insert({name:"Pyxerelia"}).table("estudios");
          await database.insert({name:"Mojang"}).table("estudios");
          await database.insert({name:"Gearbox"}).table("estudios");
                  

          });      
      }catch (error) {
            console.log(error);
      }

}            

testTransaction();