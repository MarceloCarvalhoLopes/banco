var database = require("./database");

database.select()
    .whereRaw("name = 'Minecraft' OR price > 5")
    .table("games").then(data => {
        console.log(data)
    }).catch(err => {
        console.log(data)
    });

database.raw("SELECT * FROM GAMES").then(data =>{
    console.log(data);
}).catch(err => {
    console.log(err);
})    