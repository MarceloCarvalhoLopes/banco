var database = require("./database");

database.delete().where({id: 2}).table("games").then(data =>{
    console.log(data);
}).catch(err => {
    console.log(err);
})