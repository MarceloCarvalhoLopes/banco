var database = require("./database");

database.update({name: "TOP GEAR 2"}).where({id: 5}).table("games").then(data =>{
    console.log(data);
}).catch(err =>{
    console.log(err);
})