var database = require("./database");


database.select().table("games").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

database.select(["id","price"]).table("games").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

database.insert({name: "Leage of Legends", price:25}).into("games").then(data =>{
    database.select(["id","price"]).table("games").then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });
}).catch(err =>{
    console.log(err);
})
