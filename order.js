var database = require("./database");

database.select().table("games").orderBy("price","desc").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});