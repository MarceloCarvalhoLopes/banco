var database = require("./database");

var dados = {
    name: "TOP GEAR",
    price: 100
}

/*var query  = database.insert(dados).into("games");
console.log(query.toQuery());*/

/*database.insert(dados).into("games").then(data =>{
    console.log(data)
}).catch(err =>{
    console.log(err);
})*/

//Associated inserts
database.insert({
    name: "Blizzard",
    game_id :1
}).table("estudios").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})